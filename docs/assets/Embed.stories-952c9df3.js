import{S as C,i as k,s as j,q,u as x,r as B,v as O,b as p,t as d,o as W,p as M,j as f,z as w,m as c,a as b,k as S,l as T,n as u,d as h,w as v,D as $,B as z,F}from"./index-ec07ce5f.js";import{p as P,w as E,M as V,T as G,S as H}from"./collect-stories-e5908286.js";import{p as J}from"./pym.v1-49c58be6.js";import"./_commonjsHelpers-725317a4.js";const D=`A container for content designed to appear within an \`<iframe>\`. The component does two things:

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
`;function K(l){let e;const o=l[2].default,s=q(o,l,l[1],null);return{c(){s&&s.c()},m(a,t){s&&s.m(a,t),e=!0},p(a,[t]){s&&s.p&&(!e||t&2)&&x(s,o,a,a[1],e?O(o,a[1],t,null):B(a[1]),null)},i(a){e||(p(s,a),e=!0)},o(a){d(s,a),e=!1},d(a){s&&s.d(a)}}}function L(l,e,o){let{$$slots:s={},$$scope:a}=e,{pymChild:t=null}=e;return W(()=>{o(0,t=new J.Child({polling:1e3}))}),l.$$set=r=>{"pymChild"in r&&o(0,t=r.pymChild),"$$scope"in r&&o(1,a=r.$$scope)},[t,a,s]}class _ extends C{constructor(e){super(),k(this,e,L,K,j,{pymChild:0})}}_.__docgen={version:3,name:"Embed.svelte",data:[{keywords:[{name:"type",description:"{object}"}],visibility:"public",description:"Binding for pymChild element (can be used to send messages to parent of iframe)",name:"pymChild",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"object",type:"object"},defaultValue:null}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[{keywords:[],visibility:"public",description:"",name:"default"}],refs:[]};function N(l){let e,o;return{c(){e=v("div"),o=v("p"),o.textContent="Embedded content.",$(o,"margin","0"),$(e,"padding","24px 0"),$(e,"background","lightgrey")},m(s,a){b(s,e,a),z(e,o)},p:F,d(s){s&&h(e)}}}function Q(l){let e,o;const s=[l[0]];let a={$$slots:{default:[N]},$$scope:{ctx:l}};for(let t=0;t<s.length;t+=1)a=M(a,s[t]);return e=new _({props:a}),{c(){f(e.$$.fragment)},m(t,r){c(e,t,r),o=!0},p(t,r){const m=r&1?S(s,[T(t[0])]):{};r&2&&(m.$$scope={dirty:r,ctx:t}),e.$set(m)},i(t){o||(p(e.$$.fragment,t),o=!0)},o(t){d(e.$$.fragment,t),o=!1},d(t){u(e,t)}}}function R(l){let e,o,s,a,t,r;const m=[{title:"Wrappers/Embed"},{component:_},{argTypes:{}},E(D)];let g={};for(let n=0;n<m.length;n+=1)g=M(g,m[n]);return e=new V({props:g}),s=new G({props:{$$slots:{default:[Q,({args:n})=>({0:n}),({args:n})=>n?1:0]},$$scope:{ctx:l}}}),t=new H({props:{name:"Default",args:{}}}),{c(){f(e.$$.fragment),o=w(),f(s.$$.fragment),a=w(),f(t.$$.fragment)},m(n,i){c(e,n,i),b(n,o,i),c(s,n,i),b(n,a,i),c(t,n,i),r=!0},p(n,[i]){const A=i&0?S(m,[m[0],i&0&&{component:_},m[2],i&0&&T(E(D))]):{};e.$set(A);const y={};i&3&&(y.$$scope={dirty:i,ctx:n}),s.$set(y)},i(n){r||(p(e.$$.fragment,n),p(s.$$.fragment,n),p(t.$$.fragment,n),r=!0)},o(n){d(e.$$.fragment,n),d(s.$$.fragment,n),d(t.$$.fragment,n),r=!1},d(n){u(e,n),n&&h(o),u(s,n),n&&h(a),u(t,n)}}}class U extends C{constructor(e){super(),k(this,e,null,R,j,{})}}const I=P(U,{meta:{title:"Wrappers/Embed"},stories:{"tpl:default":{storyId:"wrappers-embed--default",name:"default",template:!0,source:`<Embed {...args}>
  <div style:padding="24px 0" style:background="lightgrey">
    <p style:margin="0">Embedded content.</p>
  </div>
</Embed>`,hasArgs:!0},Default:{storyId:"wrappers-embed--default",name:"Default",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","Embed","withComponentDocs"]}),te=I.meta,se=["Default"],ne=I.stories.Default;export{ne as Default,se as __namedExportsOrder,te as default};
//# sourceMappingURL=Embed.stories-952c9df3.js.map
