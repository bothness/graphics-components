<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  // @ts-ignore
  import componentDocs from "./docs/component.md?raw";
  import Highlight from "./Highlight.stories.svelte";
  import { withComponentDocs } from "../../js/withParams.js";
</script>

<Meta
  title="Layout/Highlight"
  component="{Highlight}"
  argTypes="{{
    width: {
      options: ['narrow', 'medium', 'wide', 'wider', 'full'],
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
  <Highlight {...args}>
    <p>Contents of highlight component</p>
  </Highlight>
</Template>

<Story name="Default" args="{{}}" />

<Story name="Custom theme" args="{{ theme: 'light', background: '#eee' }}" />
