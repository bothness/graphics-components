<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  // @ts-ignore
  import componentDocs from "./docs/component.md?raw";
  import AccessibleSelect from "./AccessibleSelect.svelte";
  import { withComponentDocs } from "../../js/withParams.js";
  import options from "./options.js";
</script>

<Meta
  title="Inputs/AccessibleSelect"
  component="{AccessibleSelect}"
  argTypes="{{
    mode: {
      options: ['search', 'dropdown'],
      control: { type: 'select' },
    },
  }}"
  {...withComponentDocs(componentDocs)}
/>

<Template let:args>
  <div style:padding="12px 12px 128px 12px">
    <AccessibleSelect {...args} />
  </div>
</Template>

<Story
  name="Default"
  args="{{ id: 'default', value: options[0], label: 'Select an option', options }}"
/>

<Story
  name="Hidden label"
  args="{{ id: 'hidden-label', label: 'Select an option', hideLabel: true, options }}"
/>

<Story
  name="Search mode"
  args="{{
    id: 'search',
    mode: 'search',
    label: 'Type to select',
    options,
  }}"
/>

<Story
  name="Options with group as suffix"
  args="{{
    id: 'group-suffix',
    label: 'Select an option',
    groupKey: 'group',
    options,
  }}"
/>
