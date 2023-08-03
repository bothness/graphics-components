<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  // @ts-ignore
  import componentDocs from "./docs/component.md?raw";
  import Notice from "./Notice.svelte";
  import { withComponentDocs } from "../../js/withParams.js";
</script>

<Meta
  title="Layout/Notice"
  component="{Notice}"
  argTypes="{{}}"
  {...withComponentDocs(componentDocs)}
/>

<Template let:args>
  <div style:padding="12px">
    <Notice {...args}>
      {@html args.content}
    </Notice>
  </div>
</Template>

<Story
  name="Default"
  args="{{
    content: 'This is the text of the notice.',
  }}"
/>

<Story
  name="Title and icon"
  args="{{
    title: 'Important notice',
    important: true,
    content: 'This is the text of the notice.',
  }}"
/>

<Story
  name="Error style"
  args="{{
    title: 'Important notice',
    important: true,
    mode: 'error',
    content: 'This is the text of the notice.',
  }}"
/>
