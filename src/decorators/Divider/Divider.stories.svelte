<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  // Don't lose the "?raw" in markdown imports!
  // @ts-ignore
  import componentDocs from "./docs/component.md?raw";

  import Divider from "./Divider.svelte";

  import { withComponentDocs } from "../../js/withParams.js";

  const metaProps = {
    ...withComponentDocs(componentDocs),
    // https://storybook.js.org/docs/svelte/essentials/controls
    argTypes: {
      hr: {
        options: ["narrow", "full", null],
        control: { type: "select" },
      },
      width: {
        options: ["narrow", "medium", "wide", "wider", "full"],
        control: { type: "select" },
      },
      theme: {
        options: ["light", "dark", "lightblue"],
        control: { type: "select" },
      },
    },
  };
</script>

<Meta title="Decorators/Divider" component="{Divider}" {...metaProps} />

<Template let:args>
  <div style:padding="26px 12px 0">
    <Divider {...args} />
  </div>
</Template>

<Story name="Default" args="{{}}" />
