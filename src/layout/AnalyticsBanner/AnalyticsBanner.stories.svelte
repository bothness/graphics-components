<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  // @ts-ignore
  import componentDocs from "./docs/component.md?raw";
  import AnalyticsBanner from "./AnalyticsBanner.svelte";
  import { withComponentDocs } from "../../js/withParams.js";
</script>

<Meta
  title="Layout/AnalyticsBanner"
  component="{AnalyticsBanner}"
  argTypes="{{}}"
  {...withComponentDocs(componentDocs)}
/>

<Template let:args>
  <AnalyticsBanner {...args} />
</Template>

<Story name="Default" args="{{}}" />
