<script>
  /**
   * A title for the element
   * @type {string}
   */
  export let title = "Title";
  /**
   * Option for element to be open/expanded by default
   * @type {boolean}
   */
  export let open = false;
</script>

<details class="ons-collapsible ons-js-collapsible" open="{open}">
  <summary
    class="ons-collapsible__heading ons-js-collapsible-heading"
    data-ga-action="{open ? 'Close panel' : 'Open panel'}"
  >
    <h3 class="ons-collapsible__title">{title}</h3>
    <span class="ons-collapsible__icon">
      <svg
        class="ons-svg-icon"
        viewBox="0 0 8 13"
        xmlns="http://www.w3.org/2000/svg"
        focusable="false"
      >
        <path
          d="M5.74,14.28l-.57-.56a.5.5,0,0,1,0-.71h0l5-5-5-5a.5.5,0,0,1,0-.71h0l.57-.56a.5.5,0,0,1,.71,0h0l5.93,5.93a.5.5,0,0,1,0,.7L6.45,14.28a.5.5,0,0,1-.71,0Z"
          transform="translate(-5.02 -1.59)"></path>
      </svg>
    </span>
  </summary>
  <div class="ons-collapsible__content ons-js-collapsible-content">
    <slot />
  </div>
</details>

<style>
  .ons-collapsible__heading {
    color: var(--link, --ons-color-text-link);
  }
  .ons-collapsible__heading:hover {
    color: var(--link-hover, --ons-color-text-link-hover);
  }
  .ons-svg-icon {
    color: var(--link, --ons-color-text-link);
    fill: var(--link, --ons-color-text-link);
  }
</style>
