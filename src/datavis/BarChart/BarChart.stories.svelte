<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  // @ts-ignore
  import componentDocs from "./docs/component.md?raw";
  import { BarChart } from "@onsvisual/svelte-charts";
  import data from "../shared/data.js";
  import { withComponentDocs } from "../../js/withParams.js";
</script>

<Meta
  title="Data visualisation/BarChart"
  component="{BarChart}"
  argTypes="{{
    mode: {
      options: ['default', 'stacked', 'grouped', 'comparison', 'marker'],
      control: { type: 'select' },
    },
  }}"
  {...withComponentDocs(componentDocs)}
/>

<Template let:args>
  <div style:padding="12px">
    <BarChart {...args} />
  </div>
</Template>

<Story
  name="Default"
  args="{{
    data: data.filter((d) => d.group == 'apples'),
    xKey: 'value',
    yKey: 'year',
    title: 'Simple bar chart',
    footer: 'Source: ONS.',
    mode: 'default',
  }}"
/>

<Story
  name="Stacked bars"
  args="{{
    data,
    xKey: 'value',
    yKey: 'year',
    zKey: 'group',
    title: 'Stacked bar chart',
    footer: 'Source: ONS.',
    mode: 'default',
  }}"
/>

<Story
  name="Grouped bars"
  args="{{
    data,
    xKey: 'value',
    yKey: 'year',
    zKey: 'group',
    title: 'Grouped bar chart',
    footer: 'Source: ONS.',
    mode: 'grouped',
  }}"
/>

<Story
  name="Comparison markers"
  args="{{
    data,
    xKey: 'value',
    yKey: 'year',
    zKey: 'group',
    title: 'Comparison marker chart',
    footer: 'Source: ONS.',
    mode: 'comparison',
  }}"
/>

<Story
  name="Barcode"
  args="{{
    data,
    xKey: 'value',
    yKey: 'year',
    zKey: 'group',
    title: 'Barcode chart',
    footer: 'Source: ONS.',
    mode: 'marker',
  }}"
/>
