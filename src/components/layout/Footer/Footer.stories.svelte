<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  // @ts-ignore
  import componentDocs from "./docs/component.md?raw";
  import Footer from "./Footer.svelte";
  import { withComponentDocs } from "$lib/docs/utils/withParams.js";
</script>

<Meta
  title="Layout/Footer"
  component="{Footer}"
  argTypes="{{
    theme: {
      options: ['light', 'dark'],
      control: { type: 'select' },
    },
  }}"
  {...withComponentDocs(componentDocs)}
/>

<Template let:args>
  <Footer {...args} />
</Template>

<Story name="Default" args="{{}}" />

<Story name="Compact with dark theme" args="{{ compact: true, theme: 'dark' }}" />
