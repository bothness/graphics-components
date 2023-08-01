<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  // @ts-ignore
  import componentDocs from "./docs/component.md?raw";
  import Theme from "./Theme.svelte";
  import { withComponentDocs } from "../../js/withParams.js";
</script>

<Meta
  title="Wrappers/Theme"
  component="{Theme}"
  argTypes="{{
    theme: {
      options: ['', 'light', 'dark', 'lightblue'],
      control: { type: 'select' },
    },
  }}"
  {...withComponentDocs(componentDocs)}
/>

<Template let:args>
  <Theme {...args}>
    <div style:padding="12px">
      <h2>Title</h2>
      <p>Text with a <a href="#0">hyperlink</a>.</p>
      <p style:color="var(--muted)">Muted text.</p>
    </div>
  </Theme>
</Template>

<Story name="Default" args="{{}}" />

<Story
  name="Dark"
  args="{{
    theme: 'dark',
  }}"
/>

<Story
  name="Light blue"
  args="{{
    theme: 'lightblue',
  }}"
/>
