import{D as d,s as m}from"./index.afa1daf7.js";const u=[];function p(e,t=d){let n;const o=new Set;function l(s){if(m(e,s)&&(e=s,n)){const c=!u.length;for(const i of o)i[1](),u.push(i,e);if(c){for(let i=0;i<u.length;i+=2)u[i][0](u[i+1]);u.length=0}}}function a(s){l(s(e))}function r(s,c=d){const i=[s,c];return o.add(i),o.size===1&&(n=t(l)||d),s(e),()=>{o.delete(i),o.size===0&&n&&(n(),n=null)}}return{set:l,update:a,subscribe:r}}var g;const y=((g=globalThis.__sveltekit_1xryd6b)==null?void 0:g.base)??"";var k;const E=((k=globalThis.__sveltekit_1xryd6b)==null?void 0:k.assets)??y,A="1695273438631",x="sveltekit:snapshot",I="sveltekit:scroll",O="sveltekit:index",b={tap:1,hover:2,viewport:3,eager:4,off:-1};function U(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function L(){return{x:pageXOffset,y:pageYOffset}}function f(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const _={...b,"":b.hover};function v(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function N(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=v(e)}}function P(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const o=e instanceof SVGAElement?e.target.baseVal:e.target,l=!n||!!o||S(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),a=(n==null?void 0:n.origin)===location.origin&&e.hasAttribute("download");return{url:n,external:l,target:o,download:a}}function V(e){let t=null,n=null,o=null,l=null,a=null,r=null,s=e;for(;s&&s!==document.documentElement;)o===null&&(o=f(s,"preload-code")),l===null&&(l=f(s,"preload-data")),t===null&&(t=f(s,"keepfocus")),n===null&&(n=f(s,"noscroll")),a===null&&(a=f(s,"reload")),r===null&&(r=f(s,"replacestate")),s=v(s);return{preload_code:_[o??"off"],preload_data:_[l??"off"],keep_focus:t==="off"?!1:t===""?!0:null,noscroll:n==="off"?!1:n===""?!0:null,reload:a==="off"?!1:a===""?!0:null,replace_state:r==="off"?!1:r===""?!0:null}}function h(e){const t=p(e);let n=!0;function o(){n=!0,t.update(r=>r)}function l(r){n=!1,t.set(r)}function a(r){let s;return t.subscribe(c=>{(s===void 0||n&&c!==s)&&r(s=c)})}return{notify:o,set:l,subscribe:a}}function R(){const{set:e,subscribe:t}=p(!1);let n;async function o(){clearTimeout(n);try{const l=await fetch(`${E}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!l.ok)return!1;const r=(await l.json()).version!==A;return r&&(e(!0),clearTimeout(n)),r}catch{return!1}}return{subscribe:t,check:o}}function S(e,t){return e.origin!==location.origin||!e.pathname.startsWith(t)}let T;function Y(e){T=e.client}const j={url:h({}),page:h({}),navigating:p(null),updated:R()};export{O as I,b as P,I as S,x as a,P as b,V as c,L as d,y as e,N as f,U as g,Y as h,S as i,T as j,j as s};
