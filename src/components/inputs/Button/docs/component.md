A button/link component that can be styled in various ways. It will render as an `<a>` link if it has an `href` property defined.

```html
<script>
  import { Button } from "@onsvisual/svelte-components";

  // Define your own function on click
  const handleClick = (e) => console.log(e);
</script>

<!-- Standard button with on:click function -->
<button on:click="{handleClick}">Button text</button>

<!-- Button-styled link with href -->
<button href="#">Link text</button>
```
