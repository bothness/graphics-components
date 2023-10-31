import{S as V,i as X,s as Z,p as ee,j as f,w as _,m as $,a as m,k as te,l as ie,b as g,t as h,n as v,d as p,x as q,N as B,C as H,H as E,I as k,y as O}from"./index-4c87ff1b.js";import{p as ne,w as z,M as oe,T as re,S as le}from"./collect-stories-1e766e4e.js";import{H as se}from"./Header-102094e2.js";import{H as ae}from"./Hero-c1c0a378.js";import{H as ue}from"./Highlight-762fd423.js";import{S as U}from"./Section-0fbdd1d1.js";import{G as K}from"./Grid-d1edd8b9.js";import{B as ce}from"./Blockquote-03e1f6a3.js";import{E as j}from"./Em-7f4445b9.js";import{D as me}from"./Divider-add97061.js";import{S as pe,a as W}from"./ScrollerSection-44d4ea08.js";import{F as de}from"./Footer-75adf040.js";import"./Theme-79c618b0.js";import"./utils-f6662b64.js";import"./Container-5a878ab8.js";import"./_commonjsHelpers-725317a4.js";const J=`A full page article template with compact header and footer, suitable for scrollytelling and other feature articles.

Note: The scroller in this example will not preview correctly in the iframe on this page. You can select the example from the menu instead.

<!-- prettier-ignore -->
\`\`\`html
<!-- +page.svelte -->
<script>
  import "@onsvisual/svelte-components/css/main.css"; // This is more typically imported in the global +layout.svelte
  import {
    Header,
    Hero,
    Highlight,
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

<Highlight marginBottom="{false}">
  <p>This is a test paragraph.</p>
  <p>This is another test paragraph.</p>
</Highlight>

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
`;function fe(c){let e,i,t;return{c(){e=q("p"),e.textContent="This is a test paragraph.",i=_(),t=q("p"),t.textContent="This is another test paragraph."},m(l,s){m(l,e,s),m(l,i,s),m(l,t,s)},p:B,d(l){l&&p(e),l&&p(i),l&&p(t)}}}function $e(c){let e;return{c(){e=k("This is a blockquote, white comprises of a large block of inset text.")},m(i,t){m(i,e,t)},d(i){i&&p(e)}}}function ge(c){let e,i,t,l,s,o;return t=new ce({props:{attribution:"A. Person",$$slots:{default:[$e]},$$scope:{ctx:c}}}),{c(){e=q("p"),e.textContent=`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,i=_(),f(t.$$.fragment),l=_(),s=q("p"),s.textContent=`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`},m(r,u){m(r,e,u),m(r,i,u),$(t,r,u),m(r,l,u),m(r,s,u),o=!0},p(r,u){const a={};u&64&&(a.$$scope={dirty:u,ctx:r}),t.$set(a)},i(r){o||(g(t.$$.fragment,r),o=!0)},o(r){h(t.$$.fragment,r),o=!1},d(r){r&&p(e),r&&p(i),v(t,r),r&&p(l),r&&p(s)}}}function he(c){let e,i,t,l,s;return{c(){e=q("div"),i=_(),t=q("div"),l=_(),s=q("div"),H(e,"class","grid-cell svelte-eiifaj"),H(t,"class","grid-cell svelte-eiifaj"),H(s,"class","grid-cell svelte-eiifaj")},m(o,r){m(o,e,r),m(o,i,r),m(o,t,r),m(o,l,r),m(o,s,r)},p:B,d(o){o&&p(e),o&&p(i),o&&p(t),o&&p(l),o&&p(s)}}}function ve(c){let e;return{c(){e=q("p"),e.textContent=`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`},m(i,t){m(i,e,t)},p:B,d(i){i&&p(e)}}}function _e(c){let e;return{c(){e=q("div"),H(e,"class","placeholder-block"),O(e,"background-color",c[0])},m(i,t){m(i,e,t)},p(i,t){t&1&&O(e,"background-color",i[0])},d(i){i&&p(e)}}}function be(c){let e,i,t;return i=new K({props:{width:"full",height:"full",$$slots:{default:[_e]},$$scope:{ctx:c}}}),{c(){e=q("div"),f(i.$$.fragment),H(e,"slot","background")},m(l,s){m(l,e,s),$(i,e,null),t=!0},p(l,s){const o={};s&65&&(o.$$scope={dirty:s,ctx:l}),i.$set(o)},i(l){t||(g(i.$$.fragment,l),t=!0)},o(l){h(i.$$.fragment,l),t=!1},d(l){l&&p(e),v(i)}}}function qe(c){let e;return{c(){e=k("light grey")},m(i,t){m(i,e,t)},d(i){i&&p(e)}}}function Se(c){let e,i,t,l,s;return t=new j({props:{color:c[1][0],$$slots:{default:[qe]},$$scope:{ctx:c}}}),{c(){e=q("p"),i=k("When this first caption is visible, the background will appear "),f(t.$$.fragment),l=k(".")},m(o,r){m(o,e,r),E(e,i),$(t,e,null),E(e,l),s=!0},p(o,r){const u={};r&64&&(u.$$scope={dirty:r,ctx:o}),t.$set(u)},i(o){s||(g(t.$$.fragment,o),s=!0)},o(o){h(t.$$.fragment,o),s=!1},d(o){o&&p(e),v(t)}}}function xe(c){let e;return{c(){e=k("dark grey")},m(i,t){m(i,e,t)},d(i){i&&p(e)}}}function ke(c){let e,i,t,l,s;return t=new j({props:{color:c[1][1],$$slots:{default:[xe]},$$scope:{ctx:c}}}),{c(){e=q("p"),i=k("When this section caption is visible, the background will appear "),f(t.$$.fragment),l=k(".")},m(o,r){m(o,e,r),E(e,i),$(t,e,null),E(e,l),s=!0},p(o,r){const u={};r&64&&(u.$$scope={dirty:r,ctx:o}),t.$set(u)},i(o){s||(g(t.$$.fragment,o),s=!0)},o(o){h(t.$$.fragment,o),s=!1},d(o){o&&p(e),v(t)}}}function we(c){let e;return{c(){e=k("black")},m(i,t){m(i,e,t)},d(i){i&&p(e)}}}function Ee(c){let e,i,t,l,s;return t=new j({props:{color:c[1][2],$$slots:{default:[we]},$$scope:{ctx:c}}}),{c(){e=q("p"),i=k("When this third caption is visible, the background will appear "),f(t.$$.fragment),l=k(".")},m(o,r){m(o,e,r),E(e,i),$(t,e,null),E(e,l),s=!0},p(o,r){const u={};r&64&&(u.$$scope={dirty:r,ctx:o}),t.$set(u)},i(o){s||(g(t.$$.fragment,o),s=!0)},o(o){h(t.$$.fragment,o),s=!1},d(o){o&&p(e),v(t)}}}function Ce(c){let e,i,t,l,s,o,r;return i=new W({props:{$$slots:{default:[Se]},$$scope:{ctx:c}}}),l=new W({props:{$$slots:{default:[ke]},$$scope:{ctx:c}}}),o=new W({props:{$$slots:{default:[Ee]},$$scope:{ctx:c}}}),{c(){e=q("div"),f(i.$$.fragment),t=_(),f(l.$$.fragment),s=_(),f(o.$$.fragment),H(e,"slot","foreground")},m(u,a){m(u,e,a),$(i,e,null),E(e,t),$(l,e,null),E(e,s),$(o,e,null),r=!0},p(u,a){const b={};a&64&&(b.$$scope={dirty:a,ctx:u}),i.$set(b);const S={};a&64&&(S.$$scope={dirty:a,ctx:u}),l.$set(S);const w={};a&64&&(w.$$scope={dirty:a,ctx:u}),o.$set(w)},i(u){r||(g(i.$$.fragment,u),g(l.$$.fragment,u),g(o.$$.fragment,u),r=!0)},o(u){h(i.$$.fragment,u),h(l.$$.fragment,u),h(o.$$.fragment,u),r=!1},d(u){u&&p(e),v(i),v(l),v(o)}}}function De(c){let e;return{c(){e=q("p"),e.textContent=`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`},m(i,t){m(i,e,t)},p:B,d(i){i&&p(e)}}}function Te(c){let e,i,t,l,s,o,r,u,a,b,S,w,C,F,x,G,D,L,T,A;return e=new se({props:{compact:!0}}),t=new ae({props:{title:"This is an article title",lede:"This is a short, introductory sentence",date:"2023-07-04"}}),s=new ue({props:{marginBottom:!1,$$slots:{default:[fe]},$$scope:{ctx:c}}}),r=new U({props:{title:"Section title",marginTop:!0,$$slots:{default:[ge]},$$scope:{ctx:c}}}),a=new K({props:{colwidth:"medium",caption:"This is a caption text",$$slots:{default:[he]},$$scope:{ctx:c}}}),S=new me({}),C=new U({props:{title:"Another section title",$$slots:{default:[ve]},$$scope:{ctx:c}}}),x=new pe({props:{id:"scroller",splitscreen:!0,$$slots:{foreground:[Ce],background:[be]},$$scope:{ctx:c}}}),x.$on("change",c[2]),x.$on("enter",c[3]),x.$on("exit",c[4]),D=new U({props:{title:"Yet another section title",$$slots:{default:[De]},$$scope:{ctx:c}}}),T=new de({props:{compact:!0}}),{c(){f(e.$$.fragment),i=_(),f(t.$$.fragment),l=_(),f(s.$$.fragment),o=_(),f(r.$$.fragment),u=_(),f(a.$$.fragment),b=_(),f(S.$$.fragment),w=_(),f(C.$$.fragment),F=_(),f(x.$$.fragment),G=_(),f(D.$$.fragment),L=_(),f(T.$$.fragment)},m(n,d){$(e,n,d),m(n,i,d),$(t,n,d),m(n,l,d),$(s,n,d),m(n,o,d),$(r,n,d),m(n,u,d),$(a,n,d),m(n,b,d),$(S,n,d),m(n,w,d),$(C,n,d),m(n,F,d),$(x,n,d),m(n,G,d),$(D,n,d),m(n,L,d),$(T,n,d),A=!0},p(n,d){const y={};d&64&&(y.$$scope={dirty:d,ctx:n}),s.$set(y);const I={};d&64&&(I.$$scope={dirty:d,ctx:n}),r.$set(I);const M={};d&64&&(M.$$scope={dirty:d,ctx:n}),a.$set(M);const Y={};d&64&&(Y.$$scope={dirty:d,ctx:n}),C.$set(Y);const P={};d&65&&(P.$$scope={dirty:d,ctx:n}),x.$set(P);const N={};d&64&&(N.$$scope={dirty:d,ctx:n}),D.$set(N)},i(n){A||(g(e.$$.fragment,n),g(t.$$.fragment,n),g(s.$$.fragment,n),g(r.$$.fragment,n),g(a.$$.fragment,n),g(S.$$.fragment,n),g(C.$$.fragment,n),g(x.$$.fragment,n),g(D.$$.fragment,n),g(T.$$.fragment,n),A=!0)},o(n){h(e.$$.fragment,n),h(t.$$.fragment,n),h(s.$$.fragment,n),h(r.$$.fragment,n),h(a.$$.fragment,n),h(S.$$.fragment,n),h(C.$$.fragment,n),h(x.$$.fragment,n),h(D.$$.fragment,n),h(T.$$.fragment,n),A=!1},d(n){v(e,n),n&&p(i),v(t,n),n&&p(l),v(s,n),n&&p(o),v(r,n),n&&p(u),v(a,n),n&&p(b),v(S,n),n&&p(w),v(C,n),n&&p(F),v(x,n),n&&p(G),v(D,n),n&&p(L),v(T,n)}}}function He(c){let e,i,t,l,s,o;const r=[{title:"Templates/Feature article"},{component:null},{argTypes:{}},z(J)];let u={};for(let a=0;a<r.length;a+=1)u=ee(u,r[a]);return e=new oe({props:u}),t=new re({props:{$$slots:{default:[Te,({args:a})=>({5:a}),({args:a})=>a?32:0]},$$scope:{ctx:c}}}),s=new le({props:{name:"Default",args:{}}}),{c(){f(e.$$.fragment),i=_(),f(t.$$.fragment),l=_(),f(s.$$.fragment)},m(a,b){$(e,a,b),m(a,i,b),$(t,a,b),m(a,l,b),$(s,a,b),o=!0},p(a,[b]){const S=b&0?te(r,[r[0],r[1],r[2],ie(z(J))]):{};e.$set(S);const w={};b&65&&(w.$$scope={dirty:b,ctx:a}),t.$set(w)},i(a){o||(g(e.$$.fragment,a),g(t.$$.fragment,a),g(s.$$.fragment,a),o=!0)},o(a){h(e.$$.fragment,a),h(t.$$.fragment,a),h(s.$$.fragment,a),o=!1},d(a){v(e,a),a&&p(i),v(t,a),a&&p(l),v(s,a)}}}function Ae(c,e,i){const t=["#ddd","#777","#222"];let l=t[0];return[l,t,u=>{i(0,l=t[u.detail.index]),console.debug("change",u)},u=>console.debug("enter",u),u=>console.debug("exit",u)]}class Q extends V{constructor(e){super(),X(this,e,Ae,He,Z,{})}}Q.__docgen={version:3,name:"FeatureArticle.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const R=ne(Q,{meta:{title:"Templates/Feature article"},stories:{"tpl:default":{storyId:"templates-feature-article--default",name:"default",template:!0,source:`<Header compact />

<Hero
  title="This is an article title"
  lede="This is a short, introductory sentence"
  date="2023-07-04"
>
  <!-- <Checkbox label="Enable animation" variant="ghost" checked={animation} noBorder/> -->
</Hero>

<Highlight marginBottom="{false}">
  <p>This is a test paragraph.</p>
  <p>This is another test paragraph.</p>
</Highlight>

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
  on:change="{(e) => {
    scrollerColor = scrollerColors[e.detail.index];
    console.debug('change', e);
  }}"
  on:enter="{(e) => console.debug('enter', e)}"
  on:exit="{(e) => console.debug('exit', e)}"
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

<Footer compact />`,hasArgs:!0},Default:{storyId:"templates-feature-article--default",name:"Default",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","Header","Hero","Highlight","Section","Grid","Blockquote","Em","Divider","Scroller","ScrollerSection","Footer","componentDocs","withComponentDocs"]}),Ke=R.meta,Qe=["Default"],Re=R.stories.Default;export{Re as Default,Qe as __namedExportsOrder,Ke as default};
//# sourceMappingURL=FeatureArticle.stories-4e1a6e0e.js.map
