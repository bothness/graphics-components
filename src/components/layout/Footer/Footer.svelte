<script>
  import { onMount, getContext } from "svelte";
  import Theme from "../Theme/Theme.svelte";

  const page = getContext("page");

  /**
   * Display compact header without menus
   * @type {boolean}
   */
  export let compact = false;
  /**
   * Sets a predefined theme
   * @type {"light"|"dark"}
   */
  export let theme = null;
  /**
   * Define additional props to override the base theme
   * @type {object}
   */
  export let themeOverrides = null;

  let lang = "en";
  let baseurl = "//www.ons.gov.uk";
  let path = "";
  let mounted = false;

  function setPaths(mounted, page) {
    if (mounted) {
      const url = page?.url || document.location;
      lang = url.host.startsWith("cy") ? "cy" : "en";
      baseurl = `//${url.host}`;
      path = url.pathname;
    }
  }
  $: setPaths(mounted, $page);
  onMount(() => (mounted = true));

  const texts = {
    "Footer links": "",
    Help: "Cymorth",
    Accessibility: "Hygyrchedd",
    Cookies: "Cwcis",
    Privacy: "Preifatrwydd",
    "Terms and conditions": "Telerau ac amodau",
    "About ONS": "Ynglŷn ag SYG",
    "What we do": "Beth rydym yn ei wneud",
    Careers: "Gyrfaoedd",
    "Contact us": "Cysylltu â ni",
    News: "Newyddion",
    "Freedom of Information": "Rhyddid Gwybodaeth",
    "Connect with us": "Cysylltu â ni",
    Consultations: "Ymgynghoriadau",
    "Discussion forums": "Fforymau trafod",
    "Email alerts": "Rhybuddion ebost",
    "All content is available under the": "Mae'r holl gynnwys ar gael o dan delerau'r",
    "Open Government Licence v3.0": "Drwydded Llywodraeth Agored v3.0",
    "except where otherwise stated": "ac eithrio lle y nodir fel arall",
  };

  const i18n = (text) => (lang == "cy" && texts[text] ? texts[text] : text);

  onMount(() => {
    if (!path) {
      const url = document.location;
      lang = url.host.startsWith("cy") ? "cy" : "en";
      baseurl = `//${url.host}`;
      path = url.pathname;
    }
  });
</script>

