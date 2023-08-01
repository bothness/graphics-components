import{S as I,i as M,s as C,p as v,j as c,x as b,m as f,a as g,k as S,l as A,b as d,t as $,n as _,d as q,w as h,H as j,D as L}from"./index-b112ad45.js";import{p as P,w,M as E,T as H,S as B}from"./collect-stories-6e9ce8fc.js";import{B as x}from"./Blockquote-49f67486.js";const T=`An indented block of large text, designed to sit inside a \`<Section>\` block. Adding an "attribution" text will make it appear as a quote.

\`\`\`html
<script>
  import { Blockquote } from "@onsvisual/svelte-components";
<\/script>

<blockquote attribution="A. Person">Some quoted text.</blockquote>
\`\`\`
`;function z(m){let t;return{c(){t=L(`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua.`)},m(s,n){g(s,t,n)},d(s){s&&q(t)}}}function F(m){let t,s,n;const i=[m[0]];let l={$$slots:{default:[z]},$$scope:{ctx:m}};for(let o=0;o<i.length;o+=1)l=v(l,i[o]);return s=new x({props:l}),{c(){t=h("div"),c(s.$$.fragment),j(t,"padding","12px")},m(o,r){g(o,t,r),f(s,t,null),n=!0},p(o,r){const u=r&1?S(i,[A(o[0])]):{};r&2&&(u.$$scope={dirty:r,ctx:o}),s.$set(u)},i(o){n||(d(s.$$.fragment,o),n=!0)},o(o){$(s.$$.fragment,o),n=!1},d(o){o&&q(t),_(s)}}}function G(m){let t,s,n,i,l,o,r,u;const p=[{title:"Decorators/Blockquote"},{component:x},{argTypes:{}},w(T)];let k={};for(let e=0;e<p.length;e+=1)k=v(k,p[e]);return t=new E({props:k}),n=new H({props:{$$slots:{default:[F,({args:e})=>({0:e}),({args:e})=>e?1:0]},$$scope:{ctx:m}}}),l=new B({props:{name:"Default",args:{attribution:"A. Person"}}}),r=new B({props:{name:"Text only",args:{width:"medium",title:"Section title"}}}),{c(){c(t.$$.fragment),s=b(),c(n.$$.fragment),i=b(),c(l.$$.fragment),o=b(),c(r.$$.fragment)},m(e,a){f(t,e,a),g(e,s,a),f(n,e,a),g(e,i,a),f(l,e,a),g(e,o,a),f(r,e,a),u=!0},p(e,[a]){const O=a&0?S(p,[p[0],a&0&&{component:x},p[2],a&0&&A(w(T))]):{};t.$set(O);const y={};a&3&&(y.$$scope={dirty:a,ctx:e}),n.$set(y)},i(e){u||(d(t.$$.fragment,e),d(n.$$.fragment,e),d(l.$$.fragment,e),d(r.$$.fragment,e),u=!0)},o(e){$(t.$$.fragment,e),$(n.$$.fragment,e),$(l.$$.fragment,e),$(r.$$.fragment,e),u=!1},d(e){_(t,e),e&&q(s),_(n,e),e&&q(i),_(l,e),e&&q(o),_(r,e)}}}class J extends I{constructor(t){super(),M(this,t,null,G,C,{})}}const D=P(J,{meta:{title:"Decorators/Blockquote"},stories:{"tpl:default":{storyId:"decorators-blockquote--default",name:"default",template:!0,source:`<div style:padding="12px">
  <Blockquote {...args}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua.
  </Blockquote>
</div>`,hasArgs:!0},Default:{storyId:"decorators-blockquote--default",name:"Default",template:!1,hasArgs:!1},TextOnly:{storyId:"decorators-blockquote--text-only",name:"Text only",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","Blockquote","withComponentDocs"]}),R=D.meta,U=["Default","TextOnly"],V=D.stories.Default,W=D.stories.TextOnly;export{V as Default,W as TextOnly,U as __namedExportsOrder,R as default};
//# sourceMappingURL=Blockquote.stories-f9711aa4.js.map
