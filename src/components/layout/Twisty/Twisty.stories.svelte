<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  // @ts-ignore
  import componentDocs from "./docs/component.md?raw";
  import Twisty from "./Twisty.svelte";
  import { withComponentDocs } from "$lib/docs/utils/withParams.js";
</script>

<Meta
  title="Layout/Twisty"
  component="{Twisty}"
  argTypes="{{}}"
  {...withComponentDocs(componentDocs)}
/>

<Template let:args>
  <Twisty {...args}>
    <p>{@html args.content || ""}</p>
  </Twisty>
</Template>

<Story name="Default" args="{{ title: 'Title of twisty', content: 'Contents of twisty.' }}" />

<Story
  name="Open by default"
  args="{{ title: 'Title of twisty', content: 'Contents of twisty.', open: true }}"
/>
