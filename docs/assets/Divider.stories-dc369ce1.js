import{S as M,i as x,s as T,p as h,j as d,w,m as c,a as _,k as y,l as b,b as f,t as u,n as $,d as v,x as A,y as C}from"./index-01cfd182.js";import{p as I,M as j,T as P,S as q,w as E}from"./collect-stories-037cf284.js";import{D as g}from"./Divider-96fb23b0.js";import"./Container-eaab62b8.js";import"./Theme-d6d3e260.js";const O=`A component to draw a divider between blocks of contnet.

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Divider } from "@onsvisual/svelte-components";
<\/script>

<!-- Some content blocks -->
<Divider />
<!-- More content blocks -->
\`\`\`
`;function z(p){let s,r,n;const l=[p[1]];let a={};for(let t=0;t<l.length;t+=1)a=h(a,l[t]);return r=new g({props:a}),{c(){s=A("div"),d(r.$$.fragment),C(s,"padding","26px 0 0")},m(t,i){_(t,s,i),c(r,s,null),n=!0},p(t,i){const m=i&2?y(l,[b(t[1])]):{};r.$set(m)},i(t){n||(f(r.$$.fragment,t),n=!0)},o(t){u(r.$$.fragment,t),n=!1},d(t){t&&v(s),$(r)}}}function B(p){let s,r,n,l,a,t;const i=[{title:"Decorators/Divider"},{component:g},p[0]];let m={};for(let e=0;e<i.length;e+=1)m=h(m,i[e]);return s=new j({props:m}),n=new P({props:{$$slots:{default:[z,({args:e})=>({1:e}),({args:e})=>e?2:0]},$$scope:{ctx:p}}}),a=new q({props:{name:"Default",args:{}}}),{c(){d(s.$$.fragment),r=w(),d(n.$$.fragment),l=w(),d(a.$$.fragment)},m(e,o){c(s,e,o),_(e,r,o),c(n,e,o),_(e,l,o),c(a,e,o),t=!0},p(e,[o]){const k=o&1?y(i,[i[0],o&0&&{component:g},o&1&&b(e[0])]):{};s.$set(k);const D={};o&6&&(D.$$scope={dirty:o,ctx:e}),n.$set(D)},i(e){t||(f(s.$$.fragment,e),f(n.$$.fragment,e),f(a.$$.fragment,e),t=!0)},o(e){u(s.$$.fragment,e),u(n.$$.fragment,e),u(a.$$.fragment,e),t=!1},d(e){$(s,e),e&&v(r),$(n,e),e&&v(l),$(a,e)}}}function F(p){return[{...E(O),argTypes:{width:{options:["narrow","medium","width","full"],control:{type:"select"}},theme:{options:["light","dark","lightblue"],control:{type:"select"}}}}]}class G extends M{constructor(s){super(),x(this,s,F,B,T,{})}}const S=I(G,{meta:{title:"Decorators/Divider"},stories:{"tpl:default":{storyId:"decorators-divider--default",name:"default",template:!0,source:`<div style:padding="26px 0 0">
  <Divider {...args} />
</div>`,hasArgs:!0},Default:{storyId:"decorators-divider--default",name:"Default",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","Divider","withComponentDocs"]}),Q=S.meta,R=["Default"],U=S.stories.Default;export{U as Default,R as __namedExportsOrder,Q as default};
//# sourceMappingURL=Divider.stories-dc369ce1.js.map
