import{S as I,i as M,s as j,p as x,j as f,w as C,m as u,a as d,k as S,l as k,b as c,t as $,n as _,d as h,x as L,N as q}from"./index-9c2ee968.js";import{p as E,w as T,M as N,T as O,S as b}from"./collect-stories-c58c3d65.js";import{F as y}from"./Filler-34a0fca0.js";import"./Container-b9863fe2.js";import"./Theme-d800e88c.js";const v=`A large text block that can be used as a standfirst or transition between sections of a feature article, with various options and style customisations.

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Filler } from "@onsvisual/svelte-components";
<\/script>

<Filler>
  <p>Contents of filler section.</p>
</Filler>
\`\`\`
`;function z(p){let t;return{c(){t=L("p"),t.textContent="Contents of filler component"},m(l,o){d(l,t,o)},p:q,d(l){l&&h(t)}}}function B(p){let t,l;const o=[p[0]];let m={$$slots:{default:[z]},$$scope:{ctx:p}};for(let s=0;s<o.length;s+=1)m=x(m,o[s]);return t=new y({props:m}),{c(){f(t.$$.fragment)},m(s,r){u(t,s,r),l=!0},p(s,r){const a=r&1?S(o,[k(s[0])]):{};r&2&&(a.$$scope={dirty:r,ctx:s}),t.$set(a)},i(s){l||(c(t.$$.fragment,s),l=!0)},o(s){$(t.$$.fragment,s),l=!1},d(s){_(t,s)}}}function G(p){let t,l,o,m,s,r,a,g;const i=[{title:"Layout/Filler"},{component:y},{argTypes:{width:{options:["narrow","medium","width","full"],control:{type:"select"}},height:{options:["auto","tall","full"],control:{type:"select"}},theme:{options:["light","dark","lightblue"],control:{type:"select"}}}},T(v)];let w={};for(let e=0;e<i.length;e+=1)w=x(w,i[e]);return t=new N({props:w}),o=new O({props:{$$slots:{default:[B,({args:e})=>({0:e}),({args:e})=>e?1:0]},$$scope:{ctx:p}}}),s=new b({props:{name:"Default",args:{}}}),a=new b({props:{name:"Custom theme",args:{theme:"light",background:"#eee"}}}),{c(){f(t.$$.fragment),l=C(),f(o.$$.fragment),m=C(),f(s.$$.fragment),r=C(),f(a.$$.fragment)},m(e,n){u(t,e,n),d(e,l,n),u(o,e,n),d(e,m,n),u(s,e,n),d(e,r,n),u(a,e,n),g=!0},p(e,[n]){const A=n&0?S(i,[i[0],n&0&&{component:y},i[2],n&0&&k(T(v))]):{};t.$set(A);const D={};n&3&&(D.$$scope={dirty:n,ctx:e}),o.$set(D)},i(e){g||(c(t.$$.fragment,e),c(o.$$.fragment,e),c(s.$$.fragment,e),c(a.$$.fragment,e),g=!0)},o(e){$(t.$$.fragment,e),$(o.$$.fragment,e),$(s.$$.fragment,e),$(a.$$.fragment,e),g=!1},d(e){_(t,e),e&&h(l),_(o,e),e&&h(m),_(s,e),e&&h(r),_(a,e)}}}class H extends I{constructor(t){super(),M(this,t,null,G,j,{})}}const F=E(H,{meta:{title:"Layout/Filler"},stories:{"tpl:default":{storyId:"layout-filler--default",name:"default",template:!0,source:`<Filler {...args}>
  <p>Contents of filler component</p>
</Filler>`,hasArgs:!0},Default:{storyId:"layout-filler--default",name:"Default",template:!1,hasArgs:!1},CustomTheme:{storyId:"layout-filler--custom-theme",name:"Custom theme",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","Filler","withComponentDocs"]}),U=F.meta,V=["Default","CustomTheme"],W=F.stories.Default,X=F.stories.CustomTheme;export{X as CustomTheme,W as Default,V as __namedExportsOrder,U as default};
//# sourceMappingURL=Filler.stories-14b51f4e.js.map
