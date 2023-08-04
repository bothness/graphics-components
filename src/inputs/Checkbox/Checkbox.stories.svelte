<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  // @ts-ignore
  import componentDocs from "./docs/component.md?raw";
  import Checkbox from "./Checkbox.svelte";
  import { withComponentDocs } from "../../js/withParams.js";
</script>

<Meta
  title="Inputs/Checkbox"
  component="{Checkbox}"
  argTypes="{{}}"
  {...withComponentDocs(componentDocs)}
/>

<Template let:args>
  <div
    style:padding="12px"
    style:background="{args?.variant === "ghost" ? "var(--ons-color-ocean-blue)" : null}"
    style:color="{args?.variant === "ghost" ? "white" : null}"
  >
    <Checkbox {...args} />
  </div>
</Template>

<Story name="Default" args="{{ id: 'checkbox1', label: 'Select this' }}" />

<Story name="Compact" args="{{ id: 'checkbox2', label: 'Select this', compact: true }}" />

<Story name="Ghost checkbox" args="{{ id: 'checkbox3', label: 'Select this', variant: 'ghost' }}" />
