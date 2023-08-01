import{S as q,i as E,s as P,p as T,j as m,x as v,m as c,a as h,k as C,l as Q,b as d,t as u,n as f,d as _,w as k,H as B}from"./index-b112ad45.js";import{p as G,w as L,M as O,T as V,S as y}from"./collect-stories-6e9ce8fc.js";import{S as H}from"./Select-752b1b95.js";const A=`An extended alternative to a \`<select>\` component (see Dropdown), with auto-complete and multi-select.

This component is a wrapper for [svelte-select](https://github.com/rob-balfre/svelte-select).

\`\`\`html
<script>
  import { Select } from "@onsvisual/svelte-components";

  const values = [
    { id: "1", label: "one" },
    { id: "2", label: "two" },
    { id: "3", label: "three" },
  ];

  // Bind the <select> value to a variable (reactive)
  let value;

  // Define your own function on change
  const handleChange = (e) => console.log(e);
<\/script>

<select {options} bind:value on:change="{handleChange}" />
\`\`\`
`;function z(r){let n,o,l;const p=[r[1]];let a={};for(let t=0;t<p.length;t+=1)a=T(a,p[t]);return o=new H({props:a}),{c(){n=k("div"),m(o.$$.fragment),B(n,"padding","12px 12px 128px 12px")},m(t,i){h(t,n,i),c(o,n,null),l=!0},p(t,i){const g=i&2?C(p,[Q(t[1])]):{};o.$set(g)},i(t){l||(d(o.$$.fragment,t),l=!0)},o(t){u(o.$$.fragment,t),l=!1},d(t){t&&_(n),f(o)}}}function F(r){let n,o,l,p,a,t,i,g,$,D,b,M;const S=[{title:"Inputs/Select"},{component:H},{argTypes:{mode:{options:["default","search"],control:{type:"select"}}}},L(A)];let x={};for(let e=0;e<S.length;e+=1)x=T(x,S[e]);return n=new O({props:x}),l=new V({props:{$$slots:{default:[z,({args:e})=>({1:e}),({args:e})=>e?2:0]},$$scope:{ctx:r}}}),a=new y({props:{name:"Default",args:{id:"topic",label:"Question topic",options:r[0]}}}),i=new y({props:{name:"Hidden label",args:{id:"topic",label:"Question topic",hideLabel:!0,options:r[0]}}}),$=new y({props:{name:"Search mode",args:{id:"topic",mode:"search",label:"Question topic",hideLabel:!0,placeholder:"Type to select an option",options:r[0]}}}),b=new y({props:{name:"Multi-select mode",args:{id:"topic",label:"Question topic",hideLabel:!0,placeholder:"Select one or more",multiple:!0,options:r[0]}}}),{c(){m(n.$$.fragment),o=v(),m(l.$$.fragment),p=v(),m(a.$$.fragment),t=v(),m(i.$$.fragment),g=v(),m($.$$.fragment),D=v(),m(b.$$.fragment)},m(e,s){c(n,e,s),h(e,o,s),c(l,e,s),h(e,p,s),c(a,e,s),h(e,t,s),c(i,e,s),h(e,g,s),c($,e,s),h(e,D,s),c(b,e,s),M=!0},p(e,[s]){const j=s&0?C(S,[S[0],s&0&&{component:H},S[2],s&0&&Q(L(A))]):{};n.$set(j);const I={};s&6&&(I.$$scope={dirty:s,ctx:e}),l.$set(I)},i(e){M||(d(n.$$.fragment,e),d(l.$$.fragment,e),d(a.$$.fragment,e),d(i.$$.fragment,e),d($.$$.fragment,e),d(b.$$.fragment,e),M=!0)},o(e){u(n.$$.fragment,e),u(l.$$.fragment,e),u(a.$$.fragment,e),u(i.$$.fragment,e),u($.$$.fragment,e),u(b.$$.fragment,e),M=!1},d(e){f(n,e),e&&_(o),f(l,e),e&&_(p),f(a,e),e&&_(t),f(i,e),e&&_(g),f($,e),e&&_(D),f(b,e)}}}function J(r){return[[{id:"1",label:"General"},{id:"people-who-live-here",label:"People who live here"},{id:"visitors",label:"Visitors"},{id:"household-accommodation",label:"Household and accommodation"},{id:"personal-details",label:"Personal details"},{id:"health",label:"Health"},{id:"qualifications",label:"Qualifications"},{id:"employment",label:"Employment"}]]}class K extends q{constructor(n){super(),E(this,n,J,F,P,{})}}const w=G(K,{meta:{title:"Inputs/Select"},stories:{"tpl:default":{storyId:"inputs-select--default",name:"default",template:!0,source:`<div style:padding="12px 12px 128px 12px">
  <Select {...args} />
</div>`,hasArgs:!0},Default:{storyId:"inputs-select--default",name:"Default",template:!1,hasArgs:!1},HiddenLabel:{storyId:"inputs-select--hidden-label",name:"Hidden label",template:!1,hasArgs:!1},SearchMode:{storyId:"inputs-select--search-mode",name:"Search mode",template:!1,hasArgs:!1},MultiSelectMode:{storyId:"inputs-select--multi-select-mode",name:"Multi-select mode",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","Select","withComponentDocs"]}),W=w.meta,X=["Default","HiddenLabel","SearchMode","MultiSelectMode"],Y=w.stories.Default,Z=w.stories.HiddenLabel,ee=w.stories.SearchMode,te=w.stories.MultiSelectMode;export{Y as Default,Z as HiddenLabel,te as MultiSelectMode,ee as SearchMode,X as __namedExportsOrder,W as default};
//# sourceMappingURL=Select.stories-1803ff11.js.map
