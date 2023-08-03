<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  // @ts-ignore
  import componentDocs from "./docs/component.md?raw";
  import PhaseBanner from "./PhaseBanner.svelte";
  import { withComponentDocs } from "../../js/withParams.js";
</script>

<Meta
  title="Layout/PhaseBanner"
  component="{PhaseBanner}"
  argTypes="{{}}"
  {...withComponentDocs(componentDocs)}
/>

<Template let:args>
  <PhaseBanner {...args} />
</Template>

<Story name="Default" args="{{}}" />

<Story
  name="Prototype with custom link"
  args="{{
    phase: 'Prototype',
    href: 'https://example.com',
  }}"
/>
