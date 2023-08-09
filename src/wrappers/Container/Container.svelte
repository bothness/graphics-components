<script>
  import Theme from "../Theme/Theme.svelte";

  /**
   * Sets the width of the container
   * @type {"narrow"|"medium"|"wide"|"full"}
   */
  export let width = "medium";
  /**
   * Sets the minimum height of the container relative to the height of the viewport
   * @type {"auto"|"tall"|"full"}
   */
  export let height = "auto";
  /**
   * Optional margin above container
   * @type {boolean}
   */
  export let marginTop = false;
  /**
   * Optional margin below container
   * @type {boolean}
   */
  export let marginBottom = false;
  /**
   * Sets a predefined theme
   * @type {"light"|"dark"|"lightblue"}
   */
  export let theme = null;
  /**
   * Define additional props to override the base theme
   * @type {object}
   */
  export let themeOverrides = null;
  /**
   * Overrides the base theme background (accepts any valid CSS background value)
   * @type {string}
   */
  export let background = null;
</script>

{#if width === "narrow"}
  <Theme theme="{theme}" background="{background}" overrides="{themeOverrides}">
    <div
      class="ons-page__container ons-container"
      class:ons-page__container--tall-height="{height === 'tall'}"
      class:ons-page__container--full-height="{height === 'full'}"
    >
      {#if marginTop}<div class="ons-spacer"></div>{/if}
      <div class="ons-page__container--narrow">
        <slot />
      </div>
      {#if marginBottom}<div class="ons-spacer"></div>{/if}
    </div>
  </Theme>
{:else}
  <Theme theme="{theme}" background="{background}" overrides="{themeOverrides}">
    <div
      class="ons-page__container ons-container"
      class:ons-page__container--wide="{width === 'wide'}"
      class:ons-page__container--full="{width === 'full'}"
      class:ons-page__container--tall-height="{height === 'tall'}"
      class:ons-page__container--full-height="{height === 'full'}"
    >
      {#if marginTop}<div class="ons-spacer"></div>{/if}
      <slot />
      {#if marginBottom}<div class="ons-spacer"></div>{/if}
    </div>
  </Theme>
{/if}

<style>
  .ons-page__container {
    background: var(--background, "none");
    overflow: auto;
  }
  .ons-page__container--narrow {
    max-width: 640px;
    margin: 0 auto 0 0;
  }
  .ons-page__container--wide {
    max-width: 1240px;
  }
  .ons-page__container--full {
    width: 100%;
    max-width: 100%;
    margin: 0;
    padding: 0;
  }
  .ons-page__container--tall-height {
    min-height: 80vh;
    display: flex;
    align-items: center;
  }
  .ons-page__container--full-height {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
  .ons-page__container--vpadding {
    padding-top: 20px;
    padding-bottom: 20px;
  }
</style>
