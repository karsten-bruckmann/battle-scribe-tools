"use strict";(self.webpackChunkbattle_cards=self.webpackChunkbattle_cards||[]).push([[5394],{2034:(I,v,l)=>{l.d(v,{Mf:()=>y,wB:()=>_,GJ:()=>u,oh:()=>g,Wm:()=>d,h:()=>h,u3:()=>S,I_:()=>p});var i=l(9653);const _=(0,i.PH)("data-access/flash-cards/deck-added",(0,i.Ky)()),u=(0,i.PH)("data-access/flash-cards/deck-deleted",(0,i.Ky)()),p=(0,i.PH)("data-access/flash-cards/moved-to-box",(0,i.Ky)()),h=(0,l(8715).U)();var x=l(6166),o=l(1588);const S=(0,i.Lq)({},(0,i.on)(_,(b,f)=>({...b,[(0,o.Z)()]:f.deck})),(0,i.on)(p,(b,f)=>{const c={...b};return c[f.deckId]={...b[f.deckId]},c[f.deckId].cards={...b[f.deckId].cards},c[f.deckId].cards[f.cardId]={...c[f.deckId].cards[f.cardId],box:f.box},c}),(0,i.on)(u,(b,f)=>{const c={...b};return delete c[f.id],c}));var A=l(4650);class y{}y.\u0275fac=function(f){return new(f||y)},y.\u0275mod=A.oAB({type:y}),y.\u0275inj=A.cJS({imports:[i.Aw.forFeature("flash-cards",S,{metaReducers:[(0,x.Wi)("flash-cards/v2",{storage:localStorage}),h.metaReducer]})]});const d=(0,i.ZF)("flash-cards"),g=b=>(0,i.P1)(d,f=>f[b]||null)},2639:(I,v,l)=>{l.d(v,{zk:()=>y,qX:()=>_,yD:()=>u,mb:()=>b,z5:()=>p,bQ:()=>g,cE:()=>o,O3:()=>h,bA:()=>d,sl:()=>f});var i=l(9653);const _=(0,i.PH)("data-access/rosters/add",(0,i.Ky)()),u=(0,i.PH)("data-access/rosters/delete",(0,i.Ky)()),p=(0,i.PH)("data-access/rosters/overwrite",(0,i.Ky)());var m=l(1588);const h=(0,i.Lq)({},(0,i.on)(_,(c,r)=>{const s={...c};return s[(0,m.Z)()]=r.roster,s}),(0,i.on)(p,(c,r)=>{const s={...c};return s[r.id]=r.roster,s}),(0,i.on)(u,(c,r)=>{const s={...c};return delete s[r.id],s})),o=(0,l(8715).U)();var S=l(6166),A=l(4650);class y{}y.\u0275fac=function(r){return new(r||y)},y.\u0275mod=A.oAB({type:y}),y.\u0275inj=A.cJS({imports:[i.Aw.forFeature("rosters",h,{metaReducers:[(0,S.Wi)("rosters/v2",{storage:localStorage}),o.metaReducer]})]});const d=(0,i.ZF)("rosters"),g=c=>(0,i.P1)(d,r=>r[c]||null),b=(c,r)=>(0,i.P1)(g(c),s=>s?.detachments[r]||null),f=(c,r,s)=>(0,i.P1)(g(c),t=>t&&t.detachments[r]?.units[s]||null)},3573:(I,v,l)=>{l.d(v,{fA:()=>f});class i{constructor(){this._dataLength=0,this._bufferLength=0,this._state=new Int32Array(4),this._buffer=new ArrayBuffer(68),this._buffer8=new Uint8Array(this._buffer,0,68),this._buffer32=new Uint32Array(this._buffer,0,17),this.start()}static hashStr(r,s=!1){return this.onePassHasher.start().appendStr(r).end(s)}static hashAsciiStr(r,s=!1){return this.onePassHasher.start().appendAsciiStr(r).end(s)}static _hex(r){const s=i.hexChars,t=i.hexOut;let e,n,a,T;for(T=0;T<4;T+=1)for(n=8*T,e=r[T],a=0;a<8;a+=2)t[n+1+a]=s.charAt(15&e),e>>>=4,t[n+0+a]=s.charAt(15&e),e>>>=4;return t.join("")}static _md5cycle(r,s){let t=r[0],e=r[1],n=r[2],a=r[3];t+=(e&n|~e&a)+s[0]-680876936|0,t=(t<<7|t>>>25)+e|0,a+=(t&e|~t&n)+s[1]-389564586|0,a=(a<<12|a>>>20)+t|0,n+=(a&t|~a&e)+s[2]+606105819|0,n=(n<<17|n>>>15)+a|0,e+=(n&a|~n&t)+s[3]-1044525330|0,e=(e<<22|e>>>10)+n|0,t+=(e&n|~e&a)+s[4]-176418897|0,t=(t<<7|t>>>25)+e|0,a+=(t&e|~t&n)+s[5]+1200080426|0,a=(a<<12|a>>>20)+t|0,n+=(a&t|~a&e)+s[6]-1473231341|0,n=(n<<17|n>>>15)+a|0,e+=(n&a|~n&t)+s[7]-45705983|0,e=(e<<22|e>>>10)+n|0,t+=(e&n|~e&a)+s[8]+1770035416|0,t=(t<<7|t>>>25)+e|0,a+=(t&e|~t&n)+s[9]-1958414417|0,a=(a<<12|a>>>20)+t|0,n+=(a&t|~a&e)+s[10]-42063|0,n=(n<<17|n>>>15)+a|0,e+=(n&a|~n&t)+s[11]-1990404162|0,e=(e<<22|e>>>10)+n|0,t+=(e&n|~e&a)+s[12]+1804603682|0,t=(t<<7|t>>>25)+e|0,a+=(t&e|~t&n)+s[13]-40341101|0,a=(a<<12|a>>>20)+t|0,n+=(a&t|~a&e)+s[14]-1502002290|0,n=(n<<17|n>>>15)+a|0,e+=(n&a|~n&t)+s[15]+1236535329|0,e=(e<<22|e>>>10)+n|0,t+=(e&a|n&~a)+s[1]-165796510|0,t=(t<<5|t>>>27)+e|0,a+=(t&n|e&~n)+s[6]-1069501632|0,a=(a<<9|a>>>23)+t|0,n+=(a&e|t&~e)+s[11]+643717713|0,n=(n<<14|n>>>18)+a|0,e+=(n&t|a&~t)+s[0]-373897302|0,e=(e<<20|e>>>12)+n|0,t+=(e&a|n&~a)+s[5]-701558691|0,t=(t<<5|t>>>27)+e|0,a+=(t&n|e&~n)+s[10]+38016083|0,a=(a<<9|a>>>23)+t|0,n+=(a&e|t&~e)+s[15]-660478335|0,n=(n<<14|n>>>18)+a|0,e+=(n&t|a&~t)+s[4]-405537848|0,e=(e<<20|e>>>12)+n|0,t+=(e&a|n&~a)+s[9]+568446438|0,t=(t<<5|t>>>27)+e|0,a+=(t&n|e&~n)+s[14]-1019803690|0,a=(a<<9|a>>>23)+t|0,n+=(a&e|t&~e)+s[3]-187363961|0,n=(n<<14|n>>>18)+a|0,e+=(n&t|a&~t)+s[8]+1163531501|0,e=(e<<20|e>>>12)+n|0,t+=(e&a|n&~a)+s[13]-1444681467|0,t=(t<<5|t>>>27)+e|0,a+=(t&n|e&~n)+s[2]-51403784|0,a=(a<<9|a>>>23)+t|0,n+=(a&e|t&~e)+s[7]+1735328473|0,n=(n<<14|n>>>18)+a|0,e+=(n&t|a&~t)+s[12]-1926607734|0,e=(e<<20|e>>>12)+n|0,t+=(e^n^a)+s[5]-378558|0,t=(t<<4|t>>>28)+e|0,a+=(t^e^n)+s[8]-2022574463|0,a=(a<<11|a>>>21)+t|0,n+=(a^t^e)+s[11]+1839030562|0,n=(n<<16|n>>>16)+a|0,e+=(n^a^t)+s[14]-35309556|0,e=(e<<23|e>>>9)+n|0,t+=(e^n^a)+s[1]-1530992060|0,t=(t<<4|t>>>28)+e|0,a+=(t^e^n)+s[4]+1272893353|0,a=(a<<11|a>>>21)+t|0,n+=(a^t^e)+s[7]-155497632|0,n=(n<<16|n>>>16)+a|0,e+=(n^a^t)+s[10]-1094730640|0,e=(e<<23|e>>>9)+n|0,t+=(e^n^a)+s[13]+681279174|0,t=(t<<4|t>>>28)+e|0,a+=(t^e^n)+s[0]-358537222|0,a=(a<<11|a>>>21)+t|0,n+=(a^t^e)+s[3]-722521979|0,n=(n<<16|n>>>16)+a|0,e+=(n^a^t)+s[6]+76029189|0,e=(e<<23|e>>>9)+n|0,t+=(e^n^a)+s[9]-640364487|0,t=(t<<4|t>>>28)+e|0,a+=(t^e^n)+s[12]-421815835|0,a=(a<<11|a>>>21)+t|0,n+=(a^t^e)+s[15]+530742520|0,n=(n<<16|n>>>16)+a|0,e+=(n^a^t)+s[2]-995338651|0,e=(e<<23|e>>>9)+n|0,t+=(n^(e|~a))+s[0]-198630844|0,t=(t<<6|t>>>26)+e|0,a+=(e^(t|~n))+s[7]+1126891415|0,a=(a<<10|a>>>22)+t|0,n+=(t^(a|~e))+s[14]-1416354905|0,n=(n<<15|n>>>17)+a|0,e+=(a^(n|~t))+s[5]-57434055|0,e=(e<<21|e>>>11)+n|0,t+=(n^(e|~a))+s[12]+1700485571|0,t=(t<<6|t>>>26)+e|0,a+=(e^(t|~n))+s[3]-1894986606|0,a=(a<<10|a>>>22)+t|0,n+=(t^(a|~e))+s[10]-1051523|0,n=(n<<15|n>>>17)+a|0,e+=(a^(n|~t))+s[1]-2054922799|0,e=(e<<21|e>>>11)+n|0,t+=(n^(e|~a))+s[8]+1873313359|0,t=(t<<6|t>>>26)+e|0,a+=(e^(t|~n))+s[15]-30611744|0,a=(a<<10|a>>>22)+t|0,n+=(t^(a|~e))+s[6]-1560198380|0,n=(n<<15|n>>>17)+a|0,e+=(a^(n|~t))+s[13]+1309151649|0,e=(e<<21|e>>>11)+n|0,t+=(n^(e|~a))+s[4]-145523070|0,t=(t<<6|t>>>26)+e|0,a+=(e^(t|~n))+s[11]-1120210379|0,a=(a<<10|a>>>22)+t|0,n+=(t^(a|~e))+s[2]+718787259|0,n=(n<<15|n>>>17)+a|0,e+=(a^(n|~t))+s[9]-343485551|0,e=(e<<21|e>>>11)+n|0,r[0]=t+r[0]|0,r[1]=e+r[1]|0,r[2]=n+r[2]|0,r[3]=a+r[3]|0}start(){return this._dataLength=0,this._bufferLength=0,this._state.set(i.stateIdentity),this}appendStr(r){const s=this._buffer8,t=this._buffer32;let n,a,e=this._bufferLength;for(a=0;a<r.length;a+=1){if(n=r.charCodeAt(a),n<128)s[e++]=n;else if(n<2048)s[e++]=192+(n>>>6),s[e++]=63&n|128;else if(n<55296||n>56319)s[e++]=224+(n>>>12),s[e++]=n>>>6&63|128,s[e++]=63&n|128;else{if(n=1024*(n-55296)+(r.charCodeAt(++a)-56320)+65536,n>1114111)throw new Error("Unicode standard supports code points up to U+10FFFF");s[e++]=240+(n>>>18),s[e++]=n>>>12&63|128,s[e++]=n>>>6&63|128,s[e++]=63&n|128}e>=64&&(this._dataLength+=64,i._md5cycle(this._state,t),e-=64,t[0]=t[16])}return this._bufferLength=e,this}appendAsciiStr(r){const s=this._buffer8,t=this._buffer32;let n,e=this._bufferLength,a=0;for(;;){for(n=Math.min(r.length-a,64-e);n--;)s[e++]=r.charCodeAt(a++);if(e<64)break;this._dataLength+=64,i._md5cycle(this._state,t),e=0}return this._bufferLength=e,this}appendByteArray(r){const s=this._buffer8,t=this._buffer32;let n,e=this._bufferLength,a=0;for(;;){for(n=Math.min(r.length-a,64-e);n--;)s[e++]=r[a++];if(e<64)break;this._dataLength+=64,i._md5cycle(this._state,t),e=0}return this._bufferLength=e,this}getState(){const r=this._state;return{buffer:String.fromCharCode.apply(null,Array.from(this._buffer8)),buflen:this._bufferLength,length:this._dataLength,state:[r[0],r[1],r[2],r[3]]}}setState(r){const s=r.buffer,t=r.state,e=this._state;let n;for(this._dataLength=r.length,this._bufferLength=r.buflen,e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],n=0;n<s.length;n+=1)this._buffer8[n]=s.charCodeAt(n)}end(r=!1){const s=this._bufferLength,t=this._buffer8,e=this._buffer32,n=1+(s>>2);this._dataLength+=s;const a=8*this._dataLength;if(t[s]=128,t[s+1]=t[s+2]=t[s+3]=0,e.set(i.buffer32Identity.subarray(n),n),s>55&&(i._md5cycle(this._state,e),e.set(i.buffer32Identity)),a<=4294967295)e[14]=a;else{const T=a.toString(16).match(/(.*?)(.{0,8})$/);if(null===T)return;const C=parseInt(T[2],16),L=parseInt(T[1],16)||0;e[14]=C,e[15]=L}return i._md5cycle(this._state,e),r?this._state:i._hex(this._state)}}if(i.stateIdentity=new Int32Array([1732584193,-271733879,-1732584194,271733878]),i.buffer32Identity=new Int32Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]),i.hexChars="0123456789abcdef",i.hexOut=[],i.onePassHasher=new i,"5d41402abc4b2a76b9719d911017c592"!==i.hashStr("hello"))throw new Error("Md5 self test failed.");const u="translations-v2-";var h=l(9671),x=l(7579),o=l(1135),S=l(4004),A=l(3900),y=l(8675),d=l(9300),g=l(3905),b=l(4650);class f{constructor(){this.languageStorageKey="language-v2",this._updatedTexts$=new x.x,this.updatedTexts$=this._updatedTexts$.asObservable(),this.languages={en:{flag:"\u{1f1ec}\u{1f1e7}",name:"English"},de:{flag:"\u{1f1e9}\u{1f1ea}",name:"Deutsch"},fr:{flag:"\u{1f1eb}\u{1f1f7}",name:"Fran\xe7ais"},es:{flag:"\u{1f1ea}\u{1f1f8}",name:"Espa\xf1ol"}},this.selectedLanguage$=new o.X(localStorage.getItem(this.languageStorageKey)||"de"),this.translatable$=this.selectedLanguage$.pipe((0,S.U)(r=>"en"!==r)),this._translationsEditMode$=new o.X(!!localStorage.getItem("translationsEditMode"))}setLanguage(r){localStorage.setItem(this.languageStorageKey,r),this.selectedLanguage$.next(r)}getTranslation(r){const s=i.hashStr(r);return this.selectedLanguage$.pipe((0,A.w)(t=>this.updatedTexts$.pipe((0,y.O)(s),(0,d.h)(e=>e===s),(0,S.U)(()=>((c,r)=>{if(!c)return"";const s=i.hashStr(c);return localStorage.getItem(`${u}${r}-${s}`)||c})(r,t)))))}translate(r,s,t){var e=this;return(0,h.Z)(function*(){const n=t||(yield(0,g.z)(e.selectedLanguage$)),a=((c,r,s)=>{const t=i.hashStr(c);return r&&c!==r?(localStorage.setItem(`${u}${s}-${t}`,r),t):(localStorage.removeItem(`${u}${s}-${t}`),t)})(r,s,n);e._updatedTexts$.next(a)})()}export(){const r=this.getAllTranslations(),s=document.createElement("a"),t=JSON.stringify(r),e=new Blob([t],{type:"octet/stream"}),n=window.URL.createObjectURL(e);s.href=n,s.download="translations.json",s.click(),window.URL.revokeObjectURL(n)}import(r){var s=this;return(0,h.Z)(function*(){const t=yield r.text(),e=JSON.parse(t);Object.entries(e).forEach(([n,a])=>{const T=n.match(/[0-9a-f]{32}$/)?.[0];T&&(localStorage.setItem(n,a),s._updatedTexts$.next(T))})})()}getAllTranslations(){const r={};for(let s=0;s<localStorage.length;s++){const t=localStorage.key(s);t&&t.match(new RegExp(`^${u}(en|de|fr|es)-[0-9a-f]{32}`))&&(r[t]=localStorage.getItem(t)||"")}return r}get translationsEditMode$(){return this._translationsEditMode$.asObservable()}setTranslationsEditMode(r){this._translationsEditMode$.next(r),r?localStorage.setItem("translationsEditMode","enabled"):localStorage.removeItem("translationsEditMode")}}f.\u0275fac=function(r){return new(r||f)},f.\u0275prov=b.Yz7({token:f,factory:f.\u0275fac,providedIn:"root"})},391:(I,v,l)=>{l.d(v,{Y:()=>S,s:()=>c});var i=l(6895),_=l(3573),u=l(603),p=l(1135),m=l(9841),h=l(4004),x=l(4782),o=l(4650);const S=new o.OlP("TRANSLATION_MODE_DISABLED",{providedIn:"root",factory:()=>!1});var A=l(1481);function y(r,s){if(1&r&&o._UZ(0,"span",3),2&r){const t=o.oxw().ngIf,e=o.oxw();o.Q6J("innerHTML",e.listify(t),o.oJD)}}function d(r,s){if(1&r){const t=o.EpF();o.TgZ(0,"span",6),o.NdJ("click",function(){o.CHM(t),o.oxw();const n=o.MAs(4),a=o.oxw(2);return o.KtG(a.translateOnClick&&n.present())}),o.qZA()}if(2&r){const t=o.oxw(2).ngIf,e=o.oxw();o.Q6J("innerHTML",e.listify(t),o.oJD)}}function g(r,s){if(1&r){const t=o.EpF();o.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",7)(3,"ion-button",8),o.NdJ("click",function(){o.CHM(t),o.oxw();const n=o.MAs(4);return o.KtG(n.dismiss())}),o._uU(4,"abbrechen"),o.qZA()(),o.TgZ(5,"ion-title"),o._uU(6,"\xdcbersetzen"),o.qZA(),o.TgZ(7,"ion-buttons",9)(8,"ion-button",10),o.NdJ("click",function(){o.CHM(t);const n=o.MAs(15);o.oxw();const a=o.MAs(4),T=o.oxw(2);return T.translate(T.original,n.value),o.KtG(a.dismiss())}),o._uU(9,"OK"),o.qZA()()()(),o.TgZ(10,"ion-content",11)(11,"ion-item",12),o._uU(12),o.qZA(),o.TgZ(13,"ion-item",12),o._UZ(14,"ion-textarea",13,14),o.qZA()()}if(2&r){const t=o.oxw(2).ngIf,e=o.oxw();o.xp6(8),o.Q6J("strong",!0),o.xp6(4),o.hij(" ",e.original,""),o.xp6(2),o.Q6J("autoGrow",!0)("value",t)}}function b(r,s){if(1&r&&(o.YNc(0,d,1,1,"span",4),o.ALo(1,"async"),o.ALo(2,"async"),o.TgZ(3,"ion-modal",null,5),o.YNc(5,g,16,4,"ng-template"),o.qZA()),2&r){const t=o.oxw(2);o.Q6J("ngIf",!0===o.lcZ(1,1,t.editable$)&&!0===o.lcZ(2,3,t.editable$))}}function f(r,s){if(1&r&&(o.ynx(0),o.YNc(1,y,1,1,"span",1),o.ALo(2,"async"),o.YNc(3,b,6,5,"ng-template",null,2,o.W1O),o.BQk()),2&r){const t=o.MAs(4),e=o.oxw();o.xp6(1),o.Q6J("ngIf",!1===o.lcZ(2,2,e.editable$)||!0===e.translationModeDisabled)("ngIfElse",t)}}class c{constructor(s,t,e){this.translationService=s,this.domSanitizer=t,this.translationModeDisabled=e,this.translateOnClick=!0,this.original="",this.hasTextChars$=new p.X(!1),this.editable$=(0,m.a)([this.translationService.translationsEditMode$,this.translationService.translatable$,this.hasTextChars$]).pipe((0,h.U)(([n,a,T])=>n&&a&&T))}set text(s){this.original=s,this.hasTextChars$.next(!!s.match("[a-zA-Z]+"))}ngOnChanges(s){const t=s.text;t&&(this.translation$=this.translationService.getTranslation(t.currentValue).pipe((0,x.d)(1)))}translate(s,t){this.translationService.translate(s,t||"")}listify(s){let t=s.replaceAll("<","&lt;").replaceAll(">","&gt;");return[...s.matchAll(/(?:(?:^|\n)(?:- [^\n]+(?:\n|$)*)+)/gm)].forEach(e=>{t=t.replace(e[0],`<ul>${e[0].replaceAll(/(?:^|\n)- (.*)(?:\n|$)/gm,"<li>$1</li>")}</ul>`)}),this.domSanitizer.bypassSecurityTrustHtml(t)}}c.\u0275fac=function(s){return new(s||c)(o.Y36(_.fA),o.Y36(A.H7),o.Y36(S))},c.\u0275cmp=o.Xpm({type:c,selectors:[["bst-translatable"]],inputs:{text:"text",translateOnClick:"translateOnClick"},standalone:!0,features:[o.TTD,o.jDz],decls:2,vars:3,consts:[[4,"ngIf"],[3,"innerHTML",4,"ngIf","ngIfElse"],["enabled",""],[3,"innerHTML"],[3,"innerHTML","click",4,"ngIf"],["popover",""],[3,"innerHTML","click"],["slot","start"],[3,"click"],["slot","end"],[3,"strong","click"],[1,"ion-padding"],["lines","none"],[3,"autoGrow","value"],["ta",""]],template:function(s,t){1&s&&(o.YNc(0,f,5,4,"ng-container",0),o.ALo(1,"async")),2&s&&o.Q6J("ngIf",o.lcZ(1,1,t.translation$))},dependencies:[i.ez,i.O5,i.Ov,u.Pc,u.YG,u.Sm,u.W2,u.Gu,u.Ie,u.g2,u.wd,u.sr,u.ki,u.j9],styles:['[_nghost-%COMP%]{display:inline-block}[_nghost-%COMP%]  ul{margin:0;padding:0}[_nghost-%COMP%]  li{list-style-type:none;padding-left:8px;position:relative}[_nghost-%COMP%]  li:before{content:"-";position:absolute;left:0}span[_ngcontent-%COMP%]{white-space:pre-wrap}ion-item[_ngcontent-%COMP%]{white-space:pre-wrap}ion-textarea[_ngcontent-%COMP%]{margin-top:10px;padding:10px;border:1px solid var(--ion-color-medium);color:1px solid var(--ion-color-dark);font-family:monospace}']})},6166:(I,v,l)=>{l.d(v,{Wi:()=>u});const u=(p,m)=>((p,m,h)=>x=>(o,S)=>{const A={...p,...h};let y=o;void 0===y&&(y=A.parse(A.storage.getItem(m)));const d=x(y,S);return A.storage.setItem(m,A.serialize(d)),d})({storage:sessionStorage,serialize:p=>JSON.stringify(p),parse:p=>{if(p)try{return JSON.parse(p)}catch{return}}},p,m)},8715:(I,v,l)=>{l.d(v,{U:()=>i});const i=()=>{const _={};return{add:(m,h)=>{_[h]=m},metaReducer:m=>(h,x)=>{let o=m(h,x);return Object.values(_).forEach(S=>{o=S(o,x)}),o}}}},1684:(I,v,l)=>{l.d(v,{e:()=>_});var i=l(9653);const _=(...u)=>(0,i.Lq)(void 0,...u)},9796:(I,v,l)=>{l.d(v,{j:()=>i});const i=_=>Object.keys(_).map(u=>({..._[u],id:u}))},3905:(I,v,l)=>{l.d(v,{z:()=>u});var i=l(6805),_=l(930);function u(p,m){const h="object"==typeof m;return new Promise((x,o)=>{const S=new _.Hp({next:A=>{x(A),S.unsubscribe()},error:o,complete:()=>{h?x(m.defaultValue):o(new i.K)}});p.subscribe(S)})}},4782:(I,v,l)=>{l.d(v,{d:()=>u});var i=l(4707),_=l(3099);function u(p,m,h){let x,o=!1;return p&&"object"==typeof p?({bufferSize:x=1/0,windowTime:m=1/0,refCount:o=!1,scheduler:h}=p):x=p??1/0,(0,_.B)({connector:()=>new i.t(x,m,h),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:o})}},1588:(I,v,l)=>{l.d(v,{Z:()=>y});const _={randomUUID:typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let u;const p=new Uint8Array(16);function m(){if(!u&&(u=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!u))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return u(p)}const h=[];for(let d=0;d<256;++d)h.push((d+256).toString(16).slice(1));const y=function A(d,g,b){if(_.randomUUID&&!g&&!d)return _.randomUUID();const f=(d=d||{}).random||(d.rng||m)();if(f[6]=15&f[6]|64,f[8]=63&f[8]|128,g){b=b||0;for(let c=0;c<16;++c)g[b+c]=f[c];return g}return function x(d,g=0){return(h[d[g+0]]+h[d[g+1]]+h[d[g+2]]+h[d[g+3]]+"-"+h[d[g+4]]+h[d[g+5]]+"-"+h[d[g+6]]+h[d[g+7]]+"-"+h[d[g+8]]+h[d[g+9]]+"-"+h[d[g+10]]+h[d[g+11]]+h[d[g+12]]+h[d[g+13]]+h[d[g+14]]+h[d[g+15]]).toLowerCase()}(f)}}}]);