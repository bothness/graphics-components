import{S as q,i as z,s as E,p as A,j as u,x as _,m as i,a as y,k as B,l as j,b as $,t as h,n as c,d as D,w as v,H as S,z as T,I as O}from"./index-73a3b670.js";import{p as F,a as C,M as G,T as J,S as L}from"./collect-stories-dc0ff7e5.js";import{T as b}from"./Theme-fdaf0d63.js";const I=`A component that sets the colour scheme of its child components using CSS variables.

\`\`\`html
<script>
  import { Theme } from "@onsvisual/svelte-components";
<\/script>

<Theme theme="{theme_name}"> {child_components} </Theme>
\`\`\`
`;function K(p){let t,m,n,l,s,o;return{c(){t=v("div"),m=v("h2"),m.textContent="Title",n=_(),l=v("p"),l.innerHTML='Text with a <a href="#0">hyperlink</a>.',s=_(),o=v("p"),o.textContent="Muted text.",S(o,"color","var(--muted)"),S(t,"padding","12px")},m(r,d){y(r,t,d),T(t,m),T(t,n),T(t,l),T(t,s),T(t,o)},p:O,d(r){r&&D(t)}}}function N(p){let t,m;const n=[p[0]];let l={$$slots:{default:[K]},$$scope:{ctx:p}};for(let s=0;s<n.length;s+=1)l=A(l,n[s]);return t=new b({props:l}),{c(){u(t.$$.fragment)},m(s,o){i(t,s,o),m=!0},p(s,o){const r=o&1?B(n,[j(s[0])]):{};o&2&&(r.$$scope={dirty:o,ctx:s}),t.$set(r)},i(s){m||($(t.$$.fragment,s),m=!0)},o(s){h(t.$$.fragment,s),m=!1},d(s){c(t,s)}}}function P(p){let t,m,n,l,s,o,r,d,f,k;const g=[{title:"Layout/Theme"},{component:b},{argTypes:{theme:{options:["","light","dark","lightblue"],control:{type:"select"}}}},C(I)];let x={};for(let e=0;e<g.length;e+=1)x=A(x,g[e]);return t=new G({props:x}),n=new J({props:{$$slots:{default:[N,({args:e})=>({0:e}),({args:e})=>e?1:0]},$$scope:{ctx:p}}}),s=new L({props:{name:"Default",args:{}}}),r=new L({props:{name:"Dark",args:{theme:"dark"}}}),f=new L({props:{name:"Light blue",args:{theme:"lightblue"}}}),{c(){u(t.$$.fragment),m=_(),u(n.$$.fragment),l=_(),u(s.$$.fragment),o=_(),u(r.$$.fragment),d=_(),u(f.$$.fragment)},m(e,a){i(t,e,a),y(e,m,a),i(n,e,a),y(e,l,a),i(s,e,a),y(e,o,a),i(r,e,a),y(e,d,a),i(f,e,a),k=!0},p(e,[a]){const H=a&0?B(g,[g[0],a&0&&{component:b},g[2],a&0&&j(C(I))]):{};t.$set(H);const M={};a&3&&(M.$$scope={dirty:a,ctx:e}),n.$set(M)},i(e){k||($(t.$$.fragment,e),$(n.$$.fragment,e),$(s.$$.fragment,e),$(r.$$.fragment,e),$(f.$$.fragment,e),k=!0)},o(e){h(t.$$.fragment,e),h(n.$$.fragment,e),h(s.$$.fragment,e),h(r.$$.fragment,e),h(f.$$.fragment,e),k=!1},d(e){c(t,e),e&&D(m),c(n,e),e&&D(l),c(s,e),e&&D(o),c(r,e),e&&D(d),c(f,e)}}}class Q extends q{constructor(t){super(),z(this,t,null,P,E,{})}}const w=F(Q,{meta:{title:"Layout/Theme"},stories:{"tpl:default":{storyId:"layout-theme--default",name:"default",template:!0,source:`<Theme {...args}>
  <div style:padding="12px">
    <h2>Title</h2>
    <p>Text with a <a href="#0">hyperlink</a>.</p>
    <p style:color="var(--muted)">Muted text.</p>
  </div>
</Theme>`,hasArgs:!0},Default:{storyId:"layout-theme--default",name:"Default",template:!1,hasArgs:!1},Dark:{storyId:"layout-theme--dark",name:"Dark",template:!1,hasArgs:!1},LightBlue:{storyId:"layout-theme--light-blue",name:"Light blue",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","Theme","withComponentDocs"]}),W=w.meta,X=["Default","Dark","LightBlue"],Y=w.stories.Default,Z=w.stories.Dark,ee=w.stories.LightBlue;export{Z as Dark,Y as Default,ee as LightBlue,X as __namedExportsOrder,W as default};
//# sourceMappingURL=Theme.stories-b0c66896.js.map
