<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  // @ts-ignore
  import componentDocs from "./docs/component.md?raw";
  import AccessibleSelect from "./AccessibleSelect.svelte";
  import { withComponentDocs } from "../../js/withParams.js";
  import options from "./options.js";

  let searchValue;
</script>

<Meta
  title="Inputs/AccessibleSelect"
  component="{AccessibleSelect}"
  argTypes="{{}}"
  {...withComponentDocs(componentDocs)}
/>

<Template let:args>
  <AccessibleSelect
    id="search"
    label="Find an option"
    mode="search"
    groupKey="group"
    options="{options}"
    bind:value="{searchValue}"
  />
</Template>

<Story name="Search mode" args="{{ id: 'search', label: 'Find an option' }}" />

<Story name="Dropdown mode" args="{{ id: 'dropdown', label: 'Select this' }}" />
