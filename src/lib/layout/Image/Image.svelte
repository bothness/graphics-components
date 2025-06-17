<script>
	/**
	 * The URL of the image
	 * @type {string}
	 */
	export let src = "";
	/**
	 * An alternative text for the image
	 * @type {string}
	 */
	export let alt = "";
	/**
	 * A visible caption for the image
	 * @type {string}
	 */
	export let caption = "";
</script>

<figure class="ons-image">
	<img class="ons-image__img" {src} {alt} />
	{#if caption}
		<figcaption class="ons-image__caption">{caption}</figcaption>
	{/if}
</figure>
