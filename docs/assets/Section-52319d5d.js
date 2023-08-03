import{S,i as O,s as V,j as B,m as j,b as g,t as k,n as C,q,x as _,w as D,C as m,a as w,H as v,u as I,r as A,v as H,d as T,I as J,U as p,J as U}from"./index-9c2ee968.js";import{s as h}from"./utils-dfca2a5c.js";import{C as z}from"./Container-b9863fe2.js";function b(a){let e,s;return{c(){e=_("h2"),s=J(a[2]),m(e,"class","section-title"),p(e,"ons-u-vh",a[3])},m(t,i){w(t,e,i),v(e,s)},p(t,i){i&4&&U(s,t[2]),i&8&&p(e,"ons-u-vh",t[3])},d(t){t&&T(e)}}}function E(a){let e,s,t,i,n=a[2]&&b(a);const f=a[8].default,d=q(f,a,a[9],null);return{c(){e=_("section"),n&&n.c(),s=D(),d&&d.c(),m(e,"id",t=a[0]?a[0]:h(a[2])),m(e,"aria-label",a[2]),m(e,"class","ons-feature__section")},m(l,r){w(l,e,r),n&&n.m(e,null),v(e,s),d&&d.m(e,null),i=!0},p(l,r){l[2]?n?n.p(l,r):(n=b(l),n.c(),n.m(e,s)):n&&(n.d(1),n=null),d&&d.p&&(!i||r&512)&&I(d,f,l,l[9],i?H(f,l[9],r,null):A(l[9]),null),(!i||r&5&&t!==(t=l[0]?l[0]:h(l[2])))&&m(e,"id",t),(!i||r&4)&&m(e,"aria-label",l[2])},i(l){i||(g(d,l),i=!0)},o(l){k(d,l),i=!1},d(l){l&&T(e),n&&n.d(),d&&d.d(l)}}}function F(a){let e,s;return e=new z({props:{theme:a[4],themeOverrides:a[5],width:a[1],marginTop:a[6],marginBottom:a[7],$$slots:{default:[E]},$$scope:{ctx:a}}}),{c(){B(e.$$.fragment)},m(t,i){j(e,t,i),s=!0},p(t,[i]){const n={};i&16&&(n.theme=t[4]),i&32&&(n.themeOverrides=t[5]),i&2&&(n.width=t[1]),i&64&&(n.marginTop=t[6]),i&128&&(n.marginBottom=t[7]),i&525&&(n.$$scope={dirty:i,ctx:t}),e.$set(n)},i(t){s||(g(e.$$.fragment,t),s=!0)},o(t){k(e.$$.fragment,t),s=!1},d(t){C(e,t)}}}function G(a,e,s){let{$$slots:t={},$$scope:i}=e,{id:n=null}=e,{width:f="narrow"}=e,{title:d=""}=e,{hideTitle:l=!1}=e,{theme:r=null}=e,{themeOverrides:u=null}=e,{marginTop:c=!1}=e,{marginBottom:y=!0}=e;return a.$$set=o=>{"id"in o&&s(0,n=o.id),"width"in o&&s(1,f=o.width),"title"in o&&s(2,d=o.title),"hideTitle"in o&&s(3,l=o.hideTitle),"theme"in o&&s(4,r=o.theme),"themeOverrides"in o&&s(5,u=o.themeOverrides),"marginTop"in o&&s(6,c=o.marginTop),"marginBottom"in o&&s(7,y=o.marginBottom),"$$scope"in o&&s(9,i=o.$$scope)},[n,f,d,l,r,u,c,y,t,i]}class K extends S{constructor(e){super(),O(this,e,G,F,V,{id:0,width:1,title:2,hideTitle:3,theme:4,themeOverrides:5,marginTop:6,marginBottom:7})}}K.__docgen={version:3,name:"Section.svelte",data:[{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Sets the unique ID of the section",name:"id",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:null},{keywords:[{name:"type",description:'{"narrow"|"medium"|"wide"|"full"}'}],visibility:"public",description:"Sets the width of the container",name:"width",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:'"narrow"|"medium"|"wide"|"full"',type:[{kind:"type",text:'"narrow"',type:'"narrow"'},{kind:"type",text:'"medium"',type:'"medium"'},{kind:"type",text:'"wide"',type:'"wide"'},{kind:"type",text:'"full"',type:'"full"'}]},defaultValue:"narrow"},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Sets the title of the section",name:"title",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{keywords:[{name:"type",description:"{boolean}"}],visibility:"public",description:"Allows the h2 title tag for the section to be visually hidden",name:"hideTitle",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{keywords:[{name:"type",description:'{"light"|"dark"|"lightblue"}'}],visibility:"public",description:"Sets a predefined theme",name:"theme",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:'"light"|"dark"|"lightblue"',type:[{kind:"type",text:'"light"',type:'"light"'},{kind:"type",text:'"dark"',type:'"dark"'},{kind:"type",text:'"lightblue"',type:'"lightblue"'}]},defaultValue:null},{keywords:[{name:"type",description:"{object}"}],visibility:"public",description:"Define additional props to override the base theme",name:"themeOverrides",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"object",type:"object"},defaultValue:null},{keywords:[{name:"type",description:"{boolean}"}],visibility:"public",description:"Optional margin above section",name:"marginTop",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{keywords:[{name:"type",description:"{boolean}"}],visibility:"public",description:"Optional margin below section",name:"marginBottom",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!0}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[{keywords:[],visibility:"public",description:"",name:"default"}],refs:[]};export{K as S};
//# sourceMappingURL=Section-52319d5d.js.map
