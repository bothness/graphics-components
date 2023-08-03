<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  // @ts-ignore
  import componentDocs from "./docs/component.md?raw";
  import { DotPlotChart } from "@onsvisual/svelte-charts";
  import data from "../shared/data.js";
  import { withComponentDocs } from "../../js/withParams.js";
</script>

<Meta
  title="Data visualisation/DotPlotChart"
  component="{DotPlotChart}"
  argTypes="{{}}"
  {...withComponentDocs(componentDocs)}
/>

<Template let:args>
  <div style:padding="12px">
    <DotPlotChart {...args} />
  </div>
</Template>

<Story
  name="Default"
  args="{{
    data: data.filter((d) => d.group == 'apples'),
    xKey: 'value',
    yKey: 'year',
    title: 'Dot plot chart',
    footer: 'Source: ONS.',
    mode: 'default',
  }}"
/>

<Story
  name="Multiple dots"
  args="{{
    data,
    xKey: 'value',
    yKey: 'year',
    zKey: 'group',
    title: 'Dot plot with multiple points',
    footer: 'Source: ONS.',
    mode: 'default',
  }}"
/>
