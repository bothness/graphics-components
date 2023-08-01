<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  // @ts-ignore
  import componentDocs from "./docs/component.md?raw";
  import Scroller from "./Scroller.svelte";
  import ScrollerSection from "./ScrollerSection.svelte";
  import Grid from "../../layout/Grid/Grid.svelte";
  import Em from "../../decorators/Em/Em.svelte";
  import { withComponentDocs } from "../../js/withParams.js";

  const scrollerColors = ["#ddd", "#777", "#222"];
  let scrollerColor = scrollerColors[0];
</script>

<Meta
  title="Layout/Scroller"
  component="{Scroller}"
  argTypes="{{}}"
  {...withComponentDocs(componentDocs)}
/>

<Template let:args>
  <Scroller {...args} on:change="{(e) => (scrollerColor = scrollerColors[e.detail.index])}">
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
          When this first caption is visible, the background will appear <Em
            color="{scrollerColors[1]}">dark grey</Em
          >.
        </p>
      </ScrollerSection>
      <ScrollerSection>
        <p>
          When this first caption is visible, the background will appear <Em
            color="{scrollerColors[2]}">black</Em
          >.
        </p>
      </ScrollerSection>
    </div>
  </Scroller>
</Template>

<Story name="Default" args="{{}}" />
