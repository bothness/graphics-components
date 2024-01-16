<script>
  import Container from "../../wrappers/Container/Container.svelte";
  import Meta from "./Meta.svelte";

  /**
   * Sets the title/headline
   * @type {string}
   */
  export let title = "Page title";
  /**
   * Include "national statistic" badge
   * @type {boolean}
   */
  export let natStatBadge = false;
  /**
   * Include Census logo
   * @type {boolean}
   */
  export let censusLogo = false;
  /**
   * Array of {key, value} objects containing page metadata
   * @type {array}
   */
  export let meta = null;
  /**
   * Sets a predefined theme
   * @type {"light"|"dark"|"lightblue"}
   */
  export let theme = null;
  /**
   * Define additional props to override the base theme
   * @type {object}
   */
  export let themeOverrides = null;
  /**
   * Overrides the background CSS for the section
   * @type {string}
   */
  export let background = null;
</script>

<Container theme="{theme}" themeOverrides="{themeOverrides}" background="{background}">
  <section class="ons-u-mb-xl">
    <slot name="before" />
    <div class="ons-grid">
      <div class="ons-grid__col ons-col-10@m">
        <h1 class="ons-u-fs-xxxl ons-u-mt-s ons-u-mb-m ons-u-pb-no ons-u-pt-no">
          {@html title}
        </h1>
      </div>
      {#if natStatBadge}
        <div class="ons-grid__col ons-col-2@m">
          <div
            class="ons-grid--flex ons-grid--between@m ons-u-mt-s@m ons-u-mb-m@xxs ons-u-flex-jc-fe@m"
          >
            <a
              href="https://uksa.statisticsauthority.gov.uk/about-the-authority/uk-statistical-system/types-of-official-statistics/"
              class="national-statistics__link ons-u-fs-xxxl"
            >
              <img
                src="//cdn.ons.gov.uk/assets/images/ons-logo/kitemark/uksa-kitemark.svg"
                alt="UK Statistics Authority Kitemark"
                class="national-statistics__logo"
              />
            </a>
          </div>
        </div>
      {/if}
    </div>
    <slot />
    <slot name="brand" />
    {#if censusLogo}
      <div class="ons-grid ons-u-mb-m">
        <div class="ons-grid__col">
          <img
            src="https://cdn.ons.gov.uk/assets/images/census-logo/logo-census-2021-purple-landscape.svg"
            title="Census 2021"
            alt="Census 2021"
            class="header__svg-logo margin-right--1"
            focusable="false"
            width="167"
            height="32"
          />
        </div>
      </div>
    {/if}
    <Meta meta="{meta}" />
    <slot name="after" />
  </section>
</Container>

<style>
  /* :global(.ons-page__container) {
		overflow: auto;
	} */
  .ons-grid__col {
    vertical-align: bottom;
  }
</style>
