<script>
  import { onMount, getContext } from "svelte";
  import { slugify } from "$lib/js/utils.js";

  /**
   * A title for the element
   * @type {string}
   */
  export let title = "Title";
  /**
   * A unique for the element (optional)
   * @type {string}
   */
  export let id = slugify(title);
  /**
   * Option for element to be open/expanded by default
   * @type {boolean}
   */
  export let open = false;

  let el;

  const elements = getContext("elements");
  const allOpen = getContext("allOpen");

  function updateAllOpen(open) {
    if (el && $elements) {
      $allOpen = open ? [...$elements].every((el) => el.open) : false;
    }
  }
  $: updateAllOpen(open);

  onMount(() => {
    $elements.add(el);
    return () => $elements.delete(el);
  });
</script>

<details
  id="accordion-1"
  class="ons-details ons-js-details ons-details--accordion"
  data-group="accordion"
  bind:this="{el}"
  bind:open="{open}"
>
  <summary class="ons-details__heading ons-js-details-heading">
    <h2 class="ons-details__title">{title}</h2>
    <span class="ons-details__icon">
      <svg
        class="ons-svg-icon"
        viewBox="0 0 8 13"
        xmlns="http://www.w3.org/2000/svg"
        focusable="false"
        fill="currentColor"
      >
        <path
          d="M5.74,14.28l-.57-.56a.5.5,0,0,1,0-.71h0l5-5-5-5a.5.5,0,0,1,0-.71h0l.57-.56a.5.5,0,0,1,.71,0h0l5.93,5.93a.5.5,0,0,1,0,.7L6.45,14.28a.5.5,0,0,1-.71,0Z"
          transform="translate(-5.02 -1.59)"></path>
      </svg>
    </span>
  </summary>
  <div id="{id}-content" class="ons-details__content ons-js-details-content">
    <slot />
  </div>
</details>

<style>
  .ons-details__heading {
    color: var(--link, --ons-color-text-link);
  }
  .ons-details__heading:hover {
    color: var(--link, --ons-color-text-link-hover);
  }
  .ons-svg-icon {
    color: var(--link, --ons-color-text-link);
    fill: var(--link, --ons-color-text-link);
  }
  .ons-details__heading:hover:not(:focus) .ons-details__title {
    text-decoration: underline solid var(--link-hover, --ons-color-text-link-hover) 2px;
  }
</style>
