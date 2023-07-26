import{S as j,i as B,s as I,q as re,u as ue,r as me,v as ce,b as q,t as S,o as de,f as z,W as Z,w,z as E,j as y,x as g,a as h,B as L,m as C,X as R,d as b,n as T,A as fe,E as V,C as pe,D as Y,F,Y as U,y as G,p as ge,k as _e,l as he}from"./index-ec07ce5f.js";import{p as be,w as W,M as ve,T as we,S as qe}from"./collect-stories-e5908286.js";import{p as Se}from"./pym.v1-49c58be6.js";import{F as ye,S as O}from"./Section-2bfcb119.js";import{G as Ce}from"./Grid-cfca564f.js";import{S as Te}from"./Select-e78b7965.js";import"./_commonjsHelpers-725317a4.js";import"./Container-084263ee.js";import"./Theme-d829395d.js";import"./themes-9c401ccc.js";import"./utils-fbf4892b.js";function Ee(l){let e;const t=l[2].default,i=re(t,l,l[1],null);return{c(){i&&i.c()},m(n,s){i&&i.m(n,s),e=!0},p(n,[s]){i&&i.p&&(!e||s&2)&&ue(i,t,n,n[1],e?ce(t,n[1],s,null):me(n[1]),null)},i(n){e||(q(i,n),e=!0)},o(n){S(i,n),e=!1},d(n){i&&i.d(n)}}}function Le(l,e,t){let{$$slots:i={},$$scope:n}=e,{pymChild:s=null}=e;return de(()=>{t(0,s=new Se.Child({polling:1e3}))}),l.$$set=m=>{"pymChild"in m&&t(0,s=m.pymChild),"$$scope"in m&&t(1,n=m.$$scope)},[s,n,i]}class Q extends j{constructor(e){super(),B(this,e,Le,Ee,I,{pymChild:0})}}Q.__docgen={version:3,name:"Embed.svelte",data:[{keywords:[{name:"type",description:"{object}"}],visibility:"public",description:"Binding for pymChild element (can be used to send messages to parent of iframe)",name:"pymChild",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"object",type:"object"},defaultValue:null}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[{keywords:[],visibility:"public",description:"",name:"default"}],refs:[]};function X(l){let e,t;return{c(){e=w("label"),t=fe(l[5]),g(e,"class","ons-label"),g(e,"for",l[1]),V(e,"ons-u-vh",l[6])},m(i,n){h(i,e,n),L(e,t)},p(i,n){n&32&&pe(t,i[5]),n&2&&g(e,"for",i[1]),n&64&&V(e,"ons-u-vh",i[6])},d(i){i&&b(e)}}}function De(l){let e,t=l[27][l[10]].replace(new RegExp(`\\b${l[15]}`,"i"),J)+"";return{c(){e=w("div"),g(e,"slot","item")},m(i,n){h(i,e,n),e.innerHTML=t},p(i,n){n&134251520&&t!==(t=i[27][i[10]].replace(new RegExp(`\\b${i[15]}`,"i"),J)+"")&&(e.innerHTML=t)},d(i){i&&b(e)}}}function ke(l){let e;return{c(){e=w("div"),g(e,"slot","empty"),g(e,"class","svelte-1x60859")},m(t,i){h(t,e,i),e.innerHTML=l[16]},p(t,i){i&65536&&(e.innerHTML=t[16])},d(t){t&&b(e)}}}function Fe(l){let e,t;return{c(){e=G("svg"),t=G("path"),g(t,"fill","currentColor"),g(t,"d","m1.37.15 4.5 5.1 4.5-5.1a.37.37 0 0 1 .6 0l.7.7a.45.45 0 0 1 0 .5l-5.5 6.2a.37.37 0 0 1-.6 0l-5.5-6.1a.64.64 0 0 1 0-.6l.7-.7a.64.64 0 0 1 .6 0Z"),g(e,"xmlns","http://www.w3.org/2000/svg"),g(e,"aria-hidden","true"),g(e,"viewBox","0 0 11.75 7.7"),g(e,"width","18")},m(i,n){h(i,e,n),L(e,t)},d(i){i&&b(e)}}}function Me(l){let e,t;return{c(){e=G("svg"),t=G("path"),g(t,"fill","currentColor"),g(t,"d","M11.86 10.23 8.62 6.99a4.63 4.63 0 1 0-6.34 1.64 4.55 4.55 0 0 0 2.36.64 4.65 4.65 0 0 0 2.33-.65l3.24 3.23a.46.46 0 0 0 .65 0l1-1a.48.48 0 0 0 0-.62Zm-5-3.32a3.28 3.28 0 0 1-2.31.93 3.22 3.22 0 1 1 2.35-.93Z"),g(e,"xmlns","http://www.w3.org/2000/svg"),g(e,"aria-hidden","true"),g(e,"viewBox","0 0 12 12"),g(e,"width","20")},m(i,n){h(i,e,n),L(e,t)},d(i){i&&b(e)}}}function Ae(l){let e;function t(s,m){return s[2]==="search"?Me:Fe}let i=t(l),n=i(l);return{c(){e=w("div"),n.c(),g(e,"slot","chevron-icon"),Y(e,"transform",l[2]==="search"?"translateY(2px)":null)},m(s,m){h(s,e,m),n.m(e,null)},p(s,m){i!==(i=t(s))&&(n.d(1),n=i(s),n&&(n.c(),n.m(e,null))),m&4&&Y(e,"transform",s[2]==="search"?"translateY(2px)":null)},d(s){s&&b(e),n.d()}}}function Ue(l){let e;return{c(){e=w("div"),e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 14 14" width="18"><path fill="currentColor" d="M13.6 1 l -0.71 -0.71 a 0.5 0.5 0 0 0 -0.71 0 l -5.25 5.25 l -5.25 -5.25 a 0.51 0.51 0 0 0 -0.71 0 l -0.71 0.71 a 0.5 0.5 0 0 0 0 0.71 l 5.25 5.25 l -5.25 5.25 a 0.5 0.5 0 0 0 0 0.71 l 0.71 0.71 a 0.5 0.5 0 0 0 0.71 0 l 5.25 -5.25 l 5.25 5.25 a 0.5 0.5 0 0 0 0.71 0 l 0.71 -0.71 a 0.5 0.5 0 0 0 0 -0.71 l -5.25 -5.25 l 5.25 -5.25 a 0.5 0.5 0 0 0 0 -0.71Z"></path></svg>',g(e,"slot","clear-icon"),Y(e,"transform","translateY(2px)")},m(t,i){h(t,e,i)},p:F,d(t){t&&b(e)}}}function Ye(l){let e,t,i,n,s,m,d,f,o=l[5]&&X(l);function v(r){l[20](r)}function u(r){l[21](r)}let c={id:l[1],placeholder:l[7],loadOptions:l[13],itemFilter:l[12],floatingConfig:l[14],items:l[8],itemId:l[9],label:l[10],showChevron:!l[0],multiple:l[3],clearable:l[4],$$slots:{"clear-icon":[Ue],"chevron-icon":[Ae],empty:[ke],item:[De,({item:r})=>({27:r}),({item:r})=>r?134217728:0]},$$scope:{ctx:l}};return l[15]!==void 0&&(c.filterText=l[15]),l[0]!==void 0&&(c.value=l[0]),n=new Te({props:c}),z.push(()=>Z(n,"filterText",v)),z.push(()=>Z(n,"value",u)),n.$on("input",l[22]),n.$on("change",l[23]),n.$on("focus",l[24]),n.$on("blur",l[25]),n.$on("clear",l[26]),{c(){e=w("div"),o&&o.c(),t=E(),i=w("div"),y(n.$$.fragment),g(i,"class",d="ons-themed-select "+(Number.isInteger(l[11])?`ons-input--w-${l[11]}`:"")+" svelte-1x60859"),g(e,"class","ons-field svelte-1x60859"),g(e,"style",l[17])},m(r,p){h(r,e,p),o&&o.m(e,null),L(e,t),L(e,i),C(n,i,null),f=!0},p(r,[p]){r[5]?o?o.p(r,p):(o=X(r),o.c(),o.m(e,t)):o&&(o.d(1),o=null);const _={};p&2&&(_.id=r[1]),p&128&&(_.placeholder=r[7]),p&8192&&(_.loadOptions=r[13]),p&4096&&(_.itemFilter=r[12]),p&16384&&(_.floatingConfig=r[14]),p&256&&(_.items=r[8]),p&512&&(_.itemId=r[9]),p&1024&&(_.label=r[10]),p&1&&(_.showChevron=!r[0]),p&8&&(_.multiple=r[3]),p&16&&(_.clearable=r[4]),p&402752516&&(_.$$scope={dirty:p,ctx:r}),!s&&p&32768&&(s=!0,_.filterText=r[15],R(()=>s=!1)),!m&&p&1&&(m=!0,_.value=r[0],R(()=>m=!1)),n.$set(_),(!f||p&2048&&d!==(d="ons-themed-select "+(Number.isInteger(r[11])?`ons-input--w-${r[11]}`:"")+" svelte-1x60859"))&&g(i,"class",d),(!f||p&131072)&&g(e,"style",r[17])},i(r){f||(q(n.$$.fragment,r),f=!0)},o(r){S(n.$$.fragment,r),f=!1},d(r){r&&b(e),o&&o.d(),T(n)}}}const J=l=>`<b>${l}</b>`;function Ge(l,e,t){let i,n,{id:s=""}=e,{mode:m="default"}=e,{multiple:d=!1}=e,{maxSelected:f=4}=e,{clearable:o=!0}=e,{label:v=""}=e,{hideLabel:u=!1}=e,{placeholder:c="Select an option"}=e,{value:r=null}=e,{options:p=[]}=e,{idKey:_="id"}=e,{labelKey:M="label"}=e,{width:A=30}=e,{colors:K=["#206095","#a8bd3a","#871a5b","#27a0cc","rgb(0, 60, 87)","rgb(116, 108, 177)","rgb(246, 96, 104)","rgb(0, 163, 166)"]}=e,{itemFilter:H=(a,k,Ze)=>a.match(new RegExp(`\\b${k}`,"i"))&&!(d&&(r==null?void 0:r.length)>=f)&&!(m==="search"&&(k==null?void 0:k.length)<3)}=e,{loadOptions:N=null}=e,{floatingConfig:x={}}=e,D="";function te(a){D=a,t(15,D)}function ie(a){r=a,t(0,r)}function ne(a){U.call(this,l,a)}function le(a){U.call(this,l,a)}function oe(a){U.call(this,l,a)}function ae(a){U.call(this,l,a)}function se(a){U.call(this,l,a)}return l.$$set=a=>{"id"in a&&t(1,s=a.id),"mode"in a&&t(2,m=a.mode),"multiple"in a&&t(3,d=a.multiple),"maxSelected"in a&&t(18,f=a.maxSelected),"clearable"in a&&t(4,o=a.clearable),"label"in a&&t(5,v=a.label),"hideLabel"in a&&t(6,u=a.hideLabel),"placeholder"in a&&t(7,c=a.placeholder),"value"in a&&t(0,r=a.value),"options"in a&&t(8,p=a.options),"idKey"in a&&t(9,_=a.idKey),"labelKey"in a&&t(10,M=a.labelKey),"width"in a&&t(11,A=a.width),"colors"in a&&t(19,K=a.colors),"itemFilter"in a&&t(12,H=a.itemFilter),"loadOptions"in a&&t(13,N=a.loadOptions),"floatingConfig"in a&&t(14,x=a.floatingConfig)},l.$$.update=()=>{l.$$.dirty&524288&&t(17,i=K.map((a,k)=>`--item${k+1}:${a}`).join(";")),l.$$.dirty&294925&&t(16,n=d&&(r==null?void 0:r.length)>=f?`You can only select up to ${f} options`:m==="search"&&D.length<3?"Enter 3 or more characters to see options":D?`No options match <b>${D}</b>`:"No options available")},[r,s,m,d,o,v,u,c,p,_,M,A,H,N,x,D,n,i,f,K,te,ie,ne,le,oe,ae,se]}class Ke extends j{constructor(e){super(),B(this,e,Ge,Ye,I,{id:1,mode:2,multiple:3,maxSelected:18,clearable:4,label:5,hideLabel:6,placeholder:7,value:0,options:8,idKey:9,labelKey:10,width:11,colors:19,itemFilter:12,loadOptions:13,floatingConfig:14})}}const P=`A full page article template with compact header and footer, suitable for scrollytelling and other feature articles.

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
`;function Oe(l){let e,t,i,n,s,m,d;return m=new Ke({props:{floatingConfig:{strategy:"fixed"},hideLabel:!0}}),{c(){e=w("div"),t=w("h2"),t.textContent="This is a sub-headline",i=E(),n=w("p"),n.textContent="This is a description for the selector below",s=E(),y(m.$$.fragment),Y(n,"font-size","1rem"),Y(e,"padding","0 12px")},m(f,o){h(f,e,o),L(e,t),L(e,i),L(e,n),L(e,s),C(m,e,null),d=!0},p:F,i(f){d||(q(m.$$.fragment,f),d=!0)},o(f){S(m.$$.fragment,f),d=!1},d(f){f&&b(e),T(m)}}}function je(l){let e,t,i;return{c(){e=w("p"),e.textContent=`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat..`,t=E(),i=w("p"),i.textContent=`Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.`},m(n,s){h(n,e,s),h(n,t,s),h(n,i,s)},p:F,d(n){n&&b(e),n&&b(t),n&&b(i)}}}function Be(l){let e;return{c(){e=w("div"),g(e,"class","grid-cell svelte-eiifaj")},m(t,i){h(t,e,i)},p:F,d(t){t&&b(e)}}}function Ie(l){let e;return{c(){e=w("p"),e.textContent=`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur.`},m(t,i){h(t,e,i)},p:F,d(t){t&&b(e)}}}function He(l){let e;return{c(){e=w("p"),e.textContent=`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.`},m(t,i){h(t,e,i)},p:F,d(t){t&&b(e)}}}function Ne(l){let e,t,i,n,s,m,d,f,o,v;return e=new ye({props:{height:"auto",marginBottom:!1,$$slots:{default:[Oe]},$$scope:{ctx:l}}}),i=new O({props:{title:"Section title",marginTop:!0,$$slots:{default:[je]},$$scope:{ctx:l}}}),s=new Ce({props:{colwidth:"medium",caption:"This is a caption text",$$slots:{default:[Be]},$$scope:{ctx:l}}}),d=new O({props:{title:"Another section title",$$slots:{default:[Ie]},$$scope:{ctx:l}}}),o=new O({props:{title:"Yet another section title",$$slots:{default:[He]},$$scope:{ctx:l}}}),{c(){y(e.$$.fragment),t=E(),y(i.$$.fragment),n=E(),y(s.$$.fragment),m=E(),y(d.$$.fragment),f=E(),y(o.$$.fragment)},m(u,c){C(e,u,c),h(u,t,c),C(i,u,c),h(u,n,c),C(s,u,c),h(u,m,c),C(d,u,c),h(u,f,c),C(o,u,c),v=!0},p(u,c){const r={};c&2&&(r.$$scope={dirty:c,ctx:u}),e.$set(r);const p={};c&2&&(p.$$scope={dirty:c,ctx:u}),i.$set(p);const _={};c&2&&(_.$$scope={dirty:c,ctx:u}),s.$set(_);const M={};c&2&&(M.$$scope={dirty:c,ctx:u}),d.$set(M);const A={};c&2&&(A.$$scope={dirty:c,ctx:u}),o.$set(A)},i(u){v||(q(e.$$.fragment,u),q(i.$$.fragment,u),q(s.$$.fragment,u),q(d.$$.fragment,u),q(o.$$.fragment,u),v=!0)},o(u){S(e.$$.fragment,u),S(i.$$.fragment,u),S(s.$$.fragment,u),S(d.$$.fragment,u),S(o.$$.fragment,u),v=!1},d(u){T(e,u),u&&b(t),T(i,u),u&&b(n),T(s,u),u&&b(m),T(d,u),u&&b(f),T(o,u)}}}function xe(l){let e,t;return e=new Q({props:{$$slots:{default:[Ne]},$$scope:{ctx:l}}}),{c(){y(e.$$.fragment)},m(i,n){C(e,i,n),t=!0},p(i,n){const s={};n&2&&(s.$$scope={dirty:n,ctx:i}),e.$set(s)},i(i){t||(q(e.$$.fragment,i),t=!0)},o(i){S(e.$$.fragment,i),t=!1},d(i){T(e,i)}}}function ze(l){let e,t,i,n,s,m;const d=[{title:"Templates/Embed article"},{component:null},{argTypes:{}},W(P)];let f={};for(let o=0;o<d.length;o+=1)f=ge(f,d[o]);return e=new ve({props:f}),i=new we({props:{$$slots:{default:[xe,({args:o})=>({0:o}),({args:o})=>o?1:0]},$$scope:{ctx:l}}}),s=new qe({props:{name:"Default",args:{}}}),{c(){y(e.$$.fragment),t=E(),y(i.$$.fragment),n=E(),y(s.$$.fragment)},m(o,v){C(e,o,v),h(o,t,v),C(i,o,v),h(o,n,v),C(s,o,v),m=!0},p(o,[v]){const u=v&0?_e(d,[d[0],d[1],d[2],he(W(P))]):{};e.$set(u);const c={};v&2&&(c.$$scope={dirty:v,ctx:o}),i.$set(c)},i(o){m||(q(e.$$.fragment,o),q(i.$$.fragment,o),q(s.$$.fragment,o),m=!0)},o(o){S(e.$$.fragment,o),S(i.$$.fragment,o),S(s.$$.fragment,o),m=!1},d(o){T(e,o),o&&b(t),T(i,o),o&&b(n),T(s,o)}}}class $ extends j{constructor(e){super(),B(this,e,null,ze,I,{})}}$.__docgen={version:3,name:"EmbedArticle.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const ee=be($,{meta:{title:"Templates/Embed article"},stories:{"tpl:default":{storyId:"templates-embed-article--default",name:"default",template:!0,source:`<Embed>
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
//# sourceMappingURL=EmbedArticle.stories-7ea70dda.js.map
