<script lang="ts">
  import HeadshotHalo from '$lib/HeadshotHalo.svelte';
</script>

<svelte:head>
  <title>Zachary Jolly</title>
  <meta
    name="description"
    content="Zachary Jolly builds software, works deeply with AI, and runs independent research into intelligent systems."
  />
</svelte:head>

<main class="minimal-home">
  <section class="minimal-hero">
    <div class="minimal-copy">
      <p class="eyebrow">ZACHARY JOLLY</p>
      <h1>I figure<br />things out.</h1>
      <p class="minimal-intro">
        I build software, work deeply with AI, and run research. I learn unfamiliar systems fast.
        If I don’t know how to do something yet, I figure it out. Take a look at the Work tab to
        see some of my recent projects.
      </p>
    </div>

    <figure class="minimal-portrait">
      <HeadshotHalo />
    </figure>
  </section>
</main>
