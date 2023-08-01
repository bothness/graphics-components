import{S as E,i as j,s as U,p as I,j as l,x as D,m as u,a as g,k as W,l as C,b as p,t as c,n as d,d as w,w as B,B as O}from"./index-b112ad45.js";import{p as Y,w as T,M as z,T as F,S as k}from"./collect-stories-6e9ce8fc.js";import{S as b}from"./Section-4f9c1a77.js";import"./utils-dfca2a5c.js";import"./Container-a17e3332.js";import"./Theme-446f25bc.js";const A=`A layout block for text content. You can set the width, colour theme and title.

\`\`\`html
<script>
  import { Section } from "@onsvisual/svelte-components";
<\/script>

<section width="{narrow|medium|wide|full}" title="Section title">
  <p>Contents of section.</p>
</section>
\`\`\`
`;function G(f){let t;return{c(){t=B("p"),t.textContent=`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`},m(i,o){g(i,t,o)},p:O,d(i){i&&w(t)}}}function H(f){let t,i;const o=[f[0]];let m={$$slots:{default:[G]},$$scope:{ctx:f}};for(let s=0;s<o.length;s+=1)m=I(m,o[s]);return t=new b({props:m}),{c(){l(t.$$.fragment)},m(s,a){u(t,s,a),i=!0},p(s,a){const r=a&1?W(o,[C(s[0])]):{};a&2&&(r.$$scope={dirty:a,ctx:s}),t.$set(r)},i(s){i||(p(t.$$.fragment,s),i=!0)},o(s){c(t.$$.fragment,s),i=!1},d(s){d(t,s)}}}function J(f){let t,i,o,m,s,a,r,q,$,v,_,h;const S=[{title:"Layout/Section"},{component:b},{argTypes:{width:{options:["narrow","medium","width","full"],control:{type:"select"}},theme:{options:["light","dark","lightblue"],control:{type:"select"}}}},T(A)];let x={};for(let e=0;e<S.length;e+=1)x=I(x,S[e]);return t=new z({props:x}),o=new F({props:{$$slots:{default:[H,({args:e})=>({0:e}),({args:e})=>e?1:0]},$$scope:{ctx:f}}}),s=new k({props:{name:"Default",args:{title:"Section title"}}}),r=new k({props:{name:"Medium",args:{width:"medium",title:"Section title"}}}),$=new k({props:{name:"Wide",args:{width:"wide",title:"Section title"}}}),_=new k({props:{name:"Dark themed",args:{theme:"dark",title:"Section title"}}}),{c(){l(t.$$.fragment),i=D(),l(o.$$.fragment),m=D(),l(s.$$.fragment),a=D(),l(r.$$.fragment),q=D(),l($.$$.fragment),v=D(),l(_.$$.fragment)},m(e,n){u(t,e,n),g(e,i,n),u(o,e,n),g(e,m,n),u(s,e,n),g(e,a,n),u(r,e,n),g(e,q,n),u($,e,n),g(e,v,n),u(_,e,n),h=!0},p(e,[n]){const L=n&0?W(S,[S[0],n&0&&{component:b},S[2],n&0&&C(T(A))]):{};t.$set(L);const M={};n&3&&(M.$$scope={dirty:n,ctx:e}),o.$set(M)},i(e){h||(p(t.$$.fragment,e),p(o.$$.fragment,e),p(s.$$.fragment,e),p(r.$$.fragment,e),p($.$$.fragment,e),p(_.$$.fragment,e),h=!0)},o(e){c(t.$$.fragment,e),c(o.$$.fragment,e),c(s.$$.fragment,e),c(r.$$.fragment,e),c($.$$.fragment,e),c(_.$$.fragment,e),h=!1},d(e){d(t,e),e&&w(i),d(o,e),e&&w(m),d(s,e),e&&w(a),d(r,e),e&&w(q),d($,e),e&&w(v),d(_,e)}}}class K extends E{constructor(t){super(),j(this,t,null,J,U,{})}}const y=Y(K,{meta:{title:"Layout/Section"},stories:{"tpl:default":{storyId:"layout-section--default",name:"default",template:!0,source:`<Section {...args}>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
</Section>`,hasArgs:!0},Default:{storyId:"layout-section--default",name:"Default",template:!1,hasArgs:!1},Medium:{storyId:"layout-section--medium",name:"Medium",template:!1,hasArgs:!1},Wide:{storyId:"layout-section--wide",name:"Wide",template:!1,hasArgs:!1},DarkThemed:{storyId:"layout-section--dark-themed",name:"Dark themed",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","Section","withComponentDocs"]}),Z=y.meta,ee=["Default","Medium","Wide","DarkThemed"],te=y.stories.Default,se=y.stories.Medium,ne=y.stories.Wide,oe=y.stories.DarkThemed;export{oe as DarkThemed,te as Default,se as Medium,ne as Wide,ee as __namedExportsOrder,Z as default};
//# sourceMappingURL=Section.stories-a9a6b988.js.map
