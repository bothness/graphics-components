<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  import Header from "../../layout/Header/Header.svelte";
  import Breadcrumb from "../../layout/Breadcrumb/Breadcrumb.svelte";
  import Titleblock from "../../layout/Titleblock/Titleblock.svelte";
  import Section from "../../layout/Section/Section.svelte";
  import Grid from "../../layout/Grid/Grid.svelte";
  import Blockquote from "../../decorators/Blockquote/Blockquote.svelte";
  import Footer from "../../layout/Footer/Footer.svelte";

  // @ts-ignore
  import componentDocs from "./docs/component.md?raw";
  import { withComponentDocs } from "../../js/withParams.js";
</script>

<Meta
  title="Templates/Standard article"
  component="{null}"
  argTypes="{{}}"
  {...withComponentDocs(componentDocs)}
/>

<Template let:args>
  <Header />
  <Breadcrumb
    links="{[
      { label: 'Home', href: '/' },
      { label: 'Parent', href: '/parent/' },
    ]}"
    background="#eaeaea"
  />
  <Titleblock title="Page title" background="#eaeaea">
    <div slot="after">09 August 2023</div>
  </Titleblock>

  <Section title="Section title" marginTop="{true}">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <Blockquote attribution="A. Person"
      >This is a blockquote, white comprises of a large block of inset text.</Blockquote
    >
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </Section>

  <Grid colwidth="full" caption="This is a caption text">
    <div class="grid-cell"></div>
  </Grid>

  <Section title="Another section title">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </Section>

  <Section title="Yet another section title">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </Section>

  <Footer theme="dark" />
</Template>

<Story name="Default" args="{{}}" />

<style>
  .grid-cell {
    background-color: #ddd;
    min-height: 300px;
  }
</style>
