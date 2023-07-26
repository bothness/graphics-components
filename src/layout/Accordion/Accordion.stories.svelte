<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  // @ts-ignore
  import componentDocs from "./docs/component.md?raw";
  import Accordion from "./Accordion.svelte";
  import AccordionItem from "./AccordionItem.svelte";
  import { withComponentDocs } from "$lib/js/withParams.js";
</script>

<Meta
  title="Layout/Accordion"
  component="{Accordion}"
  argTypes="{{}}"
  {...withComponentDocs(componentDocs)}
/>

<Template let:args>
  <div style:padding="12px">
    <Accordion {...args}>
      <AccordionItem title="First item">
        <p>Contents of first item.</p>
      </AccordionItem>
      <AccordionItem title="Second item">
        <p>Contents of second item.</p>
      </AccordionItem>
    </Accordion>
  </div>
</Template>

<Story name="Default" args="{{}}" />

<Story name="With 'show all' toggle" args="{{ showToggle: true }}" />
