<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  // @ts-ignore
  import componentDocs from "./docs/component.md?raw";
  import { LineChart } from "@onsvisual/svelte-charts";
  import data from "../shared/data.js";
  import { withComponentDocs } from "../../js/withParams.js";
</script>

<Meta
  title="Data visualisation/LineChart"
  component="{LineChart}"
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
    <LineChart {...args} />
  </div>
</Template>

<Story
  name="Default"
  args="{{
    data,
    xKey: 'year',
    yKey: 'value',
    zKey: 'group',
    title: 'Simple line chart',
    footer: 'Source: ONS.',
    mode: 'default',
    legend: true,
  }}"
/>

<Story
  name="Line chart with inline labels"
  args="{{
    data,
    xKey: 'year',
    yKey: 'value',
    zKey: 'group',
    title: 'Line chart with inline labels',
    footer: 'Source: ONS.',
    mode: 'default',
    padding: { top: 0, bottom: 28, left: 35, right: 100 },
    labels: 'all',
  }}"
/>

<Story
  name="Stacked area chart"
  args="{{
    data,
    xKey: 'year',
    yKey: 'value',
    zKey: 'group',
    title: 'Stacked area chart',
    footer: 'Source: ONS.',
    mode: 'stacked',
    line: false,
    legend: true,
  }}"
/>
