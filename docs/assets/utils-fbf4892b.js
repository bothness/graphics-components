const n=(e,t=!0)=>e.toString().normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().trim().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-"),o=e=>{if(!e)return!1;const t=new Date(e);return!isNaN(t)},s=(e,t="en-GB",a={year:"numeric",month:"long",day:"2-digit"})=>new Date(e).toLocaleDateString(t,a);export{s as f,n as s,o as v};
//# sourceMappingURL=utils-fbf4892b.js.map
