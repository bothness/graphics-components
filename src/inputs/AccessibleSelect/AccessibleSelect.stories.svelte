<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  // @ts-ignore
  import componentDocs from "./docs/component.md?raw";
  import AccessibleSelect from "./AccessibleSelect.svelte";
  import { withComponentDocs } from "../../js/withParams.js";
  import options from "./options.js";

  let searchValue;
  let dropdownValue;

  let multiSelected = [];

  function multiSelect(option, mode = "add") {
    if (mode === "add" && option && !multiSelected.includes(option))
      multiSelected = [...multiSelected, option];
    else if (mode === "remove" && option) multiSelected = multiSelected.filter((d) => d !== option);
  }
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
  <AccessibleSelect
    id="search"
    label="Find an option"
    mode="search"
    options="{options}"
    bind:value="{searchValue}"
  />
</Template>

<Story name="Search mode" args="{{ id: 'search', label: 'Find an option', groupKey: 'group' }}" />

<Story name="Dropdown mode">
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
</Story>
