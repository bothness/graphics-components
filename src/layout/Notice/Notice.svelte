<script>
  /**
   * (Optional) Notice title
   * @type {string}
   */
  export let title = null;
  /**
   * Adds an exclamation mark icon
   * @type {boolean}
   */
  export let important = false;
  /**
   * Sets the mode/colour of the notice
   * @type {"info"|"success"|"pending"|"error"}
   */
  export let mode = "info";

  $: style =
    mode === "success"
      ? "background: var(--ons-color-success-tint); border-color: var(--ons-color-success);"
      : mode === "pending"
      ? "background: var(--ons-color-pending-tint); border-color: var(--ons-color-pending);"
      : mode === "error"
      ? "background: var(--ons-color-errors-tint); border-color: var(--ons-color-errors);"
      : null;
</script>

<div class="ons-panel ons-panel--info ons-panel--no-title ons-u-mt-m ons-u-mb-l" style="{style}">
  <div class="ons-u-bg--tr" class:ons-panel--warn="{important}">
    {#if important}<div class="ons-panel__icon" aria-hidden="true">!</div>{/if}
    <span class="ons-panel__assistive-text ons-u-vh">Important information:</span>
    <div class="ons-panel__body">
      <div class="ons-u-fs-r default-line-height">
        {#if title}<p><strong>{title}</strong></p>{/if}
        <p class="ons-u-mb-no">
          <slot />
        </p>
      </div>
    </div>
  </div>
</div>

<style>
  .ons-panel {
    color: rgb(34, 34, 34);
  }
  :global(.ons-panel__body a) {
    color: #206095 !important;
  }
  :global(.ons-panel__body a:hover) {
    color: rgb(0, 60, 87) !important;
    text-decoration: underline solid rgb(0, 60, 87) 2px !important;
  }
</style>
