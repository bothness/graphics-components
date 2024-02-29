<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  // @ts-ignore
  import componentDocs from "./docs/component.md?raw";
  import LazyLoad from "./LazyLoad.svelte";
  import { withComponentDocs } from "../../js/withParams.js";
</script>

<Meta
  title="Wrappers/LazyLoad"
  component="{LazyLoad}"
  argTypes="{{}}"
  {...withComponentDocs(componentDocs)}
/>

<Template let:args>
  {#each Array.from(Array(15).keys()) as i}
    <LazyLoad>
      <div class="img-container">
        <img src="https://placekitten.com/400/300?image={i}" alt="" />
      </div>
    </LazyLoad>
  {/each}
</Template>

<Story name="Default" args="{{}}" />

<style>
  .img-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
    background: #eee;
    margin-bottom: 10px;
  }
</style>
