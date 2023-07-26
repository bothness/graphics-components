<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  // @ts-ignore
  import componentDocs from "./docs/component.md?raw";
  import Filler from "./Filler.svelte";
  import { withComponentDocs } from "$lib/js/withParams.js";
</script>

<Meta
  title="Layout/Filler"
  component="{Filler}"
  argTypes="{{
    width: {
      options: ['narrow', 'medium', 'width', 'full'],
      control: { type: 'select' },
    },
    height: {
      options: ['auto', 'tall', 'full'],
      control: { type: 'select' },
    },
    theme: {
      options: ['light', 'dark', 'lightblue'],
      control: { type: 'select' },
    },
  }}"
  {...withComponentDocs(componentDocs)}
/>

<Template let:args>
  <Filler {...args}>
    <p>Contents of filler component</p>
  </Filler>
</Template>

<Story name="Default" args="{{}}" />

<Story name="Custom theme" args="{{ theme: 'light', background: '#eee' }}" />
