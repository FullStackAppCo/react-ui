var P=Object.create;var s=Object.defineProperty;var F=Object.getOwnPropertyDescriptor;var C=Object.getOwnPropertyNames;var N=Object.getPrototypeOf,A=Object.prototype.hasOwnProperty;var M=(o,e)=>{for(var t in e)s(o,t,{get:e[t],enumerable:!0})},f=(o,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of C(e))!A.call(o,a)&&a!==t&&s(o,a,{get:()=>e[a],enumerable:!(n=F(e,a))||n.enumerable});return o};var r=(o,e,t)=>(t=o!=null?P(N(o)):{},f(e||!o||!o.__esModule?s(t,"default",{value:o,enumerable:!0}):t,o)),E=o=>f(s({},"__esModule",{value:!0}),o);var I={};M(I,{Container:()=>W,ExternalLink:()=>_,FathomAnalytics:()=>z,FooterHeading:()=>D,FooterLegal:()=>H,PrimaryButton:()=>L,TextClip:()=>S});module.exports=E(I);var m=r(require("react"));function L({children:o,className:e="",disabled:t=!1,tag:n="button",onClick:a=()=>null,size:c="base"}){e=[v(c),"text-black cursor-pointer","bg-primary-500 text-black font-bold bg-gradient-to-br from-violet-500 to-fuchsia-500","rounded-lg","active:scale-95","focus:outline-none focus:bg-focus-500 focus:from-transparent focus:to-transparent","disabled:opacity-50 disabled:cursor-default disabled:active:scale-100",e].join(" ");let y=n;function v(T){return T==="lg"?"px-8 py-3 text-xl":"px-4 py-2 text-lg"}return m.default.createElement(y,{className:e,onClick:a,disabled:t},o)}var p=r(require("react"));function S({children:o,className:e=""}){return p.default.createElement("span",{className:`bg-clip-text text-transparent ${e}`},o)}var g=r(require("react"));function _({children:o,className:e="",href:t}){return e=["p-0.5","font-medium text-primary-500 dark:text-primary-300 underline","focus:outline-none focus:bg-focus-500 focus:text-black focus:no-underline",e].join(" "),g.default.createElement("a",{href:t,className:e},o)}var l=r(require("react")),h=require("@fortawesome/react-fontawesome");function D({children:o,icon:e}){return l.default.createElement("div",{className:"flex items-center space-x-2"},l.default.createElement(h.FontAwesomeIcon,{icon:e,className:"w-4 h-4 text-gray-400 dark:text-gray-500"}),l.default.createElement("h2",{className:"text-gray-800 dark:text-gray-300 text-lg font-display tracking-wide"},o))}var u=r(require("react"));function H({className:o=""}){let e="leading-loose";return u.default.createElement("div",{className:`space-y-3 ${o}`},u.default.createElement("small",{className:`block ${e}`},"Site designed and built by Full Stack App Co. \xA9 ",new Date().getFullYear()," Full Stack App Company Ltd unless otherwise stated."),u.default.createElement("small",{className:`block ${e}`},"Full Stack App Company Ltd is a company registered in England and Wales. Registered office: Ground Floor, 13 Cable Court Pittman Way, Fulwood, Preston. PR2 9YW Company registration number: 09391612"))}var b=require("react");var i=function(e){window.__fathomClientQueue=window.__fathomClientQueue||[],window.__fathomClientQueue.push(e)},Q=function(){window.__fathomClientQueue=window.__fathomClientQueue||[],window.__fathomClientQueue.forEach(function(e){switch(e.type){case"trackPageview":d(e.opts);return;case"trackGoal":R(e.code,e.cents);return;case"enableTrackingForMe":G();return;case"blockTrackingForMe":B();return;case"setSite":$(e.id);return}}),window.__fathomClientQueue=[]},w=function(e){var t=/(https?)(?=:|\/|$)/;e.forEach(function(n){t.exec(n)!==null&&console.warn("The include domain ".concat(n," might fail to work as intended as it begins with a transfer protocol (http://, https://). Consider removing the protocol portion of the string."))})},x=function(e,t){var n=document.createElement("script"),a=document.getElementsByTagName("script")[0]||document.querySelector("body");n.id="fathom-script",n.async=!0,n.setAttribute("data-site",e),n.src=t&&t.url?t.url:"https://cdn.usefathom.com/script.js",t&&(t.auto!==void 0&&n.setAttribute("data-auto","".concat(t.auto)),t.honorDNT!==void 0&&n.setAttribute("data-honor-dnt","".concat(t.honorDNT)),t.canonical!==void 0&&n.setAttribute("data-canonical","".concat(t.canonical)),t.includedDomains&&(w(t.includedDomains),n.setAttribute("data-included-domains",t.includedDomains.join(","))),t.excludedDomains&&(w(t.excludedDomains),n.setAttribute("data-excluded-domains",t.excludedDomains.join(","))),t.spa&&n.setAttribute("data-spa",t.spa)),n.onload=Q,a.parentNode.insertBefore(n,a)},d=function(e){window.fathom?e?window.fathom.trackPageview(e):window.fathom.trackPageview():i({type:"trackPageview",opts:e})},R=function(e,t){window.fathom?window.fathom.trackGoal(e,t):i({type:"trackGoal",code:e,cents:t})},B=function(){window.fathom?window.fathom.blockTrackingForMe():i({type:"blockTrackingForMe"})},G=function(){window.fathom?window.fathom.enableTrackingForMe():i({type:"enableTrackingForMe"})},$=function(e){window.fathom?window.fathom.setSite(e):i({type:"setSite",id:e})};function z({domains:o,siteId:e,enabled:t,addListener:n,removeListener:a}){function c(){d()}return(0,b.useEffect)(()=>{if(t()!==!1)return x(e,{includedDomains:o}),n(c),()=>{a(c)}},[]),null}var k=r(require("react"));function W({children:o,className:e,tag:t="div"}){return k.default.createElement(t,{className:`px-6 container mx-auto max-w-4xl ${e}`},o)}
