<script>
  /**
   * Defines the title of the error
   * @type {string}
   */
  export let title = "";
</script>

<div aria-labelledby="alert" role="alert" tabindex="-1" class="ons-panel ons-panel--error">
  <div class="ons-panel__header">
    <h2 id="alert" data-qa="error-header" class="ons-panel__title ons-u-fs-r--b">{title}</h2>
  </div>
  <div class="ons-panel__body">
    <slot />
  </div>
</div>

<style>
  .ons-panel {
    color: rgb(34, 34, 34);
  }
</style>
