import{S as W,i as F,s as K,x as w,j as q,w as z,C as c,D as P,a as h,m as D,H as M,E as Q,b as y,g as R,t as k,c as X,d as g,n as I,B as Y,q as Z,y as N,u as x,r as $,v as ee,I as te,U as G,J as ie}from"./index-4c87ff1b.js";import{a as le}from"./collect-stories-1e766e4e.js";import{C as L}from"./Container-7073de09.js";function j(l){let e,t;return{c(){e=w("h2"),t=te(l[3]),c(e,"class","section-title"),G(e,"ons-u-vh",l[4])},m(s,a){h(s,e,a),M(e,t)},p(s,a){a&8&&ie(t,s[3]),a&16&&G(e,"ons-u-vh",s[4])},d(s){s&&g(e)}}}function ne(l){let e,t,s,a=l[3]&&j(l);const r=l[18].default,n=Z(r,l,l[20],null);return{c(){a&&a.c(),e=z(),t=w("div"),n&&n.c(),c(t,"class","grid "+l[12]+" svelte-1og4gya"),N(t,"grid-gap",l[14]),N(t,"min-height",l[13])},m(i,d){a&&a.m(i,d),h(i,e,d),h(i,t,d),n&&n.m(t,null),s=!0},p(i,d){i[3]?a?a.p(i,d):(a=j(i),a.c(),a.m(e.parentNode,e)):a&&(a.d(1),a=null),n&&n.p&&(!s||d&1048576)&&x(n,r,i,i[20],s?ee(r,i[20],d,null):$(i[20]),null)},i(i){s||(y(n,i),s=!0)},o(i){k(n,i),s=!1},d(i){a&&a.d(i),i&&g(e),i&&g(t),n&&n.d(i)}}}function H(l){let e,t,s;return t=new L({props:{cls:l[1],theme:l[5],themeOverrides:l[6],width:"narrow",marginBottom:l[8],$$slots:{default:[ae]},$$scope:{ctx:l}}}),{c(){e=w("figcaption"),q(t.$$.fragment),c(e,"class","svelte-1og4gya")},m(a,r){h(a,e,r),D(t,e,null),s=!0},p(a,r){const n={};r&2&&(n.cls=a[1]),r&32&&(n.theme=a[5]),r&64&&(n.themeOverrides=a[6]),r&256&&(n.marginBottom=a[8]),r&1049088&&(n.$$scope={dirty:r,ctx:a}),t.$set(n)},i(a){s||(y(t.$$.fragment,a),s=!0)},o(a){k(t.$$.fragment,a),s=!1},d(a){a&&g(e),I(t)}}}function ae(l){let e;return{c(){e=w("span"),c(e,"class","ons-figure__caption")},m(t,s){h(t,e,s),e.innerHTML=l[9]},p(t,s){s&512&&(e.innerHTML=t[9])},d(t){t&&g(e)}}}function se(l){let e,t,s,a,r;t=new L({props:{id:l[0],cls:l[1],theme:l[5],themeOverrides:l[6],width:l[2],height:["tall","full"].includes(l[10])?l[10]:"auto",marginTop:l[7],marginBottom:l[9]?!1:l[8],$$slots:{default:[ne]},$$scope:{ctx:l}}});let n=l[9]&&H(l);return{c(){e=w("figure"),q(t.$$.fragment),s=z(),n&&n.c(),c(e,"aria-label",l[9]),c(e,"class","svelte-1og4gya"),P(()=>l[19].call(e))},m(i,d){h(i,e,d),D(t,e,null),M(e,s),n&&n.m(e,null),a=Q(e,l[19].bind(e)),r=!0},p(i,[d]){const f={};d&1&&(f.id=i[0]),d&2&&(f.cls=i[1]),d&32&&(f.theme=i[5]),d&64&&(f.themeOverrides=i[6]),d&4&&(f.width=i[2]),d&1024&&(f.height=["tall","full"].includes(i[10])?i[10]:"auto"),d&128&&(f.marginTop=i[7]),d&768&&(f.marginBottom=i[9]?!1:i[8]),d&1048600&&(f.$$scope={dirty:d,ctx:i}),t.$set(f),i[9]?n?(n.p(i,d),d&512&&y(n,1)):(n=H(i),n.c(),y(n,1),n.m(e,null)):n&&(R(),k(n,1,1,()=>{n=null}),X()),(!r||d&512)&&c(e,"aria-label",i[9])},i(i){r||(y(t.$$.fragment,i),y(n),r=!0)},o(i){k(t.$$.fragment,i),k(n),r=!1},d(i){i&&g(e),I(t),n&&n.d(),a()}}}function oe(l,e,t){let s,{$$slots:a={},$$scope:r}=e,{id:n=null}=e,{cls:i=null}=e,{width:d="medium"}=e,{title:f=""}=e,{hideTitle:v=!1}=e,{theme:O=null}=e,{themeOverrides:T=null}=e,{marginTop:V=!1}=e,{marginBottom:S=!0}=e,{colwidth:u="medium"}=e,{caption:B=""}=e,{height:p=200}=e,{gap:m=12}=e,A=!u||u==="full"?"":`grid-${u}`,E=p==="full"?"100vh":Number.isNaN(p)?p:p+"px",J=Number.isNaN(m)?m:m+"px";const _={narrow:{w:180,c:4},medium:{w:280,c:3},wide:{w:400,c:2},full:{w:"100%",c:1}};let b;const C=le(_[u].c);Y("cols",C);function U(){b=this.clientWidth,t(11,b)}return l.$$set=o=>{"id"in o&&t(0,n=o.id),"cls"in o&&t(1,i=o.cls),"width"in o&&t(2,d=o.width),"title"in o&&t(3,f=o.title),"hideTitle"in o&&t(4,v=o.hideTitle),"theme"in o&&t(5,O=o.theme),"themeOverrides"in o&&t(6,T=o.themeOverrides),"marginTop"in o&&t(7,V=o.marginTop),"marginBottom"in o&&t(8,S=o.marginBottom),"colwidth"in o&&t(15,u=o.colwidth),"caption"in o&&t(9,B=o.caption),"height"in o&&t(10,p=o.height),"gap"in o&&t(16,m=o.gap),"$$scope"in o&&t(20,r=o.$$scope)},l.$$.update=()=>{l.$$.dirty&100352&&t(17,s=u=="full"?1:b?Math.floor((b+m)/(_[u].w+m)):_[u].c),l.$$.dirty&131072&&C.set(s)},[n,i,d,f,v,O,T,V,S,B,p,b,A,E,J,u,m,s,a,U,r]}class de extends W{constructor(e){super(),F(this,e,oe,se,K,{id:0,cls:1,width:2,title:3,hideTitle:4,theme:5,themeOverrides:6,marginTop:7,marginBottom:8,colwidth:15,caption:9,height:10,gap:16})}}de.__docgen={version:3,name:"Grid.svelte",data:[{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"(Optional) Sets the unique ID of the section",name:"id",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:null},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"(Optional) Sets a css class for the component",name:"cls",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:null},{keywords:[{name:"type",description:'{"narrow"|"medium"|"wide"|"full"}'}],visibility:"public",description:"Sets the width of the section",name:"width",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:'"narrow"|"medium"|"wide"|"full"',type:[{kind:"type",text:'"narrow"',type:'"narrow"'},{kind:"type",text:'"medium"',type:'"medium"'},{kind:"type",text:'"wide"',type:'"wide"'},{kind:"type",text:'"full"',type:'"full"'}]},defaultValue:"medium"},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Sets the title of the section",name:"title",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{keywords:[{name:"type",description:"{boolean}"}],visibility:"public",description:"Allows the h2 title tag for the section to be visually hidden",name:"hideTitle",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{keywords:[{name:"type",description:'{"light"|"dark"|"lightblue"}'}],visibility:"public",description:"Sets a predefined theme",name:"theme",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:'"light"|"dark"|"lightblue"',type:[{kind:"type",text:'"light"',type:'"light"'},{kind:"type",text:'"dark"',type:'"dark"'},{kind:"type",text:'"lightblue"',type:'"lightblue"'}]},defaultValue:null},{keywords:[{name:"type",description:"{object}"}],visibility:"public",description:"Define additional props to override the base theme",name:"themeOverrides",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"object",type:"object"},defaultValue:null},{keywords:[{name:"type",description:"{boolean}"}],visibility:"public",description:"Optional margin above section",name:"marginTop",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{keywords:[{name:"type",description:"{boolean}"}],visibility:"public",description:"Optional margin below section",name:"marginBottom",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!0},{keywords:[{name:"type",description:'{"narrow"|"medium"|"wide"|"full"}'}],visibility:"public",description:"Sets the width of the section",name:"colwidth",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:'"narrow"|"medium"|"wide"|"full"',type:[{kind:"type",text:'"narrow"',type:'"narrow"'},{kind:"type",text:'"medium"',type:'"medium"'},{kind:"type",text:'"wide"',type:'"wide"'},{kind:"type",text:'"full"',type:'"full"'}]},defaultValue:"medium"},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"(Optional) caption below the grid",name:"caption",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{keywords:[{name:"type",description:"{number|string}"}],visibility:"public",description:'Set the minimum height of a grid row (can be a number in pixels, or a valid CSS height, like "100vh")',name:"height",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:"number|string",type:[{kind:"type",text:"number",type:"number"},{kind:"type",text:"string",type:"string"}]},defaultValue:200},{keywords:[{name:"type",description:"{number}"}],visibility:"public",description:"Set the grid gap, in pixels",name:"gap",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:12}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[{keywords:[],visibility:"public",description:"",name:"default"}],refs:[]};export{de as G};
//# sourceMappingURL=Grid-5c85ff23.js.map
