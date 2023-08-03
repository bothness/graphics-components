<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  // @ts-ignore
  import componentDocs from "./docs/component.md?raw";
  import Summary from "./Summary.svelte";
  import { withComponentDocs } from "../../js/withParams.js";

  const items = [
    { key: "First item", value: "Value of first item" },
    { key: "Second item", value: "Value of second item (that can be changed)", href: "#" },
  ];
</script>

<Meta
  title="Layout/Summary"
  component="{Summary}"
  argTypes="{{}}"
  {...withComponentDocs(componentDocs)}
/>

<Template let:args>
  <div style:padding="12px">
    <Summary {...args} />
  </div>
</Template>

<Story name="Default" args="{{ items }}" />
