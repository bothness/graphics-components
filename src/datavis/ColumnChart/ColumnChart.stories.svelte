<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  // @ts-ignore
  import componentDocs from "./docs/component.md?raw";
  import { ColumnChart } from "@onsvisual/svelte-charts";
  import data from "../shared/data.js";
  import { withComponentDocs } from "../../js/withParams.js";
</script>

<Meta
  title="Data visualisation/ColumnChart"
  component="{ColumnChart}"
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
    <ColumnChart {...args} />
  </div>
</Template>

<Story
  name="Default"
  args="{{
    data: data.filter((d) => d.group == 'apples'),
    xKey: 'year',
    yKey: 'value',
    title: 'Simple bar chart',
    footer: 'Source: ONS.',
    mode: 'default',
  }}"
/>

<Story
  name="Stacked columns"
  args="{{
    data,
    xKey: 'year',
    yKey: 'value',
    zKey: 'group',
    title: 'Stacked bar chart',
    footer: 'Source: ONS.',
    mode: 'default',
  }}"
/>

<Story
  name="Grouped columns"
  args="{{
    data,
    xKey: 'year',
    yKey: 'value',
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
    xKey: 'year',
    yKey: 'value',
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
    xKey: 'year',
    yKey: 'value',
    zKey: 'group',
    title: 'Barcode chart',
    footer: 'Source: ONS.',
    mode: 'marker',
  }}"
/>
