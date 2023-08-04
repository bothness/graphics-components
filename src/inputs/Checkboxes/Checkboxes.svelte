<script>
  import Checkbox from "../Checkbox/Checkbox.svelte";

  /**
   * Label for grouped inputs
   * @type {string}
   */
  export let label = "";
  /** (Optional) Define the checkboxes as an array of {id, label, checked, description?}
   * @type {array}
   */
  export let items = null;
  /** Compact mode (no borders)
   * @type {boolean}
   */
  export let compact = false;
  /** Binding for selected checkboxes (if checkboxes are defined as "items")
   * @type {array}
   */
  export let value = [];
</script>

{#if label}
  <p class="ons-checkboxes__label">{label}</p>
{/if}
<div class="ons-checkboxes__items">
  <slot />
  {#if items}
    {#each items as item, i}
      <Checkbox {...item} group="{value}" compact="{compact}" on:change />
    {/each}
  {/if}
</div>
