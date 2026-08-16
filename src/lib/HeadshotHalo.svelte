<script lang="ts">
  import { onMount } from 'svelte';

  let halo: HTMLDivElement;
  let portrait: HTMLDivElement;
  let dragging = false;
  let moving = false;

  let handlePointerDown: (event: PointerEvent) => void = () => {};
  let handlePointerMove: (event: PointerEvent) => void = () => {};
  let handlePointerUp: (event: PointerEvent) => void = () => {};
  let handleKeyDown: (event: KeyboardEvent) => void = () => {};

  onMount(() => {
    let currentProximity = 0;
    let targetProximity = 0;
    let haloFrame = 0;

    let positionX = 0;
    let positionY = 0;
    let velocityX = 0;
    let velocityY = 0;
    let originLeft = 0;
    let originTop = 0;
    let portraitWidth = 0;
    let portraitHeight = 0;
    let motionFrame = 0;
    let lastMotionTime = 0;
    let motionMode: 'idle' | 'glide' | 'snap' = 'idle';

    let lastPointerX = 0;
    let lastPointerY = 0;
    let lastPointerTime = 0;
    let activePointer = -1;
    let dragDistance = 0;
    let cursorKnown = false;
    let cursorX = 0;
    let cursorY = 0;

    const pageMargin = 14;

    function measureOrigin() {
      const bounds = halo.getBoundingClientRect();
      originLeft = bounds.left - positionX;
      originTop = bounds.top - positionY;
      portraitWidth = bounds.width;
      portraitHeight = bounds.height;
    }

    function movementBounds() {
      const headerBottom = document.querySelector('.site-nav')?.getBoundingClientRect().bottom ?? 0;
      let minX = pageMargin - originLeft;
      let maxX = document.documentElement.clientWidth - pageMargin - originLeft - portraitWidth;
      let minY = headerBottom + pageMargin - originTop;
      let maxY = window.innerHeight - pageMargin - originTop - portraitHeight;

      if (minX > maxX) minX = maxX = (minX + maxX) / 2;
      if (minY > maxY) minY = maxY = (minY + maxY) / 2;
      return { minX, maxX, minY, maxY };
    }

    function constrainPosition(stopAtEdge: boolean) {
      const bounds = movementBounds();
      const nextX = Math.max(bounds.minX, Math.min(bounds.maxX, positionX));
      const nextY = Math.max(bounds.minY, Math.min(bounds.maxY, positionY));

      if (stopAtEdge && nextX !== positionX) velocityX = 0;
      if (stopAtEdge && nextY !== positionY) velocityY = 0;
      positionX = nextX;
      positionY = nextY;
    }

    function wrapPosition() {
      const headerBottom = document.querySelector('.site-nav')?.getBoundingClientRect().bottom ?? 0;
      const viewportWidth = document.documentElement.clientWidth;
      const viewportBottom = window.innerHeight;
      const horizontalLoop = viewportWidth + portraitWidth;
      const verticalLoop = viewportBottom - headerBottom + portraitHeight;
      const left = originLeft + positionX;
      const top = originTop + positionY;

      if (left + portraitWidth < 0) positionX += horizontalLoop;
      else if (left > viewportWidth) positionX -= horizontalLoop;

      if (top + portraitHeight < headerBottom) positionY += verticalLoop;
      else if (top > viewportBottom) positionY -= verticalLoop;
    }

    function animateHalo() {
      const difference = targetProximity - currentProximity;
      currentProximity += difference * (difference > 0 ? 0.1 : 0.055);
      halo.style.setProperty('--halo-proximity', currentProximity.toFixed(4));

      if (Math.abs(difference) > 0.002) haloFrame = requestAnimationFrame(animateHalo);
      else haloFrame = 0;
    }

    function startHaloAnimation() {
      if (!haloFrame) haloFrame = requestAnimationFrame(animateHalo);
    }

    function updateProximity(clientX: number, clientY: number) {
      const centerX = originLeft + positionX + portraitWidth / 2;
      const centerY = originTop + positionY + portraitHeight / 2;
      const radius = portraitWidth / 2;
      const distanceFromCenter = Math.hypot(clientX - centerX, clientY - centerY);
      const distanceFromEdge = Math.max(0, distanceFromCenter - radius);
      const proximityRange = Math.max(160, portraitWidth * 1.05);
      const normalized = Math.max(0, 1 - distanceFromEdge / proximityRange);

      targetProximity = Math.pow(normalized, 1.5);
      startHaloAnimation();
    }

    function renderPosition() {
      halo.style.transform = `translate3d(${positionX.toFixed(2)}px, ${positionY.toFixed(2)}px, 0)`;
      if (cursorKnown) updateProximity(cursorX, cursorY);
    }

    function animateMotion(now: number) {
      const delta = Math.min(32, Math.max(1, now - (lastMotionTime || now - 16.67)));
      lastMotionTime = now;

      if (motionMode === 'glide') {
        positionX += velocityX * delta;
        positionY += velocityY * delta;
        wrapPosition();

        const friction = Math.pow(0.972, delta / 16.67);
        velocityX *= friction;
        velocityY *= friction;

        if (Math.hypot(velocityX, velocityY) < 0.012) {
          velocityX = 0;
          velocityY = 0;
          motionMode = 'idle';
        }
      }

      if (motionMode === 'snap') {
        const differenceX = -positionX;
        const differenceY = -positionY;
        const stiffness = 0.00018;
        const damping = 0.026;

        velocityX += (differenceX * stiffness - velocityX * damping) * delta;
        velocityY += (differenceY * stiffness - velocityY * damping) * delta;
        positionX += velocityX * delta;
        positionY += velocityY * delta;
        constrainPosition(true);

        if (Math.hypot(positionX, positionY) < 0.28 && Math.hypot(velocityX, velocityY) < 0.014) {
          positionX = 0;
          positionY = 0;
          velocityX = 0;
          velocityY = 0;
          motionMode = 'idle';
        }
      }

      renderPosition();
      if (motionMode !== 'idle') motionFrame = requestAnimationFrame(animateMotion);
      else {
        moving = false;
        motionFrame = 0;
        lastMotionTime = 0;
      }
    }

    function startMotion(mode: 'glide' | 'snap') {
      motionMode = mode;
      moving = true;
      if (!motionFrame) {
        lastMotionTime = performance.now();
        motionFrame = requestAnimationFrame(animateMotion);
      }
    }

    function proximityMove(event: PointerEvent) {
      cursorKnown = true;
      cursorX = event.clientX;
      cursorY = event.clientY;
      updateProximity(cursorX, cursorY);
    }

    function clearProximity() {
      cursorKnown = false;
      targetProximity = 0;
      startHaloAnimation();
    }

    function handleResize() {
      measureOrigin();
      constrainPosition(true);
      renderPosition();
    }

    handlePointerDown = (event) => {
      if (event.button !== 0) return;
      event.preventDefault();

      activePointer = event.pointerId;
      dragging = true;
      moving = false;
      dragDistance = 0;
      lastPointerX = event.clientX;
      lastPointerY = event.clientY;
      lastPointerTime = performance.now();
      velocityX = 0;
      velocityY = 0;

      if (motionFrame) cancelAnimationFrame(motionFrame);
      motionFrame = 0;
      motionMode = 'idle';
      portrait.setPointerCapture(event.pointerId);
    };

    handlePointerMove = (event) => {
      if (!dragging || event.pointerId !== activePointer) return;

      const now = performance.now();
      const elapsed = Math.max(8, now - lastPointerTime);
      const deltaX = event.clientX - lastPointerX;
      const deltaY = event.clientY - lastPointerY;
      dragDistance += Math.hypot(deltaX, deltaY);
      positionX += deltaX;
      positionY += deltaY;
      constrainPosition(false);
      velocityX = Math.max(-2.8, Math.min(2.8, velocityX * 0.58 + (deltaX / elapsed) * 0.42));
      velocityY = Math.max(-2.8, Math.min(2.8, velocityY * 0.58 + (deltaY / elapsed) * 0.42));
      renderPosition();

      lastPointerX = event.clientX;
      lastPointerY = event.clientY;
      lastPointerTime = now;
    };

    handlePointerUp = (event) => {
      if (!dragging || event.pointerId !== activePointer) return;

      dragging = false;
      if (portrait.hasPointerCapture(event.pointerId)) portrait.releasePointerCapture(event.pointerId);
      activePointer = -1;

      const idleTime = Math.max(0, performance.now() - lastPointerTime);
      const releaseDamping = Math.exp(-idleTime / 85);
      velocityX *= releaseDamping;
      velocityY *= releaseDamping;

      if (dragDistance < 3 || Math.hypot(velocityX, velocityY) < 0.018) {
        velocityX = 0;
        velocityY = 0;
        return;
      }
      startMotion('glide');
    };

    handleKeyDown = (event) => {
      const nudge = 0.34;
      if (event.key === 'ArrowLeft') velocityX = -nudge;
      else if (event.key === 'ArrowRight') velocityX = nudge;
      else if (event.key === 'ArrowUp') velocityY = -nudge;
      else if (event.key === 'ArrowDown') velocityY = nudge;
      else if (event.key === 'Escape' || event.key === 'Home' || event.key === ' ') {
        event.preventDefault();
        startMotion('snap');
        return;
      } else return;

      event.preventDefault();
      startMotion('glide');
    };

    function handleWindowBlur() {
      clearProximity();
      if (!dragging) return;
      dragging = false;
      activePointer = -1;
      velocityX = 0;
      velocityY = 0;
      startMotion('snap');
    }

    measureOrigin();
    renderPosition();
    window.addEventListener('pointermove', proximityMove, { passive: true });
    window.addEventListener('pointerup', handlePointerUp);
    window.addEventListener('pointercancel', handlePointerUp);
    window.addEventListener('pointerleave', clearProximity);
    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('blur', handleWindowBlur);

    return () => {
      if (haloFrame) cancelAnimationFrame(haloFrame);
      if (motionFrame) cancelAnimationFrame(motionFrame);
      window.removeEventListener('pointermove', proximityMove);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('pointercancel', handlePointerUp);
      window.removeEventListener('pointerleave', clearProximity);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('blur', handleWindowBlur);
    };
  });
</script>

<div bind:this={halo} class="portrait-light" class:dragging class:moving>
  <div
    bind:this={portrait}
    class="portrait-crop"
    role="button"
    tabindex="0"
    aria-label="Interactive portrait of Zachary Jolly. Drag and throw it to glide."
    onpointerdown={handlePointerDown}
    onpointermove={handlePointerMove}
    onpointerup={handlePointerUp}
    onpointercancel={handlePointerUp}
    onkeydown={handleKeyDown}
  >
    <img src="/assets/zachary-jolly-headshot.png" alt="Zachary Jolly" draggable="false" />
  </div>
</div>
