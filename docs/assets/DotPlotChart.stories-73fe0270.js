import{S as I,i as N,s as O,p as K,j as f,w as y,m as d,a as _,k as T,l as b,b as c,t as $,n as h,d as D,x as j,y as k}from"./index-9c2ee968.js";import{p as q,w as S,M as z,T as B,S as w}from"./collect-stories-c58c3d65.js";import{D as g,d as M}from"./data-611bc861.js";const P=`A dot plot chart component with animation and events.

Note: This component is part of the **@onsvisual/svelte-charts** library. See [more examples here](https://onsvisual.github.io/svelte-charts/).

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { DotPlotChart } from "@onsvisual/svelte-charts";

  export default [
    { year: 2017, value: 320 },
    { year: 2018, value: 640 },
    { year: 2019, value: 1600 },
    { year: 2020, value: 3840 },
  ];
<\/script>

<DotPlotChart {data} xKey="value" yKey="year" title="Bar chart example" footer="Source: ONS." />
\`\`\`
`;function E(i){let a,r,o;const p=[i[0]];let n={};for(let e=0;e<p.length;e+=1)n=K(n,p[e]);return r=new g({props:n}),{c(){a=j("div"),f(r.$$.fragment),k(a,"padding","12px")},m(e,l){_(e,a,l),d(r,a,null),o=!0},p(e,l){const u=l&1?T(p,[b(e[0])]):{};r.$set(u)},i(e){o||(c(r.$$.fragment,e),o=!0)},o(e){$(r.$$.fragment,e),o=!1},d(e){e&&D(a),h(r)}}}function F(i){let a,r,o,p,n,e,l,u;const m=[{title:"Data visualisation/DotPlotChart"},{component:g},{argTypes:{}},S(P)];let v={};for(let t=0;t<m.length;t+=1)v=K(v,m[t]);return a=new z({props:v}),o=new B({props:{$$slots:{default:[E,({args:t})=>({0:t}),({args:t})=>t?1:0]},$$scope:{ctx:i}}}),n=new w({props:{name:"Default",args:{data:M.filter(G),xKey:"value",yKey:"year",title:"Dot plot chart",footer:"Source: ONS.",mode:"default"}}}),l=new w({props:{name:"Multiple dots",args:{data:M,xKey:"value",yKey:"year",zKey:"group",title:"Dot plot with multiple points",footer:"Source: ONS.",mode:"default"}}}),{c(){f(a.$$.fragment),r=y(),f(o.$$.fragment),p=y(),f(n.$$.fragment),e=y(),f(l.$$.fragment)},m(t,s){d(a,t,s),_(t,r,s),d(o,t,s),_(t,p,s),d(n,t,s),_(t,e,s),d(l,t,s),u=!0},p(t,[s]){const A=s&0?T(m,[m[0],s&0&&{component:g},m[2],s&0&&b(S(P))]):{};a.$set(A);const C={};s&3&&(C.$$scope={dirty:s,ctx:t}),o.$set(C)},i(t){u||(c(a.$$.fragment,t),c(o.$$.fragment,t),c(n.$$.fragment,t),c(l.$$.fragment,t),u=!0)},o(t){$(a.$$.fragment,t),$(o.$$.fragment,t),$(n.$$.fragment,t),$(l.$$.fragment,t),u=!1},d(t){h(a,t),t&&D(r),h(o,t),t&&D(p),h(n,t),t&&D(e),h(l,t)}}}const G=i=>i.group=="apples";class H extends I{constructor(a){super(),N(this,a,null,F,O,{})}}const x=q(H,{meta:{title:"Data visualisation/DotPlotChart"},stories:{"tpl:default":{storyId:"data-visualisation-dotplotchart--default",name:"default",template:!0,source:`<div style:padding="12px">
  <DotPlotChart {...args} />
</div>`,hasArgs:!0},Default:{storyId:"data-visualisation-dotplotchart--default",name:"Default",template:!1,hasArgs:!1},MultipleDots:{storyId:"data-visualisation-dotplotchart--multiple-dots",name:"Multiple dots",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","DotPlotChart","data","withComponentDocs"]}),R=x.meta,U=["Default","MultipleDots"],V=x.stories.Default,W=x.stories.MultipleDots;export{V as Default,W as MultipleDots,U as __namedExportsOrder,R as default};
//# sourceMappingURL=DotPlotChart.stories-73fe0270.js.map
