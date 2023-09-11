import{S as se,i as oe,s as ae,e as de,a as M,N as K,d as G,F as ue,z as fe,o as pe,x as d,C as c,y as X,I as R,w as v,U,H as n,Q as J,J as me,ab as Z,T as _e,p as ie,j as O,m as V,k as le,l as ce,b as q,t as H,n as N}from"./index-4c87ff1b.js";import{p as ye,w as ee,M as ge,T as he,S as we}from"./collect-stories-1e766e4e.js";const te=`This component will display a cookie banner and export a function that allows you to push events to the Google Analytics dataLayer array.

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { AnalyticsBanner, AnalyticsEvent } from "@onsvisual/svelte-components";

  // Example of an analytics event triggered by another event "e"
  function doAnalyticsEvent(e) {
    // Assumes that e.detail is in the form {key1: "value1", key2: "value2", etc}
    AnalyticsEvent({event: "eventName", ...e.detail});
  }
<\/script>

<AnalyticsBanner analyticsId="{id_string}" />
<!-- Rest of page content -->
\`\`\`
`;function ne(i){let e;function t(a,u){return a[2]?ke:be}let s=t(i),l=s(i);return{c(){e=d("div"),l.c(),c(e,"class","ons-cookies-banner svelte-1o1qwev"),c(e,"role","region"),c(e,"aria-label","Cookies banner"),X(e,"display",i[1]?"block":null)},m(a,u){M(a,e,u),l.m(e,null)},p(a,u){s===(s=t(a))&&l?l.p(a,u):(l.d(1),l=s(a),l&&(l.c(),l.m(e,null))),u&2&&X(e,"display",a[1]?"block":null)},d(a){a&&G(e),l.d()}}}function ke(i){let e,t,s,l,a,u=i[6](i[3])+"",p,w,o,f=i[6]("You can")+"",$,C,j,k,B=i[6]("at any time")+"",P,S,I,y,b,g,A,r,h;return{c(){e=d("div"),t=d("div"),s=d("div"),l=d("p"),a=d("span"),p=R(u),w=v(),o=d("span"),$=R(f),C=v(),j=d("a"),j.textContent=`${i[6]("change your cookie preferences")}`,k=v(),P=R(B),S=R("."),I=v(),y=d("div"),b=d("button"),g=d("span"),A=d("span"),A.textContent=`${i[6]("Hide")}`,c(j,"href","/cookies"),c(o,"class","ons-cookies-banner__preferences-text"),c(l,"class","ons-cookies-banner__desc ons-u-mb-no@s ons-u-mr-s@s"),c(s,"class","ons-grid__col ons-grid__col--flex ons-col-auto ons-u-flex-shrink@s"),c(A,"class","ons-btn__text"),c(g,"class","ons-btn__inner"),c(b,"type","button"),c(b,"class","ons-btn ons-btn--secondary ons-btn--small ons-js-hide-button"),c(y,"class","ons-grid__col"),c(t,"class","ons-grid ons-grid--flex ons-grid--between ons-grid--gutterless ons-grid--no-wrap@s ons-grid--vertical-center"),c(e,"class","ons-container ons-cookies-banner__confirmation svelte-1o1qwev"),U(e,"ons-page__container--wider",i[0]==="wider")},m(_,m){M(_,e,m),n(e,t),n(t,s),n(s,l),n(l,a),n(a,p),n(l,w),n(l,o),n(o,$),n(o,C),n(o,j),n(o,k),n(o,P),n(o,S),n(t,I),n(t,y),n(y,b),n(b,g),n(g,A),r||(h=J(b,"click",i[13]),r=!0)},p(_,m){m&8&&u!==(u=_[6](_[3])+"")&&me(p,u),m&1&&U(e,"ons-page__container--wider",_[0]==="wider")},d(_){_&&G(e),r=!1,h()}}}function be(i){let e,t,s,l,a,u,p,w,o,f,$=i[6]("We would like to set")+"",C,j,k,B,P=i[6]("to remember your settings and understand how you use the site. This helps us to improve our services.")+"",S,I,y,b,g,A,r,h,_,m,T,D,E,L,W,x,z;return{c(){e=d("form"),t=d("div"),s=d("div"),l=d("div"),a=d("h2"),a.textContent=`${i[6]("Cookies on ons.gov.uk")}`,u=v(),p=d("div"),w=d("p"),w.textContent=`${i[6]("Cookies are small files stored on your device when you visit a website. We use some essential cookies to make this website work.")}`,o=v(),f=d("p"),C=R($),j=v(),k=d("a"),k.textContent=`${i[6]("additional cookies")}`,B=v(),S=R(P),I=v(),y=d("div"),b=d("div"),g=d("button"),A=d("span"),r=d("span"),r.textContent=`${i[6]("Accept additional cookies")}`,h=v(),_=d("div"),m=d("button"),T=d("span"),D=d("span"),D.textContent=`${i[6]("Reject additional cookies")}`,E=v(),L=d("div"),W=d("a"),W.textContent=`${i[6]("View cookies")}`,c(a,"class","ons-cookies-banner__title ons-u-mb-xs"),c(k,"href","/cookies"),c(p,"class","ons-cookies-banner__statement"),c(l,"class","ons-grid__col ons-col-8@m"),c(s,"class","ons-grid"),c(r,"class","ons-btn__text"),c(A,"class","ons-btn__inner"),c(g,"type","submit"),c(g,"class","ons-btn ons-btn--small ons-js-accept-cookies ons-cookies-banner__btn"),c(g,"data-button","accept"),c(b,"class","ons-grid__col"),c(D,"class","ons-btn__text"),c(T,"class","ons-btn__inner"),c(m,"type","button"),c(m,"class","ons-btn ons-btn--small ons-js-reject-cookies ons-cookies-banner__btn"),c(m,"data-button","reject"),c(_,"class","ons-grid__col"),c(W,"class","ons-cookies-banner__link"),c(W,"href","/cookies"),c(L,"class","ons-grid__col"),c(y,"class","ons-grid ons-grid--flex ons-u-mt-s"),c(t,"class","ons-container ons-cookies-banner__primary svelte-1o1qwev"),U(t,"ons-page__container--wider",i[0]==="wider"),c(e,"action","/cookies/accept-all"),c(e,"method","GET"),c(e,"id","global-cookie-message"),c(e,"aria-label","cookie banner")},m(Y,F){M(Y,e,F),n(e,t),n(t,s),n(s,l),n(l,a),n(l,u),n(l,p),n(p,w),n(p,o),n(p,f),n(f,C),n(f,j),n(f,k),n(f,B),n(f,S),n(t,I),n(t,y),n(y,b),n(b,g),n(g,A),n(A,r),n(y,h),n(y,_),n(_,m),n(m,T),n(T,D),n(y,E),n(y,L),n(L,W),x||(z=[J(g,"click",Z(i[11])),J(m,"click",Z(i[12]))],x=!0)},p(Y,F){F&1&&U(t,"ons-page__container--wider",Y[0]==="wider")},d(Y){Y&&G(e),x=!1,_e(z)}}}function ve(i){let e,t=i[1]&&ne(i);return{c(){t&&t.c(),e=de()},m(s,l){t&&t.m(s,l),M(s,e,l)},p(s,[l]){s[1]?t?t.p(s,l):(t=ne(s),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:K,o:K,d(s){t&&t.d(s),s&&G(e)}}}function Ce(i){window!=null&&window.dataLayer&&window.dataLayer.push(i)}function Ae(){return-1<document.cookie.indexOf("cookies_preferences_set=true")}function je(){var i=document.cookie.match(new RegExp("(^|;) ?cookies_policy=([^;]*)(;|$)"));if(i){var e=decodeURIComponent(i[2]),t=JSON.parse(e);return t.usage}return!1}function $e(i,e,t){let s;const l=ue("page");fe(i,l,r=>t(10,s=r));let{analyticsId:a="GTM-MBCBVQS"}=e,{analyticsProps:u={}}=e,{usageCookies:p=!1}=e,{width:w="wide"}=e,o,f=!1,$=!1,C="",j=s&&s.url.host.startsWith("cy")?"cy":"en",k=null;function B(r){let h=31536e3,_=window.location.hostname,m=!0,T=`%7B%22essential%22%3Atrue%2C%22usage%22%3A${r=="all"?"true":"false"}%7D`,D="/";document.cookie=`cookies_preferences_set=${m};max-age=${h};domain=${_};path=${D};`,document.cookie=`cookies_policy=${T};max-age=${h};domain=${_};path=${D};`,t(3,C=`You have ${r=="all"?"accepted":"rejected"} all additional cookies.`),r=="all"&&t(7,p=!0),t(2,$=!0),r=="all"&&P()}function P(){console.log("initialising analytics"),window.dataLayer=[{analyticsOptOut:!1,"gtm.whitelist":["google","hjtc","lcl"],"gtm.blacklist":["customScripts","sp","adm","awct","k","d","j"],...u}],function(r,h,_,m,T){r[m]=r[m]||[],r[m].push({"gtm.start":new Date().getTime(),event:"gtm.js"});var D=h.head,E=h.createElement(_),L=m!="dataLayer"?"&l="+m:"";E.async=!0,E.src="https://www.googletagmanager.com/gtm.js?id="+T+L,D.appendChild(E)}(window,document,"script","dataLayer",a),s&&(k=`${s.url.href}`.replace(s.url.hash,""))}function S(r){if(r&&k){const h=`${r.url.href}`.replace(r.url.hash,"");h!==k&&(k=h,Ce({event:"pageView",pageURL:k,...u}))}}pe(()=>{o=!0,l||(j=document.location.host.startsWith("cy")?"cy":"en"),t(1,f=!Ae()),t(7,p=je()),p&&o&&P()});const I={"Cookies on ons.gov.uk":"Cwcis ar ons.gov.uk","Cookies are small files stored on your device when you visit a website. We use some essential cookies to make this website work.":"Ffeiliau bach a gaiff eu storio ar eich dyfais pan fyddwch yn mynd ar wefan yw cwcis. Rydym ni’n defnyddio rhai cwcis hanfodol i wneud i’r wefan hon weithio.","We would like to set":"Hoffem osod","additional cookies":"cwcis ychwanegol","to remember your settings and understand how you use the site. This helps us to improve our services.":"er mwyn cofio eich gosodiadau a deall sut rydych chi’n defnyddio’r wefan. Mae hyn yn ein helpu ni i wella ein gwasanaethau.","Accept additional cookies":"Derbyn cwcis ychwanegol","Reject additional cookies":"Gwrthod cwcis ychwanegol","View cookies":"Gweld cwcis","You have accepted all additional cookies.":"Rydych chi wedi derbyn yr holl gwcis ychwanegol.","You have rejected all additional cookies.":"Rydych chi wedi gwrthod yr holl gwcis ychwanegol.","You can":"Gallwch chi","change your cookie preferences":"newid eich dewisiadau o ran cwcis","at any time.":"ar unrhyw adeg.",Hide:"Cuddio"},y=r=>j=="cy"&&I[r]?I[r]:r,b=()=>B("all"),g=()=>B("reject"),A=()=>t(1,f=!1);return i.$$set=r=>{"analyticsId"in r&&t(8,a=r.analyticsId),"analyticsProps"in r&&t(9,u=r.analyticsProps),"usageCookies"in r&&t(7,p=r.usageCookies),"width"in r&&t(0,w=r.width)},i.$$.update=()=>{i.$$.dirty&1024&&S(s)},[w,f,$,C,l,B,y,p,a,u,s,b,g,A]}class Q extends se{constructor(e){super(),oe(this,e,$e,ve,ae,{analyticsId:8,analyticsProps:9,usageCookies:7,width:0})}}function De(i){let e,t;const s=[i[0]];let l={};for(let a=0;a<s.length;a+=1)l=ie(l,s[a]);return e=new Q({props:l}),{c(){O(e.$$.fragment)},m(a,u){V(e,a,u),t=!0},p(a,u){const p=u&1?le(s,[ce(a[0])]):{};e.$set(p)},i(a){t||(q(e.$$.fragment,a),t=!0)},o(a){H(e.$$.fragment,a),t=!1},d(a){N(e,a)}}}function Be(i){let e,t,s,l,a,u;const p=[{title:"Layout/AnalyticsBanner"},{component:Q},{argTypes:{}},ee(te)];let w={};for(let o=0;o<p.length;o+=1)w=ie(w,p[o]);return e=new ge({props:w}),s=new he({props:{$$slots:{default:[De,({args:o})=>({0:o}),({args:o})=>o?1:0]},$$scope:{ctx:i}}}),a=new we({props:{name:"Default",args:{}}}),{c(){O(e.$$.fragment),t=v(),O(s.$$.fragment),l=v(),O(a.$$.fragment)},m(o,f){V(e,o,f),M(o,t,f),V(s,o,f),M(o,l,f),V(a,o,f),u=!0},p(o,[f]){const $=f&0?le(p,[p[0],f&0&&{component:Q},p[2],f&0&&ce(ee(te))]):{};e.$set($);const C={};f&3&&(C.$$scope={dirty:f,ctx:o}),s.$set(C)},i(o){u||(q(e.$$.fragment,o),q(s.$$.fragment,o),q(a.$$.fragment,o),u=!0)},o(o){H(e.$$.fragment,o),H(s.$$.fragment,o),H(a.$$.fragment,o),u=!1},d(o){N(e,o),o&&G(t),N(s,o),o&&G(l),N(a,o)}}}class Ie extends se{constructor(e){super(),oe(this,e,null,Be,ae,{})}}const re=ye(Ie,{meta:{title:"Layout/AnalyticsBanner"},stories:{"tpl:default":{storyId:"layout-analyticsbanner--default",name:"default",template:!0,source:"<AnalyticsBanner {...args} />",hasArgs:!0},Default:{storyId:"layout-analyticsbanner--default",name:"Default",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","AnalyticsBanner","withComponentDocs"]}),Se=re.meta,Ee=["Default"],Le=re.stories.Default;export{Le as Default,Ee as __namedExportsOrder,Se as default};
//# sourceMappingURL=AnalyticsBanner.stories-d5b64118.js.map
