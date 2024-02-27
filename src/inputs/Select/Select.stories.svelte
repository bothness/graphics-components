<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  // @ts-ignore
  import componentDocs from "./docs/component.md?raw";
  import Select from "./Select.svelte";
  import { withComponentDocs } from "../../js/withParams.js";

  const options = [
    { id: "1", label: "General", group: "Group A" },
    { id: "people-who-live-here", label: "People who live here", group: "Group A" },
    { id: "visitors", label: "Visitors", group: "Group A" },
    { id: "household-accommodation", label: "Household and accommodation", group: "Group A" },
    { id: "personal-details", label: "Personal details", group: "Group B" },
    { id: "health", label: "Health", group: "Group B" },
    { id: "qualifications", label: "Qualifications", group: "Group B" },
    { id: "employment", label: "Employment", group: "Group B" },
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
    label: 'Select a topic',
    options,
  }}"
/>

<Story
  name="Hidden label"
  args="{{
    id: 'topic',
    label: 'Select a topic',
    hideLabel: true,
    options,
  }}"
/>

<Story
  name="Search mode"
  args="{{
    id: 'topic',
    mode: 'search',
    label: 'Find a topic',
    hideLabel: true,
    placeholder: 'Type to select an option',
    options,
  }}"
/>

<Story
  name="Multi-select mode"
  args="{{
    id: 'topic',
    label: 'Select one or more topics',
    hideLabel: true,
    placeholder: 'Select one or more',
    multiple: true,
    options,
  }}"
/>

<Story
  name="Options clustered by group"
  args="{{
    id: 'topic',
    label: 'Select a topic',
    hideLabel: true,
    placeholder: 'Type to select an option',
    groupKey: 'group',
    clusterByGroup: true,
    options,
  }}"
/>

<Story
  name="Options with group as suffix"
  args="{{
    id: 'topic',
    label: 'Select a topic',
    hideLabel: true,
    placeholder: 'Type to select an option',
    groupKey: 'group',
    options,
  }}"
/>
