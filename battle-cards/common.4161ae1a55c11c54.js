"use strict";(self.webpackChunkbattle_cards=self.webpackChunkbattle_cards||[]).push([[8592],{1320:(x,E,m)=>{m.d(E,{c:()=>u});var h=m(1308),g=m(7864),d=m(1898);const u=(a,n)=>{let t,e;const r=(i,p,w)=>{if(typeof document>"u")return;const v=document.elementFromPoint(i,p);v&&n(v)?v!==t&&(c(),o(v,w)):c()},o=(i,p)=>{t=i,e||(e=t);const w=t;(0,h.c)(()=>w.classList.add("ion-activated")),p()},c=(i=!1)=>{if(!t)return;const p=t;(0,h.c)(()=>p.classList.remove("ion-activated")),i&&e!==t&&t.click(),t=void 0};return(0,d.createGesture)({el:a,gestureName:"buttonActiveDrag",threshold:0,onStart:i=>r(i.currentX,i.currentY,g.a),onMove:i=>r(i.currentX,i.currentY,g.b),onEnd:()=>{c(!0),(0,g.h)(),e=void 0}})}},2225:(x,E,m)=>{m.d(E,{g:()=>h});const h=(n,t,e,r,o)=>d(n[1],t[1],e[1],r[1],o).map(c=>g(n[0],t[0],e[0],r[0],c)),g=(n,t,e,r,o)=>o*(3*t*Math.pow(o-1,2)+o*(-3*e*o+3*e+r*o))-n*Math.pow(o-1,3),d=(n,t,e,r,o)=>a((r-=o)-3*(e-=o)+3*(t-=o)-(n-=o),3*e-6*t+3*n,3*t-3*n,n).filter(i=>i>=0&&i<=1),a=(n,t,e,r)=>{if(0===n)return((n,t,e)=>{const r=t*t-4*n*e;return r<0?[]:[(-t+Math.sqrt(r))/(2*n),(-t-Math.sqrt(r))/(2*n)]})(t,e,r);const o=(3*(e/=n)-(t/=n)*t)/3,c=(2*t*t*t-9*t*e+27*(r/=n))/27;if(0===o)return[Math.pow(-c,1/3)];if(0===c)return[Math.sqrt(-o),-Math.sqrt(-o)];const i=Math.pow(c/2,2)+Math.pow(o/3,3);if(0===i)return[Math.pow(c/2,.5)-t/3];if(i>0)return[Math.pow(-c/2+Math.sqrt(i),1/3)-Math.pow(c/2+Math.sqrt(i),1/3)-t/3];const p=Math.sqrt(Math.pow(-o/3,3)),w=Math.acos(-c/(2*Math.sqrt(Math.pow(-o/3,3)))),v=2*Math.pow(p,1/3);return[v*Math.cos(w/3)-t/3,v*Math.cos((w+2*Math.PI)/3)-t/3,v*Math.cos((w+4*Math.PI)/3)-t/3]}},5062:(x,E,m)=>{m.d(E,{i:()=>h});const h=g=>g&&""!==g.dir?"rtl"===g.dir.toLowerCase():"rtl"===document?.dir.toLowerCase()},6602:(x,E,m)=>{m.r(E),m.d(E,{startFocusVisible:()=>u});const h="ion-focused",d=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],u=a=>{let n=[],t=!0;const e=a?a.shadowRoot:document,r=a||document.body,o=_=>{n.forEach(l=>l.classList.remove(h)),_.forEach(l=>l.classList.add(h)),n=_},c=()=>{t=!1,o([])},i=_=>{t=d.includes(_.key),t||o([])},p=_=>{if(t&&void 0!==_.composedPath){const l=_.composedPath().filter(f=>!!f.classList&&f.classList.contains("ion-focusable"));o(l)}},w=()=>{e.activeElement===r&&o([])};return e.addEventListener("keydown",i),e.addEventListener("focusin",p),e.addEventListener("focusout",w),e.addEventListener("touchstart",c),e.addEventListener("mousedown",c),{destroy:()=>{e.removeEventListener("keydown",i),e.removeEventListener("focusin",p),e.removeEventListener("focusout",w),e.removeEventListener("touchstart",c),e.removeEventListener("mousedown",c)},setFocus:o}}},7626:(x,E,m)=>{m.d(E,{C:()=>a,a:()=>d,d:()=>u});var h=m(9671),g=m(5730);const d=function(){var n=(0,h.Z)(function*(t,e,r,o,c,i){var p;if(t)return t.attachViewToDom(e,r,c,o);if(!(i||"string"==typeof r||r instanceof HTMLElement))throw new Error("framework delegate is missing");const w="string"==typeof r?null===(p=e.ownerDocument)||void 0===p?void 0:p.createElement(r):r;return o&&o.forEach(v=>w.classList.add(v)),c&&Object.assign(w,c),e.appendChild(w),yield new Promise(v=>(0,g.c)(w,v)),w});return function(e,r,o,c,i,p){return n.apply(this,arguments)}}(),u=(n,t)=>{if(t){if(n)return n.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()},a=()=>{let n,t;return{attachViewToDom:function(){var o=(0,h.Z)(function*(c,i,p={},w=[]){var v,_;if(n=c,i){const f="string"==typeof i?null===(v=n.ownerDocument)||void 0===v?void 0:v.createElement(i):i;w.forEach(s=>f.classList.add(s)),Object.assign(f,p),n.appendChild(f),yield new Promise(s=>(0,g.c)(f,s))}else if(n.children.length>0&&!n.children[0].classList.contains("ion-delegate-host")){const s=null===(_=n.ownerDocument)||void 0===_?void 0:_.createElement("div");s.classList.add("ion-delegate-host"),w.forEach(y=>s.classList.add(y)),s.append(...n.children),n.appendChild(s)}const l=document.querySelector("ion-app")||document.body;return t=document.createComment("ionic teleport"),n.parentNode.insertBefore(t,n),l.appendChild(n),n});return function(i,p){return o.apply(this,arguments)}}(),removeViewFromDom:()=>(n&&t&&(t.parentNode.insertBefore(n,t),t.remove()),Promise.resolve())}}},7864:(x,E,m)=>{m.d(E,{a:()=>u,b:()=>a,c:()=>d,d:()=>t,h:()=>n});const h={getEngine(){var e;const r=window;return r.TapticEngine||(null===(e=r.Capacitor)||void 0===e?void 0:e.isPluginAvailable("Haptics"))&&r.Capacitor.Plugins.Haptics},available(){var e;const r=window;return!!this.getEngine()&&("web"!==(null===(e=r.Capacitor)||void 0===e?void 0:e.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate)},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(e){const r=this.getEngine();if(!r)return;const o=this.isCapacitor()?e.style.toUpperCase():e.style;r.impact({style:o})},notification(e){const r=this.getEngine();if(!r)return;const o=this.isCapacitor()?e.style.toUpperCase():e.style;r.notification({style:o})},selection(){this.impact({style:"light"})},selectionStart(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionStart():e.gestureSelectionStart())},selectionChanged(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionChanged():e.gestureSelectionChanged())},selectionEnd(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionEnd():e.gestureSelectionEnd())}},g=()=>h.available(),d=()=>{g()&&h.selection()},u=()=>{g()&&h.selectionStart()},a=()=>{g()&&h.selectionChanged()},n=()=>{g()&&h.selectionEnd()},t=e=>{g()&&h.impact(e)}},9582:(x,E,m)=>{m.d(E,{a:()=>h,b:()=>i,c:()=>t,d:()=>p,e:()=>C,f:()=>n,g:()=>w,h:()=>d,i:()=>g,j:()=>s,k:()=>y,l:()=>e,m:()=>o,n:()=>v,o:()=>r,p:()=>a,q:()=>u,r:()=>f,s:()=>M,t:()=>c,u:()=>_,v:()=>l});const h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},8416:(x,E,m)=>{m.d(E,{I:()=>a,a:()=>o,b:()=>n,c:()=>p,d:()=>v,f:()=>c,g:()=>r,i:()=>e,p:()=>w,r:()=>_,s:()=>i});var h=m(9671),g=m(5730),d=m(4147);const a="ion-content",n=".ion-content-scroll-host",t=`${a}, ${n}`,e=l=>"ION-CONTENT"===l.tagName,r=function(){var l=(0,h.Z)(function*(f){return e(f)?(yield new Promise(s=>(0,g.c)(f,s)),f.getScrollElement()):f});return function(s){return l.apply(this,arguments)}}(),o=l=>l.querySelector(n)||l.querySelector(t),c=l=>l.closest(t),i=(l,f)=>e(l)?l.scrollToTop(f):Promise.resolve(l.scrollTo({top:0,left:0,behavior:f>0?"smooth":"auto"})),p=(l,f,s,y)=>e(l)?l.scrollByPoint(f,s,y):Promise.resolve(l.scrollBy({top:s,left:f,behavior:y>0?"smooth":"auto"})),w=l=>(0,d.a)(l,a),v=l=>{if(e(l)){const s=l.scrollY;return l.scrollY=!1,s}return l.style.setProperty("overflow","hidden"),!0},_=(l,f)=>{e(l)?l.scrollY=f:l.style.removeProperty("overflow")}},9:(x,E,m)=>{m.d(E,{s:()=>h});const h=e=>{try{if(e instanceof t)return e.value;if(!u()||"string"!=typeof e||""===e)return e;const r=document.createDocumentFragment(),o=document.createElement("div");r.appendChild(o),o.innerHTML=e,n.forEach(w=>{const v=r.querySelectorAll(w);for(let _=v.length-1;_>=0;_--){const l=v[_];l.parentNode?l.parentNode.removeChild(l):r.removeChild(l);const f=d(l);for(let s=0;s<f.length;s++)g(f[s])}});const c=d(r);for(let w=0;w<c.length;w++)g(c[w]);const i=document.createElement("div");i.appendChild(r);const p=i.querySelector("div");return null!==p?p.innerHTML:i.innerHTML}catch(r){return console.error(r),""}},g=e=>{if(e.nodeType&&1!==e.nodeType)return;for(let o=e.attributes.length-1;o>=0;o--){const c=e.attributes.item(o),i=c.name;if(!a.includes(i.toLowerCase())){e.removeAttribute(i);continue}const p=c.value;null!=p&&p.toLowerCase().includes("javascript:")&&e.removeAttribute(i)}const r=d(e);for(let o=0;o<r.length;o++)g(r[o])},d=e=>null!=e.children?e.children:e.childNodes,u=()=>{var e;const o=null===(e=window?.Ionic)||void 0===e?void 0:e.config;return!o||(o.get?o.get("sanitizerEnabled",!0):!0===o.sanitizerEnabled||void 0===o.sanitizerEnabled)},a=["class","id","href","src","name","slot"],n=["script","style","iframe","meta","link","object","embed"];class t{constructor(r){this.value=r}}},5234:(x,E,m)=>{m.r(E),m.d(E,{KEYBOARD_DID_CLOSE:()=>g,KEYBOARD_DID_OPEN:()=>h,copyVisualViewport:()=>f,keyboardDidClose:()=>w,keyboardDidOpen:()=>i,keyboardDidResize:()=>p,resetKeyboardAssist:()=>t,setKeyboardClose:()=>c,setKeyboardOpen:()=>o,startKeyboardAssist:()=>e,trackViewportChanges:()=>l});const h="ionKeyboardDidShow",g="ionKeyboardDidHide";let u={},a={},n=!1;const t=()=>{u={},a={},n=!1},e=s=>{r(s),s.visualViewport&&(a=f(s.visualViewport),s.visualViewport.onresize=()=>{l(s),i()||p(s)?o(s):w(s)&&c(s)})},r=s=>{s.addEventListener("keyboardDidShow",y=>o(s,y)),s.addEventListener("keyboardDidHide",()=>c(s))},o=(s,y)=>{v(s,y),n=!0},c=s=>{_(s),n=!1},i=()=>!n&&u.width===a.width&&(u.height-a.height)*a.scale>150,p=s=>n&&!w(s),w=s=>n&&a.height===s.innerHeight,v=(s,y)=>{const C=new CustomEvent(h,{detail:{keyboardHeight:y?y.keyboardHeight:s.innerHeight-a.height}});s.dispatchEvent(C)},_=s=>{const y=new CustomEvent(g);s.dispatchEvent(y)},l=s=>{u=Object.assign({},a),a=f(s.visualViewport)},f=s=>({width:Math.round(s.width),height:Math.round(s.height),offsetTop:s.offsetTop,offsetLeft:s.offsetLeft,pageTop:s.pageTop,pageLeft:s.pageLeft,scale:s.scale})},9852:(x,E,m)=>{m.d(E,{c:()=>g});var h=m(3457);const g=d=>{let u,a,n;const t=()=>{u=()=>{n=!0,d&&d(!0)},a=()=>{n=!1,d&&d(!1)},null==h.w||h.w.addEventListener("keyboardWillShow",u),null==h.w||h.w.addEventListener("keyboardWillHide",a)};return t(),{init:t,destroy:()=>{null==h.w||h.w.removeEventListener("keyboardWillShow",u),null==h.w||h.w.removeEventListener("keyboardWillHide",a),u=a=void 0},isKeyboardVisible:()=>n}}},7741:(x,E,m)=>{m.d(E,{S:()=>g});const g={bubbles:{dur:1e3,circles:9,fn:(d,u,a)=>{const n=d*u/a-d+"ms",t=2*Math.PI*u/a;return{r:5,style:{top:9*Math.sin(t)+"px",left:9*Math.cos(t)+"px","animation-delay":n}}}},circles:{dur:1e3,circles:8,fn:(d,u,a)=>{const n=u/a,t=d*n-d+"ms",e=2*Math.PI*n;return{r:5,style:{top:9*Math.sin(e)+"px",left:9*Math.cos(e)+"px","animation-delay":t}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(d,u)=>({r:6,style:{left:9-9*u+"px","animation-delay":-110*u+"ms"}})},lines:{dur:1e3,lines:8,fn:(d,u,a)=>({y1:14,y2:26,style:{transform:`rotate(${360/a*u+(u<a/2?180:-180)}deg)`,"animation-delay":d*u/a-d+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(d,u,a)=>({y1:12,y2:20,style:{transform:`rotate(${360/a*u+(u<a/2?180:-180)}deg)`,"animation-delay":d*u/a-d+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(d,u,a)=>({y1:17,y2:29,style:{transform:`rotate(${30*u+(u<6?180:-180)}deg)`,"animation-delay":d*u/a-d+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(d,u,a)=>({y1:12,y2:20,style:{transform:`rotate(${30*u+(u<6?180:-180)}deg)`,"animation-delay":d*u/a-d+"ms"}})}}},9210:(x,E,m)=>{m.r(E),m.d(E,{createSwipeBackGesture:()=>a});var h=m(5730),g=m(5062),d=m(1898);m(4349);const a=(n,t,e,r,o)=>{const c=n.ownerDocument.defaultView,i=(0,g.i)(n),w=s=>i?-s.deltaX:s.deltaX;return(0,d.createGesture)({el:n,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:s=>(s=>{const{startX:M}=s;return i?M>=c.innerWidth-50:M<=50})(s)&&t(),onStart:e,onMove:s=>{const M=w(s)/c.innerWidth;r(M)},onEnd:s=>{const y=w(s),M=c.innerWidth,C=y/M,b=(s=>i?-s.velocityX:s.velocityX)(s),k=b>=0&&(b>.2||y>M/2),D=(k?1-C:C)*M;let L=0;if(D>5){const B=D/Math.abs(b);L=Math.min(B,540)}o(k,C<=0?.01:(0,h.l)(0,C,.9999),L)}})}},4083:(x,E,m)=>{m.d(E,{W:()=>d,H:()=>e});var h=m(3599),g=m(4650);class d{}d.\u0275fac=function(o){return new(o||d)},d.\u0275mod=g.oAB({type:d}),d.\u0275inj=g.cJS({imports:[h.Mf]});var u=m(9671),a=m(3905),n=m(9653);const t=(0,n.P1)(h.Wm,r=>r.map(o=>({name:o.name,boxContent:o.cards.reduce((c,i)=>(c[i.box]||(c[i.box]=0),c[i.box]++,c),new Array(o.boxes).fill(0))})));class e{constructor(o){this.store$=o}get lessons$(){return this.store$.select(t)}getSession(o){var c=this;return(0,u.Z)(function*(){const i=yield(0,a.z)(c.store$.select((0,h.oh)(o)));if(!i)throw new Error("No Deck");const p=[...i.cards].reduce((l,f)=>f.box<l?f.box:l,i.boxes);if(p===i.boxes)return{deckName:i.name,currentCard:null,box:p,maxBox:i.boxes-1,remainingCards:i.cards.length,showAnswer:()=>{},skip:()=>{},markCorrect:()=>{},markIncorrect:()=>{}};const w=[...i.cards].sort(()=>.5-Math.random()).filter(l=>l.box===p);let v=w.pop();const _={deckName:i.name,box:p,maxBox:i.boxes-1,remainingCards:w.length+1,currentCard:v?{question:v.question,answer:null,box:v.box}:null,showAnswer:()=>{!v||!_.currentCard||(_.currentCard.answer=v.answer)},markCorrect:()=>{!v||!_.currentCard||(c.store$.dispatch((0,h.I_)({deckIndex:o,cardIndex:i.cards.findIndex(l=>l.question===v?.question),box:v?.box+1})),_.skip())},markIncorrect:()=>{!v||!_.currentCard||(c.store$.dispatch((0,h.I_)({deckIndex:o,cardIndex:i.cards.findIndex(l=>l.question===v?.question),box:0})),_.skip())},skip:()=>{v=w.pop(),_.currentCard&&(_.currentCard=v?{..._.currentCard,question:v.question,answer:null}:null,_.remainingCards=w.length+(v?1:0))}};return _})()}}e.\u0275fac=function(o){return new(o||e)(g.LFG(n.yh))},e.\u0275prov=g.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}}]);