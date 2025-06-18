<script>
	import Card from "$lib/layout/Card/Card.svelte";

	/**
	 * Title of card
	 * @type {string}
	 */
	export let title = "";
	/**
	 * Optional: URL link for card title
	 * @type {string}
	 */
	export let href = "";
	/**
	 * Big number (expects a pre-formatted text string)
	 * @type {string|number}
	 */
	export let value = "";
	/**
	 * Mode for the data tile
	 * @type {"number"|"sparkline"|"bar"}
	 */
	export let mode = "number";
	/**
	 * Text caption describing the number
	 * @type {string}
	 */
	export let caption = "";
	/**
	 * An array of data (required for charts)
	 * @type {object[]|null}
	 */
	export let data = null;
	/**
	 * Text describing the source of the data
	 * @type {string}
	 */
	export let source = "";
</script>

<Card {title} {href} mode="featured">
	{#if value}
		<p class="headline-figures__figure ons-u-fs-3xl ons-u-fs-2xl@m">{value}</p>
	{/if}
	{#if caption}
		<p class="headline-figures__supporting-text ons-u-fs-r">{@html caption}</p>
	{/if}
	{#if source}
		<p class="ons-u-fs-s">{source}</p>
	{/if}
</Card>
