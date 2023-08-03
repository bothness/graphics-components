A panel to summarise errors on a form/input.

Based on [this ONS Design System pattern](https://service-manual.ons.gov.uk/design-system/patterns/error-status-pages).

<!-- prettier-ignore -->
```html
<script>
  import { ErrorSummary, List } from "@onsvisual/svelte-components";
</script>

<ErrorSummary title="There are 2 problems with your answer">
  <List mode="number">
    <li>The first issue</li>
    <li>The second issue</li>
  </List>
</ErrorSummary>
```
