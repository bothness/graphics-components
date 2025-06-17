<script>
	import { createEventDispatcher } from "svelte";

	const dispatch = createEventDispatcher();

	/**
	 * Unique ID input
	 * @type {string}
	 */
	export let id;
	/**
	 * ID for radio group (required)
	 * @type {string}
	 */
	export let groupId;
	/**
	 * Label for input
	 * @type {string}
	 */
	export let label;
	/**
	 * Binding for ID of selected option
	 * @type {string|null}
	 */
	export let value = null;
	/**
	 * Optional: Extended description for element
	 * @type {string}
	 */
	export let description = "";
	/**
	 * Compact mode (no border)
	 * @type {boolean}
	 */
	export let compact = false;
</script>

<span class="ons-radios__item" class:ons-radios__item--no-border={compact}>
	<span class="ons-radio" class:ons-radio--no-border={compact}>
		<input
			type="radio"
			{id}
			bind:group={value}
			value={id}
			name={groupId}
			class="ons-radio__input ons-js-radio"
			on:change={(e) => dispatch("change", e)}
		/>
		<label
			class="ons-radio__label"
			class:ons-label--with-description={description}
			for={id}
			id="{id}-label"
			aria-describedby={description ? `${id}-label-description-hint` : null}
		>
			{label}
			{#if description}
				<span class="ons-label__aria-hidden-description" aria-hidden="true"
					><span class="ons-label__description ons-radio__label--with-description">
						{description}
					</span></span
				>
			{/if}
		</label>
		{#if description}
			<span
				class="ons-label__visually-hidden-description ons-u-vh"
				id="{id}-label-description-hint"
			>
				{description}
			</span>
		{/if}
	</span>
</span>
