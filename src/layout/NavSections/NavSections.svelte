<script>
  import { onMount, setContext } from "svelte";
  import { writable } from "svelte/store";

  /**
   * A label for the page contents nav
   * @type {string}
   */
  export let contentsLabel = "Page contents";
  /**
   * ID for contents nav section (for back links)
   * @type {string}
   */
  export let tocId = "toc";
  /**
   * Don't include table of contents (allows for custom uses of nav panel)
   * @type {boolean}
   */
  export let noContents = false;

  let active;

  setContext("tocId", tocId);

  const sections = writable([]);
  setContext("sections", sections);

  const observer = writable();
  setContext("observer", observer);

  onMount(() => {
    if (!noContents) {
      $observer = new IntersectionObserver(
        (entries, observer) => {
          for (let i = 0; i < entries.length; i++) {
            if (entries[i].isIntersecting) {
              active = entries[i].target.id;
              break;
            }
          }
        },
        {
          root: null,
          rootMargin: `0% 0% -70% 0%`,
          threshold: 0,
        }
      );
    }
  });
</script>

<div class="ons-page__container ons-container">
  <div class="ons-grid ons-js-toc-container ons-u-ml-no">
    <slot name="header" />
    <div class="ons-grid__col ons-col-4@m ons-u-pl-no ons-grid__col--sticky@m" id="{tocId}">
      <aside class="ons-toc-container" role="complementary">
        <nav class="ons-toc" aria-label="Pages in this guide">
          <slot name="before-nav" />
          {#if !noContents}
            {#if contentsLabel}
              <h2 class="ons-toc__title ons-u-fs-r--b ons-u-mb-s">
                {contentsLabel}
              </h2>
            {/if}
            <ol class="ons-list ons-u-mb-m ons-list--dashed">
              {#each $sections as section}
                <li class="ons-list__item">
                  <a
                    href="#{section.id}"
                    class="ons-list__link"
                    class:ons-toc__link-active="{section.id === active}"
                  >
                    {section.title}
                  </a>
                </li>
              {/each}
            </ol>
          {/if}
          <slot name="after-nav" />
        </nav>
      </aside>
    </div>
    <div class="ons-grid__col ons-col-8@m ons-u-pl-no">
      <slot name="before" />
      {#if $observer}
        <slot />
      {/if}
      <slot name="after" />
    </div>
    <slot name="footer" />
  </div>
</div>
