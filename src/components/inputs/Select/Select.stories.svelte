<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  // @ts-ignore
  import componentDocs from "./docs/component.md?raw";
  import Select from "./Select.svelte";
  import { withComponentDocs } from "$lib/docs/utils/withParams.js";

  const options = [
    { id: "1", label: "General" },
    { id: "people-who-live-here", label: "People who live here" },
    { id: "visitors", label: "Visitors" },
    { id: "household-accommodation", label: "Household and accommodation" },
    { id: "personal-details", label: "Personal details" },
    { id: "health", label: "Health" },
    { id: "qualifications", label: "Qualifications" },
    { id: "employment", label: "Employment" },
  ];
</script>

<Meta
  title="Inputs/Select"
  component="{Select}"
  argTypes="{{
    mode: {
      options: ['default', 'search'],
      control: { type: 'select' },
    },
  }}"
  {...withComponentDocs(componentDocs)}
/>

<Template let:args>
  <div style:padding="12px 12px 128px 12px">
    <Select {...args} />
  </div>
</Template>

<Story
  name="Default"
  args="{{
    id: 'topic',
    label: 'Question topic',
    options,
  }}"
/>

<Story
  name="Hidden label"
  args="{{
    id: 'topic',
    label: 'Question topic',
    hideLabel: true,
    options,
  }}"
/>

<Story
  name="Search mode"
  args="{{
    id: 'topic',
    mode: 'search',
    label: 'Question topic',
    hideLabel: true,
    placeholder: 'Type to select an option',
    options,
  }}"
/>

<Story
  name="Multi-select mode"
  args="{{
    id: 'topic',
    label: 'Question topic',
    hideLabel: true,
    placeholder: 'Select one or more',
    multiple: true,
    options,
  }}"
/>
