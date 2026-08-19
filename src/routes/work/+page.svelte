<svelte:head>
  <title>Work — Zachary Jolly</title>
  <meta name="description" content="Selected projects built by Zachary Jolly." />
</svelte:head>

<main class="work-index">
  <header class="work-intro">
    <div class="work-kicker">
      <span>SELECTED WORK</span>
      <span>04 PROJECTS</span>
    </div>
    <div class="work-title-row">
      <h1>Things I’ve built.</h1>
      <p>
        Recent projects shaped around useful tools, local AI, and better ways to work with machines.
      </p>
    </div>
  </header>

  <section class="project-gallery" aria-label="Selected projects">
    <a
      class="project-card memory-card"
      href="https://github.com/jollyzachary/mneme-memory-mcp"
      target="_blank"
      rel="noreferrer"
      aria-label="View Mneme Memory MCP on GitHub"
    >
      <div class="project-card-top">
        <span>01 / AGENT MEMORY</span>
        <span>GITHUB <i aria-hidden="true">↗</i></span>
      </div>

      <div class="project-card-body">
        <div class="project-card-copy">
          <h2>Mneme <span>Memory MCP</span></h2>
          <p>
            Shared, inspectable memory that gives AI agents continuity across tools and
            conversations.
          </p>
        </div>

        <div class="project-showcase">
          <div class="project-media">
            <img src="/assets/projects/mneme-memory.png" alt="Mneme Memory MCP hero artwork" />
          </div>
          <div class="project-motion memory-register" aria-hidden="true">
            <div class="memory-rail"></div>
            {#each Array(5) as _, index (index)}
              <span style={`--cell: ${index}`}></span>
            {/each}
            <i></i>
          </div>
        </div>
      </div>

      <div class="project-stack" aria-label="Built with">
        <span>MCP</span><span>PYTHON</span><span>POSTGRESQL</span>
      </div>
    </a>

    <a
      class="project-card voice-card"
      href="https://github.com/jollyzachary/tertius"
      target="_blank"
      rel="noreferrer"
      aria-label="View Tertius on GitHub"
    >
      <div class="project-card-top">
        <span>02 / LOCAL DICTATION</span>
        <span>GITHUB <i aria-hidden="true">↗</i></span>
      </div>

      <div class="project-card-body">
        <div class="project-card-copy">
          <h2>Tertius <span>Voice to text</span></h2>
          <p>
            A fast, private desktop dictation app that turns natural speech into clean text using
            local AI.
          </p>
        </div>

        <div class="project-showcase">
          <div class="project-media project-media-contain">
            <img src="/assets/projects/tertius.svg" alt="Tertius wordmark and spoken bloom" />
          </div>
          <div class="project-motion dictation-machine" aria-hidden="true">
            <div class="dictation-wave">
              {#each [10, 19, 30, 16, 24] as height, index (index)}
                <span style={`--bar: ${index}; --height: ${height}px`}></span>
              {/each}
            </div>
            <div class="dictation-output"><span></span><i></i></div>
          </div>
        </div>
      </div>

      <div class="project-stack" aria-label="Built with">
        <span>RUST</span><span>TAURI</span><span>ONNX</span>
      </div>
    </a>

    <a
      class="project-card classifier-card"
      href="https://github.com/jollyzachary/image_classifier"
      target="_blank"
      rel="noreferrer"
      aria-label="View Image Classifier Engine on GitHub"
    >
      <div class="project-card-top">
        <span>03 / COMPUTER VISION</span>
        <span>GITHUB <i aria-hidden="true">↗</i></span>
      </div>

      <div class="project-card-body">
        <div class="project-card-copy">
          <h2>Image <span>Classifier Engine</span></h2>
          <p>
            A reusable vision engine for scene analysis, open-vocabulary classification, and
            transfer learning.
          </p>
        </div>

        <div class="project-showcase">
          <div class="project-media project-media-contain">
            <img src="/assets/projects/image-classifier.png" alt="Classifier Engine vision mark" />
          </div>
          <div class="project-motion classifier-scan" aria-hidden="true">
            <span></span><i></i>
          </div>
        </div>
      </div>

      <div class="project-stack" aria-label="Built with">
        <span>PYTHON</span><span>PYTORCH</span><span>TRANSFORMERS</span>
      </div>
    </a>

    <a
      class="project-card weather-card"
      href="https://github.com/jollyzachary/snow-weather"
      target="_blank"
      rel="noreferrer"
      aria-label="View Snow Weather on GitHub"
    >
      <div class="project-card-top">
        <span>04 / WEATHER</span>
        <span>GITHUB <i aria-hidden="true">↗</i></span>
      </div>

      <div class="project-card-body">
        <div class="project-card-copy">
          <h2>Snow <span>Weather</span></h2>
          <p>
            Live forecasts and condition-driven animation, kept simple and elegant. I just love
            Svelte.
          </p>
        </div>

        <div class="project-showcase">
          <div class="project-media">
            <img src="/assets/projects/snow-weather.png" alt="Snow atmospheric weather lockup" />
          </div>
          <div class="project-motion weather-atmosphere" aria-hidden="true">
            <span></span><span></span><span></span>
            {#each [22, 51, 76] as left, index (left)}
              <i style={`--flake: ${left}%; --delay: ${index * -370}ms`}></i>
            {/each}
          </div>
        </div>
      </div>

      <div class="project-stack" aria-label="Built with">
        <span>SVELTE</span><span>GO</span><span>TYPESCRIPT</span><span>CSS</span>
      </div>
    </a>
  </section>
</main>
