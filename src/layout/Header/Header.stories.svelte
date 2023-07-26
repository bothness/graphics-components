<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  // @ts-ignore
  import componentDocs from "./docs/component.md?raw";
  import Header from "./Header.svelte";
  import { withComponentDocs } from "$lib/js/withParams.js";
</script>

<Meta
  title="Layout/Header"
  component="{Header}"
  argTypes="{{
    theme: {
      options: ['light', 'dark'],
      control: { type: 'select' },
    },
  }}"
  {...withComponentDocs(componentDocs)}
/>

<Template let:args>
  <Header {...args} />
</Template>

<Story name="Default" args="{{}}" />

<Story name="Compact with page title" args="{{ compact: true, title: 'Page title' }}" />
