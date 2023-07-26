<script>
  import { onMount } from "svelte";
  import pym from "pym.js";

  /**
   * Binding for pymChild element (can be used to send messages to parent of iframe)
   * @type {object}
   */
  export let pymChild = null;

  onMount(() => {
    pymChild = new pym.Child({ polling: 1000 });
  });
</script>

<div class="embed-container" style:display="content">
  <slot />
</div>

<style>
  .embed-container :global(.ons-container) {
    padding: 0 !important;
  }
</style>
