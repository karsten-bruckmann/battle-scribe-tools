"use strict";(self.webpackChunkbattle_cards=self.webpackChunkbattle_cards||[]).push([[8592],{1320:(x,E,g)=>{g.d(E,{c:()=>m});var v=g(1308),p=g(7864),f=g(1898);const m=(l,r)=>{let s,e;const c=(o,w,d)=>{if(typeof document>"u")return;const u=document.elementFromPoint(o,w);u&&r(u)?u!==s&&(h(),a(u,d)):h()},a=(o,w)=>{s=o,e||(e=s);const d=s;(0,v.c)(()=>d.classList.add("ion-activated")),w()},h=(o=!1)=>{if(!s)return;const w=s;(0,v.c)(()=>w.classList.remove("ion-activated")),o&&e!==s&&s.click(),s=void 0};return(0,f.createGesture)({el:l,gestureName:"buttonActiveDrag",threshold:0,onStart:o=>c(o.currentX,o.currentY,p.a),onMove:o=>c(o.currentX,o.currentY,p.b),onEnd:()=>{h(!0),(0,p.h)(),e=void 0}})}},2225:(x,E,g)=>{g.d(E,{g:()=>v});const v=(r,s,e,c,a)=>f(r[1],s[1],e[1],c[1],a).map(h=>p(r[0],s[0],e[0],c[0],h)),p=(r,s,e,c,a)=>a*(3*s*Math.pow(a-1,2)+a*(-3*e*a+3*e+c*a))-r*Math.pow(a-1,3),f=(r,s,e,c,a)=>l((c-=a)-3*(e-=a)+3*(s-=a)-(r-=a),3*e-6*s+3*r,3*s-3*r,r).filter(o=>o>=0&&o<=1),l=(r,s,e,c)=>{if(0===r)return((r,s,e)=>{const c=s*s-4*r*e;return c<0?[]:[(-s+Math.sqrt(c))/(2*r),(-s-Math.sqrt(c))/(2*r)]})(s,e,c);const a=(3*(e/=r)-(s/=r)*s)/3,h=(2*s*s*s-9*s*e+27*(c/=r))/27;if(0===a)return[Math.pow(-h,1/3)];if(0===h)return[Math.sqrt(-a),-Math.sqrt(-a)];const o=Math.pow(h/2,2)+Math.pow(a/3,3);if(0===o)return[Math.pow(h/2,.5)-s/3];if(o>0)return[Math.pow(-h/2+Math.sqrt(o),1/3)-Math.pow(h/2+Math.sqrt(o),1/3)-s/3];const w=Math.sqrt(Math.pow(-a/3,3)),d=Math.acos(-h/(2*Math.sqrt(Math.pow(-a/3,3)))),u=2*Math.pow(w,1/3);return[u*Math.cos(d/3)-s/3,u*Math.cos((d+2*Math.PI)/3)-s/3,u*Math.cos((d+4*Math.PI)/3)-s/3]}},5062:(x,E,g)=>{g.d(E,{i:()=>v});const v=p=>p&&""!==p.dir?"rtl"===p.dir.toLowerCase():"rtl"===document?.dir.toLowerCase()},6602:(x,E,g)=>{g.r(E),g.d(E,{startFocusVisible:()=>m});const v="ion-focused",f=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],m=l=>{let r=[],s=!0;const e=l?l.shadowRoot:document,c=l||document.body,a=_=>{r.forEach(i=>i.classList.remove(v)),_.forEach(i=>i.classList.add(v)),r=_},h=()=>{s=!1,a([])},o=_=>{s=f.includes(_.key),s||a([])},w=_=>{if(s&&void 0!==_.composedPath){const i=_.composedPath().filter(t=>!!t.classList&&t.classList.contains("ion-focusable"));a(i)}},d=()=>{e.activeElement===c&&a([])};return e.addEventListener("keydown",o),e.addEventListener("focusin",w),e.addEventListener("focusout",d),e.addEventListener("touchstart",h),e.addEventListener("mousedown",h),{destroy:()=>{e.removeEventListener("keydown",o),e.removeEventListener("focusin",w),e.removeEventListener("focusout",d),e.removeEventListener("touchstart",h),e.removeEventListener("mousedown",h)},setFocus:a}}},7626:(x,E,g)=>{g.d(E,{C:()=>l,a:()=>f,d:()=>m});var v=g(9671),p=g(5730);const f=function(){var r=(0,v.Z)(function*(s,e,c,a,h,o){var w;if(s)return s.attachViewToDom(e,c,h,a);if(!(o||"string"==typeof c||c instanceof HTMLElement))throw new Error("framework delegate is missing");const d="string"==typeof c?null===(w=e.ownerDocument)||void 0===w?void 0:w.createElement(c):c;return a&&a.forEach(u=>d.classList.add(u)),h&&Object.assign(d,h),e.appendChild(d),yield new Promise(u=>(0,p.c)(d,u)),d});return function(e,c,a,h,o,w){return r.apply(this,arguments)}}(),m=(r,s)=>{if(s){if(r)return r.removeViewFromDom(s.parentElement,s);s.remove()}return Promise.resolve()},l=()=>{let r,s;return{attachViewToDom:function(){var a=(0,v.Z)(function*(h,o,w={},d=[]){var u,_;if(r=h,o){const t="string"==typeof o?null===(u=r.ownerDocument)||void 0===u?void 0:u.createElement(o):o;d.forEach(n=>t.classList.add(n)),Object.assign(t,w),r.appendChild(t),yield new Promise(n=>(0,p.c)(t,n))}else if(r.children.length>0&&!r.children[0].classList.contains("ion-delegate-host")){const n=null===(_=r.ownerDocument)||void 0===_?void 0:_.createElement("div");n.classList.add("ion-delegate-host"),d.forEach(y=>n.classList.add(y)),n.append(...r.children),r.appendChild(n)}const i=document.querySelector("ion-app")||document.body;return s=document.createComment("ionic teleport"),r.parentNode.insertBefore(s,r),i.appendChild(r),r});return function(o,w){return a.apply(this,arguments)}}(),removeViewFromDom:()=>(r&&s&&(s.parentNode.insertBefore(r,s),s.remove()),Promise.resolve())}}},7864:(x,E,g)=>{g.d(E,{a:()=>m,b:()=>l,c:()=>f,d:()=>s,h:()=>r});const v={getEngine(){var e;const c=window;return c.TapticEngine||(null===(e=c.Capacitor)||void 0===e?void 0:e.isPluginAvailable("Haptics"))&&c.Capacitor.Plugins.Haptics},available(){var e;const c=window;return!!this.getEngine()&&("web"!==(null===(e=c.Capacitor)||void 0===e?void 0:e.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate)},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(e){const c=this.getEngine();if(!c)return;const a=this.isCapacitor()?e.style.toUpperCase():e.style;c.impact({style:a})},notification(e){const c=this.getEngine();if(!c)return;const a=this.isCapacitor()?e.style.toUpperCase():e.style;c.notification({style:a})},selection(){this.impact({style:"light"})},selectionStart(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionStart():e.gestureSelectionStart())},selectionChanged(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionChanged():e.gestureSelectionChanged())},selectionEnd(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionEnd():e.gestureSelectionEnd())}},p=()=>v.available(),f=()=>{p()&&v.selection()},m=()=>{p()&&v.selectionStart()},l=()=>{p()&&v.selectionChanged()},r=()=>{p()&&v.selectionEnd()},s=e=>{p()&&v.impact(e)}},9582:(x,E,g)=>{g.d(E,{a:()=>v,b:()=>o,c:()=>s,d:()=>w,e:()=>M,f:()=>r,g:()=>d,h:()=>f,i:()=>p,j:()=>n,k:()=>y,l:()=>e,m:()=>a,n:()=>u,o:()=>c,p:()=>l,q:()=>m,r:()=>t,s:()=>b,t:()=>h,u:()=>_,v:()=>i});const v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",b="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},8416:(x,E,g)=>{g.d(E,{I:()=>l,a:()=>a,b:()=>r,c:()=>w,d:()=>u,f:()=>h,g:()=>c,i:()=>e,p:()=>d,r:()=>_,s:()=>o});var v=g(9671),p=g(5730),f=g(4147);const l="ion-content",r=".ion-content-scroll-host",s=`${l}, ${r}`,e=i=>"ION-CONTENT"===i.tagName,c=function(){var i=(0,v.Z)(function*(t){return e(t)?(yield new Promise(n=>(0,p.c)(t,n)),t.getScrollElement()):t});return function(n){return i.apply(this,arguments)}}(),a=i=>i.querySelector(r)||i.querySelector(s),h=i=>i.closest(s),o=(i,t)=>e(i)?i.scrollToTop(t):Promise.resolve(i.scrollTo({top:0,left:0,behavior:t>0?"smooth":"auto"})),w=(i,t,n,y)=>e(i)?i.scrollByPoint(t,n,y):Promise.resolve(i.scrollBy({top:n,left:t,behavior:y>0?"smooth":"auto"})),d=i=>(0,f.a)(i,l),u=i=>{if(e(i)){const n=i.scrollY;return i.scrollY=!1,n}return i.style.setProperty("overflow","hidden"),!0},_=(i,t)=>{e(i)?i.scrollY=t:i.style.removeProperty("overflow")}},9:(x,E,g)=>{g.d(E,{s:()=>v});const v=e=>{try{if(e instanceof s)return e.value;if(!m()||"string"!=typeof e||""===e)return e;const c=document.createDocumentFragment(),a=document.createElement("div");c.appendChild(a),a.innerHTML=e,r.forEach(d=>{const u=c.querySelectorAll(d);for(let _=u.length-1;_>=0;_--){const i=u[_];i.parentNode?i.parentNode.removeChild(i):c.removeChild(i);const t=f(i);for(let n=0;n<t.length;n++)p(t[n])}});const h=f(c);for(let d=0;d<h.length;d++)p(h[d]);const o=document.createElement("div");o.appendChild(c);const w=o.querySelector("div");return null!==w?w.innerHTML:o.innerHTML}catch(c){return console.error(c),""}},p=e=>{if(e.nodeType&&1!==e.nodeType)return;for(let a=e.attributes.length-1;a>=0;a--){const h=e.attributes.item(a),o=h.name;if(!l.includes(o.toLowerCase())){e.removeAttribute(o);continue}const w=h.value;null!=w&&w.toLowerCase().includes("javascript:")&&e.removeAttribute(o)}const c=f(e);for(let a=0;a<c.length;a++)p(c[a])},f=e=>null!=e.children?e.children:e.childNodes,m=()=>{var e;const a=null===(e=window?.Ionic)||void 0===e?void 0:e.config;return!a||(a.get?a.get("sanitizerEnabled",!0):!0===a.sanitizerEnabled||void 0===a.sanitizerEnabled)},l=["class","id","href","src","name","slot"],r=["script","style","iframe","meta","link","object","embed"];class s{constructor(c){this.value=c}}},5234:(x,E,g)=>{g.r(E),g.d(E,{KEYBOARD_DID_CLOSE:()=>p,KEYBOARD_DID_OPEN:()=>v,copyVisualViewport:()=>t,keyboardDidClose:()=>d,keyboardDidOpen:()=>o,keyboardDidResize:()=>w,resetKeyboardAssist:()=>s,setKeyboardClose:()=>h,setKeyboardOpen:()=>a,startKeyboardAssist:()=>e,trackViewportChanges:()=>i});const v="ionKeyboardDidShow",p="ionKeyboardDidHide";let m={},l={},r=!1;const s=()=>{m={},l={},r=!1},e=n=>{c(n),n.visualViewport&&(l=t(n.visualViewport),n.visualViewport.onresize=()=>{i(n),o()||w(n)?a(n):d(n)&&h(n)})},c=n=>{n.addEventListener("keyboardDidShow",y=>a(n,y)),n.addEventListener("keyboardDidHide",()=>h(n))},a=(n,y)=>{u(n,y),r=!0},h=n=>{_(n),r=!1},o=()=>!r&&m.width===l.width&&(m.height-l.height)*l.scale>150,w=n=>r&&!d(n),d=n=>r&&l.height===n.innerHeight,u=(n,y)=>{const M=new CustomEvent(v,{detail:{keyboardHeight:y?y.keyboardHeight:n.innerHeight-l.height}});n.dispatchEvent(M)},_=n=>{const y=new CustomEvent(p);n.dispatchEvent(y)},i=n=>{m=Object.assign({},l),l=t(n.visualViewport)},t=n=>({width:Math.round(n.width),height:Math.round(n.height),offsetTop:n.offsetTop,offsetLeft:n.offsetLeft,pageTop:n.pageTop,pageLeft:n.pageLeft,scale:n.scale})},9852:(x,E,g)=>{g.d(E,{c:()=>p});var v=g(3457);const p=f=>{let m,l,r;const s=()=>{m=()=>{r=!0,f&&f(!0)},l=()=>{r=!1,f&&f(!1)},null==v.w||v.w.addEventListener("keyboardWillShow",m),null==v.w||v.w.addEventListener("keyboardWillHide",l)};return s(),{init:s,destroy:()=>{null==v.w||v.w.removeEventListener("keyboardWillShow",m),null==v.w||v.w.removeEventListener("keyboardWillHide",l),m=l=void 0},isKeyboardVisible:()=>r}}},7741:(x,E,g)=>{g.d(E,{S:()=>p});const p={bubbles:{dur:1e3,circles:9,fn:(f,m,l)=>{const r=f*m/l-f+"ms",s=2*Math.PI*m/l;return{r:5,style:{top:9*Math.sin(s)+"px",left:9*Math.cos(s)+"px","animation-delay":r}}}},circles:{dur:1e3,circles:8,fn:(f,m,l)=>{const r=m/l,s=f*r-f+"ms",e=2*Math.PI*r;return{r:5,style:{top:9*Math.sin(e)+"px",left:9*Math.cos(e)+"px","animation-delay":s}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(f,m)=>({r:6,style:{left:9-9*m+"px","animation-delay":-110*m+"ms"}})},lines:{dur:1e3,lines:8,fn:(f,m,l)=>({y1:14,y2:26,style:{transform:`rotate(${360/l*m+(m<l/2?180:-180)}deg)`,"animation-delay":f*m/l-f+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(f,m,l)=>({y1:12,y2:20,style:{transform:`rotate(${360/l*m+(m<l/2?180:-180)}deg)`,"animation-delay":f*m/l-f+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(f,m,l)=>({y1:17,y2:29,style:{transform:`rotate(${30*m+(m<6?180:-180)}deg)`,"animation-delay":f*m/l-f+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(f,m,l)=>({y1:12,y2:20,style:{transform:`rotate(${30*m+(m<6?180:-180)}deg)`,"animation-delay":f*m/l-f+"ms"}})}}},9210:(x,E,g)=>{g.r(E),g.d(E,{createSwipeBackGesture:()=>l});var v=g(5730),p=g(5062),f=g(1898);g(4349);const l=(r,s,e,c,a)=>{const h=r.ownerDocument.defaultView,o=(0,p.i)(r),d=n=>o?-n.deltaX:n.deltaX;return(0,f.createGesture)({el:r,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:n=>(n=>{const{startX:b}=n;return o?b>=h.innerWidth-50:b<=50})(n)&&s(),onStart:e,onMove:n=>{const b=d(n)/h.innerWidth;c(b)},onEnd:n=>{const y=d(n),b=h.innerWidth,M=y/b,k=(n=>o?-n.velocityX:n.velocityX)(n),C=k>=0&&(k>.2||y>b/2),D=(C?1-M:M)*b;let L=0;if(D>5){const O=D/Math.abs(k);L=Math.min(O,540)}a(C,M<=0?.01:(0,v.l)(0,M,.9999),L)}})}},2721:(x,E,g)=>{g.d(E,{W:()=>f,H:()=>a});var v=g(8993),p=g(4650);class f{}f.\u0275fac=function(o){return new(o||f)},f.\u0275mod=p.oAB({type:f}),f.\u0275inj=p.cJS({imports:[v.Mf]});var m=g(9671),l=g(3905),r=g(9653);const s=(0,r.P1)(v.Wm,h=>h.map(o=>({name:o.name,boxContent:o.cards.reduce((w,d)=>(w[d.box]||(w[d.box]=0),w[d.box]++,w),new Array(o.boxes).fill(0))})));var e=g(7232);class a{constructor(o){this.store$=o}get lessons$(){return this.store$.select(s)}deleteDeck(o){this.store$.dispatch((0,v.GJ)({index:o}))}createFlashCardDeck(o,w){var d=this;return(0,m.Z)(function*(){const u=yield(0,l.z)(d.store$.select(((h,o)=>(0,r.P1)(e.bA,w=>{const u={name:o.name,cards:[],boxes:o.boxes};return w[h]?.detachments.forEach(_=>{_.units.forEach(i=>{o.rules&&i.rules.forEach(t=>{const n=void 0===_.units.map(y=>y.rules).flat().find(y=>y.title===t.title&&y.description!==t.description);u.cards.push({question:"Rule?",rules:[n?t.title:`${t.title} (${i.title})`],answers:[t.description],box:0})}),o.unitRules&&u.cards.push({question:"Einheiten Regeln",rules:[i.title],answers:i.rules.map(t=>t.title),box:0}),i.models.map(t=>t.profiles).flat().forEach(t=>{o.unitProfiles.attacks&&u.cards.push({question:"Atacken (A)",rules:[t.title],answers:[t.attacks],box:0}),o.unitProfiles.ballisticSkill&&u.cards.push({question:"Ballistische F\xe4higkeit (BF)",rules:[t.title],answers:[t.ballisticSkill],box:0}),o.unitProfiles.leadership&&u.cards.push({question:"Moralwert (MW)",rules:[t.title],answers:[t.leadership],box:0}),o.unitProfiles.movement&&u.cards.push({question:"Bewegung (B)",rules:[t.title],answers:[t.movement],box:0}),o.unitProfiles.save&&u.cards.push({question:"R\xfcstungswert (RW)",rules:[t.title],answers:[t.save],box:0}),o.unitProfiles.strength&&u.cards.push({question:"St\xe4rke (S)",rules:[t.title],answers:[t.strength],box:0}),o.unitProfiles.toughness&&u.cards.push({question:"Wiederstand (W)",rules:[t.title],answers:[t.toughness],box:0}),o.unitProfiles.weaponSkill&&u.cards.push({question:"Kampfgeschick (KG)",rules:[t.title],answers:[t.weaponSkill],box:0}),o.unitProfiles.wounds&&u.cards.push({question:"Lebenspunkte (LP)",rules:[t.title],answers:[t.wounds],box:0})}),i.models.map(t=>t.weapons).flat().map(t=>t.profiles).flat().forEach(t=>{o.weaponProfiles.abilities&&u.cards.push({question:"F\xe4higkeiten",rules:[t.title],answers:[t.abilities],box:0}),o.weaponProfiles.armourPenetration&&u.cards.push({question:"Durchschlag (DS)",rules:[t.title],answers:[t.armourPenetration],box:0}),o.weaponProfiles.damage&&u.cards.push({question:"Schdenswert (SW)",rules:[t.title],answers:[t.damage],box:0}),o.weaponProfiles.range&&u.cards.push({question:"Reichweite",rules:[t.title],answers:[t.range],box:0}),o.weaponProfiles.strength&&u.cards.push({question:"St\xe4rke (S)",rules:[t.title],answers:[t.strength],box:0}),o.weaponProfiles.type&&u.cards.push({question:"Typ",rules:[t.title],answers:[t.type],box:0})})})}),{...u,cards:u.cards.filter((_,i)=>i===u.cards.findIndex(t=>t.question===_.question&&t.answers.join()===_.answers.join()))}}))(o,w)));d.store$.dispatch((0,v.wB)({deck:u}))})()}getSession(o){var w=this;return(0,m.Z)(function*(){const d=yield(0,l.z)(w.store$.select((0,v.oh)(o)));if(!d)throw new Error("No Deck");const u=[...d.cards].reduce((n,y)=>y.box<n?y.box:n,d.boxes);if(u===d.boxes)return{deckName:d.name,currentCard:null,box:u,maxBox:d.boxes-1,remainingCards:d.cards.length,showAnswer:()=>{},skip:()=>{},markCorrect:()=>{},markIncorrect:()=>{}};const _=[...d.cards].sort(()=>.5-Math.random()).filter(n=>n.box===u);let i=_.pop();const t={deckName:d.name,box:u,maxBox:d.boxes-1,remainingCards:_.length+1,currentCard:i?{question:i.question,rules:i.rules,answers:null,box:i.box}:null,showAnswer:()=>{!i||!t.currentCard||(t.currentCard.answers=i.answers)},markCorrect:()=>{!i||!t.currentCard||(w.store$.dispatch((0,v.I_)({deckIndex:o,cardIndex:d.cards.findIndex(n=>n.question===i?.question&&JSON.stringify(n.rules)===JSON.stringify(i.rules)),box:i?.box+1})),t.skip())},markIncorrect:()=>{!i||!t.currentCard||(w.store$.dispatch((0,v.I_)({deckIndex:o,cardIndex:d.cards.findIndex(n=>n.question===i?.question&&JSON.stringify(n.rules)===JSON.stringify(i.rules)),box:0})),t.skip())},skip:()=>{i=_.pop(),t.currentCard&&(t.currentCard=i?{...t.currentCard,question:i.question,rules:i.rules,answers:null}:null,t.remainingCards=_.length+(i?1:0))}};return t})()}}a.\u0275fac=function(o){return new(o||a)(p.LFG(r.yh))},a.\u0275prov=p.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})}}]);