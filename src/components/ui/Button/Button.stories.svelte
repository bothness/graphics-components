<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  // @ts-ignore
  import componentDocs from "./docs/component.md?raw";

  import Button from "./Button.svelte";

  import { withComponentDocs } from "$lib/docs/utils/withParams.js";
</script>

<Meta
  title="UI/Button"
  component="{Button}"
  argTypes="{{
    type: {
      options: ['button', 'submit', 'reset'],
      control: { type: 'select' },
    },
    variant: {
      options: ['primary', 'secondary', 'ghost'],
      control: { type: 'select' },
    },
    icon: {
      options: ['', 'arrow', 'search', 'download', 'tick', 'print', 'externalLink'],
      control: { type: 'select' },
    },
    iconPosition: {
      options: ['before', 'after'],
      control: { type: 'select' },
    },
  }}"
  {...withComponentDocs(componentDocs)}
/>

<Template let:args>
  <div
    style:padding="12px"
    style:background="{args?.variant === "ghost" ? "var(--ons-color-ocean-blue)" : null}"
  >
    <Button {...args}>{args.text}</Button>
  </div>
</Template>

<Story name="Default" args="{{ text: 'Primary button' }}" />

<Story name="Link" args="{{ text: 'Button-styled link', href: '#' }}" />

<Story name="Secondary" args="{{ text: 'Secondary button', variant: 'secondary' }}" />

<Story name="Ghost" args="{{ text: 'Ghost button', variant: 'ghost' }}" />

<Story name="Small" args="{{ text: 'Small button', small: true }}" />

<Story name="Icon before" args="{{ text: 'Download', icon: 'download' }}" />

<Story name="Icon after" args="{{ text: 'Continue', icon: 'arrow', iconPosition: 'after' }}" />