<Theme theme="{theme}" overrides="{themeOverrides}" background="none">
  <footer class="print--hide padding-top--13">
    <section>
      <slot name="before" />
      <h2 class="visuallyhidden">{i18n("Footer links")}</h2>
      <div class="footer">
        <div class="wrapper">
          <nav aria-label="Footer links">
            {#if compact}
              <ul class="ons-list ons-u-mt-m ons-footer--rows ons-list--bare ons-list--inline">
                <li class="ons-list__item">
                  <a href="/help/accessibility" class="ons-list__link">{i18n("Accessibility")}</a>
                </li>
                <li class="ons-list__item">
                  <a href="/cookies" class="ons-list__link">{i18n("Cookies")}</a>
                </li>
                <li class="ons-list__item">
                  <a href="/help/privacynotice" class="ons-list__link">{i18n("Privacy")}</a>
                </li>
                <li class="ons-list__item">
                  <a href="/help/termsandconditions" class="ons-list__link"
                    >{i18n("Terms and conditions")}</a
                  >
                </li>
              </ul>
            {:else}
              <div class="footer-nav col-wrap">
                <div class="col col--lg-one-third col--md-one-third">
                  <h2 class="footer-nav__heading">{i18n("Help")}</h2>
                  <ul class="footer-nav__list">
                    <li class="footer-nav__item">
                      <a href="/help/accessibility">{i18n("Accessibility")}</a>
                    </li>
                    <li class="footer-nav__item">
                      <a href="/cookies">{i18n("Cookies")}</a>
                    </li>
                    <li class="footer-nav__item">
                      <a href="/help/privacynotice">{i18n("Privacy")}</a>
                    </li>
                    <li class="footer-nav__item">
                      <a href="/help/termsandconditions">{i18n("Terms and conditions")}</a>
                    </li>
                  </ul>
                </div>
                <div class="col col--lg-one-third col--md-one-third">
                  <h2 class="footer-nav__heading">{i18n("About ONS")}</h2>
                  <ul class="footer-nav__list">
                    <li class="footer-nav__item">
                      <a href="/aboutus/whatwedo">{i18n("What we do")}</a>
                    </li>
                    <li class="footer-nav__item">
                      <a href="/aboutus/careers">{i18n("Careers")}</a>
                    </li>
                    <li class="footer-nav__item">
                      <a href="/aboutus/contactus">{i18n("Contact us")}</a>
                    </li>
                    <li class="footer-nav__item">
                      <a href="/news">{i18n("News")}</a>
                    </li>
                    <li class="footer-nav__item">
                      <a href="/aboutus/transparencyandgovernance/freedomofinformationfoi"
                        >{i18n("Freedom of Information")}</a
                      >
                    </li>
                  </ul>
                </div>
                <div class="col col--lg-one-third col--md-one-third">
                  <h2 class="footer-nav__heading">{i18n("Connect with us")}</h2>
                  <ul class="footer-nav__list">
                    <li class="footer-nav__item">
                      <a href="https://twitter.com/ONS" class="icon--hide" target="_blank"
                        >{i18n("Twitter")}</a
                      >
                    </li>
                    <li class="footer-nav__item">
                      <a
                        href="https://www.instagram.com/officefornationalstatistics/"
                        class="icon--hide"
                        target="_blank">{i18n("Instagram")}</a
                      >
                    </li>
                    <li class="footer-nav__item">
                      <a href="https://www.facebook.com/ONS" class="icon--hide" target="_blank"
                        >{i18n("Facebook")}</a
                      >
                    </li>
                    <li class="footer-nav__item">
                      <a
                        href="https://www.linkedin.com/company/office-for-national-statistics"
                        class="icon--hide"
                        target="_blank">{i18n("LinkedIn")}</a
                      >
                    </li>
                    <li class="footer-nav__item">
                      <a href="https://consultations.ons.gov.uk/" class="icon--hide" target="_blank"
                        >{i18n("Consultations")}</a
                      >
                    </li>
                    <li class="footer-nav__item">
                      <a
                        href="https://www.statsusernet.org.uk/login"
                        class="icon--hide"
                        target="_blank">{i18n("Discussion forums")}</a
                      >
                    </li>
                    <li class="footer-nav__item">
                      <a
                        href="https://public.govdelivery.com/accounts/UKONS/subscribers/new"
                        class="icon--hide"
                        target="_blank">{i18n("Email alerts")}</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
              <hr class="ons-footer__hr" />
            {/if}
          </nav>
        </div>
        <div class="wrapper">
          <div class="footer-license">
            <svg
              class="ons-footer__ogl-img"
              xmlns="http://www.w3.org/2000/svg"
              width="60px"
              height="24px"
              viewBox="0 0 60 24"
              focusable="false"
              aria-hidden="true"
            >
              <path
                d="M51.7,17.5V0l-6.2,4v19.8h13.8v-6.2H51.7z
								M36.7,16.3c-1,0.9-2.4,1.4-3.8,1.4c-3.2,0-5.8-2.6-5.8-5.8s2.6-5.8,5.8-5.8c2,0,3.9,1.1,4.9,2.7L43,5.6C40.9,2.2,37.1,0,32.9,0c-4.5,0-8.4,2.5-10.4,6.1C20.4,2.5,16.5,0,12,0C5.4,0,0,5.4,0,12s5.4,12,12,12c4.5,0,8.4-2.5,10.4-6.1c2.1,3.6,6,6.1,10.4,6.1c3,0,5.8-1.1,7.9-3l2.4,2.7h0.4V13h-9.8L36.7,16.3zM12,17.8c-3.2,0-5.8-2.6-5.8-5.8S8.8,6.2,12,6.2s5.8,2.6,5.8,5.8S15.2,17.8,12,17.8"
                fill="currentColor"></path>
            </svg>
            <p class="footer-license__text margin-left-sm--0">
              {i18n("All content is available under the")}
              <a
                class="ons-external-link"
                href="http://www.nationalarchives.gov.uk/doc/open-government-licence{lang === 'cy'
                  ? '-cymraeg'
                  : ''}/version/3/"
                target="_blank"
                >{i18n("Open Government Licence v3.0")}<span class="ons-external-link__icon"
                  ><svg
                    class="ons-svg-icon"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                    fill="currentColor"
                    ><path
                      d="M13.5,9H13a.5.5,0,0,0-.5.5v3h-9v-9h3A.5.5,0,0,0,7,3V2.5A.5.5,0,0,0,6.5,2h-4a.5.5,0,0,0-.5.5v11a.5.5,0,0,0,.5.5h11a.5.5,0,0,0,.5-.5v-4A.5.5,0,0,0,13.5,9Z"
                      transform="translate(-2 -1.99)"></path><path
                      d="M8.83,7.88a.51.51,0,0,0,.71,0l2.31-2.32,1.28,1.28A.51.51,0,0,0,14,6.49v-4a.52.52,0,0,0-.5-.5h-4A.51.51,0,0,0,9,2.52a.58.58,0,0,0,.14.33l1.28,1.28L8.12,6.46a.51.51,0,0,0,0,.71Z"
                      transform="translate(-2 -1.99)"></path></svg
                  ></span
                ></a
              >&nbsp;, {i18n("except where otherwise stated")}
            </p>
          </div>
        </div>
      </div>
    </section>
    <div id="viewport-sm" class="js-viewport-size"></div>
    <div id="viewport-md" class="js-viewport-size"></div>
    <div id="viewport-lg" class="js-viewport-size"></div>
  </footer>
</Theme>

<style>
  .ons-list__link {
    margin: 0;
  }
  .footer {
    color: var(--text, #222);
    background: var(--pale, rgb(245, 245, 246));
  }
  a {
    color: var(--text, rgb(65, 64, 66)) !important;
    opacity: 90%;
  }
  a:hover {
    color: var(--text, black);
    text-decoration-color: var(--link-hover, black);
    opacity: 100%;
  }
  .ons-footer__ogl-img {
    color: var(--text, #222) !important;
    opacity: 85%;
  }
  .ons-svg-icon {
    fill: var(--text, #222) !important;
    opacity: 85%;
  }
</style>
