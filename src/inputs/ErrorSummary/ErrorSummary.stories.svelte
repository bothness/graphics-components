<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  // @ts-ignore
  import componentDocs from "./docs/component.md?raw";
  import ErrorSummary from "./ErrorSummary.svelte";
  import List from "../../layout/List/List.svelte";
  import { withComponentDocs } from "../../js/withParams.js";
</script>

<Meta
  title="Inputs/ErrorSummary"
  component="{ErrorSummary}"
  argTypes="{{}}"
  {...withComponentDocs(componentDocs)}
/>

<Template let:args>
  <div style:padding="12px">
    <ErrorSummary {...args}>
      <List mode="number">
        <li>The first issue</li>
        <li>The second issue</li>
      </List>
    </ErrorSummary>
  </div>
</Template>

<Story name="Default" args="{{ title: 'There are 2 problems with your answer' }}" />
