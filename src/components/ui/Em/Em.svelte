<script>
  import parse from "parse-color";

  /**
   * Any valid CSS colour
   * @type {string}
   */
  export let color = "lightgrey";
  /**
   * Don't break text across lines
   * @type {boolean}
   */
  export let nowrap = true;

  function textColor(color) {
    const rgb = parse(color).rgb;
    if (rgb) {
      const brightness = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
      return brightness > 125 ? "black" : "white";
    }
    return "black";
  }

  $: text = textColor(color);
</script>

<mark
  class="em"
  class:nowrap="{nowrap}"
  style:background-color="{color}"
  style:color="{text}"
  role="presentation"
>
  <slot />
</mark>

<style>
  .em {
    padding: 1px 4px 1px 4px;
    font-weight: bold;
  }
  .nowrap {
    white-space: nowrap;
  }
</style>
