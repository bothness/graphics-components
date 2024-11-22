<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  // @ts-ignore
  import componentDocs from "./docs/component.md?raw";
  import RelatedContent from "./RelatedContent.svelte";
  import { withComponentDocs } from "../../js/withParams.js";
</script>

<Meta
  title="Layout/RelatedContent"
  component="{RelatedContent}"
  argTypes="{{}}"
  {...withComponentDocs(componentDocs)}
/>

<Template let:args>
  <RelatedContent {...args} />
</Template>

<Story name="Default" args="{{ title: 'Default title' }}" />
