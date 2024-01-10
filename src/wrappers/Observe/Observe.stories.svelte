<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  // @ts-ignore
  import componentDocs from "./docs/component.md?raw";
  import Observe from "./Observe.svelte";
  import { withComponentDocs } from "../../js/withParams.js";

  const colors = ["yellow", "green", "blue", "purple", "red", "orange"];
  const visible = {}; // Binding for visiblity of divs
</script>

<Meta
  title="Wrappers/Observe"
  component="{Observe}"
  argTypes="{{}}"
  {...withComponentDocs(componentDocs)}
/>

<Template let:args>
  {#each colors as color}
    <Observe
      on:enter="{() => console.log(`${color} entered`)}"
      on:exit="{() => console.log(`${color} exited`)}"
      bind:visible="{visible[color]}"
    >
      <div style:background="{color}" style:height="400px"></div>
    </Observe>
  {/each}
</Template>

<Story name="Default" args="{{}}" />
