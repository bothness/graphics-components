<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  // @ts-ignore
  import componentDocs from "./docs/component.md?raw";
  import Container from "./Container.svelte";
  import { withComponentDocs } from "$lib/docs/utils/withParams.js";
</script>

<Meta
  title="Wrappers/Container"
  component="{Container}"
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
  <Container {...args}>
    <div style:padding="24px 12px" style:background="lightgrey">
      <p style:margin="0">Contents of container.</p>
    </div>
  </Container>
</Template>

<Story name="Default" args="{{}}" />

<Story name="Narrow" args="{{ width: 'narrow' }}" />

<Story name="Wide" args="{{ width: 'wide' }}" />

<Story name="Full" args="{{ width: 'full' }}" />
