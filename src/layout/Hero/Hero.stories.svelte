<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  // @ts-ignore
  import componentDocs from "./docs/component.md?raw";
  import Hero from "./Hero.svelte";
  import { withComponentDocs } from "../../js/withParams.js";
</script>

<Meta
  title="Layout/Hero"
  component="{Hero}"
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
  <Hero {...args} />
</Template>

<Story
  name="Default"
  args="{{ title: 'Page headline', lede: 'A short introductory sentence', date: '2023-01-01' }}"
/>

<Story
  name="Auto height"
  args="{{
    title: 'Page headline',
    lede: 'A short introductory sentence',
    date: '2023-01-01',
    height: 'auto',
  }}"
/>

<Story
  name="Light blue theme"
  args="{{
    title: 'Page headline',
    lede: 'A short introductory sentence',
    date: '2023-01-01',
    theme: 'lightblue',
    background: null,
  }}"
/>
