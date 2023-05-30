(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function i(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(n){if(n.ep)return;n.ep=!0;const s=i(n);fetch(n.href,s)}})();const ue=(e,t)=>e===t,fe=Symbol("solid-track"),q={equals:ue};let ce=ne;const v=1,B=2,Y={owned:null,cleanups:null,context:null,owner:null};var h=null;let V=null,a=null,p=null,A=null,F=0;function O(e,t){const i=a,l=h,n=e.length===0,s=n?Y:{owned:null,cleanups:null,context:null,owner:t===void 0?l:t},r=n?e:()=>e(()=>x(()=>G(s)));h=s,a=null;try{return T(r,!0)}finally{a=i,h=l}}function Z(e,t){t=t?Object.assign({},q,t):q;const i={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},l=n=>(typeof n=="function"&&(n=n(i.value)),ee(i,n));return[z.bind(i),l]}function k(e,t,i){const l=te(e,t,!1,v);K(l)}function j(e,t,i){i=i?Object.assign({},q,i):q;const l=te(e,t,!0,0);return l.observers=null,l.observerSlots=null,l.comparator=i.equals||void 0,K(l),z.bind(l)}function x(e){if(a===null)return e();const t=a;a=null;try{return e()}finally{a=t}}function ae(e){return h===null||(h.cleanups===null?h.cleanups=[e]:h.cleanups.push(e)),e}function z(){if(this.sources&&this.state)if(this.state===v)K(this);else{const e=p;p=null,T(()=>D(this),!1),p=e}if(a){const e=this.observers?this.observers.length:0;a.sources?(a.sources.push(this),a.sourceSlots.push(e)):(a.sources=[this],a.sourceSlots=[e]),this.observers?(this.observers.push(a),this.observerSlots.push(a.sources.length-1)):(this.observers=[a],this.observerSlots=[a.sources.length-1])}return this.value}function ee(e,t,i){let l=e.value;return(!e.comparator||!e.comparator(l,t))&&(e.value=t,e.observers&&e.observers.length&&T(()=>{for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n],r=V&&V.running;r&&V.disposed.has(s),(r?!s.tState:!s.state)&&(s.pure?p.push(s):A.push(s),s.observers&&le(s)),r||(s.state=v)}if(p.length>1e6)throw p=[],new Error},!1)),t}function K(e){if(!e.fn)return;G(e);const t=h,i=a,l=F;a=h=e,de(e,e.value,l),a=i,h=t}function de(e,t,i){let l;try{l=e.fn(t)}catch(n){return e.pure&&(e.state=v,e.owned&&e.owned.forEach(G),e.owned=null),e.updatedAt=i+1,se(n)}(!e.updatedAt||e.updatedAt<=i)&&(e.updatedAt!=null&&"observers"in e?ee(e,l):e.value=l,e.updatedAt=i)}function te(e,t,i,l=v,n){const s={fn:e,state:l,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:h,context:null,pure:i};return h===null||h!==Y&&(h.owned?h.owned.push(s):h.owned=[s]),s}function ie(e){if(e.state===0)return;if(e.state===B)return D(e);if(e.suspense&&x(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<F);)e.state&&t.push(e);for(let i=t.length-1;i>=0;i--)if(e=t[i],e.state===v)K(e);else if(e.state===B){const l=p;p=null,T(()=>D(e,t[0]),!1),p=l}}function T(e,t){if(p)return e();let i=!1;t||(p=[]),A?i=!0:A=[],F++;try{const l=e();return he(i),l}catch(l){i||(A=null),p=null,se(l)}}function he(e){if(p&&(ne(p),p=null),e)return;const t=A;A=null,t.length&&T(()=>ce(t),!1)}function ne(e){for(let t=0;t<e.length;t++)ie(e[t])}function D(e,t){e.state=0;for(let i=0;i<e.sources.length;i+=1){const l=e.sources[i];if(l.sources){const n=l.state;n===v?l!==t&&(!l.updatedAt||l.updatedAt<F)&&ie(l):n===B&&D(l,t)}}}function le(e){for(let t=0;t<e.observers.length;t+=1){const i=e.observers[t];i.state||(i.state=B,i.pure?p.push(i):A.push(i),i.observers&&le(i))}}function G(e){let t;if(e.sources)for(;e.sources.length;){const i=e.sources.pop(),l=e.sourceSlots.pop(),n=i.observers;if(n&&n.length){const s=n.pop(),r=i.observerSlots.pop();l<n.length&&(s.sourceSlots[r]=l,n[l]=s,i.observerSlots[l]=r)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)G(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function se(e){throw e}const pe=Symbol("fallback");function Q(e){for(let t=0;t<e.length;t++)e[t]()}function be(e,t,i={}){let l=[],n=[],s=[],r=0,o=t.length>1?[]:null;return ae(()=>Q(s)),()=>{let f=e()||[],c,u;return f[fe],x(()=>{let d=f.length,g,S,U,N,I,y,w,C,E;if(d===0)r!==0&&(Q(s),s=[],l=[],n=[],r=0,o&&(o=[])),i.fallback&&(l=[pe],n[0]=O(re=>(s[0]=re,i.fallback())),r=1);else if(r===0){for(n=new Array(d),u=0;u<d;u++)l[u]=f[u],n[u]=O(m);r=d}else{for(U=new Array(d),N=new Array(d),o&&(I=new Array(d)),y=0,w=Math.min(r,d);y<w&&l[y]===f[y];y++);for(w=r-1,C=d-1;w>=y&&C>=y&&l[w]===f[C];w--,C--)U[C]=n[w],N[C]=s[w],o&&(I[C]=o[w]);for(g=new Map,S=new Array(C+1),u=C;u>=y;u--)E=f[u],c=g.get(E),S[u]=c===void 0?-1:c,g.set(E,u);for(c=y;c<=w;c++)E=l[c],u=g.get(E),u!==void 0&&u!==-1?(U[u]=n[c],N[u]=s[c],o&&(I[u]=o[c]),u=S[u],g.set(E,u)):s[c]();for(u=y;u<d;u++)u in U?(n[u]=U[u],s[u]=N[u],o&&(o[u]=I[u],o[u](u))):n[u]=O(m);n=n.slice(0,r=d),l=f.slice(0)}return n});function m(d){if(s[u]=d,o){const[g,S]=Z(u);return o[u]=S,t(f[u],g)}return t(f[u])}}}function $(e,t){return x(()=>e(t||{}))}const me=e=>`Stale read from <${e}>.`;function ge(e){const t="fallback"in e&&{fallback:()=>e.fallback};return j(be(()=>e.each,e.children,t||void 0))}function ye(e){const t=e.keyed,i=j(()=>e.when,void 0,{equals:(l,n)=>t?l===n:!l==!n});return j(()=>{const l=i();if(l){const n=e.children;return typeof n=="function"&&n.length>0?x(()=>n(t?l:()=>{if(!x(i))throw me("Show");return e.when})):n}return e.fallback},void 0,void 0)}function we(e,t,i){let l=i.length,n=t.length,s=l,r=0,o=0,f=t[n-1].nextSibling,c=null;for(;r<n||o<s;){if(t[r]===i[o]){r++,o++;continue}for(;t[n-1]===i[s-1];)n--,s--;if(n===r){const u=s<l?o?i[o-1].nextSibling:i[s-o]:f;for(;o<s;)e.insertBefore(i[o++],u)}else if(s===o)for(;r<n;)(!c||!c.has(t[r]))&&t[r].remove(),r++;else if(t[r]===i[s-1]&&i[o]===t[n-1]){const u=t[--n].nextSibling;e.insertBefore(i[o++],t[r++].nextSibling),e.insertBefore(i[--s],u),t[n]=i[s]}else{if(!c){c=new Map;let m=o;for(;m<s;)c.set(i[m],m++)}const u=c.get(t[r]);if(u!=null)if(o<u&&u<s){let m=r,d=1,g;for(;++m<n&&m<s&&!((g=c.get(t[m]))==null||g!==u+d);)d++;if(d>u-o){const S=t[r];for(;o<u;)e.insertBefore(i[o++],S)}else e.replaceChild(i[o++],t[r++])}else r++;else t[r++].remove()}}}const W="_$DX_DELEGATE";function $e(e,t,i,l={}){let n;return O(s=>{n=s,t===document?e():b(t,e(),t.firstChild?null:void 0,i)},l.owner),()=>{n(),t.textContent=""}}function _(e,t,i){let l;const n=()=>{const r=document.createElement("template");return r.innerHTML=e,i?r.content.firstChild.firstChild:r.content.firstChild},s=t?()=>(l||(l=n())).cloneNode(!0):()=>x(()=>document.importNode(l||(l=n()),!0));return s.cloneNode=s,s}function _e(e,t=window.document){const i=t[W]||(t[W]=new Set);for(let l=0,n=e.length;l<n;l++){const s=e[l];i.has(s)||(i.add(s),t.addEventListener(s,Ce))}}function R(e,t,i){i==null?e.removeAttribute(t):e.setAttribute(t,i)}function b(e,t,i,l){if(i!==void 0&&!l&&(l=[]),typeof t!="function")return M(e,t,l,i);k(n=>M(e,t(),n,i),l)}function Ce(e){const t=`$$${e.type}`;let i=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==i&&Object.defineProperty(e,"target",{configurable:!0,value:i}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return i||document}});i;){const l=i[t];if(l&&!i.disabled){const n=i[`${t}Data`];if(n!==void 0?l.call(i,n,e):l.call(i,e),e.cancelBubble)return}i=i._$host||i.parentNode||i.host}}function M(e,t,i,l,n){for(;typeof i=="function";)i=i();if(t===i)return i;const s=typeof t,r=l!==void 0;if(e=r&&i[0]&&i[0].parentNode||e,s==="string"||s==="number")if(s==="number"&&(t=t.toString()),r){let o=i[0];o&&o.nodeType===3?o.data=t:o=document.createTextNode(t),i=L(e,i,l,o)}else i!==""&&typeof i=="string"?i=e.firstChild.data=t:i=e.textContent=t;else if(t==null||s==="boolean")i=L(e,i,l);else{if(s==="function")return k(()=>{let o=t();for(;typeof o=="function";)o=o();i=M(e,o,i,l)}),()=>i;if(Array.isArray(t)){const o=[],f=i&&Array.isArray(i);if(H(o,t,i,n))return k(()=>i=M(e,o,i,l,!0)),()=>i;if(o.length===0){if(i=L(e,i,l),r)return i}else f?i.length===0?X(e,o,l):we(e,i,o):(i&&L(e),X(e,o));i=o}else if(t.nodeType){if(Array.isArray(i)){if(r)return i=L(e,i,l,t);L(e,i,null,t)}else i==null||i===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);i=t}else console.warn("Unrecognized value. Skipped inserting",t)}return i}function H(e,t,i,l){let n=!1;for(let s=0,r=t.length;s<r;s++){let o=t[s],f=i&&i[s],c;if(!(o==null||o===!0||o===!1))if((c=typeof o)=="object"&&o.nodeType)e.push(o);else if(Array.isArray(o))n=H(e,o,f)||n;else if(c==="function")if(l){for(;typeof o=="function";)o=o();n=H(e,Array.isArray(o)?o:[o],Array.isArray(f)?f:[f])||n}else e.push(o),n=!0;else{const u=String(o);f&&f.nodeType===3&&f.data===u?e.push(f):e.push(document.createTextNode(u))}}return n}function X(e,t,i=null){for(let l=0,n=t.length;l<n;l++)e.insertBefore(t[l],i)}function L(e,t,i,l){if(i===void 0)return e.textContent="";const n=l||document.createTextNode("");if(t.length){let s=!1;for(let r=t.length-1;r>=0;r--){const o=t[r];if(n!==o){const f=o.parentNode===e;!s&&!r?f?e.replaceChild(n,o):e.insertBefore(n,i):f&&o.remove()}else s=!0}}else e.insertBefore(n,i);return[n]}const Se=""+new URL("abyssolution-f-f7d4c605.png",import.meta.url).href,Ae=""+new URL("abyssolution-t-1e3f32a5.png",import.meta.url).href,xe=""+new URL("breadcrab-e-7a2cd60b.png",import.meta.url).href,ve=""+new URL("rdog-e-9a2abd62.png",import.meta.url).href,Ee=""+new URL("адиновощество-f-01112808.png",import.meta.url).href,Le=""+new URL("адиновощество-t-9e0fb5fb.png",import.meta.url).href,Pe=""+new URL("бородокс-f-343b298c.png",import.meta.url).href,ke=""+new URL("бородокс-t-887b0382.png",import.meta.url).href,Ue=""+new URL("о!пасть!насть!-f-1e219155.png",import.meta.url).href,Re=""+new URL("о!пасть!насть!-t-2dcafb6a.png",import.meta.url).href,Te=_("<p>one world that i have drafted; it's not yet complete"),Ne=_("<p>autistic perception passed through prism of my explanation."),Ie=_("<p>sometimes it's funny, sometimes not. othertimes it's both."),Oe=_("<p>from colorless to colorful, from sunshine until dawn"),qe=_('<p>russian words "hell" ("ад"), "loneliness" ("одиночество") and "vegetable" ("овощ") melt into this picture.'),Be=_('<article><header><h1></h1></header><main><img class="thumbnail"><div>'),je=_('<a role="button" class="material-symbols-outlined outline">'),De=_('<article><header><h1></h1></header><img><footer><nav><ul><li></li><li></li><li></li></ul><ul><li><button class="material-symbols-outlined outline">close'),Me=_(`<div class="container"><header><aside><img></aside><blockquote><p>hi! my name is breadCrab! it's like camelCase, but <i>bread</i> instead of <i>camel</i> and <i>Crab</i> instead of <i>Case</i>! it's easier to remember this way!</p><p>let me introduce <s>you to</s> <i>to you</i> these products of one's mind and creativity:</p></blockquote></header><footer><blockquote><p>tell me what you think or i'll bite you!</p><p></p></blockquote><aside><img>`),Fe=_("<dialog open>");let Ke=[{title:"abyssolution",thumb:Ae,image:Se,wip:!0,description:()=>Te()},{title:"о!пасть!насть!",thumb:Re,image:Ue,description:()=>[Ne(),Ie()]},{title:"бородокс",thumb:ke,image:Pe,description:()=>Oe()},{title:"адиновощество",thumb:Le,image:Ee,description:()=>qe()}];const[J,oe]=Z(),Ge=({data:e})=>(()=>{const t=Be(),i=t.firstChild,l=i.firstChild,n=i.nextSibling,s=n.firstChild,r=s.nextSibling;return b(l,()=>e.title),s.$$click=()=>oe(e),b(r,(()=>{const o=j(()=>!!e.description);return()=>o()&&e.description()})()),k(()=>R(s,"src",e.thumb)),t})(),P=e=>(()=>{const t=je();return b(t,()=>e.icon),k(()=>R(t,"href",`https://github.com/abetaev/art.betaev.pub/issues/new?title=${encodeURIComponent(e.title)}&body=${encodeURIComponent(e.body)}`)),t})(),Ve=({img:e})=>(()=>{const t=De(),i=t.firstChild,l=i.firstChild,n=i.nextSibling,s=n.nextSibling,r=s.firstChild,o=r.firstChild,f=o.firstChild,c=f.nextSibling,u=c.nextSibling,m=o.nextSibling,d=m.firstChild,g=d.firstChild;return t.style.setProperty("width","100%"),b(l,()=>e.title),n.$$click=()=>window.location.assign(e.image),b(f,$(P,{icon:"thumb_down",get title(){return`i {hate|despise|loathe|don't feel anything about|???} "${e.title}"`},body:"because it is [not an art, [disgusting, ugly, full of shit, boring, ...]]"})),b(c,$(P,{icon:"psychology_alt",get title(){return`i don't have an opinion about "${e.title}"`},body:"because i am [psychopath, not feeling like it today, bored, too smart, dumb, ...]]"})),b(u,$(P,{icon:"thumb_up",get title(){return`i {like|absolutely love|see something in|???} "${e.title}"`},body:"because it is [beautiful, inspirational, deep, ...]"})),g.$$click=()=>oe(),k(()=>R(n,"src",e.image)),t})(),He=()=>[(()=>{const e=Me(),t=e.firstChild,i=t.firstChild,l=i.firstChild,n=t.nextSibling,s=n.firstChild,r=s.firstChild,o=r.nextSibling,f=s.nextSibling,c=f.firstChild;return t.style.setProperty("display","flex"),t.style.setProperty("flex-direction","row"),t.style.setProperty("align-items","center"),R(l,"src",xe),b(e,$(ge,{each:Ke,children:u=>$(Ge,{data:u})}),n),n.style.setProperty("display","flex"),n.style.setProperty("flex-direction","row"),n.style.setProperty("align-items","center"),n.style.setProperty("justify-content","flex-end"),s.style.setProperty("border-right",".25rem solid var(--blockquote-border-color)"),s.style.setProperty("border-left","none"),o.style.setProperty("display","flex"),b(o,$(P,{icon:"thumb_down",title:"i {hate|despise|loathe|don't feel anything about|???} this",body:"because it is [not an art, [disgusting, ugly, full of shit, boring, ...]]"}),null),b(o,$(P,{icon:"psychology_alt",title:"i don't have an opinion about this",body:"because i am [psychopath, not feeling like it today, bored, too smart, dumb, ...]]"}),null),b(o,$(P,{icon:"thumb_up",title:"i {like|absolutely love|see something in|???} this",body:"because it is [beautiful, inspirational, deep, ...]"}),null),R(c,"src",ve),e})(),$(ye,{get when(){return J()},get children(){const e=Fe();return e.style.setProperty("width","100%"),b(e,$(Ve,{get img(){return J()}})),e}})];_e(["click"]);window.onkeydown=e=>{e.ctrlKey&&e.key==="s"&&(e.preventDefault(),document.getSelection())};$e(He,document.body);