This component creates a styled `<main>` element to wrap the primary contents of a page (generally everything between the page header and footer).

This component is useful for screen readers, as the standard header component contains a visually hidden "Skip to content" link that will bring users to it.

```html
<script>
  import { Main } from "@onsvisual/svelte-components";
</script>

<!-- Header goes here -->
<Main>
  {child_components}
</Main>
<!-- Footer goes here -->
```
