import{S as L,i as k,s as C,q,x as c,I as A,w as b,C as p,a as d,H as g,J as N,u as O,r as z,v as B,b as $,t as y,d as _,p as I,j as v,m as h,k as x,l as M,n as S,y as H,N as J}from"./index-9c2ee968.js";import{p as V,w as D,M as F,T as G,S as K}from"./collect-stories-c58c3d65.js";import{L as P}from"./List-37c52013.js";const T=`A panel to summarise errors on a form/input.

Based on [this ONS Design System pattern](https://service-manual.ons.gov.uk/design-system/patterns/error-status-pages).

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { ErrorSummary, List } from "@onsvisual/svelte-components";
<\/script>

<ErrorSummary title="There are 2 problems with your answer">
  <List mode="number">
    <li>The first issue</li>
    <li>The second issue</li>
  </List>
</ErrorSummary>
\`\`\`
`;function Q(m){let e,n,s,a,l,r,i;const u=m[2].default,t=q(u,m,m[1],null);return{c(){e=c("div"),n=c("div"),s=c("h2"),a=A(m[0]),l=b(),r=c("div"),t&&t.c(),p(s,"id","alert"),p(s,"data-qa","error-header"),p(s,"class","ons-panel__title ons-u-fs-r--b"),p(n,"class","ons-panel__header"),p(r,"class","ons-panel__body"),p(e,"aria-labelledby","alert"),p(e,"role","alert"),p(e,"tabindex","-1"),p(e,"class","ons-panel ons-panel--error svelte-vj184z")},m(o,f){d(o,e,f),g(e,n),g(n,s),g(s,a),g(e,l),g(e,r),t&&t.m(r,null),i=!0},p(o,[f]){(!i||f&1)&&N(a,o[0]),t&&t.p&&(!i||f&2)&&O(t,u,o,o[1],i?B(u,o[1],f,null):z(o[1]),null)},i(o){i||($(t,o),i=!0)},o(o){y(t,o),i=!1},d(o){o&&_(e),t&&t.d(o)}}}function R(m,e,n){let{$$slots:s={},$$scope:a}=e,{title:l=""}=e;return m.$$set=r=>{"title"in r&&n(0,l=r.title),"$$scope"in r&&n(1,a=r.$$scope)},[l,a,s]}class w extends L{constructor(e){super(),k(this,e,R,Q,C,{title:0})}}w.__docgen={version:3,name:"ErrorSummary.svelte",data:[{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Defines the title of the error",name:"title",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[{keywords:[],visibility:"public",description:"",name:"default"}],refs:[]};function U(m){let e,n,s;return{c(){e=c("li"),e.textContent="The first issue",n=b(),s=c("li"),s.textContent="The second issue"},m(a,l){d(a,e,l),d(a,n,l),d(a,s,l)},p:J,d(a){a&&_(e),a&&_(n),a&&_(s)}}}function W(m){let e,n;return e=new P({props:{mode:"number",$$slots:{default:[U]},$$scope:{ctx:m}}}),{c(){v(e.$$.fragment)},m(s,a){h(e,s,a),n=!0},p(s,a){const l={};a&2&&(l.$$scope={dirty:a,ctx:s}),e.$set(l)},i(s){n||($(e.$$.fragment,s),n=!0)},o(s){y(e.$$.fragment,s),n=!1},d(s){S(e,s)}}}function X(m){let e,n,s;const a=[m[0]];let l={$$slots:{default:[W]},$$scope:{ctx:m}};for(let r=0;r<a.length;r+=1)l=I(l,a[r]);return n=new w({props:l}),{c(){e=c("div"),v(n.$$.fragment),H(e,"padding","12px")},m(r,i){d(r,e,i),h(n,e,null),s=!0},p(r,i){const u=i&1?x(a,[M(r[0])]):{};i&2&&(u.$$scope={dirty:i,ctx:r}),n.$set(u)},i(r){s||($(n.$$.fragment,r),s=!0)},o(r){y(n.$$.fragment,r),s=!1},d(r){r&&_(e),S(n)}}}function Y(m){let e,n,s,a,l,r;const i=[{title:"Inputs/ErrorSummary"},{component:w},{argTypes:{}},D(T)];let u={};for(let t=0;t<i.length;t+=1)u=I(u,i[t]);return e=new F({props:u}),s=new G({props:{$$slots:{default:[X,({args:t})=>({0:t}),({args:t})=>t?1:0]},$$scope:{ctx:m}}}),l=new K({props:{name:"Default",args:{title:"There are 2 problems with your answer"}}}),{c(){v(e.$$.fragment),n=b(),v(s.$$.fragment),a=b(),v(l.$$.fragment)},m(t,o){h(e,t,o),d(t,n,o),h(s,t,o),d(t,a,o),h(l,t,o),r=!0},p(t,[o]){const f=o&0?x(i,[i[0],o&0&&{component:w},i[2],o&0&&M(D(T))]):{};e.$set(f);const E={};o&3&&(E.$$scope={dirty:o,ctx:t}),s.$set(E)},i(t){r||($(e.$$.fragment,t),$(s.$$.fragment,t),$(l.$$.fragment,t),r=!0)},o(t){y(e.$$.fragment,t),y(s.$$.fragment,t),y(l.$$.fragment,t),r=!1},d(t){S(e,t),t&&_(n),S(s,t),t&&_(a),S(l,t)}}}class Z extends L{constructor(e){super(),k(this,e,null,Y,C,{})}}const j=V(Z,{meta:{title:"Inputs/ErrorSummary"},stories:{"tpl:default":{storyId:"inputs-errorsummary--default",name:"default",template:!0,source:`<div style:padding="12px">
  <ErrorSummary {...args}>
    <List mode="number">
      <li>The first issue</li>
      <li>The second issue</li>
    </List>
  </ErrorSummary>
</div>`,hasArgs:!0},Default:{storyId:"inputs-errorsummary--default",name:"Default",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","ErrorSummary","List","withComponentDocs"]}),re=j.meta,ne=["Default"],ae=j.stories.Default;export{ae as Default,ne as __namedExportsOrder,re as default};
//# sourceMappingURL=ErrorSummary.stories-785d7d79.js.map
