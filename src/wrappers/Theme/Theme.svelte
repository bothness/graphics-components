<script>
  import themes from "./themes.js";

  /**
   * (Optional) Sets the unique ID of the container
   * @type {string}
   */
  export let id = null;
  /**
   * (Optional) Sets a css class for the container
   * @type {string}
   */
  export let cls = null;
  /**
   * Sets the body background to match this theme (only use this at the top level)
   * @type {boolean}
   */
  export let global = false;
  /**
   * Sets a predefined theme
   * @type {"light"|"dark"|"lightblue"}
   */
  export let theme = null;
  /**
   * Define additional props to override the base theme
   * @type {object}
   */
  export let overrides = null;
  /**
   * Overrides the base theme background (accepts any valid CSS background value)
   * @type {string}
   */
  export let background = null;

  function makeStyle(theme, overrides, background) {
    if (theme) {
      const _theme = themes[theme] || themes.light;
      if (overrides) Object.keys(overrides).forEach((key) => (_theme[key] = overrides[key]));
      if (background) _theme.background = background;
      return Object.keys(_theme)
        .map((key) => `--${key}: ${_theme[key]};`)
        .join("");
    } else if (background) {
      return `--background:${background}`;
    }
    return null;
  }

  $: style = makeStyle(theme, overrides, background);
</script>

<svelte:head>
  {#if global}
    {@html "<st" + `yle>${style}</st` + "yle>"}
  {/if}
</svelte:head>

{#if style && !global}
  <div id="{id}" class="{cls ? `theme-wrapper ${cls}` : 'theme-wrapper'}" style="{style}">
    <slot />
  </div>
{:else}
  <slot />
{/if}

<style>
  .theme-wrapper {
    position: relative;
    color: var(--text, #222);
    background: var(--background, none);
    --ons-color-text: var(--text, --ons-color-text);
    --ons-color-text-light: var(--muted, --ons-color-text-light);
    --ons-color-borders: var(--muted, --ons-color-borders);
  }
  .theme-wrapper :global(a) {
    color: var(--link, --ons-color-text-link);
  }
  .theme-wrapper :global(a:hover) {
    text-decoration: underline solid var(--link-hover, --ons-color-text-link-hover) 2px;
  }
  .theme-wrapper :global(a:hover) {
    color: var(--link-hover, --ons-color-text-link-hover);
  }
  .theme-wrapper :global(.form-label-bold) {
    color: var(--text, #222);
  }
  .theme-wrapper :global(.form-control) {
    background: none;
    border-color: var(--text, #222);
    color: var(--text, #222);
  }
</style>
