<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  // @ts-ignore
  import componentDocs from "./docs/component.md?raw";
  import Breadcrumb from "./Breadcrumb.svelte";
  import { withComponentDocs } from "../../js/withParams.js";
</script>

<Meta
  title="Layout/Breadcrumb"
  component="{Breadcrumb}"
  argTypes="{{}}"
  {...withComponentDocs(componentDocs)}
/>

<Template let:args>
  <div style:padding="12px">
    <Breadcrumb {...args} />
  </div>
</Template>

<Story
  name="Default"
  args="{{
    links: [
      { label: 'Home', href: '/' },
      { label: 'Parent page', href: '/parent' },
    ],
  }}"
/>
