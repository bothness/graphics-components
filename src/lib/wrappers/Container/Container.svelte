<script>
	/**
	 * Optional: Set the unique ID of the container
	 * @type {string}
	 */
	export let id = "";
	/**
	 * Optional: Set a CSS class for the container
	 * @type {string}
	 */
	export let cls = "";
	/**
	 * Sets the width of the container
	 * @type {"narrow"|"medium"|"wide"|"wider"|"full"}
	 */
	export let width = "wide";
	/**
	 * Sets the height of the container
	 * @type {number|string|null}
	 */
	export let height = null;
	/**
	 * Optional margin above container
	 * @type {boolean}
	 */
	export let marginTop = false;
	/**
	 * Optional margin below container
	 * @type {boolean}
	 */
	export let marginBottom = false;
	/**
	 * Overrides the base theme background (accepts any valid CSS background value)
	 * @type {string|null}
	 */
	export let background = null;
</script>

<div
	{id}
	class="ons-page__container {cls || ''}"
	class:ons-container={width !== "full"}
	class:ons-container--wide={width === "wider"}
	class:ons-u-mt-xl={marginTop}
	class:ons-u-mb-xl={marginBottom}
	style:background
	style:height={typeof height === "number" ? `${height}px` : height === "full" ? "100vh" : height}
>
	{#if width === "narrow"}
		<div class="ons-grid">
			<div class="ons-grid__col ons-col-10@m ons-col-8@l">
				<slot />
			</div>
		</div>
	{:else if width === "medium"}
		<div class="ons-grid">
			<div class="ons-grid__col ons-col-10@l">
				<slot />
			</div>
		</div>
	{:else}
		<slot />
	{/if}
</div>
