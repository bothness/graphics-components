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
  {#each Array(20) as section, i}
    <LazyLoad>
      <div class="img-container">
        <img src="https://cataas.com/cat?{i}" alt="" />
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
    height: 400px;
    background: #eee;
    margin-bottom: 10px;
  }
  img {
    width: 200px;
  }
</style>
