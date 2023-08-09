import{S as V,i as X,s as Z,p as ee,j as f,w as b,m as $,a as m,k as te,l as ie,b as g,t as v,n as _,d as p,x as q,N as A,C as F,H as E,I as x,y as O}from"./index-01cfd182.js";import{p as ne,w as z,M as oe,T as re,S as le}from"./collect-stories-037cf284.js";import{H as se}from"./Header-f83f3998.js";import{H as ae}from"./Hero-c7547c68.js";import{F as ue}from"./Filler-5f4a49d9.js";import{S as U}from"./Section-00b379d0.js";import{G as K}from"./Grid-18dd9dea.js";import{B as ce}from"./Blockquote-6fd1bac5.js";import{E as j}from"./Em-4db4685f.js";import{D as me}from"./Divider-c48f3f52.js";import{S as pe,a as W}from"./ScrollerSection-7ed97ab0.js";import{F as de}from"./Footer-6f3beadb.js";import"./Theme-d6d3e260.js";import"./utils-dfca2a5c.js";import"./Container-f4378dac.js";import"./_commonjsHelpers-725317a4.js";const J=`A full page article template with compact header and footer, suitable for scrollytelling and other feature articles.

Note: The scroller in this example will not preview correctly in the iframe on this page. You can select the example from the menu instead.

<!-- prettier-ignore -->
\`\`\`html
<!-- +page.svelte -->
<script>
  import "@onsvisual/svelte-components/css/main.css"; // This is more typically imported in the global +layout.svelte
  import {
    Header,
    Hero,
    Filler,
    Section,
    Grid,
    Divider,
    Blockquote,
    Em,
    Scroller,
    ScrollerSection,
    Footer,
  } from "@onsvisual/svelte-components";

  const scrollerColors = ["#ddd", "#777", "#222"];
  let scrollerColor = scrollerColors[0];
<\/script>

<Header compact />

<Hero
  title="This is an article title"
  lede="This is a short, introductory sentence"
  date="2023-07-04"
>
  <!-- <Checkbox label="Enable animation" variant="ghost" checked={animation} noBorder/> -->
</Hero>

<Filler marginBottom="{false}">
  <p>This is a test paragraph.</p>
  <p>This is another test paragraph.</p>
</Filler>

<Section title="Section title" marginTop="{true}">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
  <Blockquote attribution="A. Person">
    This is a blockquote, white comprises of a large block of inset text.
  </Blockquote>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
</Section>

<Grid colwidth="medium" caption="This is a caption text">
  <div class="grid-cell"></div>
  <div class="grid-cell"></div>
  <div class="grid-cell"></div>
</Grid>

<Divider />

<Section title="Another section title">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
</Section>

<Scroller
  id="scroller"
  splitscreen
  on:change="{(e) => (scrollerColor = scrollerColors[e.detail.index])}"
>
  <div slot="background">
    <Grid width="full" height="full">
      <div class="placeholder-block" style:background-color="{scrollerColor}"></div>
    </Grid>
  </div>
  <div slot="foreground">
    <ScrollerSection>
      <p>
        When this first caption is visible, the background will appear
        <Em color="{scrollerColors[0]}">light grey</Em>.
      </p>
    </ScrollerSection>
    <ScrollerSection>
      <p>
        When this second caption is visible, the background will appear
        <Em color="{scrollerColors[1]}">dark grey</Em>.
      </p>
    </ScrollerSection>
    <ScrollerSection>
      <p>
        When this third caption is visible, the background will appear
        <Em color="{scrollerColors[2]}">black</Em>.
      </p>
    </ScrollerSection>
  </div>
</Scroller>

<Section title="Yet another section title">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
</Section>

<Footer compact />
\`\`\`
`;function fe(c){let e,i,t;return{c(){e=q("p"),e.textContent="This is a test paragraph.",i=b(),t=q("p"),t.textContent="This is another test paragraph."},m(l,s){m(l,e,s),m(l,i,s),m(l,t,s)},p:A,d(l){l&&p(e),l&&p(i),l&&p(t)}}}function $e(c){let e;return{c(){e=x("This is a blockquote, white comprises of a large block of inset text.")},m(i,t){m(i,e,t)},d(i){i&&p(e)}}}function ge(c){let e,i,t,l,s,n;return t=new ce({props:{attribution:"A. Person",$$slots:{default:[$e]},$$scope:{ctx:c}}}),{c(){e=q("p"),e.textContent=`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,i=b(),f(t.$$.fragment),l=b(),s=q("p"),s.textContent=`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`},m(r,u){m(r,e,u),m(r,i,u),$(t,r,u),m(r,l,u),m(r,s,u),n=!0},p(r,u){const a={};u&16&&(a.$$scope={dirty:u,ctx:r}),t.$set(a)},i(r){n||(g(t.$$.fragment,r),n=!0)},o(r){v(t.$$.fragment,r),n=!1},d(r){r&&p(e),r&&p(i),_(t,r),r&&p(l),r&&p(s)}}}function ve(c){let e,i,t,l,s;return{c(){e=q("div"),i=b(),t=q("div"),l=b(),s=q("div"),F(e,"class","grid-cell svelte-eiifaj"),F(t,"class","grid-cell svelte-eiifaj"),F(s,"class","grid-cell svelte-eiifaj")},m(n,r){m(n,e,r),m(n,i,r),m(n,t,r),m(n,l,r),m(n,s,r)},p:A,d(n){n&&p(e),n&&p(i),n&&p(t),n&&p(l),n&&p(s)}}}function _e(c){let e;return{c(){e=q("p"),e.textContent=`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`},m(i,t){m(i,e,t)},p:A,d(i){i&&p(e)}}}function be(c){let e;return{c(){e=q("div"),F(e,"class","placeholder-block"),O(e,"background-color",c[0])},m(i,t){m(i,e,t)},p(i,t){t&1&&O(e,"background-color",i[0])},d(i){i&&p(e)}}}function he(c){let e,i,t;return i=new K({props:{width:"full",height:"full",$$slots:{default:[be]},$$scope:{ctx:c}}}),{c(){e=q("div"),f(i.$$.fragment),F(e,"slot","background")},m(l,s){m(l,e,s),$(i,e,null),t=!0},p(l,s){const n={};s&17&&(n.$$scope={dirty:s,ctx:l}),i.$set(n)},i(l){t||(g(i.$$.fragment,l),t=!0)},o(l){v(i.$$.fragment,l),t=!1},d(l){l&&p(e),_(i)}}}function qe(c){let e;return{c(){e=x("light grey")},m(i,t){m(i,e,t)},d(i){i&&p(e)}}}function Se(c){let e,i,t,l,s;return t=new j({props:{color:c[1][0],$$slots:{default:[qe]},$$scope:{ctx:c}}}),{c(){e=q("p"),i=x("When this first caption is visible, the background will appear "),f(t.$$.fragment),l=x(".")},m(n,r){m(n,e,r),E(e,i),$(t,e,null),E(e,l),s=!0},p(n,r){const u={};r&16&&(u.$$scope={dirty:r,ctx:n}),t.$set(u)},i(n){s||(g(t.$$.fragment,n),s=!0)},o(n){v(t.$$.fragment,n),s=!1},d(n){n&&p(e),_(t)}}}function xe(c){let e;return{c(){e=x("dark grey")},m(i,t){m(i,e,t)},d(i){i&&p(e)}}}function ke(c){let e,i,t,l,s;return t=new j({props:{color:c[1][1],$$slots:{default:[xe]},$$scope:{ctx:c}}}),{c(){e=q("p"),i=x("When this section caption is visible, the background will appear "),f(t.$$.fragment),l=x(".")},m(n,r){m(n,e,r),E(e,i),$(t,e,null),E(e,l),s=!0},p(n,r){const u={};r&16&&(u.$$scope={dirty:r,ctx:n}),t.$set(u)},i(n){s||(g(t.$$.fragment,n),s=!0)},o(n){v(t.$$.fragment,n),s=!1},d(n){n&&p(e),_(t)}}}function we(c){let e;return{c(){e=x("black")},m(i,t){m(i,e,t)},d(i){i&&p(e)}}}function Ee(c){let e,i,t,l,s;return t=new j({props:{color:c[1][2],$$slots:{default:[we]},$$scope:{ctx:c}}}),{c(){e=q("p"),i=x("When this third caption is visible, the background will appear "),f(t.$$.fragment),l=x(".")},m(n,r){m(n,e,r),E(e,i),$(t,e,null),E(e,l),s=!0},p(n,r){const u={};r&16&&(u.$$scope={dirty:r,ctx:n}),t.$set(u)},i(n){s||(g(t.$$.fragment,n),s=!0)},o(n){v(t.$$.fragment,n),s=!1},d(n){n&&p(e),_(t)}}}function Ce(c){let e,i,t,l,s,n,r;return i=new W({props:{$$slots:{default:[Se]},$$scope:{ctx:c}}}),l=new W({props:{$$slots:{default:[ke]},$$scope:{ctx:c}}}),n=new W({props:{$$slots:{default:[Ee]},$$scope:{ctx:c}}}),{c(){e=q("div"),f(i.$$.fragment),t=b(),f(l.$$.fragment),s=b(),f(n.$$.fragment),F(e,"slot","foreground")},m(u,a){m(u,e,a),$(i,e,null),E(e,t),$(l,e,null),E(e,s),$(n,e,null),r=!0},p(u,a){const h={};a&16&&(h.$$scope={dirty:a,ctx:u}),i.$set(h);const S={};a&16&&(S.$$scope={dirty:a,ctx:u}),l.$set(S);const k={};a&16&&(k.$$scope={dirty:a,ctx:u}),n.$set(k)},i(u){r||(g(i.$$.fragment,u),g(l.$$.fragment,u),g(n.$$.fragment,u),r=!0)},o(u){v(i.$$.fragment,u),v(l.$$.fragment,u),v(n.$$.fragment,u),r=!1},d(u){u&&p(e),_(i),_(l),_(n)}}}function De(c){let e;return{c(){e=q("p"),e.textContent=`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`},m(i,t){m(i,e,t)},p:A,d(i){i&&p(e)}}}function Te(c){let e,i,t,l,s,n,r,u,a,h,S,k,C,B,w,G,D,L,T,H;return e=new se({props:{compact:!0}}),t=new ae({props:{title:"This is an article title",lede:"This is a short, introductory sentence",date:"2023-07-04"}}),s=new ue({props:{marginBottom:!1,$$slots:{default:[fe]},$$scope:{ctx:c}}}),r=new U({props:{title:"Section title",marginTop:!0,$$slots:{default:[ge]},$$scope:{ctx:c}}}),a=new K({props:{colwidth:"medium",caption:"This is a caption text",$$slots:{default:[ve]},$$scope:{ctx:c}}}),S=new me({}),C=new U({props:{title:"Another section title",$$slots:{default:[_e]},$$scope:{ctx:c}}}),w=new pe({props:{id:"scroller",splitscreen:!0,$$slots:{foreground:[Ce],background:[he]},$$scope:{ctx:c}}}),w.$on("change",c[2]),D=new U({props:{title:"Yet another section title",$$slots:{default:[De]},$$scope:{ctx:c}}}),T=new de({props:{compact:!0}}),{c(){f(e.$$.fragment),i=b(),f(t.$$.fragment),l=b(),f(s.$$.fragment),n=b(),f(r.$$.fragment),u=b(),f(a.$$.fragment),h=b(),f(S.$$.fragment),k=b(),f(C.$$.fragment),B=b(),f(w.$$.fragment),G=b(),f(D.$$.fragment),L=b(),f(T.$$.fragment)},m(o,d){$(e,o,d),m(o,i,d),$(t,o,d),m(o,l,d),$(s,o,d),m(o,n,d),$(r,o,d),m(o,u,d),$(a,o,d),m(o,h,d),$(S,o,d),m(o,k,d),$(C,o,d),m(o,B,d),$(w,o,d),m(o,G,d),$(D,o,d),m(o,L,d),$(T,o,d),H=!0},p(o,d){const y={};d&16&&(y.$$scope={dirty:d,ctx:o}),s.$set(y);const I={};d&16&&(I.$$scope={dirty:d,ctx:o}),r.$set(I);const M={};d&16&&(M.$$scope={dirty:d,ctx:o}),a.$set(M);const Y={};d&16&&(Y.$$scope={dirty:d,ctx:o}),C.$set(Y);const P={};d&17&&(P.$$scope={dirty:d,ctx:o}),w.$set(P);const N={};d&16&&(N.$$scope={dirty:d,ctx:o}),D.$set(N)},i(o){H||(g(e.$$.fragment,o),g(t.$$.fragment,o),g(s.$$.fragment,o),g(r.$$.fragment,o),g(a.$$.fragment,o),g(S.$$.fragment,o),g(C.$$.fragment,o),g(w.$$.fragment,o),g(D.$$.fragment,o),g(T.$$.fragment,o),H=!0)},o(o){v(e.$$.fragment,o),v(t.$$.fragment,o),v(s.$$.fragment,o),v(r.$$.fragment,o),v(a.$$.fragment,o),v(S.$$.fragment,o),v(C.$$.fragment,o),v(w.$$.fragment,o),v(D.$$.fragment,o),v(T.$$.fragment,o),H=!1},d(o){_(e,o),o&&p(i),_(t,o),o&&p(l),_(s,o),o&&p(n),_(r,o),o&&p(u),_(a,o),o&&p(h),_(S,o),o&&p(k),_(C,o),o&&p(B),_(w,o),o&&p(G),_(D,o),o&&p(L),_(T,o)}}}function Fe(c){let e,i,t,l,s,n;const r=[{title:"Templates/Feature article"},{component:null},{argTypes:{}},z(J)];let u={};for(let a=0;a<r.length;a+=1)u=ee(u,r[a]);return e=new oe({props:u}),t=new re({props:{$$slots:{default:[Te,({args:a})=>({3:a}),({args:a})=>a?8:0]},$$scope:{ctx:c}}}),s=new le({props:{name:"Default",args:{}}}),{c(){f(e.$$.fragment),i=b(),f(t.$$.fragment),l=b(),f(s.$$.fragment)},m(a,h){$(e,a,h),m(a,i,h),$(t,a,h),m(a,l,h),$(s,a,h),n=!0},p(a,[h]){const S=h&0?te(r,[r[0],r[1],r[2],ie(z(J))]):{};e.$set(S);const k={};h&17&&(k.$$scope={dirty:h,ctx:a}),t.$set(k)},i(a){n||(g(e.$$.fragment,a),g(t.$$.fragment,a),g(s.$$.fragment,a),n=!0)},o(a){v(e.$$.fragment,a),v(t.$$.fragment,a),v(s.$$.fragment,a),n=!1},d(a){_(e,a),a&&p(i),_(t,a),a&&p(l),_(s,a)}}}function He(c,e,i){const t=["#ddd","#777","#222"];let l=t[0];return[l,t,n=>i(0,l=t[n.detail.index])]}class Q extends V{constructor(e){super(),X(this,e,He,Fe,Z,{})}}Q.__docgen={version:3,name:"FeatureArticle.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const R=ne(Q,{meta:{title:"Templates/Feature article"},stories:{"tpl:default":{storyId:"templates-feature-article--default",name:"default",template:!0,source:`<Header compact />

<Hero
  title="This is an article title"
  lede="This is a short, introductory sentence"
  date="2023-07-04"
>
  <!-- <Checkbox label="Enable animation" variant="ghost" checked={animation} noBorder/> -->
</Hero>

<Filler marginBottom="{false}">
  <p>This is a test paragraph.</p>
  <p>This is another test paragraph.</p>
</Filler>

<Section title="Section title" marginTop="{true}">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
  <Blockquote attribution="A. Person"
    >This is a blockquote, white comprises of a large block of inset text.</Blockquote
  >
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
</Section>

<Grid colwidth="medium" caption="This is a caption text">
  <div class="grid-cell"></div>
  <div class="grid-cell"></div>
  <div class="grid-cell"></div>
</Grid>

<Divider />

<Section title="Another section title">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
</Section>

<Scroller
  id="scroller"
  splitscreen
  on:change="{(e) => (scrollerColor = scrollerColors[e.detail.index])}"
>
  <div slot="background">
    <Grid width="full" height="full">
      <div class="placeholder-block" style:background-color="{scrollerColor}"></div>
    </Grid>
  </div>
  <div slot="foreground">
    <ScrollerSection>
      <p>
        When this first caption is visible, the background will appear <Em
          color="{scrollerColors[0]}">light grey</Em
        >.
      </p>
    </ScrollerSection>
    <ScrollerSection>
      <p>
        When this section caption is visible, the background will appear <Em
          color="{scrollerColors[1]}">dark grey</Em
        >.
      </p>
    </ScrollerSection>
    <ScrollerSection>
      <p>
        When this third caption is visible, the background will appear <Em
          color="{scrollerColors[2]}">black</Em
        >.
      </p>
    </ScrollerSection>
  </div>
</Scroller>

<Section title="Yet another section title">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
</Section>

<Footer compact />`,hasArgs:!0},Default:{storyId:"templates-feature-article--default",name:"Default",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","Header","Hero","Filler","Section","Grid","Blockquote","Em","Divider","Scroller","ScrollerSection","Footer","componentDocs","withComponentDocs"]}),Ke=R.meta,Qe=["Default"],Re=R.stories.Default;export{Re as Default,Qe as __namedExportsOrder,Ke as default};
//# sourceMappingURL=FeatureArticle.stories-59cd30f4.js.map
