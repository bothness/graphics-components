<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  // @ts-ignore
  import componentDocs from "./docs/component.md?raw";
  import Main from "./Main.svelte";
  import { withComponentDocs } from "$lib/js/withParams.js";
</script>

<Meta
  title="Wrappers/Main"
  component="{Main}"
  argTypes="{{}}"
  {...withComponentDocs(componentDocs)}
/>

<Template let:args>
  <Main {...args}>
    <div style:padding="24px 12px" style:background="lightgrey">
      <p style:margin="0">Child components go here.</p>
    </div>
  </Main>
</Template>

<Story name="Default" args="{{}}" />
