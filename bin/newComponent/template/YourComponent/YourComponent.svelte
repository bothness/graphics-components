<script>
  /**
   * A source for the image.
   * @type {string}
   * @required
   */
  export let src;

  /**
   * AltText for the image.
   * @type {string}
   * @required
   */
  export let altText;

  /**
   * Height of the image.
   * @type {number}
   */
  export let height = 500;

  /**
   * Width of the component within the text well.
   * @type {'narrow'|'medium'|'wide'|'full'}
   */
  export let width = "medium";

  /**
   * Add an ID to target with SCSS.
   * @type {string}
   */
  export let id = "";

  /**
   * Add a class to target with SCSS.
   * @type {string}
   */
  export let cls = "";

  import Container from "$lib/components/wrappers/Container/Container.svelte";
</script>

<Container width="{width}">
  <div
    id="{id}"
    class="{cls}"
    style:background-image="{`url(${src})`}"
    style:height="{`${height}px`}"
  ></div>
  <p class="visually-hidden">{altText}</p>
</Container>

<style lang="scss">
  div {
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .visually-hidden {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
</style>
