Displays a breadcrumb with the current page's parents.

<!-- prettier-ignore -->
```html
<script>
  import { Breadcrumb } from "@onsvisual/svelte-components";
</script>

<Breadcrumb analyticsId="{[
  {label: 'Home', href: '/'},
  {label: 'Parent page', href: '/parent'}
]}" />
```
