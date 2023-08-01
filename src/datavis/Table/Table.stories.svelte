<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  // @ts-ignore
  import componentDocs from "./docs/component.md?raw";
  import Table from "./Table.svelte";
  import { withComponentDocs } from "../../js/withParams.js";

  const data = [
    { country: "Scotland", mountain: "Ben Nevis", height: 1345 },
    { country: "Wales", mountain: "Snowdon", height: 1085 },
    { country: "England", mountain: "Scarfell Pike", height: 978 },
    { country: "Northern Ireland", mountain: "Slieve Donard", height: 850 },
  ];
  const columns = [
    { key: "country", label: "Country", sortable: true },
    { key: "mountain", label: "Highest mountain" },
    { key: "height", label: "Height in metres", sortable: true, numeric: true },
  ];
</script>

<Meta
  title="Data visualisation/Table"
  component="{Table}"
  argTypes="{{}}"
  {...withComponentDocs(componentDocs)}
/>

<Template let:args>
  <div style:padding="12px">
    <Table {...args} />
  </div>
</Template>

<Story name="Default" args="{{ data, columns }}" />

<Story name="Compact mode" args="{{ data, columns, compact: true }}" />
