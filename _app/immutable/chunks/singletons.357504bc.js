import{D as d,s as m}from"./index.a4cad43b.js";const u=[];function p(e,t=d){let n;const o=new Set;function r(s){if(m(e,s)&&(e=s,n)){const c=!u.length;for(const i of o)i[1](),u.push(i,e);if(c){for(let i=0;i<u.length;i+=2)u[i][0](u[i+1]);u.length=0}}}function a(s){r(s(e))}function l(s,c=d){const i=[s,c];return o.add(i),o.size===1&&(n=t(r)||d),s(e),()=>{o.delete(i),o.size===0&&n&&(n(),n=null)}}return{set:r,update:a,subscribe:l}}var g;const E=((g=globalThis.__sveltekit_1sjj7it)==null?void 0:g.base)??"";var k;const A=((k=globalThis.__sveltekit_1sjj7it)==null?void 0:k.assets)??E,R="1686160745769",I="sveltekit:snapshot",j="sveltekit:scroll",x="sveltekit:index",_={tap:1,hover:2,viewport:3,eager:4,off:-1};function O(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function U(){return{x:pageXOffset,y:pageYOffset}}function f(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const b={..._,"":_.hover};function v(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function L(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=v(e)}}function N(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const o=e instanceof SVGAElement?e.target.baseVal:e.target,r=!n||!!o||T(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),a=(n==null?void 0:n.origin)===location.origin&&e.hasAttribute("download");return{url:n,external:r,target:o,download:a}}function P(e){let t=null,n=null,o=null,r=null,a=null,l=null,s=e;for(;s&&s!==document.documentElement;)o===null&&(o=f(s,"preload-code")),r===null&&(r=f(s,"preload-data")),t===null&&(t=f(s,"keepfocus")),n===null&&(n=f(s,"noscroll")),a===null&&(a=f(s,"reload")),l===null&&(l=f(s,"replacestate")),s=v(s);return{preload_code:b[o??"off"],preload_data:b[r??"off"],keep_focus:t==="off"?!1:t===""?!0:null,noscroll:n==="off"?!1:n===""?!0:null,reload:a==="off"?!1:a===""?!0:null,replace_state:l==="off"?!1:l===""?!0:null}}function h(e){const t=p(e);let n=!0;function o(){n=!0,t.update(l=>l)}function r(l){n=!1,t.set(l)}function a(l){let s;return t.subscribe(c=>{(s===void 0||n&&c!==s)&&l(s=c)})}return{notify:o,set:r,subscribe:a}}function S(){const{set:e,subscribe:t}=p(!1);let n;async function o(){clearTimeout(n);try{const r=await fetch(`${A}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!r.ok)return!1;const l=(await r.json()).version!==R;return l&&(e(!0),clearTimeout(n)),l}catch{return!1}}return{subscribe:t,check:o}}function T(e,t){return e.origin!==location.origin||!e.pathname.startsWith(t)}let w;function V(e){w=e.client}const Y={url:h({}),page:h({}),navigating:p(null),updated:S()};export{x as I,_ as P,j as S,I as a,N as b,P as c,U as d,E as e,L as f,O as g,V as h,T as i,w as j,Y as s};
