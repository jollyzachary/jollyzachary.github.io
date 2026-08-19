<script lang="ts">
  import { onMount } from 'svelte';
  import { onNavigate } from '$app/navigation';
  import { resolve } from '$app/paths';
  import { page } from '$app/state';
  import '../App.css';

  let { children } = $props();
  let theme = $state<'light' | 'dark'>('light');

  function applyTheme(next: 'light' | 'dark') {
    theme = next;
    document.documentElement.dataset.theme = next;
    localStorage.setItem('zj-theme', next);
  }

  function toggleTheme(event: MouseEvent) {
    const next = theme === 'light' ? 'dark' : 'light';
    const button = event.currentTarget as HTMLButtonElement;
    const bounds = button.getBoundingClientRect();
    const root = document.documentElement;

    root.style.setProperty('--theme-x', `${bounds.left + bounds.width / 2}px`);
    root.style.setProperty('--theme-y', `${bounds.top + bounds.height / 2}px`);

    if (
      !document.startViewTransition ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      applyTheme(next);
      return;
    }

    root.classList.add('theme-sweep');
    const transition = document.startViewTransition(() => applyTheme(next));
    transition.finished.finally(() => root.classList.remove('theme-sweep'));
  }

  onMount(() => {
    const stored = localStorage.getItem('zj-theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(stored === 'dark' || stored === 'light' ? stored : systemDark ? 'dark' : 'light');
  });

  onNavigate((navigation) => {
    if (!document.startViewTransition) return;
    return new Promise((continueNavigation) => {
      document.startViewTransition(async () => {
        continueNavigation();
        await navigation.complete;
      });
    });
  });
</script>

<header class="site-nav">
  <span class="nav-spacer" aria-hidden="true"></span>
  <nav aria-label="Primary navigation">
    <a href={resolve('/')} aria-current={page.url.pathname === '/' ? 'page' : undefined}>HOME</a>
    <a
      href={resolve('/work')}
      aria-current={page.url.pathname.startsWith('/work') ? 'page' : undefined}>WORK</a
    >
    <a
      href={resolve('/about')}
      aria-current={page.url.pathname.startsWith('/about') ? 'page' : undefined}>ABOUT</a
    >
  </nav>

  <div class="nav-actions">
    <button
      class="theme-button"
      type="button"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      aria-pressed={theme === 'dark'}
      onclick={toggleTheme}
    >
      <span
        class="theme-icon"
        class:moon={theme === 'light'}
        class:sun={theme === 'dark'}
        aria-hidden="true"
      ></span>
    </button>
  </div>
</header>

{@render children()}
