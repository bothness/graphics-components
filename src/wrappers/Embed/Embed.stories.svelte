<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  // @ts-ignore
  import componentDocs from "./docs/component.md?raw";
  import Embed from "./Embed.svelte";
  import { withComponentDocs } from "../../js/withParams.js";
</script>

<Meta
  title="Wrappers/Embed"
  component="{Embed}"
  argTypes="{{}}"
  {...withComponentDocs(componentDocs)}
/>

<Template let:args>
  <Embed {...args}>
    <div style:padding="24px 0" style:background="lightgrey">
      <p style:margin="0">Embedded content.</p>
    </div>
  </Embed>
</Template>

<Story name="Default" args="{{}}" />
