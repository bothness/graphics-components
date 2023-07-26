<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  // @ts-ignore
  import componentDocs from "./docs/component.md?raw";
  import Section from "./Section.svelte";
  import { withComponentDocs } from "$lib/js/withParams.js";
</script>

<Meta
  title="Layout/Section"
  component="{Section}"
  argTypes="{{
    width: {
      options: ['narrow', 'medium', 'width', 'full'],
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
  <Section {...args}>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </Section>
</Template>

<Story name="Default" args="{{ title: 'Section title' }}" />

<Story name="Medium" args="{{ width: 'medium', title: 'Section title' }}" />

<Story name="Wide" args="{{ width: 'wide', title: 'Section title' }}" />

<Story name="Dark themed" args="{{ theme: 'dark', title: 'Section title' }}" />
