import{S as M,i as x,s as T,p as h,j as d,x as w,m as c,a as _,k as b,l as y,b as f,t as u,n as $,d as v,w as A,H as C}from"./index-b112ad45.js";import{p as I,M as j,T as P,S as q,w as E}from"./collect-stories-6e9ce8fc.js";import{D}from"./Divider-154180de.js";import"./Container-a17e3332.js";import"./Theme-446f25bc.js";const H=`A component to draw a divider between blocks of contnet.

\`\`\`html
<script>
  import { Divider } from "@onsvisual/svelte-components";
<\/script>

<!-- Some content blocks -->
<Divider />
<!-- More content blocks -->
\`\`\`
`;function O(p){let s,o,n;const l=[p[1]];let a={};for(let t=0;t<l.length;t+=1)a=h(a,l[t]);return o=new D({props:a}),{c(){s=A("div"),d(o.$$.fragment),C(s,"padding","26px 0 0")},m(t,i){_(t,s,i),c(o,s,null),n=!0},p(t,i){const m=i&2?b(l,[y(t[1])]):{};o.$set(m)},i(t){n||(f(o.$$.fragment,t),n=!0)},o(t){u(o.$$.fragment,t),n=!1},d(t){t&&v(s),$(o)}}}function z(p){let s,o,n,l,a,t;const i=[{title:"Decorators/Divider"},{component:D},p[0]];let m={};for(let e=0;e<i.length;e+=1)m=h(m,i[e]);return s=new j({props:m}),n=new P({props:{$$slots:{default:[O,({args:e})=>({1:e}),({args:e})=>e?2:0]},$$scope:{ctx:p}}}),a=new q({props:{name:"Default",args:{}}}),{c(){d(s.$$.fragment),o=w(),d(n.$$.fragment),l=w(),d(a.$$.fragment)},m(e,r){c(s,e,r),_(e,o,r),c(n,e,r),_(e,l,r),c(a,e,r),t=!0},p(e,[r]){const k=r&1?b(i,[i[0],r&0&&{component:D},r&1&&y(e[0])]):{};s.$set(k);const g={};r&6&&(g.$$scope={dirty:r,ctx:e}),n.$set(g)},i(e){t||(f(s.$$.fragment,e),f(n.$$.fragment,e),f(a.$$.fragment,e),t=!0)},o(e){u(s.$$.fragment,e),u(n.$$.fragment,e),u(a.$$.fragment,e),t=!1},d(e){$(s,e),e&&v(o),$(n,e),e&&v(l),$(a,e)}}}function B(p){return[{...E(H),argTypes:{width:{options:["narrow","medium","width","full"],control:{type:"select"}},theme:{options:["light","dark","lightblue"],control:{type:"select"}}}}]}class F extends M{constructor(s){super(),x(this,s,B,z,T,{})}}const S=I(F,{meta:{title:"Decorators/Divider"},stories:{"tpl:default":{storyId:"decorators-divider--default",name:"default",template:!0,source:`<div style:padding="26px 0 0">
  <Divider {...args} />
</div>`,hasArgs:!0},Default:{storyId:"decorators-divider--default",name:"Default",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","Divider","withComponentDocs"]}),Q=S.meta,R=["Default"],U=S.stories.Default;export{U as Default,R as __namedExportsOrder,Q as default};
//# sourceMappingURL=Divider.stories-edfcfd65.js.map
