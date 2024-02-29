A wrapper component that uses IntersectionObserver to allow the elements it contains to be lazy loaded, ie. to be initialised/mounted only when they enter the viewport (or come close to it).

You can use the **initialHeight** to set the minimum height of the placeholder in pixels (default 400), and you can use **rootMargin** to set how many pixels from the viewport you want lazy loading to kick in (default 200).

<!-- prettier-ignore -->
```html
<script>
  import { LazyLoad } from "@onsvisual/svelte-components";
</script>

{#each Array(20) as section, i}
  <LazyLoad>
    <div class="img-container">
      <img src="https://cataas.com/cat?{i}" alt="" />
    </div>
  </LazyLoad>
{/each}

<style>
  .img-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
    background: #eee;
    margin-bottom: 10px;
  }
  img {
    width: 200px;
  }
</style>
```
