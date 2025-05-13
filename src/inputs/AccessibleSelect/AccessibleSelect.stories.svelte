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
  args="{{ id: 'default', label: 'Select an option', groupKey: 'group', options }}"
/>

<Story
  name="Search"
  args="{{
    id: 'search',
    mode: 'search',
    label: 'Type to select',
    groupKey: 'group',
    options,
  }}"
/>

<!-- <Story name="Dropdown mode">
  <AccessibleSelect
    id="dropdown"
    mode="dropdown"
    options="{options}"
    bind:value="{dropdownValue}"
  />
  <p>
    Selected option:
    {dropdownValue ? JSON.stringify(dropdownValue) : ""}
  </p>
</Story>

<Story name="Multi-select">
  <AccessibleSelect
    id="multi"
    options="{options}"
    autoClear
    on:change="{(e) => multiSelect(e.detail)}"
  />

  <p>
    Selected options:
    {#each multiSelected as option}
      <button class="selected-option" on:click="{() => multiSelect(option, 'remove')}"
        >&#10005; {option.label}</button
      >
    {/each}
  </p>
</Story> -->
