<script>
	/**
	 * Set an error message
	 * @type {string}
	 */
	export let message = "";
</script>

<div class="ons-panel ons-panel--error ons-panel--no-title" id="number-of-employees-error">
	<span class="ons-panel__assistive-text ons-u-vh">Error: </span>
	<div class="ons-panel__body">
		{#if message}
			<p class="ons-panel__error">
				<strong>{message}</strong>
			</p>
		{/if}
		<slot />
	</div>
</div>
