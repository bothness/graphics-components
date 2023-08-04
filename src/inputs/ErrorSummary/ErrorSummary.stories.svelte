<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  // @ts-ignore
  import componentDocs from "./docs/component.md?raw";
  import exampleDocs from "./docs/example.md?raw";
  import ErrorSummary from "./ErrorSummary.svelte";
  import { withComponentDocs, withStoryDocs } from "../../js/withParams.js";

  const items = [
    { label: "First issue description.", href: "#0" },
    { label: "Second issue description." },
  ];
</script>

<Meta
  title="Inputs/ErrorSummary"
  component="{ErrorSummary}"
  argTypes="{{}}"
  {...withComponentDocs(componentDocs)}
/>

<Template let:args>
  <div style:padding="12px">
    <ErrorSummary {...args} />
  </div>
</Template>

<Story name="Default" args="{{ title: 'There are 2 problems with your answer', items }}" />

<Story name="Error defined as text" {...withStoryDocs(exampleDocs)}>
  <div style:padding="12px">
    <ErrorSummary title="There was an error">This is a text to describe the error.</ErrorSummary>
  </div>
</Story>
