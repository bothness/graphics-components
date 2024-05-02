<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  // @ts-ignore
  import componentDocs from "./docs/component.md?raw";
  import SkipLink from "./SkipLink.svelte";
  import { withComponentDocs } from "../../js/withParams.js";
</script>

<Meta
  title="Layout/SkipLink"
  component="{SkipLink}"
  argTypes="{{}}"
  {...withComponentDocs(componentDocs)}
/>

<Template let:args>
  <SkipLink {...args} />
</Template>

<Story name="Default" args="{{}}" />
