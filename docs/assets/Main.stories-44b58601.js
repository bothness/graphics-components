import{S as C,i as S,s as T,q as H,w as v,y as M,H as f,a as $,u as W,r as B,v as E,b as m,t as c,d as g,p as x,j as u,x as b,m as d,k as A,l as I,n as _,A as F,B as O}from"./index-b112ad45.js";import{p as z,w as D,M as G,T as J,S as K}from"./collect-stories-6e9ce8fc.js";const k=`This component creates a styled \`<main>\` element to wrap the primary contents of a page (generally everything between the page header and footer).

This component is useful for screen readers, as the standard header component contains a visually hidden "Skip to content" link that will bring users to it.

\`\`\`html
<script>
  import { Main } from "@onsvisual/svelte-components";
<\/script>

<!-- Header goes here -->
<main>{child_components}</main>
<!-- Footer goes here -->
\`\`\`
`;function L(l){let t,a;const o=l[1].default,n=H(o,l,l[0],null);return{c(){t=v("main"),n&&n.c(),M(t,"id","main"),M(t,"tabindex","-1"),f(t,"display","block")},m(e,r){$(e,t,r),n&&n.m(t,null),a=!0},p(e,[r]){n&&n.p&&(!a||r&1)&&W(n,o,e,e[0],a?E(o,e[0],r,null):B(e[0]),null)},i(e){a||(m(n,e),a=!0)},o(e){c(n,e),a=!1},d(e){e&&g(t),n&&n.d(e)}}}function N(l,t,a){let{$$slots:o={},$$scope:n}=t;return l.$$set=e=>{"$$scope"in e&&a(0,n=e.$$scope)},[n,o]}class h extends C{constructor(t){super(),S(this,t,N,L,T,{})}}h.__docgen={version:3,name:"Main.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[{keywords:[],visibility:"public",description:"",name:"default"}],refs:[]};function P(l){let t,a;return{c(){t=v("div"),a=v("p"),a.textContent="Child components go here.",f(a,"margin","0"),f(t,"padding","24px 12px"),f(t,"background","lightgrey")},m(o,n){$(o,t,n),F(t,a)},p:O,d(o){o&&g(t)}}}function Q(l){let t,a;const o=[l[0]];let n={$$slots:{default:[P]},$$scope:{ctx:l}};for(let e=0;e<o.length;e+=1)n=x(n,o[e]);return t=new h({props:n}),{c(){u(t.$$.fragment)},m(e,r){d(t,e,r),a=!0},p(e,r){const p=r&1?A(o,[I(e[0])]):{};r&2&&(p.$$scope={dirty:r,ctx:e}),t.$set(p)},i(e){a||(m(t.$$.fragment,e),a=!0)},o(e){c(t.$$.fragment,e),a=!1},d(e){_(t,e)}}}function R(l){let t,a,o,n,e,r;const p=[{title:"Wrappers/Main"},{component:h},{argTypes:{}},D(k)];let y={};for(let s=0;s<p.length;s+=1)y=x(y,p[s]);return t=new G({props:y}),o=new J({props:{$$slots:{default:[Q,({args:s})=>({0:s}),({args:s})=>s?1:0]},$$scope:{ctx:l}}}),e=new K({props:{name:"Default",args:{}}}),{c(){u(t.$$.fragment),a=b(),u(o.$$.fragment),n=b(),u(e.$$.fragment)},m(s,i){d(t,s,i),$(s,a,i),d(o,s,i),$(s,n,i),d(e,s,i),r=!0},p(s,[i]){const q=i&0?A(p,[p[0],i&0&&{component:h},p[2],i&0&&I(D(k))]):{};t.$set(q);const w={};i&3&&(w.$$scope={dirty:i,ctx:s}),o.$set(w)},i(s){r||(m(t.$$.fragment,s),m(o.$$.fragment,s),m(e.$$.fragment,s),r=!0)},o(s){c(t.$$.fragment,s),c(o.$$.fragment,s),c(e.$$.fragment,s),r=!1},d(s){_(t,s),s&&g(a),_(o,s),s&&g(n),_(e,s)}}}class U extends C{constructor(t){super(),S(this,t,null,R,T,{})}}const j=z(U,{meta:{title:"Wrappers/Main"},stories:{"tpl:default":{storyId:"wrappers-main--default",name:"default",template:!0,source:`<Main {...args}>
  <div style:padding="24px 12px" style:background="lightgrey">
    <p style:margin="0">Child components go here.</p>
  </div>
</Main>`,hasArgs:!0},Default:{storyId:"wrappers-main--default",name:"Default",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","Main","withComponentDocs"]}),Y=j.meta,Z=["Default"],ee=j.stories.Default;export{ee as Default,Z as __namedExportsOrder,Y as default};
//# sourceMappingURL=Main.stories-44b58601.js.map
