<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  // @ts-ignore
  import componentDocs from "./docs/component.md?raw";
  import exampleDocs from "./docs/example.md?raw";
  import Checkbox from "../Checkbox/Checkbox.svelte";
  import Checkboxes from "./Checkboxes.svelte";
  import { withComponentDocs, withStoryDocs } from "../../js/withParams.js";

  let items = [
    { id: "ice-cream", label: "Ice cream", checked: true },
    { id: "sprinkles", label: "Sprinkles", description: "Highly recommended!", checked: false },
    { id: "disabled", label: "Disabled option", checked: false, disabled: true },
  ];
</script>

<Meta
  title="Inputs/Checkboxes"
  component="{Checkboxes}"
  argTypes="{{}}"
  {...withComponentDocs(componentDocs)}
/>

<Template let:args>
  <div style:padding="12px">
    <Checkboxes {...args} />
  </div>
</Template>

<Story name="Default" args="{{ label: 'Select items', items }}" />

<Story name="Compact without label" args="{{ items, compact: true }}" />

<Story name="Individually defined checkboxes" {...withStoryDocs(exampleDocs)}>
  <div style:padding="12px">
    <Checkboxes label="Select items">
      <Checkbox id="ice-cream" label="Ice cream" />
      <Checkbox id="sprinkles" label="Sprinkles" description="Highly recommended!" />
      <Checkbox id="disabled" label="Disabled option" disabled />
    </Checkboxes>
  </div>
</Story>
