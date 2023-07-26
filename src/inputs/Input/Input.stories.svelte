<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  // @ts-ignore
  import componentDocs from "./docs/component.md?raw";
  import Input from "./Input.svelte";
  import { withComponentDocs } from "$lib/js/withParams.js";
</script>

<Meta
  title="Inputs/Input"
  component="{Input}"
  argTypes="{{}}"
  {...withComponentDocs(componentDocs)}
/>

<Template let:args>
  <div style:padding="12px">
    <Input {...args} />
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
  name="With hidden label"
  args="{{
    id: 'text',
    label: 'Enter some text',
    hideLabel: true,
  }}"
/>

<Story
  name="With description"
  args="{{
    id: 'text',
    label: 'Enter some text',
    description: 'This is a hint on what to enter',
  }}"
/>

<Story
  name="Numeric with prefix"
  args="{{
    id: 'text',
    label: 'Enter some text',
    prefix: '£',
    unitLabel: 'British pounds sterling',
    numeric: true,
    width: 5,
    charLimit: 8,
  }}"
/>

<Story
  name="Input error"
  args="{{
    id: 'text',
    label: 'Enter some text',
    error: true,
  }}"
/>
