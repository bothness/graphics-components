An extended alternative to a `<select>` component (see Dropdown), with auto-complete and multi-select.

This component is a wrapper for [svelte-select](https://github.com/rob-balfre/svelte-select).

```html
<script>
  import { Select } from "@onsvisual/svelte-components";

  const values = [
    { id: "1", label: "one" },
    { id: "2", label: "two" },
    { id: "3", label: "three" },
  ];

  // Bind the <select> value to a variable (reactive)
  let value;

  // Define your own function on change
  const handleChange = (e) => console.log(e);
</script>

<select {options} bind:value on:change="{handleChange}" />
```
