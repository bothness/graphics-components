<script>
  import { onMount, createEventDispatcher } from "svelte";
  import pym from "pym.js";

  /**
   * Binding for pymChild element (can be used to send messages to parent of iframe)
   * @type {object}
   */
  export let pymChild = null;
  export let polling = true;

  const dispatch = createEventDispatcher();

  onMount(() => {
    pymChild = new pym.Child();

    if (polling) {
      setInterval(() => {
        pymChild.sendMessage(
          "height",
          Math.max(document.body.scrollHeight, document.body.offsetHeight)
        );
      }, 500);
    }

    const href = document.location.href;
    const parentUrl = new URLSearchParams(document.location.search).get("parentUrl");
    dispatch("load", { href, parentUrl, pymChild });
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
