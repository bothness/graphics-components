A more accessible alternative to the `<Select>` component in this library. Intended to replace `<Select>` in future versions of this library, but this will cause a breaking change for most use cases.

This component is a Svelte wrapper for the GOV.UK [accessible-autocomplete](https://github.com/alphagov/accessible-autocomplete).

<!-- prettier-ignore -->
```html
<script>
  import { AccessibleSelect } from "@onsvisual/svelte-components";

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

<AccessibleSelect {options} bind:value on:change="{handleChange}" />
```
