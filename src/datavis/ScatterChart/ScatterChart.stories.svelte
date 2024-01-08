<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  // @ts-ignore
  import componentDocs from "./docs/component.md?raw";
  import { ScatterChart } from "@onsvisual/svelte-charts";
  import data from "../shared/data-scatter.js";
  import { withComponentDocs } from "../../js/withParams.js";
</script>

<Meta
  title="Data visualisation/ScatterChart"
  component="{ScatterChart}"
  argTypes="{{
    mode: {
      options: ['default', 'stacked'],
      control: { type: 'select' },
    },
  }}"
  {...withComponentDocs(componentDocs)}
/>

<Template let:args>
  <div style:padding="12px">
    <ScatterChart {...args} />
  </div>
</Template>

<Story
  name="Default"
  args="{{
    data,
    xKey: 'year',
    yKey: 'value',
    title: 'Simple scatter chart',
    footer: 'Source: ONS.',
  }}"
/>

<Story
  name="Scatter chart radius and groups"
  args="{{
    data,
    xKey: 'year',
    yKey: 'value',
    zKey: 'group',
    rKey: 'alt',
    r: [3, 15],
    title: 'Scatter chart radius and groups',
    footer: 'Source: ONS.',
    legend: true,
  }}"
/>

<Story
  name="Beeswarm chart radius and groups"
  args="{{
    data,
    xKey: 'value',
    zKey: 'group',
    rKey: 'alt',
    r: [3, 15],
    title: 'Beeswarm chart radius and groups',
    footer: 'Source: ONS.',
    legend: true,
  }}"
/>
