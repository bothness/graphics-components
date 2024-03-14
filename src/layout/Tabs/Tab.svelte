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

  onMount(() => {
    if (sections) {
      if (!$selected) $selected = id;
      $sections = [...$sections, { title, id, el }];
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
>
  <h2 id="{id}-content-title" class="ons-u-vh" class:ons-u-vh="{hideTitle}">{title}</h2>
  <slot />
</section>
