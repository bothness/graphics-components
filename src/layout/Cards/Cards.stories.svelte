<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  // @ts-ignore
  import componentDocs from "./docs/component.md?raw";
  import egLinks from "./docs/eg-links.md?raw";
  import egImages from "./docs/eg-images.md?raw";
  import egSpans from "./docs/eg-spans.md?raw";
  import Cards from "./Cards.svelte";
  import Card from "./Card.svelte";
  import { withComponentDocs, withStoryDocs } from "../../js/withParams.js";
</script>

<Meta
  title="Layout/Cards"
  component="{Cards}"
  argTypes="{{
    width: {
      options: ['narrow', 'medium', 'wide', 'wider', 'full'],
      control: { type: 'select' },
    },
  }}"
  {...withComponentDocs(componentDocs)}
/>

<Template let:args>
  <Cards {...args}>
    <Card title="Card one">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card>
    <Card title="Card two">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card>
    <Card title="Card three">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card>
  </Cards>
</Template>

<Story name="Default" args="{{}}" />

<Story name="Cards with a title" args="{{ title: 'Some cards' }}" />

<Story name="Cards with no background" args="{{ noBackground: true }}" />

<Story name="Cards, wide" args="{{ colwidth: 'wide' }}" />

<Story name="Cards, rowspan and colspan" {...withStoryDocs(egSpans)}>
  <Cards>
    <Card title="Card one" rowspan="{2}"
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card
    >
    <Card title="Card two" colspan="{2}"
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card
    >
    <Card title="Card three">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card>
  </Cards>
</Story>

<Story name="Cards with links" {...withStoryDocs(egLinks)}>
  <Cards>
    <Card title="Card one" href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card>
    <Card title="Card two" href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card>
    <Card title="Card three" href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card
    >
  </Cards>
</Story>

<Story name="Cards with images" {...withStoryDocs(egImages)}>
  <Cards>
    <Card
      title="Card one"
      href="#"
      image="https://service-manual.ons.gov.uk/img/small/placeholder-card.png"
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card
    >
    <Card
      title="Card two"
      href="#"
      image="https://service-manual.ons.gov.uk/img/small/placeholder-card.png"
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card
    >
    <Card
      title="Card three"
      href="#"
      image="https://service-manual.ons.gov.uk/img/small/placeholder-card.png"
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card
    >
  </Cards>
</Story>

<style>
  .grid-cell {
    background: var(--pale);
    padding: 12px;
  }
</style>
