A standard `<input>` element with Svelte bindings and events.

```html
<script>
  import { Input } from "@onsvisual/svelte-components";

  // Bind the <input> value to a variable (reactive)
  let value;

  // Define your own function on change
  const handleChange = (e) => console.log(e);
</script>

<input bind:value on:change="{handleChange}" />
```
