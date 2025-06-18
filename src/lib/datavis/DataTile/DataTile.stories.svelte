<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import { withComponentDocs } from "../../js/withParams.js";
	import DataTile from "./DataTile.svelte";
	import componentDocs from "./docs/component.md?raw";

	const { Story } = defineMeta({
		title: "Data visualisation/DataTile",
		component: DataTile,
		tags: ["autodocs"],
		argTypes: {
			mode: {
				control: { type: "select" }
			}
		},
		parameters: withComponentDocs(componentDocs)
	});
</script>

<Story
	name="Big number"
	args={{
		title: "Consumer Price Index (CPI)",
		value: "up 2.5%",
		caption: "in 12 months to December 2024",
		source: "Source: ONS"
	}}
/>
