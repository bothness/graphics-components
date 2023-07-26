import{S as j,i as B,s as I,q as re,w,y as p,H as F,a as _,u as ue,r as me,v as ce,b as q,t as S,d as b,o as de,f as x,X as z,x as E,j as y,A as L,m as C,Y as R,n as T,D as fe,z as V,E as pe,B as M,Z as Y,F as G,p as ge,k as _e,l as be}from"./index-be4a2627.js";import{p as he,w as X,M as ve,T as we,S as qe}from"./collect-stories-c7256c69.js";import{p as Se}from"./pym.v1-49c58be6.js";import{F as ye,S as O}from"./Section-b898820b.js";import{G as Ce}from"./Grid-91e3fc9e.js";import{S as Te}from"./Select-f41d1aba.js";import"./_commonjsHelpers-725317a4.js";import"./Container-1f03dd2e.js";import"./Theme-9da5b63a.js";import"./themes-9c401ccc.js";import"./utils-dfca2a5c.js";function Ee(n){let e,t;const i=n[2].default,l=re(i,n,n[1],null);return{c(){e=w("div"),l&&l.c(),p(e,"class","embed-container svelte-ubitk5"),F(e,"display","content")},m(o,m){_(o,e,m),l&&l.m(e,null),t=!0},p(o,[m]){l&&l.p&&(!t||m&2)&&ue(l,i,o,o[1],t?ce(i,o[1],m,null):me(o[1]),null)},i(o){t||(q(l,o),t=!0)},o(o){S(l,o),t=!1},d(o){o&&b(e),l&&l.d(o)}}}function Le(n,e,t){let{$$slots:i={},$$scope:l}=e,{pymChild:o=null}=e;return de(()=>{t(0,o=new Se.Child({polling:1e3}))}),n.$$set=m=>{"pymChild"in m&&t(0,o=m.pymChild),"$$scope"in m&&t(1,l=m.$$scope)},[o,l,i]}class W extends j{constructor(e){super(),B(this,e,Le,Ee,I,{pymChild:0})}}W.__docgen={version:3,name:"Embed.svelte",data:[{keywords:[{name:"type",description:"{object}"}],visibility:"public",description:"Binding for pymChild element (can be used to send messages to parent of iframe)",name:"pymChild",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"object",type:"object"},defaultValue:null}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[{keywords:[],visibility:"public",description:"",name:"default"}],refs:[]};function J(n){let e,t;return{c(){e=w("label"),t=fe(n[5]),p(e,"class","ons-label"),p(e,"for",n[1]),V(e,"ons-u-vh",n[6])},m(i,l){_(i,e,l),L(e,t)},p(i,l){l&32&&pe(t,i[5]),l&2&&p(e,"for",i[1]),l&64&&V(e,"ons-u-vh",i[6])},d(i){i&&b(e)}}}function De(n){let e,t=n[27][n[10]].replace(new RegExp(`\\b${n[15]}`,"i"),P)+"";return{c(){e=w("div"),p(e,"slot","item")},m(i,l){_(i,e,l),e.innerHTML=t},p(i,l){l&134251520&&t!==(t=i[27][i[10]].replace(new RegExp(`\\b${i[15]}`,"i"),P)+"")&&(e.innerHTML=t)},d(i){i&&b(e)}}}function ke(n){let e;return{c(){e=w("div"),p(e,"slot","empty"),p(e,"class","svelte-1x60859")},m(t,i){_(t,e,i),e.innerHTML=n[16]},p(t,i){i&65536&&(e.innerHTML=t[16])},d(t){t&&b(e)}}}function Fe(n){let e,t;return{c(){e=G("svg"),t=G("path"),p(t,"fill","currentColor"),p(t,"d","m1.37.15 4.5 5.1 4.5-5.1a.37.37 0 0 1 .6 0l.7.7a.45.45 0 0 1 0 .5l-5.5 6.2a.37.37 0 0 1-.6 0l-5.5-6.1a.64.64 0 0 1 0-.6l.7-.7a.64.64 0 0 1 .6 0Z"),p(e,"xmlns","http://www.w3.org/2000/svg"),p(e,"aria-hidden","true"),p(e,"viewBox","0 0 11.75 7.7"),p(e,"width","18")},m(i,l){_(i,e,l),L(e,t)},d(i){i&&b(e)}}}function Me(n){let e,t;return{c(){e=G("svg"),t=G("path"),p(t,"fill","currentColor"),p(t,"d","M11.86 10.23 8.62 6.99a4.63 4.63 0 1 0-6.34 1.64 4.55 4.55 0 0 0 2.36.64 4.65 4.65 0 0 0 2.33-.65l3.24 3.23a.46.46 0 0 0 .65 0l1-1a.48.48 0 0 0 0-.62Zm-5-3.32a3.28 3.28 0 0 1-2.31.93 3.22 3.22 0 1 1 2.35-.93Z"),p(e,"xmlns","http://www.w3.org/2000/svg"),p(e,"aria-hidden","true"),p(e,"viewBox","0 0 12 12"),p(e,"width","20")},m(i,l){_(i,e,l),L(e,t)},d(i){i&&b(e)}}}function Ae(n){let e;function t(o,m){return o[2]==="search"?Me:Fe}let i=t(n),l=i(n);return{c(){e=w("div"),l.c(),p(e,"slot","chevron-icon"),F(e,"transform",n[2]==="search"?"translateY(2px)":null)},m(o,m){_(o,e,m),l.m(e,null)},p(o,m){i!==(i=t(o))&&(l.d(1),l=i(o),l&&(l.c(),l.m(e,null))),m&4&&F(e,"transform",o[2]==="search"?"translateY(2px)":null)},d(o){o&&b(e),l.d()}}}function Ue(n){let e;return{c(){e=w("div"),e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 14 14" width="18"><path fill="currentColor" d="M13.6 1 l -0.71 -0.71 a 0.5 0.5 0 0 0 -0.71 0 l -5.25 5.25 l -5.25 -5.25 a 0.51 0.51 0 0 0 -0.71 0 l -0.71 0.71 a 0.5 0.5 0 0 0 0 0.71 l 5.25 5.25 l -5.25 5.25 a 0.5 0.5 0 0 0 0 0.71 l 0.71 0.71 a 0.5 0.5 0 0 0 0.71 0 l 5.25 -5.25 l 5.25 5.25 a 0.5 0.5 0 0 0 0.71 0 l 0.71 -0.71 a 0.5 0.5 0 0 0 0 -0.71 l -5.25 -5.25 l 5.25 -5.25 a 0.5 0.5 0 0 0 0 -0.71Z"></path></svg>',p(e,"slot","clear-icon"),F(e,"transform","translateY(2px)")},m(t,i){_(t,e,i)},p:M,d(t){t&&b(e)}}}function Ye(n){let e,t,i,l,o,m,d,f,a=n[5]&&J(n);function v(r){n[20](r)}function u(r){n[21](r)}let c={id:n[1],placeholder:n[7],loadOptions:n[13],itemFilter:n[12],floatingConfig:n[14],items:n[8],itemId:n[9],label:n[10],showChevron:!n[0],multiple:n[3],clearable:n[4],$$slots:{"clear-icon":[Ue],"chevron-icon":[Ae],empty:[ke],item:[De,({item:r})=>({27:r}),({item:r})=>r?134217728:0]},$$scope:{ctx:n}};return n[15]!==void 0&&(c.filterText=n[15]),n[0]!==void 0&&(c.value=n[0]),l=new Te({props:c}),x.push(()=>z(l,"filterText",v)),x.push(()=>z(l,"value",u)),l.$on("input",n[22]),l.$on("change",n[23]),l.$on("focus",n[24]),l.$on("blur",n[25]),l.$on("clear",n[26]),{c(){e=w("div"),a&&a.c(),t=E(),i=w("div"),y(l.$$.fragment),p(i,"class",d="ons-themed-select "+(Number.isInteger(n[11])?`ons-input--w-${n[11]}`:"")+" svelte-1x60859"),p(e,"class","ons-field svelte-1x60859"),p(e,"style",n[17])},m(r,g){_(r,e,g),a&&a.m(e,null),L(e,t),L(e,i),C(l,i,null),f=!0},p(r,[g]){r[5]?a?a.p(r,g):(a=J(r),a.c(),a.m(e,t)):a&&(a.d(1),a=null);const h={};g&2&&(h.id=r[1]),g&128&&(h.placeholder=r[7]),g&8192&&(h.loadOptions=r[13]),g&4096&&(h.itemFilter=r[12]),g&16384&&(h.floatingConfig=r[14]),g&256&&(h.items=r[8]),g&512&&(h.itemId=r[9]),g&1024&&(h.label=r[10]),g&1&&(h.showChevron=!r[0]),g&8&&(h.multiple=r[3]),g&16&&(h.clearable=r[4]),g&402752516&&(h.$$scope={dirty:g,ctx:r}),!o&&g&32768&&(o=!0,h.filterText=r[15],R(()=>o=!1)),!m&&g&1&&(m=!0,h.value=r[0],R(()=>m=!1)),l.$set(h),(!f||g&2048&&d!==(d="ons-themed-select "+(Number.isInteger(r[11])?`ons-input--w-${r[11]}`:"")+" svelte-1x60859"))&&p(i,"class",d),(!f||g&131072)&&p(e,"style",r[17])},i(r){f||(q(l.$$.fragment,r),f=!0)},o(r){S(l.$$.fragment,r),f=!1},d(r){r&&b(e),a&&a.d(),T(l)}}}const P=n=>`<b>${n}</b>`;function Ge(n,e,t){let i,l,{id:o=""}=e,{mode:m="default"}=e,{multiple:d=!1}=e,{maxSelected:f=4}=e,{clearable:a=!0}=e,{label:v=""}=e,{hideLabel:u=!1}=e,{placeholder:c="Select an option"}=e,{value:r=null}=e,{options:g=[]}=e,{idKey:h="id"}=e,{labelKey:A="label"}=e,{width:U=30}=e,{colors:K=["#206095","#a8bd3a","#871a5b","#27a0cc","rgb(0, 60, 87)","rgb(116, 108, 177)","rgb(246, 96, 104)","rgb(0, 163, 166)"]}=e,{itemFilter:H=(s,k,ze)=>s.match(new RegExp(`\\b${k}`,"i"))&&!(d&&(r==null?void 0:r.length)>=f)&&!(m==="search"&&(k==null?void 0:k.length)<3)}=e,{loadOptions:N=null}=e,{floatingConfig:Z={}}=e,D="";function te(s){D=s,t(15,D)}function ie(s){r=s,t(0,r)}function ne(s){Y.call(this,n,s)}function le(s){Y.call(this,n,s)}function oe(s){Y.call(this,n,s)}function ae(s){Y.call(this,n,s)}function se(s){Y.call(this,n,s)}return n.$$set=s=>{"id"in s&&t(1,o=s.id),"mode"in s&&t(2,m=s.mode),"multiple"in s&&t(3,d=s.multiple),"maxSelected"in s&&t(18,f=s.maxSelected),"clearable"in s&&t(4,a=s.clearable),"label"in s&&t(5,v=s.label),"hideLabel"in s&&t(6,u=s.hideLabel),"placeholder"in s&&t(7,c=s.placeholder),"value"in s&&t(0,r=s.value),"options"in s&&t(8,g=s.options),"idKey"in s&&t(9,h=s.idKey),"labelKey"in s&&t(10,A=s.labelKey),"width"in s&&t(11,U=s.width),"colors"in s&&t(19,K=s.colors),"itemFilter"in s&&t(12,H=s.itemFilter),"loadOptions"in s&&t(13,N=s.loadOptions),"floatingConfig"in s&&t(14,Z=s.floatingConfig)},n.$$.update=()=>{n.$$.dirty&524288&&t(17,i=K.map((s,k)=>`--item${k+1}:${s}`).join(";")),n.$$.dirty&294925&&t(16,l=d&&(r==null?void 0:r.length)>=f?`You can only select up to ${f} options`:m==="search"&&D.length<3?"Enter 3 or more characters to see options":D?`No options match <b>${D}</b>`:"No options available")},[r,o,m,d,a,v,u,c,g,h,A,U,H,N,Z,D,l,i,f,K,te,ie,ne,le,oe,ae,se]}class Ke extends j{constructor(e){super(),B(this,e,Ge,Ye,I,{id:1,mode:2,multiple:3,maxSelected:18,clearable:4,label:5,hideLabel:6,placeholder:7,value:0,options:8,idKey:9,labelKey:10,width:11,colors:19,itemFilter:12,loadOptions:13,floatingConfig:14})}}const Q=`A full page article template with compact header and footer, suitable for scrollytelling and other feature articles.

Note: The scroller in this example will not preview correctly in the iframe on this page. You can select the example from the menu instead.

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
`;function Oe(n){let e,t,i,l,o,m,d;return m=new Ke({props:{floatingConfig:{strategy:"fixed"},hideLabel:!0}}),{c(){e=w("div"),t=w("h2"),t.textContent="This is a sub-headline",i=E(),l=w("p"),l.textContent="This is a description for the selector below",o=E(),y(m.$$.fragment),F(l,"font-size","1rem"),F(e,"padding","0 12px")},m(f,a){_(f,e,a),L(e,t),L(e,i),L(e,l),L(e,o),C(m,e,null),d=!0},p:M,i(f){d||(q(m.$$.fragment,f),d=!0)},o(f){S(m.$$.fragment,f),d=!1},d(f){f&&b(e),T(m)}}}function je(n){let e,t,i;return{c(){e=w("p"),e.textContent=`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat..`,t=E(),i=w("p"),i.textContent=`Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.`},m(l,o){_(l,e,o),_(l,t,o),_(l,i,o)},p:M,d(l){l&&b(e),l&&b(t),l&&b(i)}}}function Be(n){let e;return{c(){e=w("div"),p(e,"class","grid-cell svelte-eiifaj")},m(t,i){_(t,e,i)},p:M,d(t){t&&b(e)}}}function Ie(n){let e;return{c(){e=w("p"),e.textContent=`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur.`},m(t,i){_(t,e,i)},p:M,d(t){t&&b(e)}}}function He(n){let e;return{c(){e=w("p"),e.textContent=`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.`},m(t,i){_(t,e,i)},p:M,d(t){t&&b(e)}}}function Ne(n){let e,t,i,l,o,m,d,f,a,v;return e=new ye({props:{height:"auto",marginBottom:!1,$$slots:{default:[Oe]},$$scope:{ctx:n}}}),i=new O({props:{title:"Section title",marginTop:!0,$$slots:{default:[je]},$$scope:{ctx:n}}}),o=new Ce({props:{colwidth:"medium",caption:"This is a caption text",$$slots:{default:[Be]},$$scope:{ctx:n}}}),d=new O({props:{title:"Another section title",$$slots:{default:[Ie]},$$scope:{ctx:n}}}),a=new O({props:{title:"Yet another section title",$$slots:{default:[He]},$$scope:{ctx:n}}}),{c(){y(e.$$.fragment),t=E(),y(i.$$.fragment),l=E(),y(o.$$.fragment),m=E(),y(d.$$.fragment),f=E(),y(a.$$.fragment)},m(u,c){C(e,u,c),_(u,t,c),C(i,u,c),_(u,l,c),C(o,u,c),_(u,m,c),C(d,u,c),_(u,f,c),C(a,u,c),v=!0},p(u,c){const r={};c&2&&(r.$$scope={dirty:c,ctx:u}),e.$set(r);const g={};c&2&&(g.$$scope={dirty:c,ctx:u}),i.$set(g);const h={};c&2&&(h.$$scope={dirty:c,ctx:u}),o.$set(h);const A={};c&2&&(A.$$scope={dirty:c,ctx:u}),d.$set(A);const U={};c&2&&(U.$$scope={dirty:c,ctx:u}),a.$set(U)},i(u){v||(q(e.$$.fragment,u),q(i.$$.fragment,u),q(o.$$.fragment,u),q(d.$$.fragment,u),q(a.$$.fragment,u),v=!0)},o(u){S(e.$$.fragment,u),S(i.$$.fragment,u),S(o.$$.fragment,u),S(d.$$.fragment,u),S(a.$$.fragment,u),v=!1},d(u){T(e,u),u&&b(t),T(i,u),u&&b(l),T(o,u),u&&b(m),T(d,u),u&&b(f),T(a,u)}}}function Ze(n){let e,t;return e=new W({props:{$$slots:{default:[Ne]},$$scope:{ctx:n}}}),{c(){y(e.$$.fragment)},m(i,l){C(e,i,l),t=!0},p(i,l){const o={};l&2&&(o.$$scope={dirty:l,ctx:i}),e.$set(o)},i(i){t||(q(e.$$.fragment,i),t=!0)},o(i){S(e.$$.fragment,i),t=!1},d(i){T(e,i)}}}function xe(n){let e,t,i,l,o,m;const d=[{title:"Templates/Embed article"},{component:null},{argTypes:{}},X(Q)];let f={};for(let a=0;a<d.length;a+=1)f=ge(f,d[a]);return e=new ve({props:f}),i=new we({props:{$$slots:{default:[Ze,({args:a})=>({0:a}),({args:a})=>a?1:0]},$$scope:{ctx:n}}}),o=new qe({props:{name:"Default",args:{}}}),{c(){y(e.$$.fragment),t=E(),y(i.$$.fragment),l=E(),y(o.$$.fragment)},m(a,v){C(e,a,v),_(a,t,v),C(i,a,v),_(a,l,v),C(o,a,v),m=!0},p(a,[v]){const u=v&0?_e(d,[d[0],d[1],d[2],be(X(Q))]):{};e.$set(u);const c={};v&2&&(c.$$scope={dirty:v,ctx:a}),i.$set(c)},i(a){m||(q(e.$$.fragment,a),q(i.$$.fragment,a),q(o.$$.fragment,a),m=!0)},o(a){S(e.$$.fragment,a),S(i.$$.fragment,a),S(o.$$.fragment,a),m=!1},d(a){T(e,a),a&&b(t),T(i,a),a&&b(l),T(o,a)}}}class $ extends j{constructor(e){super(),B(this,e,null,xe,I,{})}}$.__docgen={version:3,name:"EmbedArticle.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const ee=he($,{meta:{title:"Templates/Embed article"},stories:{"tpl:default":{storyId:"templates-embed-article--default",name:"default",template:!0,source:`<Embed>
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
</Embed>`,hasArgs:!0},Default:{storyId:"templates-embed-article--default",name:"Default",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","Embed","Filler","Section","Grid","Select","componentDocs","withComponentDocs"]}),nt=ee.meta,lt=["Default"],ot=ee.stories.Default;export{ot as Default,lt as __namedExportsOrder,nt as default};
//# sourceMappingURL=EmbedArticle.stories-5de914dd.js.map
