<script>
  import Container from "$lib/components/wrappers/Container/Container.svelte";

  /**
   * (Optional) Include a horizontal rule
   * @type {boolean}
   */
  export let hr = true;
  /**
   * Sets the width of the container
   * @type {"narrow"|"medium"|"wide"|"full"}
   */
  export let width = "medium";
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
   * Optional margin above section
   * @type {boolean}
   */
  export let marginTop = false;
  /**
   * Optional margin below section
   * @type {boolean}
   */
  export let marginBottom = true;
</script>

<Container
  theme="{theme}"
  themeOverrides="{themeOverrides}"
  width="{width}"
  marginTop="{marginTop}"
  marginBottom="{marginBottom}"
>
  <hr style:border="{hr ? null : "none"}" />
</Container>

<style>
  hr {
    width: 75px;
    border: none;
    border-top: 2px solid;
    margin: -10px auto 0;
    color: var(--muted, #777);
  }
</style>
