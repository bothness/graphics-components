A media grid component, useful for images and small multiple charts. Setting `colwidth` to **full** allows for a single cell/image/chart with an optional caption.

<!-- prettier-ignore -->
```html
<script>
  import { Grid } from "@onsvisual/svelte-components";
</script>

<Grid>
  <div>{grid_cell_content}</div>
  <div>{grid_cell_content}</div>
  <div>{grid_cell_content}</div>
</Grid>
```
