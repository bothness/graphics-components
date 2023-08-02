import{S as W,i as q,s as E,p as B,j as i,x as _,m as u,a as D,k as I,l as j,b as $,t as h,n as c,d as w,w as v,H as S,A as T,B as O}from"./index-b112ad45.js";import{p as z,w as A,M as F,T as G,S as b}from"./collect-stories-6e9ce8fc.js";import{T as L}from"./Theme-446f25bc.js";const C=`A component that sets the colour scheme of its child components using CSS variables.

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Theme } from "@onsvisual/svelte-components";
<\/script>

<Theme theme="{theme_name}"> {child_components} </Theme>
\`\`\`
`;function J(l){let t,m,n,p,s,r;return{c(){t=v("div"),m=v("h2"),m.textContent="Title",n=_(),p=v("p"),p.innerHTML='Text with a <a href="#0">hyperlink</a>.',s=_(),r=v("p"),r.textContent="Muted text.",S(r,"color","var(--muted)"),S(t,"padding","12px")},m(o,d){D(o,t,d),T(t,m),T(t,n),T(t,p),T(t,s),T(t,r)},p:O,d(o){o&&w(t)}}}function K(l){let t,m;const n=[l[0]];let p={$$slots:{default:[J]},$$scope:{ctx:l}};for(let s=0;s<n.length;s+=1)p=B(p,n[s]);return t=new L({props:p}),{c(){i(t.$$.fragment)},m(s,r){u(t,s,r),m=!0},p(s,r){const o=r&1?I(n,[j(s[0])]):{};r&2&&(o.$$scope={dirty:r,ctx:s}),t.$set(o)},i(s){m||($(t.$$.fragment,s),m=!0)},o(s){h(t.$$.fragment,s),m=!1},d(s){c(t,s)}}}function N(l){let t,m,n,p,s,r,o,d,f,k;const g=[{title:"Wrappers/Theme"},{component:L},{argTypes:{theme:{options:["","light","dark","lightblue"],control:{type:"select"}}}},A(C)];let y={};for(let e=0;e<g.length;e+=1)y=B(y,g[e]);return t=new F({props:y}),n=new G({props:{$$slots:{default:[K,({args:e})=>({0:e}),({args:e})=>e?1:0]},$$scope:{ctx:l}}}),s=new b({props:{name:"Default",args:{}}}),o=new b({props:{name:"Dark",args:{theme:"dark"}}}),f=new b({props:{name:"Light blue",args:{theme:"lightblue"}}}),{c(){i(t.$$.fragment),m=_(),i(n.$$.fragment),p=_(),i(s.$$.fragment),r=_(),i(o.$$.fragment),d=_(),i(f.$$.fragment)},m(e,a){u(t,e,a),D(e,m,a),u(n,e,a),D(e,p,a),u(s,e,a),D(e,r,a),u(o,e,a),D(e,d,a),u(f,e,a),k=!0},p(e,[a]){const H=a&0?I(g,[g[0],a&0&&{component:L},g[2],a&0&&j(A(C))]):{};t.$set(H);const M={};a&3&&(M.$$scope={dirty:a,ctx:e}),n.$set(M)},i(e){k||($(t.$$.fragment,e),$(n.$$.fragment,e),$(s.$$.fragment,e),$(o.$$.fragment,e),$(f.$$.fragment,e),k=!0)},o(e){h(t.$$.fragment,e),h(n.$$.fragment,e),h(s.$$.fragment,e),h(o.$$.fragment,e),h(f.$$.fragment,e),k=!1},d(e){c(t,e),e&&w(m),c(n,e),e&&w(p),c(s,e),e&&w(r),c(o,e),e&&w(d),c(f,e)}}}class P extends W{constructor(t){super(),q(this,t,null,N,E,{})}}const x=z(P,{meta:{title:"Wrappers/Theme"},stories:{"tpl:default":{storyId:"wrappers-theme--default",name:"default",template:!0,source:`<Theme {...args}>
  <div style:padding="12px">
    <h2>Title</h2>
    <p>Text with a <a href="#0">hyperlink</a>.</p>
    <p style:color="var(--muted)">Muted text.</p>
  </div>
</Theme>`,hasArgs:!0},Default:{storyId:"wrappers-theme--default",name:"Default",template:!1,hasArgs:!1},Dark:{storyId:"wrappers-theme--dark",name:"Dark",template:!1,hasArgs:!1},LightBlue:{storyId:"wrappers-theme--light-blue",name:"Light blue",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","Theme","withComponentDocs"]}),V=x.meta,X=["Default","Dark","LightBlue"],Y=x.stories.Default,Z=x.stories.Dark,ee=x.stories.LightBlue;export{Z as Dark,Y as Default,ee as LightBlue,X as __namedExportsOrder,V as default};
//# sourceMappingURL=Theme.stories-60f3d1e1.js.map
