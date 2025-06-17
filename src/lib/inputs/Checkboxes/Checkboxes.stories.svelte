<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import { withComponentDocs, withStoryDocs } from "../../js/withParams.js";
	import Checkbox from "../Checkbox/Checkbox.svelte";
	import Checkboxes from "./Checkboxes.svelte";
	import componentDocs from "./docs/component.md?raw";
	import exampleDocs from "./docs/example.md?raw";

	const { Story } = defineMeta({
		title: "Inputs/Checkboxes",
		component: Checkboxes,
		tags: ["autodocs"],
		argTypes: {},
		parameters: withComponentDocs(componentDocs)
	});

	const items = [
		{ id: "ice-cream", label: "Ice cream", checked: true },
		{ id: "sprinkles", label: "Sprinkles", description: "Highly recommended!", checked: false },
		{ id: "disabled", label: "Disabled option", checked: false, disabled: true }
	];
</script>

{#snippet template(args)}
	<div style:padding="12px">
		<Checkboxes {...args} />
	</div>
{/snippet}

<Story name="Default" args={{ label: "Select items", items }} {template} />

<Story name="Compact without label" args={{ items, compact: true }} {template} />

<Story name="Individually defined checkboxes" asChild parameters={withStoryDocs(exampleDocs)}>
	<div style:padding="12px">
		<Checkboxes label="Select items">
			<Checkbox id="ice-cream" label="Ice cream" />
			<Checkbox id="sprinkles" label="Sprinkles" description="Highly recommended!" />
			<Checkbox id="disabled" label="Disabled option" disabled />
		</Checkboxes>
	</div>
</Story>
