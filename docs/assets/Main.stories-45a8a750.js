import{S as C,i as S,s as T,q as F,w as y,x as w,D as f,a as $,u as W,r as z,v as B,b as m,t as c,d as g,p as x,j as u,z as D,m as d,k as I,l as j,n as _,B as E,F as H}from"./index-9c03537d.js";import{p as O,w as b,M as G,T as J,S as K}from"./collect-stories-d3cc164c.js";const k=`This component creates a styled \`<main>\` element to wrap the primary contents of a page (generally everything between the page header and footer).

This component is useful for screen readers, as the standard header component contains a visually hidden "Skip to content" link that will bring users to it.

\`\`\`html
<script>
  import { Main } from "@onsvisual/svelte-components";
<\/script>

<!-- Header goes here -->
<Main>
  {child_components}
</Main>
<!-- Footer goes here -->
\`\`\`
`;function L(l){let t,a;const o=l[1].default,s=F(o,l,l[0],null);return{c(){t=y("main"),s&&s.c(),w(t,"id","main"),w(t,"tabindex","-1"),f(t,"display","block")},m(e,r){$(e,t,r),s&&s.m(t,null),a=!0},p(e,[r]){s&&s.p&&(!a||r&1)&&W(s,o,e,e[0],a?B(o,e[0],r,null):z(e[0]),null)},i(e){a||(m(s,e),a=!0)},o(e){c(s,e),a=!1},d(e){e&&g(t),s&&s.d(e)}}}function N(l,t,a){let{$$slots:o={},$$scope:s}=t;return l.$$set=e=>{"$$scope"in e&&a(0,s=e.$$scope)},[s,o]}class h extends C{constructor(t){super(),S(this,t,N,L,T,{})}}h.__docgen={version:3,name:"Main.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[{keywords:[],visibility:"public",description:"",name:"default"}],refs:[]};function P(l){let t,a;return{c(){t=y("div"),a=y("p"),a.textContent="Child components go here.",f(a,"margin","0"),f(t,"padding","24px 12px"),f(t,"background","lightgrey")},m(o,s){$(o,t,s),E(t,a)},p:H,d(o){o&&g(t)}}}function Q(l){let t,a;const o=[l[0]];let s={$$slots:{default:[P]},$$scope:{ctx:l}};for(let e=0;e<o.length;e+=1)s=x(s,o[e]);return t=new h({props:s}),{c(){u(t.$$.fragment)},m(e,r){d(t,e,r),a=!0},p(e,r){const p=r&1?I(o,[j(e[0])]):{};r&2&&(p.$$scope={dirty:r,ctx:e}),t.$set(p)},i(e){a||(m(t.$$.fragment,e),a=!0)},o(e){c(t.$$.fragment,e),a=!1},d(e){_(t,e)}}}function R(l){let t,a,o,s,e,r;const p=[{title:"Wrappers/Main"},{component:h},{argTypes:{}},b(k)];let v={};for(let n=0;n<p.length;n+=1)v=x(v,p[n]);return t=new G({props:v}),o=new J({props:{$$slots:{default:[Q,({args:n})=>({0:n}),({args:n})=>n?1:0]},$$scope:{ctx:l}}}),e=new K({props:{name:"Default",args:{}}}),{c(){u(t.$$.fragment),a=D(),u(o.$$.fragment),s=D(),u(e.$$.fragment)},m(n,i){d(t,n,i),$(n,a,i),d(o,n,i),$(n,s,i),d(e,n,i),r=!0},p(n,[i]){const A=i&0?I(p,[p[0],i&0&&{component:h},p[2],i&0&&j(b(k))]):{};t.$set(A);const M={};i&3&&(M.$$scope={dirty:i,ctx:n}),o.$set(M)},i(n){r||(m(t.$$.fragment,n),m(o.$$.fragment,n),m(e.$$.fragment,n),r=!0)},o(n){c(t.$$.fragment,n),c(o.$$.fragment,n),c(e.$$.fragment,n),r=!1},d(n){_(t,n),n&&g(a),_(o,n),n&&g(s),_(e,n)}}}class U extends C{constructor(t){super(),S(this,t,null,R,T,{})}}const q=O(U,{meta:{title:"Wrappers/Main"},stories:{"tpl:default":{storyId:"wrappers-main--default",name:"default",template:!0,source:`<Main {...args}>
  <div style:padding="24px 12px" style:background="lightgrey">
    <p style:margin="0">Child components go here.</p>
  </div>
</Main>`,hasArgs:!0},Default:{storyId:"wrappers-main--default",name:"Default",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","Main","withComponentDocs"]}),Y=q.meta,Z=["Default"],ee=q.stories.Default;export{ee as Default,Z as __namedExportsOrder,Y as default};
//# sourceMappingURL=Main.stories-45a8a750.js.map
