<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  // @ts-ignore
  import componentDocs from "./docs/component.md?raw";
  import ErrorPage from "./ErrorPage.svelte";
  import { withComponentDocs } from "../../js/withParams.js";
</script>

<Meta
  title="Layout/ErrorPage"
  component="{ErrorPage}"
  argTypes="{{}}"
  {...withComponentDocs(componentDocs)}
/>

<Template let:args>
  <div style:padding="12px">
    <ErrorPage {...args} />
  </div>
</Template>

<Story name="Default" args="{{}}" />

<Story name="Page not found" args="{{ status: 404 }}" />
