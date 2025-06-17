<script>
	import { onMount, onDestroy, getContext, createEventDispatcher } from "svelte";

	const dispatch = createEventDispatcher();

	/**
	 * ID for input element
	 * @type {string}
	 */
	export let id;
	/**
	 * Optional: Name of checkbox group
	 * @type {string}
	 */
	export let name = "";
	/**
	 * Value for input element (defaults to ID)
	 * @type {string|object}
	 */
	export let value = id;
	/**
	 * Label for input
	 * @type {string}
	 */
	export let label;
	/**
	 * Binding for checked state of input
	 * @type {boolean}
	 */
	export let checked = false;
	/**
	 * Binding for checked state of input
	 * @type {object[]|null}
	 */
	export let group = null;
	/**
	 * Optional: Extended description for element
	 * @type {string}
	 */
	export let description = "";
	/**
	 * Set display mode of checkbox
	 * @type {"default"|"ghost"}
	 */
	export let variant = "default";
	/**
	 * Option to disable input
	 * @type {boolean}
	 */
	export let disabled = false;
	/**
	 * Compact mode (no border)
	 * @type {boolean}
	 */
	export let compact = false;

	const checkboxes = getContext("checkboxes");

	let el;

	function findAncestor(el, cls) {
		while ((el = el.parentElement) && !el.classList.contains(cls));
		return el;
	}

	function updateGroup() {
		const newGroup = $checkboxes.filter((c) => c.checked).map((c) => c.id);
		if (newGroup.join() !== group.join()) group = newGroup;
	}

	function doChange(e) {
		if (Array.isArray(group) && Array.isArray($checkboxes)) {
			updateGroup();
		}
		dispatch("change", { id, checked, group, e });
	}

	onMount(() => {
		if (Array.isArray(group) && Array.isArray($checkboxes)) {
			const root = findAncestor(el, "ons-checkboxes__items");
			$checkboxes = [...root.getElementsByTagName("input")];
			updateGroup();
		}
	});

	onDestroy(() => {
		if (Array.isArray(group) && Array.isArray($checkboxes)) {
			$checkboxes = $checkboxes.filter((c) => c.id !== id);
			updateGroup();
		}
	});
</script>

<span
	class="ons-checkboxes__item"
	class:ons-checkboxes__item--ghost={variant === "ghost"}
	class:ons-checkboxes__item--no-border={compact}
>
	<span class="ons-checkbox" class:ons-checkbox--no-border={compact}>
		<input
			type="checkbox"
			{id}
			{name}
			{value}
			bind:checked
			class="ons-checkbox__input ons-js-checkbox"
			{disabled}
			aria-disabled={disabled}
			on:change={doChange}
			bind:this={el}
		/>
		<label
			class="ons-checkbox__label"
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

<style>
	.ons-checkboxes__item--ghost .ons-checkbox__label::before {
		background: rgba(0, 0, 0, 0);
		border-color: var(--ons-color-text-inverse);
		border-width: 2px;
		opacity: 60%;
	}
	.ons-checkboxes__item--ghost .ons-checkbox__input,
	.ons-checkboxes__item--ghost .ons-checkbox__input::after {
		background: rgba(0, 0, 0, 0);
		border-color: var(--ons-color-text-inverse);
	}
	.ons-checkboxes__item--ghost .ons-checkbox__input:focus + .ons-checkbox__label::before {
		box-shadow:
			0 0 0 1px var(--ons-color-input-border),
			0 0 0 4px var(--ons-color-focus);
		opacity: 100%;
	}
	.ons-checkboxes__item--ghost
		.ons-checkbox__input:checked:not(:focus)
		+ .ons-checkbox__label::before {
		box-shadow: 0 0 0 1px var(--ons-color-text-inverse);
	}
</style>
