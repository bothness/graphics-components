import{S as k,i as M,s as T,p as h,j as d,w,m as c,a as _,k as y,l as b,b as f,t as u,n as $,d as v,x as A,y as C}from"./index-01cfd182.js";import{p as I,M as j,T as P,S as q,w as E}from"./collect-stories-037cf284.js";import{D as g}from"./Divider-f67562b3.js";import"./Container-2a6ce727.js";import"./Theme-f59253ea.js";const O=`A component to draw a divider between blocks of contnet.

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Divider } from "@onsvisual/svelte-components";
<\/script>

<!-- Some content blocks -->
<Divider />
<!-- More content blocks -->
\`\`\`
`;function z(p){let s,o,n;const l=[p[1]];let a={};for(let t=0;t<l.length;t+=1)a=h(a,l[t]);return o=new g({props:a}),{c(){s=A("div"),d(o.$$.fragment),C(s,"padding","26px 12px 0")},m(t,i){_(t,s,i),c(o,s,null),n=!0},p(t,i){const m=i&2?y(l,[b(t[1])]):{};o.$set(m)},i(t){n||(f(o.$$.fragment,t),n=!0)},o(t){u(o.$$.fragment,t),n=!1},d(t){t&&v(s),$(o)}}}function B(p){let s,o,n,l,a,t;const i=[{title:"Decorators/Divider"},{component:g},p[0]];let m={};for(let e=0;e<i.length;e+=1)m=h(m,i[e]);return s=new j({props:m}),n=new P({props:{$$slots:{default:[z,({args:e})=>({1:e}),({args:e})=>e?2:0]},$$scope:{ctx:p}}}),a=new q({props:{name:"Default",args:{}}}),{c(){d(s.$$.fragment),o=w(),d(n.$$.fragment),l=w(),d(a.$$.fragment)},m(e,r){c(s,e,r),_(e,o,r),c(n,e,r),_(e,l,r),c(a,e,r),t=!0},p(e,[r]){const S=r&1?y(i,[i[0],r&0&&{component:g},r&1&&b(e[0])]):{};s.$set(S);const D={};r&6&&(D.$$scope={dirty:r,ctx:e}),n.$set(D)},i(e){t||(f(s.$$.fragment,e),f(n.$$.fragment,e),f(a.$$.fragment,e),t=!0)},o(e){u(s.$$.fragment,e),u(n.$$.fragment,e),u(a.$$.fragment,e),t=!1},d(e){$(s,e),e&&v(o),$(n,e),e&&v(l),$(a,e)}}}function F(p){return[{...E(O),argTypes:{hr:{options:["narrow","full",null],control:{type:"select"}},width:{options:["narrow","medium","width","full"],control:{type:"select"}},theme:{options:["light","dark","lightblue"],control:{type:"select"}}}}]}class G extends k{constructor(s){super(),M(this,s,F,B,T,{})}}const x=I(G,{meta:{title:"Decorators/Divider"},stories:{"tpl:default":{storyId:"decorators-divider--default",name:"default",template:!0,source:`<div style:padding="26px 12px 0">
  <Divider {...args} />
</div>`,hasArgs:!0},Default:{storyId:"decorators-divider--default",name:"Default",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","Divider","withComponentDocs"]}),Q=x.meta,R=["Default"],U=x.stories.Default;export{U as Default,R as __namedExportsOrder,Q as default};
//# sourceMappingURL=Divider.stories-99c486bf.js.map
