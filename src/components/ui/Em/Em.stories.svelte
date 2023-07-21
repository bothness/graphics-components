<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  // @ts-ignore
  import componentDocs from "./docs/component.md?raw";

  import Em from "./Em.svelte";

  import { withComponentDocs } from "$lib/docs/utils/withParams.js";
</script>

<Meta
  title="UI/Em"
  component="{Em}"
  argTypes="{{
    color: {
      control: { type: 'color' },
    },
  }}"
  {...withComponentDocs(componentDocs)}
/>

<Template let:args>
  <div style:padding="12px">
    <Em {...args}>{args.text}</Em>
  </div>
</Template>

<Story name="Default" args="{{ text: 'Text on grey background' }}" />
