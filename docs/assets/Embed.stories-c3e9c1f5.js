import{S as D,i as k,s as j,q as x,w as h,y as q,H as c,a as g,u as B,r as O,v as W,b as p,t as d,d as $,o as H,p as M,j as f,x as w,m as u,k as S,l as T,n as _,A as P,B as V}from"./index-be4a2627.js";import{p as z,w as E,M as F,T as G,S as J}from"./collect-stories-c7256c69.js";import{p as K}from"./pym.v1-49c58be6.js";import"./_commonjsHelpers-725317a4.js";const C=`A container for content designed to appear within an \`<iframe>\`. The component does two things:

1. Overrides padding, so that content can fill the full width of its iframe.
2. Initialises a Pym.js child for the iframe, so that it can communicate its height with its parent page.

\`\`\`html
<script>
  import { Embed } from "@onsvisual/svelte-components";
<\/script>

<Embed>
  {child_components}
</Embed>
\`\`\`
`;function L(r){let t,n;const o=r[2].default,a=x(o,r,r[1],null);return{c(){t=h("div"),a&&a.c(),q(t,"class","embed-container svelte-ubitk5"),c(t,"display","content")},m(e,l){g(e,t,l),a&&a.m(t,null),n=!0},p(e,[l]){a&&a.p&&(!n||l&2)&&B(a,o,e,e[1],n?W(o,e[1],l,null):O(e[1]),null)},i(e){n||(p(a,e),n=!0)},o(e){d(a,e),n=!1},d(e){e&&$(t),a&&a.d(e)}}}function N(r,t,n){let{$$slots:o={},$$scope:a}=t,{pymChild:e=null}=t;return H(()=>{n(0,e=new K.Child({polling:1e3}))}),r.$$set=l=>{"pymChild"in l&&n(0,e=l.pymChild),"$$scope"in l&&n(1,a=l.$$scope)},[e,a,o]}class b extends D{constructor(t){super(),k(this,t,N,L,j,{pymChild:0})}}b.__docgen={version:3,name:"Embed.svelte",data:[{keywords:[{name:"type",description:"{object}"}],visibility:"public",description:"Binding for pymChild element (can be used to send messages to parent of iframe)",name:"pymChild",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"object",type:"object"},defaultValue:null}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[{keywords:[],visibility:"public",description:"",name:"default"}],refs:[]};function Q(r){let t,n;return{c(){t=h("div"),n=h("p"),n.textContent="Embedded content.",c(n,"margin","0"),c(t,"padding","24px 0"),c(t,"background","lightgrey")},m(o,a){g(o,t,a),P(t,n)},p:V,d(o){o&&$(t)}}}function R(r){let t,n;const o=[r[0]];let a={$$slots:{default:[Q]},$$scope:{ctx:r}};for(let e=0;e<o.length;e+=1)a=M(a,o[e]);return t=new b({props:a}),{c(){f(t.$$.fragment)},m(e,l){u(t,e,l),n=!0},p(e,l){const m=l&1?S(o,[T(e[0])]):{};l&2&&(m.$$scope={dirty:l,ctx:e}),t.$set(m)},i(e){n||(p(t.$$.fragment,e),n=!0)},o(e){d(t.$$.fragment,e),n=!1},d(e){_(t,e)}}}function U(r){let t,n,o,a,e,l;const m=[{title:"Wrappers/Embed"},{component:b},{argTypes:{}},E(C)];let y={};for(let s=0;s<m.length;s+=1)y=M(y,m[s]);return t=new F({props:y}),o=new G({props:{$$slots:{default:[R,({args:s})=>({0:s}),({args:s})=>s?1:0]},$$scope:{ctx:r}}}),e=new J({props:{name:"Default",args:{}}}),{c(){f(t.$$.fragment),n=w(),f(o.$$.fragment),a=w(),f(e.$$.fragment)},m(s,i){u(t,s,i),g(s,n,i),u(o,s,i),g(s,a,i),u(e,s,i),l=!0},p(s,[i]){const I=i&0?S(m,[m[0],i&0&&{component:b},m[2],i&0&&T(E(C))]):{};t.$set(I);const v={};i&3&&(v.$$scope={dirty:i,ctx:s}),o.$set(v)},i(s){l||(p(t.$$.fragment,s),p(o.$$.fragment,s),p(e.$$.fragment,s),l=!0)},o(s){d(t.$$.fragment,s),d(o.$$.fragment,s),d(e.$$.fragment,s),l=!1},d(s){_(t,s),s&&$(n),_(o,s),s&&$(a),_(e,s)}}}class X extends D{constructor(t){super(),k(this,t,null,U,j,{})}}const A=z(X,{meta:{title:"Wrappers/Embed"},stories:{"tpl:default":{storyId:"wrappers-embed--default",name:"default",template:!0,source:`<Embed {...args}>
  <div style:padding="24px 0" style:background="lightgrey">
    <p style:margin="0">Embedded content.</p>
  </div>
</Embed>`,hasArgs:!0},Default:{storyId:"wrappers-embed--default",name:"Default",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","Embed","withComponentDocs"]}),se=A.meta,ne=["Default"],ae=A.stories.Default;export{ae as Default,ne as __namedExportsOrder,se as default};
//# sourceMappingURL=Embed.stories-c3e9c1f5.js.map
