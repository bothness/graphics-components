<script>
  import { onMount, onDestroy, getContext } from "svelte";
  import { slugify } from "$lib/js/utils.js";
  import SectionBacklink from "./SectionBacklink.svelte";

  /**
   * Sets the title of the section
   * @type {string}
   */
  export let title = "Section title";
  /**
   * Sets the unique ID of the section (if not set, this will be slugified from the title)
   * @type {string}
   */
  export let id = slugify(title);
  /**
   * Allows the h2 title tag for the section to be visually hidden
   * @type {boolean}
   */
  export let hideTitle = false;

  const sections = getContext("sections");
  const observer = getContext("observer");
  const tocId = getContext("tocId");

  let section;

  onMount(() => {
    if (sections && observer) {
      $sections = [...$sections, { title, id }];
      $observer.observe(section);
    }
  });

  onDestroy(() => {
    if (sections && observer) {
      $sections = $sections.filter((s) => s.id !== id);
      $observer.unobserve(section);
    }
  });
</script>

<section id="{id}" aria-label="{title}" bind:this="{section}">
  {#if title && !hideTitle}
    <h2 class="ons-u-mt-xl ons-u-pb-no ons-u-pt-no">{title}</h2>
  {/if}
  <slot />
  {#if tocId}
    <SectionBacklink tocId="{tocId}" />
  {/if}
</section>
