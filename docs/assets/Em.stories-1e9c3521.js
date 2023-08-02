import{S as T,i as M,s as A,p as v,j as f,x as h,m as i,a as d,k as b,l as y,b as u,t as $,n as _,d as g,w as C,H as I,D as j,E as H}from"./index-b112ad45.js";import{p as q,w as x,M as O,T as z,S as B}from"./collect-stories-6e9ce8fc.js";import{E as D}from"./Em-c3cec9d8.js";import"./_commonjsHelpers-725317a4.js";const w=`A \`<mark>\` element with a custom background color, where the highlighted text will automatically appear black or white to maximise contrast.

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Em } from "@onsvisual/svelte-components";
<\/script>

<Em color="steelblue">Highlighted text</Em>
\`\`\`
`;function F(p){let t=p[0].text+"",o;return{c(){o=j(t)},m(a,n){d(a,o,n)},p(a,n){n&1&&t!==(t=a[0].text+"")&&H(o,t)},d(a){a&&g(o)}}}function G(p){let t,o,a;const n=[p[0]];let l={$$slots:{default:[F]},$$scope:{ctx:p}};for(let s=0;s<n.length;s+=1)l=v(l,n[s]);return o=new D({props:l}),{c(){t=C("div"),f(o.$$.fragment),I(t,"padding","12px")},m(s,r){d(s,t,r),i(o,t,null),a=!0},p(s,r){const c=r&1?b(n,[y(s[0])]):{};r&3&&(c.$$scope={dirty:r,ctx:s}),o.$set(c)},i(s){a||(u(o.$$.fragment,s),a=!0)},o(s){$(o.$$.fragment,s),a=!1},d(s){s&&g(t),_(o)}}}function J(p){let t,o,a,n,l,s;const r=[{title:"Decorators/Em"},{component:D},{argTypes:{color:{control:{type:"color"}}}},x(w)];let c={};for(let e=0;e<r.length;e+=1)c=v(c,r[e]);return t=new O({props:c}),a=new z({props:{$$slots:{default:[G,({args:e})=>({0:e}),({args:e})=>e?1:0]},$$scope:{ctx:p}}}),l=new B({props:{name:"Default",args:{text:"Text on grey background"}}}),{c(){f(t.$$.fragment),o=h(),f(a.$$.fragment),n=h(),f(l.$$.fragment)},m(e,m){i(t,e,m),d(e,o,m),i(a,e,m),d(e,n,m),i(l,e,m),s=!0},p(e,[m]){const S=m&0?b(r,[r[0],m&0&&{component:D},r[2],m&0&&y(x(w))]):{};t.$set(S);const E={};m&3&&(E.$$scope={dirty:m,ctx:e}),a.$set(E)},i(e){s||(u(t.$$.fragment,e),u(a.$$.fragment,e),u(l.$$.fragment,e),s=!0)},o(e){$(t.$$.fragment,e),$(a.$$.fragment,e),$(l.$$.fragment,e),s=!1},d(e){_(t,e),e&&g(o),_(a,e),e&&g(n),_(l,e)}}}class K extends T{constructor(t){super(),M(this,t,null,J,A,{})}}const k=q(K,{meta:{title:"Decorators/Em"},stories:{"tpl:default":{storyId:"decorators-em--default",name:"default",template:!0,source:`<div style:padding="12px">
  <Em {...args}>{args.text}</Em>
</div>`,hasArgs:!0},Default:{storyId:"decorators-em--default",name:"Default",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","Em","withComponentDocs"]}),R=k.meta,U=["Default"],V=k.stories.Default;export{V as Default,U as __namedExportsOrder,R as default};
//# sourceMappingURL=Em.stories-1e9c3521.js.map
