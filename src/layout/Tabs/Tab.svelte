<script>
  import { onMount, onDestroy, getContext } from "svelte";
  import { slugify } from "../../js/utils.js";

  /**
   * Title of tab/panel
   * @type {string}
   */
  export let title = "Tab title";
  /**
   * Hide the title within the panel
   * @type {boolean}
   */
  export let hideTitle = false;
  /**
   * ID/slug for tab (auto-generated from title if not set)
   * @type {string}
   */
  export let id = slugify(title);

  const sections = getContext("sections");
  const selected = getContext("selected");

  let el;
  let border;

  onMount(() => {
    if (sections) {
      if (!$sections[0] && ($selected || $selected === null)) $selected = id;
      $sections = [...$sections, { title, id, el }];
      border = getContext("border");
    }
  });

  onDestroy(() => {
    if (sections) {
      $sections = $sections.filter((s) => s.id !== id);
    }
  });
</script>

<section
  id="{id}"
  class="ons-tabs__panel"
  bind:this="{el}"
  class:ons-tabs__panel--hidden="{$selected !== id}"
  class:tab-border="{border}"
>
  <h2 id="{id}-content-title" class="ons-u-vh" class:ons-u-vh="{hideTitle}">{title}</h2>
  <slot />
</section>

<style>
  section.tab-border {
    border: 1px solid var(--ons-color-borders);
    border-radius: 4px;
    border-top-left-radius: 0;
    padding-left: 12px;
    padding-right: 12px;
  }
</style>
