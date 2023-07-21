import{S as G,i as J,s as O,w as C,x as L,e as K,y as _,W as N,a as b,z as D,X as P,D as $,I as j,d as h,T as R,U as Z,V as x,C as T,J as E,E as I,Y as ee,p as W,j as y,m as g,k as X,l as Y,b as v,t as w,n as k,H as te}from"./index-73a3b670.js";import{p as le,a as M,M as ne,T as ae,S}from"./collect-stories-dc0ff7e5.js";const Q=`A standard \`<select>\` component with Svelte bindings and events.

\`\`\`html
<script>
  import { Dropdown } from "@onsvisual/svelte-components";

  const values = [
    { id: "1", label: "one" },
    { id: "2", label: "two" },
    { id: "3", label: "three" },
  ];

  // Bind the <select> value to a variable (reactive)
  let value;

  // Define your own function on change
  const handleChange = (e) => console.log(e);
<\/script>

<Dropdown {options} bind:value on:change="{handleChange}" />
\`\`\`
`;function U(a,e,n){const l=a.slice();return l[9]=e[n],l}function q(a){let e,n;return{c(){e=C("label"),n=T(a[2]),_(e,"class","ons-label"),_(e,"for",a[1]),E(e,"ons-u-vh",a[3])},m(l,s){b(l,e,s),D(e,n)},p(l,s){s&4&&I(n,l[2]),s&2&&_(e,"for",l[1]),s&8&&E(e,"ons-u-vh",l[3])},d(l){l&&h(e)}}}function z(a){let e,n;return{c(){e=C("option"),n=T(a[4]),e.__value=null,e.value=e.__value,e.selected=!0,e.disabled=!0},m(l,s){b(l,e,s),D(e,n)},p(l,s){s&16&&I(n,l[4])},d(l){l&&h(e)}}}function B(a){let e,n=a[9].label+"",l,s;return{c(){e=C("option"),l=T(n),e.__value=s=a[9],e.value=e.__value},m(f,i){b(f,e,i),D(e,l)},p(f,i){i&32&&n!==(n=f[9].label+"")&&I(l,n),i&32&&s!==(s=f[9])&&(e.__value=s,e.value=e.__value)},d(f){f&&h(e)}}}function oe(a){let e,n,l,s,f,i,r=a[2]&&q(a),p=a[4]&&z(a),m=a[5],c=[];for(let o=0;o<m.length;o+=1)c[o]=B(U(a,m,o));return{c(){e=C("div"),r&&r.c(),n=L(),l=C("select"),p&&p.c(),s=K();for(let o=0;o<c.length;o+=1)c[o].c();_(l,"id",a[1]),_(l,"name",a[1]),_(l,"class","ons-input ons-input--select svelte-4cr5ai"),a[0]===void 0&&N(()=>a[7].call(l)),_(e,"class","ons-field")},m(o,d){b(o,e,d),r&&r.m(e,null),D(e,n),D(e,l),p&&p.m(l,null),D(l,s);for(let t=0;t<c.length;t+=1)c[t]&&c[t].m(l,null);P(l,a[0],!0),f||(i=[$(l,"change",a[7]),$(l,"change",a[8])],f=!0)},p(o,[d]){if(o[2]?r?r.p(o,d):(r=q(o),r.c(),r.m(e,n)):r&&(r.d(1),r=null),o[4]?p?p.p(o,d):(p=z(o),p.c(),p.m(l,s)):p&&(p.d(1),p=null),d&32){m=o[5];let t;for(t=0;t<m.length;t+=1){const u=U(o,m,t);c[t]?c[t].p(u,d):(c[t]=B(u),c[t].c(),c[t].m(l,null))}for(;t<c.length;t+=1)c[t].d(1);c.length=m.length}d&2&&_(l,"id",o[1]),d&2&&_(l,"name",o[1]),d&33&&P(l,o[0])},i:j,o:j,d(o){o&&h(e),r&&r.d(),p&&p.d(),R(c,o),f=!1,Z(i)}}}function se(a,e,n){const l=x();let{id:s=""}=e,{label:f=""}=e,{hideLabel:i=!1}=e,{placeholder:r="Select an option"}=e,{value:p=null}=e,{options:m=[]}=e;function c(){p=ee(this),n(0,p),n(5,m)}const o=d=>l("change",d);return a.$$set=d=>{"id"in d&&n(1,s=d.id),"label"in d&&n(2,f=d.label),"hideLabel"in d&&n(3,i=d.hideLabel),"placeholder"in d&&n(4,r=d.placeholder),"value"in d&&n(0,p=d.value),"options"in d&&n(5,m=d.options)},[p,s,f,i,r,m,l,c,o]}class A extends G{constructor(e){super(),J(this,e,se,oe,O,{id:1,label:2,hideLabel:3,placeholder:4,value:0,options:5})}}A.__docgen={version:3,name:"Dropdown.svelte",data:[{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Unique id for the &lt;select&gt; element",name:"id",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"A label to describe the &lt;select&gt; element (expected for accessibility)",name:"label",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{keywords:[{name:"type",description:"{boolean}"}],visibility:"public",description:"Visually hide the label",name:"hideLabel",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"An optional placeholder text",name:"placeholder",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"Select an option"},{keywords:[{name:"type",description:"{object}"}],visibility:"public",description:"A prop to bind to for the selected value",name:"value",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"object",type:"object"},defaultValue:null},{keywords:[{name:"type",description:"{array}"}],visibility:"public",description:"An array of options, formatted {id, label}",name:"options",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"array",type:"array"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[{visibility:"public",description:null,keywords:[],name:"change"}],slots:[],refs:[]};function ie(a){let e,n,l;const s=[a[1]];let f={};for(let i=0;i<s.length;i+=1)f=W(f,s[i]);return n=new A({props:f}),{c(){e=C("div"),y(n.$$.fragment),te(e,"padding","12px")},m(i,r){b(i,e,r),g(n,e,null),l=!0},p(i,r){const p=r&2?X(s,[Y(i[1])]):{};n.$set(p)},i(i){l||(v(n.$$.fragment,i),l=!0)},o(i){w(n.$$.fragment,i),l=!1},d(i){i&&h(e),k(n)}}}function re(a){let e,n,l,s,f,i,r,p,m,c;const o=[{title:"UI/forms/Dropdown"},{component:A},{argTypes:{}},M(Q)];let d={};for(let t=0;t<o.length;t+=1)d=W(d,o[t]);return e=new ne({props:d}),l=new ae({props:{$$slots:{default:[ie,({args:t})=>({1:t}),({args:t})=>t?2:0]},$$scope:{ctx:a}}}),f=new S({props:{name:"Default",args:{id:"topic",label:"Question topic",options:a[0]}}}),r=new S({props:{name:"Hidden label",args:{id:"topic",label:"Question topic",hideLabel:!0,options:a[0]}}}),m=new S({props:{name:"Custom placeholder text",args:{id:"topic",label:"Question topic",hideLabel:!0,placeholder:"Some custom text",options:a[0]}}}),{c(){y(e.$$.fragment),n=L(),y(l.$$.fragment),s=L(),y(f.$$.fragment),i=L(),y(r.$$.fragment),p=L(),y(m.$$.fragment)},m(t,u){g(e,t,u),b(t,n,u),g(l,t,u),b(t,s,u),g(f,t,u),b(t,i,u),g(r,t,u),b(t,p,u),g(m,t,u),c=!0},p(t,[u]){const F=u&0?X(o,[o[0],u&0&&{component:A},o[2],u&0&&Y(M(Q))]):{};e.$set(F);const V={};u&6&&(V.$$scope={dirty:u,ctx:t}),l.$set(V)},i(t){c||(v(e.$$.fragment,t),v(l.$$.fragment,t),v(f.$$.fragment,t),v(r.$$.fragment,t),v(m.$$.fragment,t),c=!0)},o(t){w(e.$$.fragment,t),w(l.$$.fragment,t),w(f.$$.fragment,t),w(r.$$.fragment,t),w(m.$$.fragment,t),c=!1},d(t){k(e,t),t&&h(n),k(l,t),t&&h(s),k(f,t),t&&h(i),k(r,t),t&&h(p),k(m,t)}}}function de(a){return[[{id:"1",label:"General"},{id:"people-who-live-here",label:"People who live here"},{id:"visitors",label:"Visitors"},{id:"household-accommodation",label:"Household and accommodation"},{id:"personal-details",label:"Personal details"},{id:"health",label:"Health"},{id:"qualifications",label:"Qualifications"},{id:"employment",label:"Employment"}]]}class pe extends G{constructor(e){super(),J(this,e,de,re,O,{})}}const H=le(pe,{meta:{title:"UI/forms/Dropdown"},stories:{"tpl:default":{storyId:"ui-forms-dropdown--default",name:"default",template:!0,source:`<div style:padding="12px">
  <Dropdown {...args} />
</div>`,hasArgs:!0},Default:{storyId:"ui-forms-dropdown--default",name:"Default",template:!1,hasArgs:!1},HiddenLabel:{storyId:"ui-forms-dropdown--hidden-label",name:"Hidden label",template:!1,hasArgs:!1},CustomPlaceholderText:{storyId:"ui-forms-dropdown--custom-placeholder-text",name:"Custom placeholder text",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","Dropdown","withComponentDocs"]}),ue=H.meta,me=["Default","HiddenLabel","CustomPlaceholderText"],_e=H.stories.Default,be=H.stories.HiddenLabel,he=H.stories.CustomPlaceholderText;export{he as CustomPlaceholderText,_e as Default,be as HiddenLabel,me as __namedExportsOrder,ue as default};
//# sourceMappingURL=Dropdown.stories-54a3d8f8.js.map
