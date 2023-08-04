<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  // @ts-ignore
  import componentDocs from "./docs/component.md?raw";
  import exampleDocs from "./docs/example.md?raw";
  import Radio from "./Radio.svelte";
  import Radios from "./Radios.svelte";
  import { withComponentDocs, withStoryDocs } from "../../js/withParams.js";

  let items = [
    {
      id: "house",
      label: "House or bungalow",
      description: "Includes terraced, semi-detached and detached homes.",
    },
    { id: "flat", label: "Flat, maisonette or apartment" },
    { id: "mobile", label: "Caravan or other mobile or temporary structure" },
  ];
</script>

<Meta
  title="Inputs/Radios"
  component="{Radios}"
  argTypes="{{}}"
  {...withComponentDocs(componentDocs)}
/>

<Template let:args>
  <div style:padding="12px">
    <Radios {...args} />
  </div>
</Template>

<Story name="Default" args="{{ label: 'Select one', id: 'radios', items }}" />

<Story name="Compact without label" args="{{ id: 'radios', items, compact: true }}" />

<Story name="Individually defined radios" {...withStoryDocs(exampleDocs)}>
  <div style:padding="12px">
    <Radios label="Select one">
      <Radio
        groupId="radios"
        id="house"
        label="House or bungalow"
        description="Includes terraced, semi-detached and detached homes."
      />
      <Radio groupId="radios" id="flat" label="Flat, maisonette or apartment" />
      <Radio groupId="radios" id="mobile" label="Caravan or other mobile or temporary structure" />
    </Radios>
  </div>
</Story>
