<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  // @ts-ignore
  import componentDocs from "./docs/component.md?raw";
  import Grid from "./Grid.svelte";
  import { withComponentDocs } from "../../js/withParams.js";
</script>

<Meta
  title="Layout/Grid"
  component="{Grid}"
  argTypes="{{
    width: {
      options: ['narrow', 'medium', 'wide', 'wider', 'full'],
      control: { type: 'select' },
    },
  }}"
  {...withComponentDocs(componentDocs)}
/>

<Template let:args>
  <Grid {...args}>
    <div class="grid-cell">Grid cell one</div>
    <div class="grid-cell">Grid cell two</div>
    <div class="grid-cell">Grid cell three</div>
    <div class="grid-cell">Grid cell four</div>
  </Grid>
</Template>

<Story name="Default" args="{{}}" />

<Story name="Dark theme" args="{{ theme: 'dark' }}" />

<Story name="Wide columns" args="{{ colwidth: 'wide' }}" />

<Story name="Narrow columns" args="{{ colwidth: 'narrow' }}" />

<Story name="Full width columns" args="{{ colwidth: 'full' }}" />

<style>
  .grid-cell {
    background: var(--pale);
    padding: 12px;
  }
</style>
