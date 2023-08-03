import{N as w,Z as me,T as pe,s as S,R as ye,_ as Z,F as J,B as O,S as N,i as R,p as h,$ as T,e as Y,a as A,b as p,g as F,t as _,c as P,d as q,a0 as H,z as I,q as re,u as oe,r as ie,v as ae,a1 as _e,h as j,j as L,m as D,n as K}from"./index-9c2ee968.js";const C=[];function ge(s,e){return{subscribe:E(s,e).subscribe}}function E(s,e=w){let r;const t=new Set;function n(c){if(S(s,c)&&(s=c,r)){const a=!C.length;for(const l of t)l[1](),C.push(l,s);if(a){for(let l=0;l<C.length;l+=2)C[l][0](C[l+1]);C.length=0}}}function o(c){n(c(s))}function i(c,a=w){const l=[c,a];return t.add(l),t.size===1&&(r=e(n)||w),c(s),()=>{t.delete(l),t.size===0&&r&&(r(),r=null)}}return{set:n,update:o,subscribe:i}}function Ue(s,e,r){const t=!Array.isArray(s),n=t?[s]:s,o=e.length<2;return ge(r,i=>{let c=!1;const a=[];let l=0,g=w;const d=()=>{if(l)return;g();const u=e(t?a[0]:a,i);o?i(u):g=ye(u)?u:w},f=n.map((u,y)=>me(u,x=>{a[y]=x,l&=~(1<<y),c&&d()},()=>{l|=1<<y}));return c=!0,d(),function(){pe(f),g(),c=!1}})}const W="storybook-registration-context",X="storybook-registration-context-component";function be(s={}){O(W,{render:!0,register:()=>{},meta:{},args:{},...s})}function Q(){return Z(W)||be(),J(W)}function ce(){return Z(X)||O(X,{argsStore:E({}),storyContextStore:E({})}),J(X)}function xe(s,e,r){return Q().meta=e,s.$$set=t=>{r(0,e=h(h({},e),T(t)))},e=T(e),[]}class ke extends N{constructor(e){super(),R(this,e,xe,null,S,{})}}ke.__docgen={version:3,name:"Meta.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const Ce=s=>s&2,he=s=>({context:s&4,args:s&2}),$=s=>({...s[1],context:s[2],args:s[1]});function ee(s){let e;const r=s[8].default,t=re(r,s,s[7],$);return{c(){t&&t.c()},m(n,o){t&&t.m(n,o),e=!0},p(n,o){t&&t.p&&(!e||o&134)&&oe(t,r,n,n[7],Ce(o)||!e?ie(n[7]):ae(r,n[7],o,he),$)},i(n){e||(p(t,n),e=!0)},o(n){_(t,n),e=!1},d(n){t&&t.d(n)}}}function Se(s){let e,r,t=s[0]&&ee(s);return{c(){t&&t.c(),e=Y()},m(n,o){t&&t.m(n,o),A(n,e,o),r=!0},p(n,[o]){n[0]?t?(t.p(n,o),o&1&&p(t,1)):(t=ee(n),t.c(),p(t,1),t.m(e.parentNode,e)):t&&(F(),_(t,1,1,()=>{t=null}),P())},i(n){r||(p(t),r=!0)},o(n){_(t),r=!1},d(n){t&&t.d(n),n&&q(e)}}}function we(s,e,r){let t;const n=["name","template"];let o=H(e,n),i,c,{$$slots:a={},$$scope:l}=e;const g=_e(a),d=Q();let{name:f}=e,{template:u=null}=e;if(!f)throw new Error("Missing Story name");d.register({name:f,...o,template:u??(g.default?null:"default")});const y=ce(),x=y.argsStore;I(s,x,m=>r(1,i=m));const k=y.storyContextStore;return I(s,k,m=>r(2,c=m)),s.$$set=m=>{e=h(h({},e),T(m)),r(12,o=H(e,n)),"name"in m&&r(5,f=m.name),"template"in m&&r(6,u=m.template),"$$scope"in m&&r(7,l=m.$$scope)},s.$$.update=()=>{s.$$.dirty&32&&r(0,t=d.render&&!d.templateName&&d.storyName==f)},[t,i,c,x,k,f,u,l,a]}class Te extends N{constructor(e){super(),R(this,e,we,Se,S,{name:5,template:6})}}Te.__docgen={version:3,name:"Story.svelte",data:[{visibility:"public",description:null,keywords:[],name:"name",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{visibility:"public",description:null,keywords:[],name:"template",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"object",type:"object"},defaultValue:null}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[{keywords:[],visibility:"public",description:"",name:"default",params:[{name:"{...$args}",type:{kind:"type",text:"*",type:"any"}},{name:"context",type:{kind:"type",text:"*",type:"any"}},{name:"args",type:{kind:"type",text:"*",type:"any"}}],parameters:[{name:"{...$args}",type:{kind:"type",text:"*",type:"any"}},{name:"context",type:{kind:"type",text:"*",type:"any"}},{name:"args",type:{kind:"type",text:"*",type:"any"}}]}],refs:[]};const Ee=s=>s&2,Oe=s=>({context:s&4,args:s&2}),te=s=>({...s[1],context:s[2],args:s[1]});function ne(s){let e;const r=s[7].default,t=re(r,s,s[6],te);return{c(){t&&t.c()},m(n,o){t&&t.m(n,o),e=!0},p(n,o){t&&t.p&&(!e||o&70)&&oe(t,r,n,n[6],Ee(o)||!e?ie(n[6]):ae(r,n[6],o,Oe),te)},i(n){e||(p(t,n),e=!0)},o(n){_(t,n),e=!1},d(n){t&&t.d(n)}}}function Ne(s){let e,r,t=s[0]&&ne(s);return{c(){t&&t.c(),e=Y()},m(n,o){t&&t.m(n,o),A(n,e,o),r=!0},p(n,[o]){n[0]?t?(t.p(n,o),o&1&&p(t,1)):(t=ne(n),t.c(),p(t,1),t.m(e.parentNode,e)):t&&(F(),_(t,1,1,()=>{t=null}),P())},i(n){r||(p(t),r=!0)},o(n){_(t),r=!1},d(n){t&&t.d(n),n&&q(e)}}}function Re(s,e,r){let t,n,o,{$$slots:i={},$$scope:c}=e;const a=Q();let{id:l="default"}=e;a.register({id:l,isTemplate:!0});const g=ce(),d=g.argsStore;I(s,d,u=>r(1,n=u));const f=g.storyContextStore;return I(s,f,u=>r(2,o=u)),s.$$set=u=>{"id"in u&&r(5,l=u.id),"$$scope"in u&&r(6,c=u.$$scope)},s.$$.update=()=>{s.$$.dirty&32&&r(0,t=a.render&&a.templateId===l)},[t,n,o,d,f,l,c,i]}class ve extends N{constructor(e){super(),R(this,e,Re,Ne,S,{id:5})}}ve.__docgen={version:3,name:"Template.svelte",data:[{visibility:"public",description:null,keywords:[],name:"id",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"default"}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[{keywords:[],visibility:"public",description:"",name:"default",params:[{name:"{...$args}",type:{kind:"type",text:"*",type:"any"}},{name:"context",type:{kind:"type",text:"*",type:"any"}},{name:"args",type:{kind:"type",text:"*",type:"any"}}],parameters:[{name:"{...$args}",type:{kind:"type",text:"*",type:"any"}},{name:"context",type:{kind:"type",text:"*",type:"any"}},{name:"args",type:{kind:"type",text:"*",type:"any"}}]}],refs:[]};module&&module.hot&&module.hot.decline&&module.hot.decline();const Xe=(s,e={})=>{var n;return{parameters:{docs:{...(n=e==null?void 0:e.parameters)==null?void 0:n.docs,description:{component:s}}}}},{logger:Me}=__STORYBOOK_MODULE_CLIENT_LOGGER__;function Ie(s){const e=s.split("").reduce((r,t)=>(r<<5)-r+t.charCodeAt(0)|0,0);return Math.abs(e).toString(16)}function je({id:s,name:e},r=[]){if(s)return s;if(!e)throw new Error("Id or Name should be specified");let t=e.replace(/\W+(.|$)/g,(n,o)=>o.toUpperCase());return r.indexOf(t)>=0&&(Me.warn(`Story name conflict with exports - Please add an explicit id for story ${e}`),t+=Ie(e)),t}const le="storybook-registration-context",z="storybook-registration-context-component";function Le(s={}){O(le,{render:!0,register:()=>{},meta:{},args:{},...s})}function De(s){O(le,{render:!1,register:e=>{s.stories.push(e)},set meta(e){s.meta=e},args:{}})}function Ke(){return Z(z)||O(z,{argsStore:E({}),storyContextStore:E({})}),J(z)}function Ye(s,e){const r=Ke();r.argsStore.set(s),r.storyContextStore.set(e)}function Ae(s){let e,r,t;var n=s[0];function o(i){return{}}return n&&(e=j(n,o())),{c(){e&&L(e.$$.fragment),r=Y()},m(i,c){e&&D(e,i,c),A(i,r,c),t=!0},p(i,[c]){if(c&1&&n!==(n=i[0])){if(e){F();const a=e;_(a.$$.fragment,1,0,()=>{K(a,1)}),P()}n?(e=j(n,o()),L(e.$$.fragment),p(e.$$.fragment,1),D(e,r.parentNode,r)):e=null}},i(i){t||(e&&p(e.$$.fragment,i),t=!0)},o(i){e&&_(e.$$.fragment,i),t=!1},d(i){i&&q(r),e&&K(e,i)}}}function Fe(s,e,r){let{Stories:t}=e,{repositories:n}=e;return De(n),s.$$set=o=>{"Stories"in o&&r(0,t=o.Stories),"repositories"in o&&r(1,n=o.repositories)},[t,n]}class ue extends N{constructor(e){super(),R(this,e,Fe,Ae,S,{Stories:0,repositories:1})}}ue.__docgen={version:3,name:"RegisterContext.svelte",data:[{visibility:"public",description:null,keywords:[],name:"Stories",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{visibility:"public",description:null,keywords:[],name:"repositories",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};function Pe(s){let e,r,t;var n=s[0];function o(i){return{}}return n&&(e=j(n,o())),{c(){e&&L(e.$$.fragment),r=Y()},m(i,c){e&&D(e,i,c),A(i,r,c),t=!0},p(i,[c]){if(c&1&&n!==(n=i[0])){if(e){F();const a=e;_(a.$$.fragment,1,0,()=>{K(a,1)}),P()}n?(e=j(n,o()),L(e.$$.fragment),p(e.$$.fragment,1),D(e,r.parentNode,r)):e=null}},i(i){t||(e&&p(e.$$.fragment,i),t=!0)},o(i){e&&_(e.$$.fragment,i),t=!1},d(i){i&&q(r),e&&K(e,i)}}}function qe(s,e,r){let{Stories:t}=e,{args:n={}}=e,{storyContext:o={}}=e;return Le(e),s.$$set=i=>{r(3,e=h(h({},e),T(i))),"Stories"in i&&r(0,t=i.Stories),"args"in i&&r(1,n=i.args),"storyContext"in i&&r(2,o=i.storyContext)},s.$$.update=()=>{s.$$.dirty&6&&Ye(n,o)},e=T(e),[t,n,o]}class fe extends N{constructor(e){super(),R(this,e,qe,Pe,S,{Stories:0,args:1,storyContext:2})}}fe.__docgen={version:3,name:"RenderContext.svelte",data:[{visibility:"public",description:null,keywords:[],name:"Stories",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{visibility:"public",description:null,keywords:[],name:"args",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"object",type:"object"}},{visibility:"public",description:null,keywords:[],name:"storyContext",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"object",type:"object"}}],computed:[],methods:[],components:[],description:"@component",keywords:[{name:"component",description:""},{name:"wrapper",description:""}],events:[],slots:[],refs:[]};const{logger:V}=__STORYBOOK_MODULE_CLIENT_LOGGER__,{combineParameters:se}=__STORYBOOK_MODULE_CLIENT_API__,Be=document.createDocumentFragment?()=>document.createDocumentFragment():()=>document.createElement("div"),ze=(s,{stories:e={},allocatedIds:r})=>{const t={meta:null,stories:[]};try{new ue({target:Be(),props:{Stories:s,repositories:t}}).$destroy()}catch(a){V.error(`Error extracting stories ${a.toString()}`,a)}const{meta:n}=t;if(!n)return V.error("Missing <Meta/> tag"),{};const{component:o}=n,i=t.stories.filter(a=>a.isTemplate).map(a=>a.id),c=i.filter((a,l)=>i.indexOf(a)!==l);return c.length>0&&V.warn(`Found duplicates templates id for stories '${n.name}': ${c}`),{meta:n,stories:t.stories.filter(a=>!a.isTemplate).reduce((a,l)=>{const{id:g,name:d,template:f,component:u,source:y=!1,...x}=l,k=je(l,r);if(!k)return a;const m=f!=null&&i.indexOf(f)<0,b=(G,U)=>{if(m)throw new Error(`Story ${d} is referencing an unknown template ${f}`);return{Component:fe,props:{Stories:s,storyName:d,templateId:f,args:G,storyContext:U,sourceComponent:u||o}}};b.storyName=d,Object.entries(x).forEach(([G,U])=>{b[G]=U});const v=e[f?`tpl:${f}`:k],de=v?v.hasArgs:!0,B=v?v.source:null;B&&(b.parameters=se(b.parameters||{},{storySource:{source:B}}));let M;return y===!0||y===!1&&!de?M=B:typeof y=="string"&&(M=y),M&&(b.parameters=se(b.parameters||{},{docs:{source:{code:M}}})),a[k]=b,a},{})}};export{ke as M,Te as S,ve as T,E as a,Ue as d,ze as p,Xe as w};
//# sourceMappingURL=collect-stories-c58c3d65.js.map
