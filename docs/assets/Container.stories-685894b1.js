import{S as M,i as q,s as L,x as D,e as X,a as g,g as Y,t as c,c as Z,b as _,d as y,w as j,y as T,j as w,m as v,n as $,q as z,J as h,u as E,r as H,v as J,z as G,p as K,k as P,l as Q,H as I,I as x}from"./index-73a3b670.js";import{p as ee,a as A,M as te,T as ne,S as N}from"./collect-stories-dc0ff7e5.js";import{T as R}from"./Theme-fdaf0d63.js";const F=`A container to set the width, minimum height and theme of a block of content.

\`\`\`html
<script>
  import { Container } from "@onsvisual/svelte-components";
<\/script>

<Container width="{narrow|medium|wide|full}"> {child_components} </Container>
\`\`\`
`;function W(r){let e;return{c(){e=j("div"),T(e,"class","ons-spacer")},m(l,t){g(l,e,t)},d(l){l&&y(e)}}}function le(r){let e,l;return e=new R({props:{theme:r[4],background:r[6],overrides:r[5],$$slots:{default:[ae]},$$scope:{ctx:r}}}),{c(){w(e.$$.fragment)},m(t,i){v(e,t,i),l=!0},p(t,i){const n={};i&16&&(n.theme=t[4]),i&64&&(n.background=t[6]),i&32&&(n.overrides=t[5]),i&259&&(n.$$scope={dirty:i,ctx:t}),e.$set(n)},i(t){l||(_(e.$$.fragment,t),l=!0)},o(t){c(e.$$.fragment,t),l=!1},d(t){$(e,t)}}}function ie(r){let e,l;return e=new R({props:{theme:r[4],background:r[6],overrides:r[5],$$slots:{default:[oe]},$$scope:{ctx:r}}}),{c(){w(e.$$.fragment)},m(t,i){v(e,t,i),l=!0},p(t,i){const n={};i&16&&(n.theme=t[4]),i&64&&(n.background=t[6]),i&32&&(n.overrides=t[5]),i&258&&(n.$$scope={dirty:i,ctx:t}),e.$set(n)},i(t){l||(_(e.$$.fragment,t),l=!0)},o(t){c(e.$$.fragment,t),l=!1},d(t){$(e,t)}}}function ae(r){let e,l;const t=r[7].default,i=z(t,r,r[8],null);return{c(){e=j("div"),i&&i.c(),T(e,"class","ons-page__container ons-container svelte-vjd0jl"),h(e,"ons-page__container--wide",r[0]==="wide"),h(e,"ons-page__container--full",r[0]==="full"),h(e,"ons-page__container--tall-height",r[1]==="tall"),h(e,"ons-page__container--full-height",r[1]==="full")},m(n,s){g(n,e,s),i&&i.m(e,null),l=!0},p(n,s){i&&i.p&&(!l||s&256)&&E(i,t,n,n[8],l?J(t,n[8],s,null):H(n[8]),null),(!l||s&1)&&h(e,"ons-page__container--wide",n[0]==="wide"),(!l||s&1)&&h(e,"ons-page__container--full",n[0]==="full"),(!l||s&2)&&h(e,"ons-page__container--tall-height",n[1]==="tall"),(!l||s&2)&&h(e,"ons-page__container--full-height",n[1]==="full")},i(n){l||(_(i,n),l=!0)},o(n){c(i,n),l=!1},d(n){n&&y(e),i&&i.d(n)}}}function oe(r){let e,l,t;const i=r[7].default,n=z(i,r,r[8],null);return{c(){e=j("div"),l=j("div"),n&&n.c(),T(l,"class","ons-page__container--narrow svelte-vjd0jl"),T(e,"class","ons-page__container ons-container svelte-vjd0jl"),h(e,"ons-page__container--tall-height",r[1]==="tall"),h(e,"ons-page__container--full-height",r[1]==="full")},m(s,f){g(s,e,f),G(e,l),n&&n.m(l,null),t=!0},p(s,f){n&&n.p&&(!t||f&256)&&E(n,i,s,s[8],t?J(i,s[8],f,null):H(s[8]),null),(!t||f&2)&&h(e,"ons-page__container--tall-height",s[1]==="tall"),(!t||f&2)&&h(e,"ons-page__container--full-height",s[1]==="full")},i(s){t||(_(n,s),t=!0)},o(s){c(n,s),t=!1},d(s){s&&y(e),n&&n.d(s)}}}function B(r){let e;return{c(){e=j("div"),T(e,"class","ons-spacer")},m(l,t){g(l,e,t)},d(l){l&&y(e)}}}function se(r){let e,l,t,i,n,s,f=r[2]&&W();const k=[ie,le],m=[];function b(o,p){return o[0]==="narrow"?0:1}l=b(r),t=m[l]=k[l](r);let u=r[3]&&B();return{c(){f&&f.c(),e=D(),t.c(),i=D(),u&&u.c(),n=X()},m(o,p){f&&f.m(o,p),g(o,e,p),m[l].m(o,p),g(o,i,p),u&&u.m(o,p),g(o,n,p),s=!0},p(o,[p]){o[2]?f||(f=W(),f.c(),f.m(e.parentNode,e)):f&&(f.d(1),f=null);let C=l;l=b(o),l===C?m[l].p(o,p):(Y(),c(m[C],1,1,()=>{m[C]=null}),Z(),t=m[l],t?t.p(o,p):(t=m[l]=k[l](o),t.c()),_(t,1),t.m(i.parentNode,i)),o[3]?u||(u=B(),u.c(),u.m(n.parentNode,n)):u&&(u.d(1),u=null)},i(o){s||(_(t),s=!0)},o(o){c(t),s=!1},d(o){f&&f.d(o),o&&y(e),m[l].d(o),o&&y(i),u&&u.d(o),o&&y(n)}}}function re(r,e,l){let{$$slots:t={},$$scope:i}=e,{width:n="medium"}=e,{height:s="auto"}=e,{marginTop:f=!1}=e,{marginBottom:k=!1}=e,{theme:m=null}=e,{themeOverrides:b=null}=e,{background:u=null}=e;return r.$$set=o=>{"width"in o&&l(0,n=o.width),"height"in o&&l(1,s=o.height),"marginTop"in o&&l(2,f=o.marginTop),"marginBottom"in o&&l(3,k=o.marginBottom),"theme"in o&&l(4,m=o.theme),"themeOverrides"in o&&l(5,b=o.themeOverrides),"background"in o&&l(6,u=o.background),"$$scope"in o&&l(8,i=o.$$scope)},[n,s,f,k,m,b,u,t,i]}class O extends M{constructor(e){super(),q(this,e,re,se,L,{width:0,height:1,marginTop:2,marginBottom:3,theme:4,themeOverrides:5,background:6})}}O.__docgen={version:3,name:"Container.svelte",data:[{keywords:[{name:"type",description:'{"narrow"|"medium"|"wide"|"full"}'}],visibility:"public",description:"Sets the width of the container",name:"width",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:'"narrow"|"medium"|"wide"|"full"',type:[{kind:"type",text:'"narrow"',type:'"narrow"'},{kind:"type",text:'"medium"',type:'"medium"'},{kind:"type",text:'"wide"',type:'"wide"'},{kind:"type",text:'"full"',type:'"full"'}]},defaultValue:"medium"},{keywords:[{name:"type",description:'{"auto"|"tall"|"full"}'}],visibility:"public",description:"Sets the minimum height of the container relative to the height of the viewport",name:"height",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:'"auto"|"tall"|"full"',type:[{kind:"type",text:'"auto"',type:'"auto"'},{kind:"type",text:'"tall"',type:'"tall"'},{kind:"type",text:'"full"',type:'"full"'}]},defaultValue:"auto"},{keywords:[{name:"type",description:"{boolean}"}],visibility:"public",description:"Optional margin above container",name:"marginTop",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{keywords:[{name:"type",description:"{boolean}"}],visibility:"public",description:"Optional margin below container",name:"marginBottom",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{keywords:[{name:"type",description:'{"light"|"dark"|"lightblue"}'}],visibility:"public",description:"Sets a predefined theme",name:"theme",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:'"light"|"dark"|"lightblue"',type:[{kind:"type",text:'"light"',type:'"light"'},{kind:"type",text:'"dark"',type:'"dark"'},{kind:"type",text:'"lightblue"',type:'"lightblue"'}]},defaultValue:null},{keywords:[{name:"type",description:"{object}"}],visibility:"public",description:"Define additional props to override the base theme",name:"themeOverrides",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"object",type:"object"},defaultValue:null},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Overrides the base theme background (accepts any valid CSS background value)",name:"background",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:null}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[{keywords:[],visibility:"public",description:"",name:"default"}],refs:[]};function fe(r){let e,l;return{c(){e=j("div"),l=j("p"),l.textContent="Contents of container.",I(l,"margin","0"),I(e,"padding","24px 12px"),I(e,"background","lightgrey")},m(t,i){g(t,e,i),G(e,l)},p:x,d(t){t&&y(e)}}}function ue(r){let e,l;const t=[r[0]];let i={$$slots:{default:[fe]},$$scope:{ctx:r}};for(let n=0;n<t.length;n+=1)i=K(i,t[n]);return e=new O({props:i}),{c(){w(e.$$.fragment)},m(n,s){v(e,n,s),l=!0},p(n,s){const f=s&1?P(t,[Q(n[0])]):{};s&2&&(f.$$scope={dirty:s,ctx:n}),e.$set(f)},i(n){l||(_(e.$$.fragment,n),l=!0)},o(n){c(e.$$.fragment,n),l=!1},d(n){$(e,n)}}}function me(r){let e,l,t,i,n,s,f,k,m,b,u,o;const p=[{title:"Layout/Container"},{component:O},{argTypes:{width:{options:["narrow","medium","width","full"],control:{type:"select"}},height:{options:["auto","tall","full"],control:{type:"select"}},theme:{options:["light","dark","lightblue"],control:{type:"select"}}}},A(F)];let C={};for(let a=0;a<p.length;a+=1)C=K(C,p[a]);return e=new te({props:C}),t=new ne({props:{$$slots:{default:[ue,({args:a})=>({0:a}),({args:a})=>a?1:0]},$$scope:{ctx:r}}}),n=new N({props:{name:"Default",args:{}}}),f=new N({props:{name:"Narrow",args:{width:"narrow"}}}),m=new N({props:{name:"Wide",args:{width:"wide"}}}),u=new N({props:{name:"Full",args:{width:"full"}}}),{c(){w(e.$$.fragment),l=D(),w(t.$$.fragment),i=D(),w(n.$$.fragment),s=D(),w(f.$$.fragment),k=D(),w(m.$$.fragment),b=D(),w(u.$$.fragment)},m(a,d){v(e,a,d),g(a,l,d),v(t,a,d),g(a,i,d),v(n,a,d),g(a,s,d),v(f,a,d),g(a,k,d),v(m,a,d),g(a,b,d),v(u,a,d),o=!0},p(a,[d]){const U=d&0?P(p,[p[0],d&0&&{component:O},p[2],d&0&&Q(A(F))]):{};e.$set(U);const V={};d&3&&(V.$$scope={dirty:d,ctx:a}),t.$set(V)},i(a){o||(_(e.$$.fragment,a),_(t.$$.fragment,a),_(n.$$.fragment,a),_(f.$$.fragment,a),_(m.$$.fragment,a),_(u.$$.fragment,a),o=!0)},o(a){c(e.$$.fragment,a),c(t.$$.fragment,a),c(n.$$.fragment,a),c(f.$$.fragment,a),c(m.$$.fragment,a),c(u.$$.fragment,a),o=!1},d(a){$(e,a),a&&y(l),$(t,a),a&&y(i),$(n,a),a&&y(s),$(f,a),a&&y(k),$(m,a),a&&y(b),$(u,a)}}}class de extends M{constructor(e){super(),q(this,e,null,me,L,{})}}const S=ee(de,{meta:{title:"Layout/Container"},stories:{"tpl:default":{storyId:"layout-container--default",name:"default",template:!0,source:`<Container {...args}>
  <div style:padding="24px 12px" style:background="lightgrey">
    <p style:margin="0">Contents of container.</p>
  </div>
</Container>`,hasArgs:!0},Default:{storyId:"layout-container--default",name:"Default",template:!1,hasArgs:!1},Narrow:{storyId:"layout-container--narrow",name:"Narrow",template:!1,hasArgs:!1},Wide:{storyId:"layout-container--wide",name:"Wide",template:!1,hasArgs:!1},Full:{storyId:"layout-container--full",name:"Full",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","Container","withComponentDocs"]}),ge=S.meta,ye=["Default","Narrow","Wide","Full"],he=S.stories.Default,ke=S.stories.Narrow,be=S.stories.Wide,we=S.stories.Full;export{he as Default,we as Full,ke as Narrow,be as Wide,ye as __namedExportsOrder,ge as default};
//# sourceMappingURL=Container.stories-685894b1.js.map