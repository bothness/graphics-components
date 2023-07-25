<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  // @ts-ignore
  import componentDocs from "./docs/component.md?raw";
  import Dropdown from "./Dropdown.svelte";
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
  title="Inputs/Dropdown"
  component="{Dropdown}"
  argTypes="{{}}"
  {...withComponentDocs(componentDocs)}
/>

<Template let:args>
  <div style:padding="12px">
    <Dropdown {...args} />
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
  name="Custom placeholder text"
  args="{{
    id: 'topic',
    label: 'Question topic',
    hideLabel: true,
    placeholder: 'Some custom text',
    options,
  }}"
/>
