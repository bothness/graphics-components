<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  // Don't lose the "?raw" in markdown imports!
  // @ts-ignore
  import componentDocs from "./docs/component.md?raw";

  import Divider from "./Divider.svelte";

  import { withComponentDocs } from "$docs/utils/withParams.js";

  const metaProps = {
    ...withComponentDocs(componentDocs),
    // https://storybook.js.org/docs/svelte/essentials/controls
    argTypes: {
      width: {
        options: ["narrow", "medium", "width", "full"],
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
  <div style:padding="26px 0 0">
    <Divider {...args} />
  </div>
</Template>

<Story name="Default" args="{{}}" />
