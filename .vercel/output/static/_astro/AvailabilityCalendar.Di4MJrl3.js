import{r as d}from"./index.WFquGv8Z.js";var C={exports:{}},v={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $;function Z(){if($)return v;$=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(o,l,s){var h=null;if(s!==void 0&&(h=""+s),l.key!==void 0&&(h=""+l.key),"key"in l){s={};for(var g in l)g!=="key"&&(s[g]=l[g])}else s=l;return l=s.ref,{$$typeof:a,type:o,key:h,ref:l!==void 0?l:null,props:s}}return v.Fragment=e,v.jsx=i,v.jsxs=i,v}var J;function U(){return J||(J=1,C.exports=Z()),C.exports}var r=U();/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),H=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,o)=>o?o.toUpperCase():i.toLowerCase()),Y=a=>{const e=H(a);return e.charAt(0).toUpperCase()+e.slice(1)},z=(...a)=>a.filter((e,i,o)=>!!e&&e.trim()!==""&&o.indexOf(e)===i).join(" ").trim(),V=a=>{for(const e in a)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Q={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=d.forwardRef(({color:a="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:l="",children:s,iconNode:h,...g},k)=>d.createElement("svg",{ref:k,...Q,width:e,height:e,stroke:a,strokeWidth:o?Number(i)*24/Number(e):i,className:z("lucide",l),...!s&&!V(g)&&{"aria-hidden":"true"},...g},[...h.map(([j,y])=>d.createElement(j,y)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=(a,e)=>{const i=d.forwardRef(({className:o,...l},s)=>d.createElement(X,{ref:s,iconNode:e,className:z(`lucide-${G(Y(a))}`,`lucide-${a}`,o),...l}));return i.displayName=Y(a),i};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],ee=S("chevron-left",K);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const te=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],re=S("chevron-right",te);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ne=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],ae=S("loader-circle",ne),le=({lang:a="nl"})=>{const[e,i]=d.useState(null),[o,l]=d.useState(null),[s,h]=d.useState(new Date),[g,k]=d.useState([]),[j,y]=d.useState(!0),[se,L]=d.useState(null);d.useEffect(()=>{(async()=>{try{const t=await fetch("/api/calendar");if(!t.ok)throw new Error("Failed to fetch calendar");const c=await t.json();k(c)}catch(t){console.error(t),L("Kon beschikbaarheid niet laden.")}finally{y(!1)}})()},[]);const T=n=>{if(!(n<new Date(new Date().setHours(0,0,0,0)))){if(e&&o||e&&n<e){i(n),l(null);return}if(e&&!o&&n>e){let t=new Date(e);t.setDate(t.getDate()+1);let c=!1;for(;t<=n;){if(A(t.getFullYear(),t.getMonth(),t.getDate())){c=!0;break}t.setDate(t.getDate()+1)}if(c){alert(a==="nl"?"De geselecteerde periode bevat bezette dagen.":"Selected period contains occupied days.");return}l(n)}else i(n),l(null)}},I=()=>{if(e&&o){const n=new CustomEvent("booking-dates-selected",{detail:{start:e,end:o}});window.dispatchEvent(n)}},E=n=>{const t=n.getFullYear(),c=n.getMonth(),p=new Date(t,c+1,0).getDate(),w=new Date(t,c,1).getDay(),m=w===0?6:w-1;return{daysInMonth:p,startingDay:m}},q=()=>{h(new Date(s.getFullYear(),s.getMonth()+1,1))},B=()=>{h(new Date(s.getFullYear(),s.getMonth()-1,1))};E(s);const P={nl:["Januari","Februari","Maart","April","Mei","Juni","Juli","Augustus","September","Oktober","November","December"],en:["January","February","March","April","May","June","July","August","September","October","November","December"],de:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]},O={nl:["Ma","Di","Wo","Do","Vr","Za","Zo"],en:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],de:["Mo","Di","Mi","Do","Fr","Sa","So"]},A=(n,t,c)=>{const p=`${n}-${String(t+1).padStart(2,"0")}-${String(c).padStart(2,"0")}`;return g.includes(p)},F=(n,t)=>n?n.getFullYear()===t.getFullYear()&&n.getMonth()===t.getMonth()&&n.getDate()===t.getDate():!1;return j?r.jsx("div",{className:"flex justify-center items-center h-[400px] bg-brand-light/30 rounded-3xl",children:r.jsx(ae,{className:"w-8 h-8 text-brand-green animate-spin"})}):r.jsxs("div",{className:"bg-white p-6 rounded-[2.5rem] shadow-xl border border-brand-clay/20",children:[r.jsxs("div",{className:"flex items-center justify-between mb-8",children:[r.jsx("button",{onClick:B,className:"p-3 hover:bg-brand-light rounded-full transition-colors text-brand-green group","aria-label":"Previous month",children:r.jsx(ee,{size:28,className:"group-hover:-translate-x-1 transition-transform"})}),r.jsx("div",{className:"flex-1 hidden md:block"})," ",r.jsx("button",{onClick:q,className:"p-3 hover:bg-brand-light rounded-full transition-colors text-brand-green group","aria-label":"Next month",children:r.jsx(re,{size:28,className:"group-hover:translate-x-1 transition-transform"})})]}),r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-12",children:[0,1].map(n=>{const t=new Date(s.getFullYear(),s.getMonth()+n,1),{daysInMonth:c,startingDay:p}=E(t),w=n===1?"hidden md:block":"";return r.jsxs("div",{className:`relative ${w}`,children:[r.jsxs("h3",{className:"text-xl font-heading font-bold text-brand-dark mb-6 text-center capitalize",children:[P[a][t.getMonth()]," ",t.getFullYear()]}),r.jsx("div",{className:"grid grid-cols-7 gap-1 mb-2",children:O[a].map(m=>r.jsx("div",{className:"text-center text-xs font-bold text-brand-dark/50 py-2",children:m},m))}),r.jsxs("div",{className:"grid grid-cols-7 gap-1",children:[Array.from({length:p}).map((m,N)=>r.jsx("div",{className:"aspect-square"},`empty-${N}`)),Array.from({length:c}).map((m,N)=>{const D=N+1,b=new Date(t.getFullYear(),t.getMonth(),D),M=A(t.getFullYear(),t.getMonth(),D),W=new Date().toDateString()===b.toDateString(),R=b<new Date(new Date().setHours(0,0,0,0)),x=F(e,b),f=F(o,b),_=e&&o&&b>e&&b<o;let u="bg-brand-light/20 text-brand-dark hover:bg-brand-green/10 cursor-pointer";return M&&(u="bg-red-50 text-red-400 line-through decoration-red-400/50 cursor-not-allowed"),R&&(u="bg-gray-50 text-gray-300 cursor-not-allowed"),x&&(u="bg-brand-green text-white font-bold ring-2 ring-brand-green/30 transform scale-105 shadow-md z-10 rounded-l-xl rounded-r-none"),f&&(u="bg-brand-green text-white font-bold ring-2 ring-brand-green/30 transform scale-105 shadow-md z-10 rounded-r-xl rounded-l-none"),x&&f&&(u="bg-brand-green text-white font-bold ring-2 ring-brand-green/30 transform scale-105 shadow-md z-10 rounded-xl"),_&&(u="bg-brand-green/20 text-brand-dark font-medium rounded-none"),W&&!M&&!x&&!f&&!_&&(u="bg-brand-light text-brand-dark font-bold border border-brand-green/30"),x&&o&&(u+=" rounded-l-xl rounded-r-none"),f&&e&&(u+=" rounded-r-xl rounded-l-none"),(x||f)&&(!e||!o)&&(u+=" rounded-xl"),r.jsx("button",{disabled:M||R,onClick:()=>T(b),className:`
                                                aspect-square flex items-center justify-center text-sm transition-all duration-300 relative
                                                ${u}
                                                ${x||f?"rounded-xl":""} /* Fallback to rounded if just clicking around */
                                            `,children:D},D)})]})]},n)})}),r.jsxs("div",{className:"mt-8 flex flex-wrap gap-6 text-sm font-medium text-brand-dark/60 justify-center mb-8 border-t border-brand-dark/5 pt-6",children:[r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx("div",{className:"w-3 h-3 rounded-full bg-brand-light/50 border border-brand-dark/10"}),r.jsx("span",{children:"Beschikbaar"})]}),r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx("div",{className:"w-3 h-3 rounded-full bg-red-50 border border-red-100"}),r.jsx("span",{children:"Bezet"})]}),r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx("div",{className:"w-3 h-3 rounded-full bg-brand-green"}),r.jsx("span",{children:"Geselecteerd"})]})]}),e&&o&&r.jsx("div",{className:"flex justify-center animate-slide-up",children:r.jsx("button",{onClick:I,className:"bg-brand-green text-white font-bold text-lg py-4 px-12 rounded-full shadow-lg hover:bg-brand-dark hover:scale-[1.02] active:scale-95 transition-all duration-300",children:a==="nl"?"Datum overnemen":a==="en"?"Use these dates":"Datum übernehmen"})})]})};export{le as default};
