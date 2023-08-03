<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  import Header from "../../layout/Header/Header.svelte";
  import Hero from "../../layout/Hero/Hero.svelte";
  import Filler from "../../layout/Filler/Filler.svelte";
  import Section from "../../layout/Section/Section.svelte";
  import Grid from "../../layout/Grid/Grid.svelte";
  import Blockquote from "../../decorators/Blockquote/Blockquote.svelte";
  import Em from "../../decorators/Em/Em.svelte";
  import Divider from "../../decorators/Divider/Divider.svelte";
  import Scroller from "../../layout/Scroller/Scroller.svelte";
  import ScrollerSection from "../../layout/Scroller/ScrollerSection.svelte";
  import Footer from "../../layout/Footer/Footer.svelte";

  // @ts-ignore
  import componentDocs from "./docs/component.md?raw";
  import { withComponentDocs } from "../../js/withParams.js";

  const scrollerColors = ["#ddd", "#777", "#222"];
  let scrollerColor = scrollerColors[0];
</script>

<Meta
  title="Templates/Feature article"
  component="{null}"
  argTypes="{{}}"
  {...withComponentDocs(componentDocs)}
/>

<Template let:args>
  <Header compact />

  <Hero
    title="This is an article title"
    lede="This is a short, introductory sentence"
    date="2023-07-04"
  >
    <!-- <Checkbox label="Enable animation" variant="ghost" checked={animation} noBorder/> -->
  </Hero>

  <Filler marginBottom="{false}">
    <p>This is a test paragraph.</p>
    <p>This is another test paragraph.</p>
  </Filler>

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

  <Grid colwidth="medium" caption="This is a caption text">
    <div class="grid-cell"></div>
    <div class="grid-cell"></div>
    <div class="grid-cell"></div>
  </Grid>

  <Divider />

  <Section title="Another section title">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </Section>

  <Scroller
    id="scroller"
    splitscreen
    on:change="{(e) => (scrollerColor = scrollerColors[e.detail.index])}"
  >
    <div slot="background">
      <Grid width="full" height="full">
        <div class="placeholder-block" style:background-color="{scrollerColor}"></div>
      </Grid>
    </div>
    <div slot="foreground">
      <ScrollerSection>
        <p>
          When this first caption is visible, the background will appear <Em
            color="{scrollerColors[0]}">light grey</Em
          >.
        </p>
      </ScrollerSection>
      <ScrollerSection>
        <p>
          When this section caption is visible, the background will appear <Em
            color="{scrollerColors[1]}">dark grey</Em
          >.
        </p>
      </ScrollerSection>
      <ScrollerSection>
        <p>
          When this third caption is visible, the background will appear <Em
            color="{scrollerColors[2]}">black</Em
          >.
        </p>
      </ScrollerSection>
    </div>
  </Scroller>

  <Section title="Yet another section title">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </Section>

  <Footer compact />
</Template>

<Story name="Default" args="{{}}" />

<style>
  .grid-cell {
    background-color: #ddd;
    min-height: 200px;
  }
</style>
