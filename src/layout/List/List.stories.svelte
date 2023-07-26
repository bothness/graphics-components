<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  // @ts-ignore
  import componentDocs from "./docs/component.md?raw";
  import List from "./List.svelte";
  import { withComponentDocs } from "$lib/js/withParams.js";
</script>

<Meta
  title="Layout/List"
  component="{List}"
  argTypes="{{}}"
  {...withComponentDocs(componentDocs)}
/>

<Template let:args>
  <div style:padding="12px">
    <List {...args}>
      <li>First list item</li>
      <li>Second list item</li>
      <li>Third list item</li>
    </List>
  </div>
</Template>

<Story name="Default" args="{{}}" />

<Story name="Dashed list" args="{{ mode: 'dash' }}" />

<Story name="Numeric list" args="{{ mode: 'number' }}" />

<Story name="Bare list" args="{{ mode: 'bare' }}" />
