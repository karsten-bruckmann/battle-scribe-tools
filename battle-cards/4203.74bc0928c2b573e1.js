"use strict";(self.webpackChunkbattle_cards=self.webpackChunkbattle_cards||[]).push([[4203],{6037:(B,S,a)=>{a.d(S,{$l:()=>C,sF:()=>T});var u=a(9653);const I=(0,u.PH)("user-settings/set",(0,u.Ky)()),p=(0,u.ZF)("user-settings");var M=a(6166);const w=(0,u.Lq)({},(0,u.on)(I,(m,l)=>({...m,[l.key]:l.value})));var _=a(4650);class t{}t.\u0275fac=function(l){return new(l||t)},t.\u0275mod=_.oAB({type:t}),t.\u0275inj=_.cJS({imports:[u.Aw.forFeature("user-settings",w,{metaReducers:[(0,M.Wi)("user-settings",{storage:localStorage})]})]});class C{}C.\u0275fac=function(l){return new(l||C)},C.\u0275mod=_.oAB({type:C}),C.\u0275inj=_.cJS({imports:[t]});const D=(0,u.P1)(("list-view",(0,u.P1)(p,l=>l["list-view"])),m=>"string"==typeof m&&function Z(m){return["list","grid"].includes(m)}(m)?m:"list");class T{constructor(l){this.store$=l}get listView$(){return this.store$.select(D)}setListView(l){this.store$.dispatch(I({key:"list-view",value:l}))}}T.\u0275fac=function(l){return new(l||T)(_.LFG(u.yh))},T.\u0275prov=_.Yz7({token:T,factory:T.\u0275fac,providedIn:"root"})},9024:(B,S,a)=>{a.d(S,{A:()=>E});var u=a(9671),I=a(6895);let b,M;const t=new WeakMap,C=new WeakMap,Z=new WeakMap,D=new WeakMap,T=new WeakMap;let g={get(n,e,o){if(n instanceof IDBTransaction){if("done"===e)return C.get(n);if("objectStoreNames"===e)return n.objectStoreNames||Z.get(n);if("store"===e)return o.objectStoreNames[1]?void 0:o.objectStore(o.objectStoreNames[0])}return h(n[e])},set:(n,e,o)=>(n[e]=o,!0),has:(n,e)=>n instanceof IDBTransaction&&("done"===e||"store"===e)||e in n};function v(n){return"function"==typeof n?function i(n){return n!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?function _(){return M||(M=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}().includes(n)?function(...e){return n.apply(A(this),e),h(t.get(this))}:function(...e){return h(n.apply(A(this),e))}:function(e,...o){const s=n.call(A(this),e,...o);return Z.set(s,e.sort?e.sort():[e]),h(s)}}(n):(n instanceof IDBTransaction&&function l(n){if(C.has(n))return;const e=new Promise((o,s)=>{const c=()=>{n.removeEventListener("complete",f),n.removeEventListener("error",y),n.removeEventListener("abort",y)},f=()=>{o(),c()},y=()=>{s(n.error||new DOMException("AbortError","AbortError")),c()};n.addEventListener("complete",f),n.addEventListener("error",y),n.addEventListener("abort",y)});C.set(n,e)}(n),((n,e)=>e.some(o=>n instanceof o))(n,function w(){return b||(b=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}())?new Proxy(n,g):n)}function h(n){if(n instanceof IDBRequest)return function m(n){const e=new Promise((o,s)=>{const c=()=>{n.removeEventListener("success",f),n.removeEventListener("error",y)},f=()=>{o(h(n.result)),c()},y=()=>{s(n.error),c()};n.addEventListener("success",f),n.addEventListener("error",y)});return e.then(o=>{o instanceof IDBCursor&&t.set(o,n)}).catch(()=>{}),T.set(e,n),e}(n);if(D.has(n))return D.get(n);const e=v(n);return e!==n&&(D.set(n,e),T.set(e,n)),e}const A=n=>T.get(n),H=["get","getKey","getAll","getAllKeys","count"],R=["put","add","delete","clear"],F=new Map;function U(n,e){if(!(n instanceof IDBDatabase)||e in n||"string"!=typeof e)return;if(F.get(e))return F.get(e);const o=e.replace(/FromIndex$/,""),s=e!==o,c=R.includes(o);if(!(o in(s?IDBIndex:IDBObjectStore).prototype)||!c&&!H.includes(o))return;const f=function(){var y=(0,u.Z)(function*(P,...x){const L=this.transaction(P,c?"readwrite":"readonly");let J=L.store;return s&&(J=J.index(x.shift())),(yield Promise.all([J[o](...x),c&&L.done]))[0]});return function(x){return y.apply(this,arguments)}}();return F.set(e,f),f}!function d(n){g=n(g)}(n=>({...n,get:(e,o,s)=>U(e,o)||n.get(e,o,s),has:(e,o)=>!!U(e,o)||n.has(e,o)}));var V=a(7579),Y=a(9300),G=a(8675),k=a(3900),K=a(457),W=a(4004);class N{constructor(e){this.storeName=e,this.changed$=new V.x}get db(){return function O(n,e,{blocked:o,upgrade:s,blocking:c,terminated:f}={}){const y=indexedDB.open(n,e),P=h(y);return s&&y.addEventListener("upgradeneeded",x=>{s(h(y.result),x.oldVersion,x.newVersion,h(y.transaction),x)}),o&&y.addEventListener("blocked",x=>o(x.oldVersion,x.newVersion,x)),P.then(x=>{f&&x.addEventListener("close",()=>f()),c&&x.addEventListener("versionchange",L=>c(L.oldVersion,L.newVersion,L))}).catch(()=>{}),P}("images",1,{upgrade:e=>{e.createObjectStore(this.storeName)}})}getImage$(e){return this.changed$.pipe((0,Y.h)(o=>o===e),(0,G.O)(e),(0,k.w)(o=>(0,K.D)(this.db.then(s=>s.get(this.storeName,`${o}`)))),(0,W.U)(o=>o||null))}setImage(e,o){var s=this;return(0,u.Z)(function*(){const c=yield s.convertBase64(o);yield(yield s.db).put(s.storeName,c,e),s.changed$.next(e)})()}deleteImage(e){var o=this;return(0,u.Z)(function*(){yield(yield o.db).delete(o.storeName,e),o.changed$.next(e)})()}convertBase64(e){return(0,u.Z)(function*(){return new Promise((o,s)=>{const c=new FileReader;c.readAsDataURL(e),c.onload=()=>{const f=c.result;f?o(f.toString()):s()},c.onerror=f=>{s(f)}})})()}}var r=a(4650);class ${create(e){return new N(e)}}$.\u0275fac=function(e){return new(e||$)},$.\u0275prov=r.Yz7({token:$,factory:$.\u0275fac,providedIn:"root"});var j=a(9725),Q=a(1135),z=a(1848);function X(n,e){if(1&n){const o=r.EpF();r.TgZ(0,"ion-icon",5),r.NdJ("click",function(){r.CHM(o);const c=r.oxw(2);return r.KtG(c.delete())}),r.qZA()}}function q(n,e){if(1&n&&(r.TgZ(0,"div",2),r._UZ(1,"img",3),r.YNc(2,X,1,0,"ion-icon",4),r.qZA()),2&n){const o=e.ngIf,s=r.oxw();r.xp6(1),r.Q6J("src",o,r.LSH),r.xp6(1),r.Q6J("ngIf",s.editable)}}function tt(n,e){if(1&n){const o=r.EpF();r.TgZ(0,"ion-button",6),r.NdJ("click",function(){r.CHM(o);const c=r.MAs(3),f=r.oxw();return r.KtG(f.editable&&c.click())}),r._UZ(1,"ion-icon",7),r.qZA(),r.TgZ(2,"input",8,9),r.NdJ("change",function(c){r.CHM(o);const f=r.oxw();return r.KtG(f.save(c))}),r.qZA()}}class E{constructor(e){this.imagesService=e,this.editable=!1,this.name$=new Q.X(null),this.data$=this.name$.pipe((0,k.w)(o=>o?this.imagesService.getImage$(o):z.C))}set name(e){this.name$.next(e)}save(e){var o=this;return(0,u.Z)(function*(){const s=o.name$.value;s&&o.imagesService.setImage(s,e.target.files[0])})()}delete(){const e=this.name$.value;e&&this.name$.value&&this.imagesService.deleteImage(e)}}E.\u0275fac=function(e){return new(e||E)(r.Y36(N))},E.\u0275cmp=r.Xpm({type:E,selectors:[["bst-avatar"]],inputs:{editable:"editable",name:"name"},standalone:!0,features:[r._Bn([{provide:N,useFactory:n=>n.create("avatars"),deps:[$]}]),r.jDz],decls:4,vars:4,consts:[["class","existing",4,"ngIf","ngIfElse"],["form",""],[1,"existing"],[3,"src"],["name","close-circle","class","delete","color","medium",3,"click",4,"ngIf"],["name","close-circle","color","medium",1,"delete",3,"click"],["fill","clear","color","light",1,"upload",3,"click"],["name","image",1,"upload"],["type","file","accept","image/*",1,"ion-hide",3,"change"],["f",""]],template:function(e,o){if(1&e&&(r.YNc(0,q,3,2,"div",0),r.ALo(1,"async"),r.YNc(2,tt,4,0,"ng-template",null,1,r.W1O)),2&e){const s=r.MAs(3);r.Q6J("ngIf",r.lcZ(1,2,o.data$))("ngIfElse",s)}},dependencies:[I.ez,I.O5,I.Ov,j.Pc,j.YG,j.gu],styles:["[_nghost-%COMP%]{display:block;width:100%;aspect-ratio:1/1;display:flex;flex-direction:column;justify-content:space-around;overflow:hidden;border-radius:5%;background-color:rgb(var(--ion-color-light-rgb),.5)}img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;overflow:hidden}.existing[_ngcontent-%COMP%]{width:100%;height:100%}ion-button.upload[_ngcontent-%COMP%], ion-icon.upload[_ngcontent-%COMP%]{width:100%;height:100%}ion-icon.delete[_ngcontent-%COMP%]{position:absolute;right:0;top:0;opacity:.8}"]})},8967:(B,S,a)=>{a.d(S,{s:()=>l});var u=a(6895),I=a(3573),p=a(9725),b=a(1135),M=a(9841),w=a(4004),_=a(4782),t=a(4650),C=a(1481);function Z(g,d){if(1&g&&t._UZ(0,"span",4),2&g){const i=t.oxw().ngIf,v=t.oxw();t.Q6J("innerHTML",v.listify(i),t.oJD)}}function D(g,d){if(1&g){const i=t.EpF();t.TgZ(0,"span",5),t.NdJ("click",function(){t.CHM(i),t.oxw();const h=t.MAs(8),A=t.oxw();return t.KtG(A.translateOnClick&&h.present())}),t.qZA()}if(2&g){const i=t.oxw().ngIf,v=t.oxw();t.Q6J("innerHTML",v.listify(i),t.oJD)}}function T(g,d){if(1&g){const i=t.EpF();t.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",6)(3,"ion-button",7),t.NdJ("click",function(){t.CHM(i),t.oxw();const h=t.MAs(8);return t.KtG(h.dismiss())}),t._uU(4,"abbrechen"),t.qZA()(),t.TgZ(5,"ion-title"),t._uU(6,"\xdcbersetzen"),t.qZA(),t.TgZ(7,"ion-buttons",8)(8,"ion-button",9),t.NdJ("click",function(){t.CHM(i);const h=t.MAs(15);t.oxw();const A=t.MAs(8),O=t.oxw();return O.translate(O.original,h.value),t.KtG(A.dismiss())}),t._uU(9,"OK"),t.qZA()()()(),t.TgZ(10,"ion-content",10)(11,"ion-item",11),t._uU(12),t.qZA(),t.TgZ(13,"ion-item",11),t._UZ(14,"ion-textarea",12,13),t.qZA()()}if(2&g){const i=t.oxw().ngIf,v=t.oxw();t.xp6(8),t.Q6J("strong",!0),t.xp6(4),t.hij(" ",v.original,""),t.xp6(2),t.Q6J("autoGrow",!0)("value",i)}}function m(g,d){if(1&g&&(t.ynx(0),t.YNc(1,Z,1,1,"span",1),t.ALo(2,"async"),t.ALo(3,"async"),t.YNc(4,D,1,1,"span",2),t.ALo(5,"async"),t.ALo(6,"async"),t.TgZ(7,"ion-modal",null,3),t.YNc(9,T,16,4,"ng-template"),t.qZA(),t.BQk()),2&g){const i=t.oxw();t.xp6(1),t.Q6J("ngIf",!1===t.lcZ(2,2,i.editable$)||!1===t.lcZ(3,4,i.editable$)),t.xp6(3),t.Q6J("ngIf",!0===t.lcZ(5,6,i.editable$)&&!0===t.lcZ(6,8,i.editable$))}}class l{constructor(d,i){this.translationService=d,this.domSanitizer=i,this.translateOnClick=!0,this.original="",this.hasTextChars$=new b.X(!1),this.editable$=(0,M.a)([this.translationService.translationsEditMode$,this.translationService.translatable$,this.hasTextChars$]).pipe((0,w.U)(([v,h,A])=>v&&h&&A))}set text(d){this.original=d,this.hasTextChars$.next(!!d.match("[a-zA-Z]+"))}ngOnChanges(d){const i=d.text;i&&(this.translation$=this.translationService.getTranslation(i.currentValue).pipe((0,_.d)(1)))}translate(d,i){this.translationService.translate(d,i||"")}listify(d){let i=d;return[...d.matchAll(/(?:(?:^|\n)(?:- [^\n]+(?:\n|$)*)+)/gm)].forEach(v=>{i=i.replace(v[0],`<ul>${v[0].replaceAll(/(?:^|\n)- (.*)(?:\n|$)/gm,"<li>$1</li>")}</ul>`)}),this.domSanitizer.bypassSecurityTrustHtml(i)}}l.\u0275fac=function(d){return new(d||l)(t.Y36(I.fA),t.Y36(C.H7))},l.\u0275cmp=t.Xpm({type:l,selectors:[["bst-translatable"]],inputs:{text:"text",translateOnClick:"translateOnClick"},standalone:!0,features:[t.TTD,t.jDz],decls:2,vars:3,consts:[[4,"ngIf"],[3,"innerHTML",4,"ngIf"],[3,"innerHTML","click",4,"ngIf"],["popover",""],[3,"innerHTML"],[3,"innerHTML","click"],["slot","start"],[3,"click"],["slot","end"],[3,"strong","click"],[1,"ion-padding"],["lines","none"],[3,"autoGrow","value"],["ta",""]],template:function(d,i){1&d&&(t.YNc(0,m,10,10,"ng-container",0),t.ALo(1,"async")),2&d&&t.Q6J("ngIf",t.lcZ(1,1,i.translation$))},dependencies:[u.ez,u.O5,u.Ov,p.Pc,p.YG,p.Sm,p.W2,p.Gu,p.Ie,p.g2,p.wd,p.sr,p.ki,p.j9],styles:["[_nghost-%COMP%]{display:inline-block}span[_ngcontent-%COMP%]{white-space:pre-wrap}ion-item[_ngcontent-%COMP%]{white-space:pre-wrap}ion-textarea[_ngcontent-%COMP%]{margin-top:10px;padding:10px;border:1px solid var(--ion-color-medium);color:1px solid var(--ion-color-dark);font-family:monospace}"]})},4782:(B,S,a)=>{a.d(S,{d:()=>p});var u=a(4707),I=a(3099);function p(b,M,w){let _,t=!1;return b&&"object"==typeof b?({bufferSize:_=1/0,windowTime:M=1/0,refCount:t=!1,scheduler:w}=b):_=b??1/0,(0,I.B)({connector:()=>new u.t(_,M,w),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:t})}}}]);