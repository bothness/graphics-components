<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  // @ts-ignore
  import componentDocs from "./docs/component.md?raw";
  import Tabs from "./Tabs.svelte";
  import Tab from "./Tab.svelte";
  import { withComponentDocs } from "../../js/withParams.js";
</script>

<Meta
  title="Layout/Tabs"
  component="{Tabs}"
  argTypes="{{}}"
  {...withComponentDocs(componentDocs)}
/>

<Template let:args>
  <div style:padding="12px">
    <Tabs {...args}>
      <Tab title="Tab one" hideTitle="{args.hideTitle}">Contents of tab panel one.</Tab>
      <Tab title="Tab two" hideTitle="{args.hideTitle}">Contents of tab panel two.</Tab>
      <Tab title="Tab three" hideTitle="{args.hideTitle}">Contents of tab panel three.</Tab>
    </Tabs>
  </div>
</Template>

<Story name="Default" args="{{}}" />

<Story name="Tab panel border" args="{{ border: true }}" />

<Story name="Compact, hidden titles" args="{{ compact: true, hideTitle: true }}" />
