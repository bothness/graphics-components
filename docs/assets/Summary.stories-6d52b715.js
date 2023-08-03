import{S as q,i as B,s as E,x as d,w as h,C as c,a as v,H as f,N as I,d as g,P as G,I as $,J as T,p as H,j as x,m as S,k as J,l as P,b as w,t as D,n as C,y as K}from"./index-9c2ee968.js";import{p as Q,w as M,M as R,T as U,S as W}from"./collect-stories-c58c3d65.js";const j=`A summary table for selected variables etc.

Based on this [ONS Design System component](https://service-manual.ons.gov.uk/design-system/components/summary).

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Summary } from "@onsvisual/svelte-components";

  let items = [
    { key: "First item", value: "Value of first item" },
    { key: "Second item", value: "Value of second item (that can be changed)", href: "#" }
  ];
<\/script>

<Summary {items}/>
\`\`\`
`;function F(u,e,t){const l=u.slice();return l[2]=e[t],l}function L(u){let e,t;return{c(){e=d("h2"),t=$(u[0]),c(e,"class","ons-summary__group-title")},m(l,i){v(l,e,i),f(e,t)},p(l,i){i&1&&T(t,l[0])},d(l){l&&g(e)}}}function N(u){let e,t,l,i,a,r=u[2].key+"",m,o;return{c(){e=d("dd"),t=d("a"),l=$("Change"),i=d("span"),a=$("value for "),m=$(r),c(i,"class","ons-u-vh"),c(t,"href",o=u[2].href),c(t,"class","ons-summary__button"),c(e,"class","ons-summary__actions ons-u-flex-ai-fs ons-u-pt-s ons-u-pb-s ons-u-pl-no@xxs ons-u-ml-xs@xxs ons-u-order--2@xxs@m ons-col-2@m")},m(s,n){v(s,e,n),f(e,t),f(t,l),f(t,i),f(i,a),f(i,m)},p(s,n){n&2&&r!==(r=s[2].key+"")&&T(m,r),n&2&&o!==(o=s[2].href)&&c(t,"href",o)},d(s){s&&g(e)}}}function O(u){let e,t,l,i,a=u[2].key+"",r,m,o,s,n=u[2].value+"",y,b,A,p=u[2].href&&N(u);return{c(){e=d("div"),t=d("dl"),l=d("dt"),i=d("div"),r=$(a),m=h(),o=d("dd"),s=d("div"),y=$(n),b=h(),p&&p.c(),A=h(),c(i,"class","ons-summary__item--text ons-u-fw-b"),c(l,"class","ons-summary__item-title ons-u-pt-s ons-u-pb-s ons-u-pr-m ons-u-order--1@xxs@m ons-u-flex--2@xxs@m ons-col-4@m"),c(o,"class","ons-summary__values ons-u-pt-s ons-u-pb-s ons-u-pr-m ons-u-pl-no@xxs@m ons-u-order--3@xxs@m ons-u-fw@xxs@m ons-u-pt-no@xxs@m ons-u-pt-no@xxs@m ons-u-bb-no@xxs@m ons-u-d-b@xxs@m svelte-yio1dj"),c(t,"class","ons-summary__row ons-summary__row--has-values"),c(t,"id","sales-dates"),c(e,"class","ons-summary__item")},m(_,k){v(_,e,k),f(e,t),f(t,l),f(l,i),f(i,r),f(l,m),f(t,o),f(o,s),f(s,y),f(o,b),p&&p.m(t,null),f(e,A)},p(_,k){k&2&&a!==(a=_[2].key+"")&&T(r,a),k&2&&n!==(n=_[2].value+"")&&T(y,n),_[2].href?p?p.p(_,k):(p=N(_),p.c(),p.m(t,null)):p&&(p.d(1),p=null)},d(_){_&&g(e),p&&p.d()}}}function X(u){let e,t,l,i,a=u[0]&&L(u),r=u[1],m=[];for(let o=0;o<r.length;o+=1)m[o]=O(F(u,r,o));return{c(){e=d("div"),t=d("div"),a&&a.c(),l=h(),i=d("div");for(let o=0;o<m.length;o+=1)m[o].c();c(i,"class","ons-summary__items ons-u-mb-s ons-u-bt ons-u-bb"),c(t,"id","turnover"),c(t,"class","ons-summary__group"),c(e,"class","ons-summary")},m(o,s){v(o,e,s),f(e,t),a&&a.m(t,null),f(t,l),f(t,i);for(let n=0;n<m.length;n+=1)m[n]&&m[n].m(i,null)},p(o,[s]){if(o[0]?a?a.p(o,s):(a=L(o),a.c(),a.m(t,l)):a&&(a.d(1),a=null),s&2){r=o[1];let n;for(n=0;n<r.length;n+=1){const y=F(o,r,n);m[n]?m[n].p(y,s):(m[n]=O(y),m[n].c(),m[n].m(i,null))}for(;n<m.length;n+=1)m[n].d(1);m.length=r.length}},i:I,o:I,d(o){o&&g(e),a&&a.d(),G(m,o)}}}function Y(u,e,t){let{title:l=null}=e,{items:i=[]}=e;return u.$$set=a=>{"title"in a&&t(0,l=a.title),"items"in a&&t(1,i=a.items)},[l,i]}class V extends q{constructor(e){super(),B(this,e,Y,X,E,{title:0,items:1})}}V.__docgen={version:3,name:"Summary.svelte",data:[{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Title for summary table",name:"title",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:null},{keywords:[{name:"type",description:"{array}"}],visibility:"public",description:"Array of items in format {key, value, href?}",name:"items",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"array",type:"array"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};function Z(u){let e,t,l;const i=[u[1]];let a={};for(let r=0;r<i.length;r+=1)a=H(a,i[r]);return t=new V({props:a}),{c(){e=d("div"),x(t.$$.fragment),K(e,"padding","12px")},m(r,m){v(r,e,m),S(t,e,null),l=!0},p(r,m){const o=m&2?J(i,[P(r[1])]):{};t.$set(o)},i(r){l||(w(t.$$.fragment,r),l=!0)},o(r){D(t.$$.fragment,r),l=!1},d(r){r&&g(e),C(t)}}}function ee(u){let e,t,l,i,a,r;const m=[{title:"Layout/Summary"},{component:V},{argTypes:{}},M(j)];let o={};for(let s=0;s<m.length;s+=1)o=H(o,m[s]);return e=new R({props:o}),l=new U({props:{$$slots:{default:[Z,({args:s})=>({1:s}),({args:s})=>s?2:0]},$$scope:{ctx:u}}}),a=new W({props:{name:"Default",args:{items:u[0]}}}),{c(){x(e.$$.fragment),t=h(),x(l.$$.fragment),i=h(),x(a.$$.fragment)},m(s,n){S(e,s,n),v(s,t,n),S(l,s,n),v(s,i,n),S(a,s,n),r=!0},p(s,[n]){const y=n&0?J(m,[m[0],n&0&&{component:V},m[2],n&0&&P(M(j))]):{};e.$set(y);const b={};n&6&&(b.$$scope={dirty:n,ctx:s}),l.$set(b)},i(s){r||(w(e.$$.fragment,s),w(l.$$.fragment,s),w(a.$$.fragment,s),r=!0)},o(s){D(e.$$.fragment,s),D(l.$$.fragment,s),D(a.$$.fragment,s),r=!1},d(s){C(e,s),s&&g(t),C(l,s),s&&g(i),C(a,s)}}}function te(u){return[[{key:"First item",value:"Value of first item"},{key:"Second item",value:"Value of second item (that can be changed)",href:"#"}]]}class se extends q{constructor(e){super(),B(this,e,te,ee,E,{})}}const z=Q(se,{meta:{title:"Layout/Summary"},stories:{"tpl:default":{storyId:"layout-summary--default",name:"default",template:!0,source:`<div style:padding="12px">
  <Summary {...args} />
</div>`,hasArgs:!0},Default:{storyId:"layout-summary--default",name:"Default",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","Summary","withComponentDocs"]}),le=z.meta,oe=["Default"],re=z.stories.Default;export{re as Default,oe as __namedExportsOrder,le as default};
//# sourceMappingURL=Summary.stories-6d52b715.js.map
