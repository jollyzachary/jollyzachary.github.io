import { useEffect } from "react";
import './CursorTrail.css';

const CursorTrail = (url) => {
  useEffect(() => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const spots = [];
    let hue = 0;

    const mouse = {
      x: undefined,
      y: undefined
    };

    canvas.addEventListener('mousemove', (event) => {
      mouse.x = event.x;
      mouse.y = event.y;
      for (let i = 0; i < 2; i++) {
        spots.push(new Particle());
      }
    });

    const colors = [
      'black',
      'darkkhaki',
      'darkslategray',
      'darkgray',
      'sapphire',
      'Brown',
    ];
    
    const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];


    class Particle {
      constructor() {
        this.x = mouse.x;
        this.y = mouse.y;
        this.size = Math.random() * 2 + 0.1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.color = getRandomColor();
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.1) this.size -= 0.005;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function handleParticle() {
      for (let i = 0; i < spots.length; i++) {
        spots[i].update();
        spots[i].draw();
        for (let j = i; j < spots.length; j++) {
          const dx = spots[i].x - spots[j].x;
          const dy = spots[i].y - spots[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 90) {
            ctx.beginPath();
            ctx.strokeStyle = spots[i].color;
            ctx.lineWidth = spots[i].size / 10;
            ctx.moveTo(spots[i].x, spots[i].y);
            ctx.lineTo(spots[j].x, spots[j].y);
            ctx.stroke();
          }
        }
        if (spots[i].size <= 0.3) {
          spots.splice(i, 1);
          i--;
        }
      }
    }

    

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      handleParticle();
      hue++;
      requestAnimationFrame(animate);
    }

    function init() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', () => {
      init();
    });

    window.addEventListener('mouseout', () => {
      mouse.x = undefined;
      mouse.y = undefined;
    });

    animate();

    return () => {
      window.removeEventListener('resize', init);
      window.removeEventListener('mouseout', mouse);
      canvas.removeEventListener('mousemove');
    };
  }, [url]);
};

export default CursorTrail;