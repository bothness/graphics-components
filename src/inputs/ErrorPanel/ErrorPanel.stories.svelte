<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  // @ts-ignore
  import componentDocs from "./docs/component.md?raw";
  import ErrorPanel from "./ErrorPanel.svelte";
  import Input from "../Input/Input.svelte";
  import { withComponentDocs } from "../../js/withParams.js";
</script>

<Meta
  title="Inputs/ErrorPanel"
  component="{ErrorPanel}"
  argTypes="{{}}"
  {...withComponentDocs(componentDocs)}
/>

<Template let:args>
  <div style:padding="12px">
    <ErrorPanel {...args}>
      <Input />
    </ErrorPanel>
  </div>
</Template>

<Story name="Default" args="{{ message: 'You entered the wrong text' }}" />
