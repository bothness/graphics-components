<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  // @ts-ignore
  import componentDocs from "./docs/component.md?raw";
  import Blockquote from "./Blockquote.svelte";
  import { withComponentDocs } from "../../js/withParams.js";
</script>

<Meta
  title="Decorators/Blockquote"
  component="{Blockquote}"
  argTypes="{{}}"
  {...withComponentDocs(componentDocs)}
/>

<Template let:args>
  <div style:padding="12px">
    <Blockquote {...args}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua.
    </Blockquote>
  </div>
</Template>

<Story name="Default" args="{{ attribution: 'A. Person' }}" />

<Story name="Text only" args="{{ width: 'medium', title: 'Section title' }}" />
