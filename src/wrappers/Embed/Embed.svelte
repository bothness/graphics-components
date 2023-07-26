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

<slot />

<style>
  :global(.ons-container) {
    padding: 0 !important;
  }
</style>
