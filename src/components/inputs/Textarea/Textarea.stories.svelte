<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  // @ts-ignore
  import componentDocs from "./docs/component.md?raw";
  import Textarea from "./Textarea.svelte";
  import { withComponentDocs } from "$lib/docs/utils/withParams.js";
</script>

<Meta
  title="Inputs/Textarea"
  component="{Textarea}"
  argTypes="{{}}"
  {...withComponentDocs(componentDocs)}
/>

<Template let:args>
  <div style:padding="12px">
    <Textarea {...args} />
  </div>
</Template>

<Story
  name="Default"
  args="{{
    id: 'text',
    label: 'Enter some text',
  }}"
/>

<Story
  name="Default"
  args="{{
    id: 'text',
    label: 'Enter some text',
  }}"
/>

<Story
  name="Hidden label and character limit"
  args="{{
    id: 'text',
    label: 'Enter some text',
    hideLabel: true,
    charLimit: 200,
  }}"
/>
