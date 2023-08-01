<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  import Embed from "../../wrappers/Embed/Embed.svelte";
  import Filler from "../../layout/Filler/Filler.svelte";
  import Section from "../../layout/Section/Section.svelte";
  import Grid from "../../layout/Grid/Grid.svelte";
  import Select from "../../inputs/Select/Select.svelte";

  // @ts-ignore
  import componentDocs from "./docs/component.md?raw";
  import { withComponentDocs } from "../../js/withParams.js";
</script>

<Meta
  title="Templates/Embed article"
  component="{null}"
  argTypes="{{}}"
  {...withComponentDocs(componentDocs)}
/>

<Template let:args>
  <Embed>
    <Filler height="auto" marginBottom="{false}">
      <div style:padding="0 12px">
        <h2>This is a sub-headline</h2>
        <p style:font-size="1rem">This is a description for the selector below</p>
        <Select floatingConfig="{{ strategy: 'fixed' }}" hideLabel />
      </div>
    </Filler>

    <Section title="Section title" marginTop="{true}">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat..
      </p>
      <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </Section>

    <Grid colwidth="medium" caption="This is a caption text">
      <div class="grid-cell"></div>
    </Grid>

    <Section title="Another section title">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
    </Section>

    <Section title="Yet another section title">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </Section>
  </Embed>
</Template>

<Story name="Default" args="{{}}" />

<style>
  .grid-cell {
    background-color: #ddd;
    min-height: 200px;
  }
</style>
