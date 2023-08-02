import{S as M,i as x,s as T,p as h,j as d,x as w,m as c,a as _,k as b,l as y,b as f,t as u,n as $,d as v,w as A,H as C}from"./index-b112ad45.js";import{p as I,M as j,T as P,S as q,w as E}from"./collect-stories-6e9ce8fc.js";import{D as g}from"./Divider-154180de.js";import"./Container-a17e3332.js";import"./Theme-446f25bc.js";const H=`A component to draw a divider between blocks of contnet.

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Divider } from "@onsvisual/svelte-components";
<\/script>

<!-- Some content blocks -->
<Divider />
<!-- More content blocks -->
\`\`\`
`;function O(p){let s,r,n;const l=[p[1]];let a={};for(let t=0;t<l.length;t+=1)a=h(a,l[t]);return r=new g({props:a}),{c(){s=A("div"),d(r.$$.fragment),C(s,"padding","26px 0 0")},m(t,i){_(t,s,i),c(r,s,null),n=!0},p(t,i){const m=i&2?b(l,[y(t[1])]):{};r.$set(m)},i(t){n||(f(r.$$.fragment,t),n=!0)},o(t){u(r.$$.fragment,t),n=!1},d(t){t&&v(s),$(r)}}}function z(p){let s,r,n,l,a,t;const i=[{title:"Decorators/Divider"},{component:g},p[0]];let m={};for(let e=0;e<i.length;e+=1)m=h(m,i[e]);return s=new j({props:m}),n=new P({props:{$$slots:{default:[O,({args:e})=>({1:e}),({args:e})=>e?2:0]},$$scope:{ctx:p}}}),a=new q({props:{name:"Default",args:{}}}),{c(){d(s.$$.fragment),r=w(),d(n.$$.fragment),l=w(),d(a.$$.fragment)},m(e,o){c(s,e,o),_(e,r,o),c(n,e,o),_(e,l,o),c(a,e,o),t=!0},p(e,[o]){const k=o&1?b(i,[i[0],o&0&&{component:g},o&1&&y(e[0])]):{};s.$set(k);const D={};o&6&&(D.$$scope={dirty:o,ctx:e}),n.$set(D)},i(e){t||(f(s.$$.fragment,e),f(n.$$.fragment,e),f(a.$$.fragment,e),t=!0)},o(e){u(s.$$.fragment,e),u(n.$$.fragment,e),u(a.$$.fragment,e),t=!1},d(e){$(s,e),e&&v(r),$(n,e),e&&v(l),$(a,e)}}}function B(p){return[{...E(H),argTypes:{width:{options:["narrow","medium","width","full"],control:{type:"select"}},theme:{options:["light","dark","lightblue"],control:{type:"select"}}}}]}class F extends M{constructor(s){super(),x(this,s,B,z,T,{})}}const S=I(F,{meta:{title:"Decorators/Divider"},stories:{"tpl:default":{storyId:"decorators-divider--default",name:"default",template:!0,source:`<div style:padding="26px 0 0">
  <Divider {...args} />
</div>`,hasArgs:!0},Default:{storyId:"decorators-divider--default",name:"Default",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","Divider","withComponentDocs"]}),Q=S.meta,R=["Default"],U=S.stories.Default;export{U as Default,R as __namedExportsOrder,Q as default};
//# sourceMappingURL=Divider.stories-0cdc71a8.js.map
