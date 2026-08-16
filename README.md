# Zachary Jolly

Personal portfolio and selected work by Zachary Jolly.

[Visit the portfolio](https://jollyzachary.github.io/)

I build software, work with AI, and run independent research. This repository contains the source for my personal portfolio and a selection of projects I have designed and built.

## Selected work

### [Mneme Memory MCP](https://github.com/jollyzachary/mneme-memory-mcp)

Shared, inspectable memory that gives AI agents continuity across tools and conversations.

### [Tertius](https://github.com/jollyzachary/tertius)

A private desktop dictation app that uses local AI to turn natural speech into clean text.

### [Image Classifier Engine](https://github.com/jollyzachary/image_classifier)

A reusable computer-vision engine for scene analysis, open-vocabulary classification, and transfer learning.

### [Snow Weather](https://github.com/jollyzachary/snow-weather)

A focused weather experience with live forecasts and condition-driven animation, built with Svelte and Go.

## The site

The portfolio uses Svelte 5, SvelteKit, TypeScript, and handcrafted CSS. It includes separate Home, Work, and About pages, a light and dark theme, responsive layouts, and custom interaction design. SvelteKit prerenders the site for GitHub Pages.

## Local development

The project uses Node.js 22 and npm.

```bash
npm ci
npm run dev
```

The development server runs at `http://127.0.0.1:3000/`.

## Production build

```bash
npm run build
```

SvelteKit writes the static site to `build/`. The `main` branch contains the source, and the `gh-pages` branch contains the published build.
