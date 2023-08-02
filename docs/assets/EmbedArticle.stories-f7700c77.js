import{S as M,i as Y,s as j,p as z,j as $,x as h,m as g,a as d,k as B,l as I,b as _,t as b,n as v,d as f,w as q,H as y,A as S,B as x,y as k}from"./index-b112ad45.js";import{p as H,w as A,M as N,T as O,S as J}from"./collect-stories-6e9ce8fc.js";import{E as K}from"./Embed-54a7d26c.js";import{F as P}from"./Filler-e28e11f5.js";import{S as w}from"./Section-4f9c1a77.js";import{G as Q}from"./Grid-1f23e4f3.js";import{S as R}from"./Select-752b1b95.js";import"./_commonjsHelpers-725317a4.js";import"./Container-a17e3332.js";import"./Theme-446f25bc.js";import"./utils-dfca2a5c.js";const U=`A full page article template with compact header and footer, suitable for scrollytelling and other feature articles.

Note: The scroller in this example will not preview correctly in the iframe on this page. You can select the example from the menu instead.

<!-- prettier-ignore -->
\`\`\`html
<!-- +page.svelte -->
<script>
  import "@onsvisual/svelte-components/css/main.css"; // This is more typically imported in the global +layout.svelte
  import { Embed, Filler, Select, Section, Grid } from "@onsvisual/svelte-components";
<\/script>

<Embed>
  <Filler height="auto">
    <h2>This is a sub-headline</h2>
    <p style:font-size="1rem">This is a description for the selector below</p>
    <Select floatingConfig="{{ strategy: 'fixed' }}" hideLabel />
  </Filler>

  <Section title="Section title">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat..
    </p>
    <p>
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
      mollit anim id est laborum.
    </p>
  </Section>

  <Grid colwidth="medium" caption="This is a caption text">
    <div class="grid-cell"></div>
  </Grid>

  <Section title="Another section title">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </p>
  </Section>

  <Section title="Yet another section title">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat.
    </p>
  </Section>
</Embed>
\`\`\`
`;function V(u){let e,o,t,s,a,m,r;return m=new R({props:{floatingConfig:{strategy:"fixed"},hideLabel:!0}}),{c(){e=q("div"),o=q("h2"),o.textContent="This is a sub-headline",t=h(),s=q("p"),s.textContent="This is a description for the selector below",a=h(),$(m.$$.fragment),y(s,"font-size","1rem"),y(e,"padding","0 12px")},m(c,i){d(c,e,i),S(e,o),S(e,t),S(e,s),S(e,a),g(m,e,null),r=!0},p:x,i(c){r||(_(m.$$.fragment,c),r=!0)},o(c){b(m.$$.fragment,c),r=!1},d(c){c&&f(e),v(m)}}}function W(u){let e,o,t;return{c(){e=q("p"),e.textContent=`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat..`,o=h(),t=q("p"),t.textContent=`Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.`},m(s,a){d(s,e,a),d(s,o,a),d(s,t,a)},p:x,d(s){s&&f(e),s&&f(o),s&&f(t)}}}function X(u){let e;return{c(){e=q("div"),k(e,"class","grid-cell svelte-eiifaj")},m(o,t){d(o,e,t)},p:x,d(o){o&&f(e)}}}function Z(u){let e;return{c(){e=q("p"),e.textContent=`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur.`},m(o,t){d(o,e,t)},p:x,d(o){o&&f(e)}}}function ee(u){let e;return{c(){e=q("p"),e.textContent=`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.`},m(o,t){d(o,e,t)},p:x,d(o){o&&f(e)}}}function te(u){let e,o,t,s,a,m,r,c,i,p;return e=new P({props:{height:"auto",marginBottom:!1,$$slots:{default:[V]},$$scope:{ctx:u}}}),t=new w({props:{title:"Section title",marginTop:!0,$$slots:{default:[W]},$$scope:{ctx:u}}}),a=new Q({props:{colwidth:"medium",caption:"This is a caption text",$$slots:{default:[X]},$$scope:{ctx:u}}}),r=new w({props:{title:"Another section title",$$slots:{default:[Z]},$$scope:{ctx:u}}}),i=new w({props:{title:"Yet another section title",$$slots:{default:[ee]},$$scope:{ctx:u}}}),{c(){$(e.$$.fragment),o=h(),$(t.$$.fragment),s=h(),$(a.$$.fragment),m=h(),$(r.$$.fragment),c=h(),$(i.$$.fragment)},m(n,l){g(e,n,l),d(n,o,l),g(t,n,l),d(n,s,l),g(a,n,l),d(n,m,l),g(r,n,l),d(n,c,l),g(i,n,l),p=!0},p(n,l){const T={};l&2&&(T.$$scope={dirty:l,ctx:n}),e.$set(T);const E={};l&2&&(E.$$scope={dirty:l,ctx:n}),t.$set(E);const D={};l&2&&(D.$$scope={dirty:l,ctx:n}),a.$set(D);const C={};l&2&&(C.$$scope={dirty:l,ctx:n}),r.$set(C);const L={};l&2&&(L.$$scope={dirty:l,ctx:n}),i.$set(L)},i(n){p||(_(e.$$.fragment,n),_(t.$$.fragment,n),_(a.$$.fragment,n),_(r.$$.fragment,n),_(i.$$.fragment,n),p=!0)},o(n){b(e.$$.fragment,n),b(t.$$.fragment,n),b(a.$$.fragment,n),b(r.$$.fragment,n),b(i.$$.fragment,n),p=!1},d(n){v(e,n),n&&f(o),v(t,n),n&&f(s),v(a,n),n&&f(m),v(r,n),n&&f(c),v(i,n)}}}function ie(u){let e,o;return e=new K({props:{$$slots:{default:[te]},$$scope:{ctx:u}}}),{c(){$(e.$$.fragment)},m(t,s){g(e,t,s),o=!0},p(t,s){const a={};s&2&&(a.$$scope={dirty:s,ctx:t}),e.$set(a)},i(t){o||(_(e.$$.fragment,t),o=!0)},o(t){b(e.$$.fragment,t),o=!1},d(t){v(e,t)}}}function ne(u){let e,o,t,s,a,m;const r=[{title:"Templates/Embed article"},{component:null},{argTypes:{}},A(U)];let c={};for(let i=0;i<r.length;i+=1)c=z(c,r[i]);return e=new N({props:c}),t=new O({props:{$$slots:{default:[ie,({args:i})=>({0:i}),({args:i})=>i?1:0]},$$scope:{ctx:u}}}),a=new J({props:{name:"Default",args:{}}}),{c(){$(e.$$.fragment),o=h(),$(t.$$.fragment),s=h(),$(a.$$.fragment)},m(i,p){g(e,i,p),d(i,o,p),g(t,i,p),d(i,s,p),g(a,i,p),m=!0},p(i,[p]){const n=p&0?B(r,[r[0],r[1],r[2],I(A(U))]):{};e.$set(n);const l={};p&2&&(l.$$scope={dirty:p,ctx:i}),t.$set(l)},i(i){m||(_(e.$$.fragment,i),_(t.$$.fragment,i),_(a.$$.fragment,i),m=!0)},o(i){b(e.$$.fragment,i),b(t.$$.fragment,i),b(a.$$.fragment,i),m=!1},d(i){v(e,i),i&&f(o),v(t,i),i&&f(s),v(a,i)}}}class F extends M{constructor(e){super(),Y(this,e,null,ne,j,{})}}F.__docgen={version:3,name:"EmbedArticle.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const G=H(F,{meta:{title:"Templates/Embed article"},stories:{"tpl:default":{storyId:"templates-embed-article--default",name:"default",template:!0,source:`<Embed>
  <Filler height="auto" marginBottom="{false}">
    <div style:padding="0 12px">
      <h2>This is a sub-headline</h2>
      <p style:font-size="1rem">This is a description for the selector below</p>
      <Select floatingConfig="{{ strategy: 'fixed' }}" hideLabel />
    </div>
  </Filler>

  <Section title="Section title" marginTop="{true}">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat..
    </p>
    <p>
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
      mollit anim id est laborum.
    </p>
  </Section>

  <Grid colwidth="medium" caption="This is a caption text">
    <div class="grid-cell"></div>
  </Grid>

  <Section title="Another section title">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </p>
  </Section>

  <Section title="Yet another section title">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat.
    </p>
  </Section>
</Embed>`,hasArgs:!0},Default:{storyId:"templates-embed-article--default",name:"Default",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","Embed","Filler","Section","Grid","Select","componentDocs","withComponentDocs"]}),$e=G.meta,ge=["Default"],_e=G.stories.Default;export{_e as Default,ge as __namedExportsOrder,$e as default};
//# sourceMappingURL=EmbedArticle.stories-f7700c77.js.map
