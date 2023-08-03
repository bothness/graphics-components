<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  // @ts-ignore
  import componentDocs from "./docs/component.md?raw";
  import Contents from "./Contents.svelte";
  import { withComponentDocs } from "../../js/withParams.js";
</script>

<Meta
  title="Layout/Contents"
  component="{Contents}"
  argTypes="{{}}"
  {...withComponentDocs(componentDocs)}
/>

<Template let:args>
  <div style:padding="12px">
    <Contents {...args} />
  </div>
</Template>

<Story
  name="Default"
  args="{{
    links: [
      { label: 'Overview' },
      { label: 'Who should take part and why', href: '#0' },
      { label: 'How your information is used', href: '#0' },
      { label: 'The 2019 Census Rehearsal', href: '#0' },
      { label: 'Online census', href: '#0' },
    ],
  }}"
/>
