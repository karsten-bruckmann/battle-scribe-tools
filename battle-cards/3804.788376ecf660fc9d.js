"use strict";(self.webpackChunkbattle_cards=self.webpackChunkbattle_cards||[]).push([[3804],{4147:(B,j,h)=>{h.d(j,{a:()=>Y,b:()=>l,p:()=>A});const A=(E,...T)=>console.warn(`[Ionic Warning]: ${E}`,...T),l=(E,...T)=>console.error(`[Ionic Error]: ${E}`,...T),Y=(E,...T)=>console.error(`<${E.tagName.toLowerCase()}> must be used inside ${T.join(" or ")}.`)},3804:(B,j,h)=>{h.r(j),h.d(j,{ion_popover:()=>ee});var A=h(9671),l=h(1308),Y=h(4147),E=h(5179),T=h(7626),w=h(5730),L=h(7996),v=h(2854),m=h(1843),p=h(181);h(3457);const R=(t,e,r)=>{const o=e.getBoundingClientRect(),i=o.height;let n=o.width;return"cover"===t&&r&&(n=r.getBoundingClientRect().width),{contentWidth:n,contentHeight:i}},ne=(t,e,r)=>{let o=[];switch(e){case"hover":let i;o=[{eventName:"mouseenter",callback:(n=(0,A.Z)(function*(s){s.stopPropagation(),i&&clearTimeout(i),i=setTimeout(()=>{(0,w.r)(()=>{r.presentFromTrigger(s),i=void 0})},100)}),function(a){return n.apply(this,arguments)})},{eventName:"mouseleave",callback:n=>{i&&clearTimeout(i);const s=n.relatedTarget;s&&s.closest("ion-popover")!==r&&r.dismiss(void 0,void 0,!1)}},{eventName:"click",callback:n=>n.stopPropagation()},{eventName:"ionPopoverActivateTrigger",callback:n=>r.presentFromTrigger(n,!0)}];break;case"context-menu":o=[{eventName:"contextmenu",callback:n=>{n.preventDefault(),r.presentFromTrigger(n)}},{eventName:"click",callback:n=>n.stopPropagation()},{eventName:"ionPopoverActivateTrigger",callback:n=>r.presentFromTrigger(n,!0)}];break;default:o=[{eventName:"click",callback:n=>r.presentFromTrigger(n)},{eventName:"ionPopoverActivateTrigger",callback:n=>r.presentFromTrigger(n,!0)}]}var n;return o.forEach(({eventName:i,callback:n})=>t.addEventListener(i,n)),t.setAttribute("data-ion-popover-trigger","true"),()=>{o.forEach(({eventName:i,callback:n})=>t.removeEventListener(i,n)),t.removeAttribute("data-ion-popover-trigger")}},G=(t,e)=>e&&"ION-ITEM"===e.tagName?t.findIndex(r=>r===e):-1,X=t=>{const r=(0,w.g)(t).querySelector("button");r&&(0,w.r)(()=>r.focus())},ce=t=>{const e=function(){var r=(0,A.Z)(function*(o){var i;const n=document.activeElement;let s=[];const a=null===(i=o.target)||void 0===i?void 0:i.tagName;if("ION-POPOVER"===a||"ION-ITEM"===a){try{s=Array.from(t.querySelectorAll("ion-item:not(ion-popover ion-popover *):not([disabled])"))}catch{}switch(o.key){case"ArrowLeft":(yield t.getParentPopover())&&t.dismiss(void 0,void 0,!1);break;case"ArrowDown":o.preventDefault();const f=((t,e)=>t[G(t,e)+1])(s,n);void 0!==f&&X(f);break;case"ArrowUp":o.preventDefault();const y=((t,e)=>t[G(t,e)-1])(s,n);void 0!==y&&X(y);break;case"Home":o.preventDefault();const u=s[0];void 0!==u&&X(u);break;case"End":o.preventDefault();const g=s[s.length-1];void 0!==g&&X(g);break;case"ArrowRight":case" ":case"Enter":if(n&&(t=>t.hasAttribute("data-ion-popover-trigger"))(n)){const b=new CustomEvent("ionPopoverActivateTrigger");n.dispatchEvent(b)}}}});return function(i){return r.apply(this,arguments)}}();return t.addEventListener("keydown",e),()=>t.removeEventListener("keydown",e)},H=(t,e,r,o,i,n,s,a,c,f,y)=>{var u;let g={top:0,left:0,width:0,height:0};if("event"===n){if(!y)return c;g={top:y.clientY,left:y.clientX,width:1,height:1}}else{const M=f||(null===(u=y?.detail)||void 0===u?void 0:u.ionShadowTarget)||y?.target;if(!M)return c;const D=M.getBoundingClientRect();g={top:D.top,left:D.left,width:D.width,height:D.height}}const b=de(s,g,e,r,o,i,t),_=fe(a,s,g,e,r),P=b.top+_.top,I=b.left+_.left,{arrowTop:x,arrowLeft:O}=le(s,o,i,P,I,e,r,t),{originX:k,originY:C}=pe(s,a,t);return{top:P,left:I,referenceCoordinates:g,arrowTop:x,arrowLeft:O,originX:k,originY:C}},pe=(t,e,r)=>{switch(t){case"top":return{originX:J(e),originY:"bottom"};case"bottom":return{originX:J(e),originY:"top"};case"left":return{originX:"right",originY:V(e)};case"right":return{originX:"left",originY:V(e)};case"start":return{originX:r?"left":"right",originY:V(e)};case"end":return{originX:r?"right":"left",originY:V(e)}}},J=t=>{switch(t){case"start":return"left";case"center":return"center";case"end":return"right"}},V=t=>{switch(t){case"start":return"top";case"center":return"center";case"end":return"bottom"}},le=(t,e,r,o,i,n,s,a)=>{const c={arrowTop:o+s/2-e/2,arrowLeft:i+n-e/2},f={arrowTop:o+s/2-e/2,arrowLeft:i-1.5*e};switch(t){case"top":return{arrowTop:o+s,arrowLeft:i+n/2-e/2};case"bottom":return{arrowTop:o-r,arrowLeft:i+n/2-e/2};case"left":return c;case"right":return f;case"start":return a?f:c;case"end":return a?c:f;default:return{arrowTop:0,arrowLeft:0}}},de=(t,e,r,o,i,n,s)=>{const a={top:e.top,left:e.left-r-i},c={top:e.top,left:e.left+e.width+i};switch(t){case"top":return{top:e.top-o-n,left:e.left};case"right":return c;case"bottom":return{top:e.top+e.height+n,left:e.left};case"left":return a;case"start":return s?c:a;case"end":return s?a:c}},fe=(t,e,r,o,i)=>{switch(t){case"center":return ue(e,r,o,i);case"end":return he(e,r,o,i);default:return{top:0,left:0}}},he=(t,e,r,o)=>{switch(t){case"start":case"end":case"left":case"right":return{top:-(o-e.height),left:0};default:return{top:0,left:-(r-e.width)}}},ue=(t,e,r,o)=>{switch(t){case"start":case"end":case"left":case"right":return{top:-(o/2-e.height/2),left:0};default:return{top:0,left:-(r/2-e.width/2)}}},Q=(t,e,r,o,i,n,s,a,c,f,y,u,g=0,b=0,_=0)=>{let P=g;const I=b;let k,x=r,O=e,C=f,S=y,d=!1,M=!1;const D=u?u.top+u.height:n/2-a/2,W=u?u.height:0;let N=!1;return x<o+c?(x=o,d=!0,C="left"):s+o+x+c>i&&(M=!0,x=i-s-o,C="right"),D+W+a>n&&("top"===t||"bottom"===t)&&(D-a>0?(O=Math.max(12,D-a-W-(_-1)),P=O+a,S="bottom",N=!0):k=o),{top:O,left:x,bottom:k,originX:C,originY:S,checkSafeAreaLeft:d,checkSafeAreaRight:M,arrowTop:P,arrowLeft:I,addPopoverBottomClass:N}},ge=(t,e)=>{var r;const{event:o,size:i,trigger:n,reference:s,side:a,align:c}=e,f=t.ownerDocument,y="rtl"===f.dir,u=f.defaultView.innerWidth,g=f.defaultView.innerHeight,b=(0,w.g)(t),_=b.querySelector(".popover-content"),P=b.querySelector(".popover-arrow"),I=n||(null===(r=o?.detail)||void 0===r?void 0:r.ionShadowTarget)||o?.target,{contentWidth:x,contentHeight:O}=R(i,_,I),{arrowWidth:k,arrowHeight:C}=(t=>{if(!t)return{arrowWidth:0,arrowHeight:0};const{width:e,height:r}=t.getBoundingClientRect();return{arrowWidth:e,arrowHeight:r}})(P),d=H(y,x,O,k,C,s,a,c,{top:g/2-O/2,left:u/2-x/2,originX:y?"right":"left",originY:"top"},n,o),M="cover"===i?0:5,D="cover"===i?0:25,{originX:W,originY:N,top:K,left:$,bottom:z,checkSafeAreaLeft:F,checkSafeAreaRight:Ae,arrowTop:Ee,arrowLeft:Te,addPopoverBottomClass:Ie}=Q(a,d.top,d.left,M,u,g,x,O,D,d.originX,d.originY,d.referenceCoordinates,d.arrowTop,d.arrowLeft,C),Oe=(0,p.c)(),te=(0,p.c)(),oe=(0,p.c)();return te.addElement(b.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),oe.addElement(b.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),Oe.easing("ease").duration(100).beforeAddWrite(()=>{"cover"===i&&t.style.setProperty("--width",`${x}px`),Ie&&t.classList.add("popover-bottom"),void 0!==z&&_.style.setProperty("bottom",`${z}px`);let q=`${$}px`;F&&(q=`${$}px + var(--ion-safe-area-left, 0)`),Ae&&(q=`${$}px - var(--ion-safe-area-right, 0)`),_.style.setProperty("top",`calc(${K}px + var(--offset-y, 0))`),_.style.setProperty("left",`calc(${q} + var(--offset-x, 0))`),_.style.setProperty("transform-origin",`${N} ${W}`),null!==P&&(((t,e=!1,r,o)=>!(!r&&!o||"top"!==t&&"bottom"!==t&&e))(a,d.top!==K||d.left!==$,o,n)?(P.style.setProperty("top",`calc(${Ee}px + var(--offset-y, 0))`),P.style.setProperty("left",`calc(${Te}px + var(--offset-x, 0))`)):P.style.setProperty("display","none"))}).addAnimation([te,oe])},be=t=>{const e=(0,w.g)(t),r=e.querySelector(".popover-content"),o=e.querySelector(".popover-arrow"),i=(0,p.c)(),n=(0,p.c)(),s=(0,p.c)();return n.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),s.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),i.easing("ease").afterAddWrite(()=>{t.style.removeProperty("--width"),t.classList.remove("popover-bottom"),r.style.removeProperty("top"),r.style.removeProperty("left"),r.style.removeProperty("bottom"),r.style.removeProperty("transform-origin"),o&&(o.style.removeProperty("top"),o.style.removeProperty("left"),o.style.removeProperty("display"))}).duration(300).addAnimation([n,s])},we=(t,e)=>{var r;const{event:o,size:i,trigger:n,reference:s,side:a,align:c}=e,f=t.ownerDocument,y="rtl"===f.dir,u=f.defaultView.innerWidth,g=f.defaultView.innerHeight,b=(0,w.g)(t),_=b.querySelector(".popover-content"),P=n||(null===(r=o?.detail)||void 0===r?void 0:r.ionShadowTarget)||o?.target,{contentWidth:I,contentHeight:x}=R(i,_,P),k=H(y,I,x,0,0,s,a,c,{top:g/2-x/2,left:u/2-I/2,originX:y?"right":"left",originY:"top"},n,o),C="cover"===i?0:12,{originX:S,originY:d,top:M,left:D,bottom:W}=Q(a,k.top,k.left,C,u,g,I,x,0,k.originX,k.originY,k.referenceCoordinates),N=(0,p.c)(),K=(0,p.c)(),$=(0,p.c)(),z=(0,p.c)(),F=(0,p.c)();return K.addElement(b.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),$.addElement(b.querySelector(".popover-wrapper")).duration(150).fromTo("opacity",.01,1),z.addElement(_).beforeStyles({top:`calc(${M}px + var(--offset-y, 0px))`,left:`calc(${D}px + var(--offset-x, 0px))`,"transform-origin":`${d} ${S}`}).beforeAddWrite(()=>{void 0!==W&&_.style.setProperty("bottom",`${W}px`)}).fromTo("transform","scale(0.8)","scale(1)"),F.addElement(b.querySelector(".popover-viewport")).fromTo("opacity",.01,1),N.easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).beforeAddWrite(()=>{"cover"===i&&t.style.setProperty("--width",`${I}px`),"bottom"===d&&t.classList.add("popover-bottom")}).addAnimation([K,$,z,F])},ye=t=>{const e=(0,w.g)(t),r=e.querySelector(".popover-content"),o=(0,p.c)(),i=(0,p.c)(),n=(0,p.c)();return i.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),n.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),o.easing("ease").afterAddWrite(()=>{t.style.removeProperty("--width"),t.classList.remove("popover-bottom"),r.style.removeProperty("top"),r.style.removeProperty("left"),r.style.removeProperty("bottom"),r.style.removeProperty("transform-origin")}).duration(150).addAnimation([i,n])},ee=class{constructor(t){(0,l.r)(this,t),this.didPresent=(0,l.e)(this,"ionPopoverDidPresent",7),this.willPresent=(0,l.e)(this,"ionPopoverWillPresent",7),this.willDismiss=(0,l.e)(this,"ionPopoverWillDismiss",7),this.didDismiss=(0,l.e)(this,"ionPopoverDidDismiss",7),this.didPresentShorthand=(0,l.e)(this,"didPresent",7),this.willPresentShorthand=(0,l.e)(this,"willPresent",7),this.willDismissShorthand=(0,l.e)(this,"willDismiss",7),this.didDismissShorthand=(0,l.e)(this,"didDismiss",7),this.ionMount=(0,l.e)(this,"ionMount",7),this.parentPopover=null,this.popoverIndex=De++,this.coreDelegate=(0,T.C)(),this.inline=!1,this.focusDescendantOnPresent=!1,this.presented=!1,this.hasController=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.triggerAction="click",this.size="auto",this.dismissOnSelect=!1,this.reference="trigger",this.side="bottom",this.arrow=!0,this.isOpen=!1,this.keyboardEvents=!1,this.keepContentsMounted=!1,this.onBackdropTap=()=>{this.dismiss(void 0,L.B)},this.onLifecycle=e=>{const r=this.usersElement,o=ke[e.type];if(r&&o){const i=new CustomEvent(o,{bubbles:!1,cancelable:!1,detail:e.detail});r.dispatchEvent(i)}},this.configureTriggerInteraction=()=>{const{trigger:e,triggerAction:r,el:o,destroyTriggerInteraction:i}=this;if(i&&i(),void 0===e)return;const n=this.triggerEl=void 0!==e?document.getElementById(e):null;n?this.destroyTriggerInteraction=ne(n,r,o):(0,Y.p)(`A trigger element with the ID "${e}" was not found in the DOM. The trigger element must be in the DOM when the "trigger" property is set on ion-popover.`,this.el)},this.configureKeyboardInteraction=()=>{const{destroyKeyboardInteraction:e,el:r}=this;e&&e(),this.destroyKeyboardInteraction=ce(r)},this.configureDismissInteraction=()=>{const{destroyDismissInteraction:e,parentPopover:r,triggerAction:o,triggerEl:i,el:n}=this;!r||!i||(e&&e(),this.destroyDismissInteraction=((t,e,r,o)=>{let i=[];const s=(0,w.g)(o).querySelector(".popover-content");return i="hover"===e?[{eventName:"mouseenter",callback:a=>{document.elementFromPoint(a.clientX,a.clientY)!==t&&r.dismiss(void 0,void 0,!1)}}]:[{eventName:"click",callback:a=>{a.target.closest("[data-ion-popover-trigger]")!==t?r.dismiss(void 0,void 0,!1):a.stopPropagation()}}],i.forEach(({eventName:a,callback:c})=>s.addEventListener(a,c)),()=>{i.forEach(({eventName:a,callback:c})=>s.removeEventListener(a,c))}})(i,o,n,r))}}onTriggerChange(){this.configureTriggerInteraction()}onIsOpenChange(t,e){!0===t&&!1===e?this.present():!1===t&&!0===e&&this.dismiss()}connectedCallback(){const{configureTriggerInteraction:t,el:e}=this;(0,L.e)(e),t()}disconnectedCallback(){const{destroyTriggerInteraction:t}=this;t&&t()}componentWillLoad(){this.popoverId=this.el.hasAttribute("id")?this.el.getAttribute("id"):`ion-popover-${this.popoverIndex}`,this.parentPopover=this.el.closest(`ion-popover:not(#${this.popoverId})`),void 0===this.alignment&&(this.alignment="ios"===(0,E.b)(this)?"center":"start")}componentDidLoad(){const{parentPopover:t,isOpen:e}=this;!0===e&&(0,w.r)(()=>this.present()),t&&(0,w.a)(t,"ionPopoverWillDismiss",()=>{this.dismiss(void 0,void 0,!1)})}presentFromTrigger(t,e=!1){var r=this;return(0,A.Z)(function*(){r.focusDescendantOnPresent=e,yield r.present(t),r.focusDescendantOnPresent=!1})()}getDelegate(t=!1){if(this.workingDelegate&&!t)return{delegate:this.workingDelegate,inline:this.inline};const r=this.inline=null!==this.el.parentNode&&!this.hasController;return{inline:r,delegate:this.workingDelegate=r?this.delegate||this.coreDelegate:this.delegate}}present(t){var e=this;return(0,A.Z)(function*(){if(e.presented)return;void 0!==e.currentTransition&&(yield e.currentTransition);const r=Object.assign(Object.assign({},e.componentProps),{popover:e.el}),{inline:o,delegate:i}=e.getDelegate(!0);return e.usersElement=yield(0,T.a)(i,e.el,e.component,["popover-viewport"],r,o),yield(0,m.e)(e.usersElement),e.keyboardEvents||e.configureKeyboardInteraction(),e.configureDismissInteraction(),e.ionMount.emit(),new Promise(n=>{(0,w.r)(()=>{(0,w.r)((0,A.Z)(function*(){e.currentTransition=(0,L.d)(e,"popoverEnter",ge,we,{event:t||e.event,size:e.size,trigger:e.triggerEl,reference:e.reference,side:e.side,align:e.alignment}),yield e.currentTransition,e.currentTransition=void 0,e.focusDescendantOnPresent&&(0,L.j)(e.el,e.el),n()}))})})})()}dismiss(t,e,r=!0){var o=this;return(0,A.Z)(function*(){void 0!==o.currentTransition&&(yield o.currentTransition);const{destroyKeyboardInteraction:i,destroyDismissInteraction:n}=o;r&&o.parentPopover&&o.parentPopover.dismiss(t,e,r),o.currentTransition=(0,L.f)(o,t,e,"popoverLeave",be,ye,o.event);const s=yield o.currentTransition;if(s){i&&(i(),o.destroyKeyboardInteraction=void 0),n&&(n(),o.destroyDismissInteraction=void 0);const{delegate:a}=o.getDelegate();yield(0,T.d)(a,o.usersElement)}return o.currentTransition=void 0,s})()}getParentPopover(){var t=this;return(0,A.Z)(function*(){return t.parentPopover})()}onDidDismiss(){return(0,L.g)(this.el,"ionPopoverDidDismiss")}onWillDismiss(){return(0,L.g)(this.el,"ionPopoverWillDismiss")}render(){const t=(0,E.b)(this),{onLifecycle:e,popoverId:r,parentPopover:o,dismissOnSelect:i,side:n,arrow:s,htmlAttributes:a}=this,c=(0,E.a)("desktop"),f=s&&!o;return(0,l.h)(l.H,Object.assign({"aria-modal":"true","no-router":!0,tabindex:"-1"},a,{style:{zIndex:`${2e4+this.overlayIndex}`},id:r,class:Object.assign(Object.assign({},(0,v.g)(this.cssClass)),{[t]:!0,"popover-translucent":this.translucent,"overlay-hidden":!0,"popover-desktop":c,[`popover-side-${n}`]:!0,"popover-nested":!!o}),onIonPopoverDidPresent:e,onIonPopoverWillPresent:e,onIonPopoverWillDismiss:e,onIonPopoverDidDismiss:e,onIonBackdropTap:this.onBackdropTap}),!o&&(0,l.h)("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop,part:"backdrop"}),(0,l.h)("div",{class:"popover-wrapper ion-overlay-wrapper",onClick:i?()=>this.dismiss():void 0},f&&(0,l.h)("div",{class:"popover-arrow",part:"arrow"}),(0,l.h)("div",{class:"popover-content",part:"content"},(0,l.h)("slot",null))))}get el(){return(0,l.i)(this)}static get watchers(){return{trigger:["onTriggerChange"],triggerAction:["onTriggerChange"],isOpen:["onIsOpenChange"]}}},ke={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"};let De=0;ee.style={ios:':host{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;--offset-x:0px;--offset-y:0px;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}:host(.popover-nested){pointer-events:none}:host(.popover-nested) .popover-wrapper{pointer-events:auto}:host(.overlay-hidden){display:none}.popover-wrapper{opacity:0;z-index:10}.popover-content{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden}:host(.popover-nested.popover-side-left){--offset-x:5px}:host(.popover-nested.popover-side-right){--offset-x:-5px}:host(.popover-nested.popover-side-start){--offset-x:5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-start),:host-context([dir=rtl]).popover-nested.popover-side-start{--offset-x:-5px}:host(.popover-nested.popover-side-end){--offset-x:-5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-end),:host-context([dir=rtl]).popover-nested.popover-side-end{--offset-x:5px}:host{--width:200px;--max-height:90%;--box-shadow:none;--backdrop-opacity:var(--ion-backdrop-opacity, 0.08)}:host(.popover-desktop){--box-shadow:0px 4px 16px 0px rgba(0, 0, 0, 0.12)}.popover-content{border-radius:10px}:host(.popover-desktop) .popover-content{border:0.5px solid var(--ion-color-step-100, #e6e6e6)}.popover-arrow{display:block;position:absolute;width:20px;height:10px;overflow:hidden}.popover-arrow::after{left:3px;top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:"";z-index:10}[dir=rtl] .popover-arrow::after,:host-context([dir=rtl]) .popover-arrow::after{left:unset;right:unset;right:3px}:host(.popover-bottom) .popover-arrow{top:auto;bottom:-10px}:host(.popover-bottom) .popover-arrow::after{top:-6px}:host(.popover-side-left) .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}:host(.popover-side-right) .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}:host(.popover-side-top) .popover-arrow{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host(.popover-side-start) .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}:host-context([dir=rtl]):host(.popover-side-start) .popover-arrow,:host-context([dir=rtl]).popover-side-start .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}:host(.popover-side-end) .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}:host-context([dir=rtl]):host(.popover-side-end) .popover-arrow,:host-context([dir=rtl]).popover-side-end .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.popover-translucent) .popover-content,:host(.popover-translucent) .popover-arrow::after{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}',md:":host{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;--offset-x:0px;--offset-y:0px;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}:host(.popover-nested){pointer-events:none}:host(.popover-nested) .popover-wrapper{pointer-events:auto}:host(.overlay-hidden){display:none}.popover-wrapper{opacity:0;z-index:10}.popover-content{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden}:host(.popover-nested.popover-side-left){--offset-x:5px}:host(.popover-nested.popover-side-right){--offset-x:-5px}:host(.popover-nested.popover-side-start){--offset-x:5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-start),:host-context([dir=rtl]).popover-nested.popover-side-start{--offset-x:-5px}:host(.popover-nested.popover-side-end){--offset-x:-5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-end),:host-context([dir=rtl]).popover-nested.popover-side-end{--offset-x:5px}:host{--width:250px;--max-height:90%;--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}.popover-content{border-radius:4px;-webkit-transform-origin:left top;transform-origin:left top}[dir=rtl] .popover-content,:host-context([dir=rtl]) .popover-content{-webkit-transform-origin:right top;transform-origin:right top}.popover-viewport{-webkit-transition-delay:100ms;transition-delay:100ms}"}},2854:(B,j,h)=>{h.d(j,{c:()=>Y,g:()=>T,h:()=>l,o:()=>L});var A=h(9671);const l=(v,m)=>null!==m.closest(v),Y=(v,m)=>"string"==typeof v&&v.length>0?Object.assign({"ion-color":!0,[`ion-color-${v}`]:!0},m):m,T=v=>{const m={};return(v=>void 0!==v?(Array.isArray(v)?v:v.split(" ")).filter(p=>null!=p).map(p=>p.trim()).filter(p=>""!==p):[])(v).forEach(p=>m[p]=!0),m},w=/^[a-z][a-z0-9+\-.]*:/,L=function(){var v=(0,A.Z)(function*(m,p,Z,U){if(null!=m&&"#"!==m[0]&&!w.test(m)){const R=document.querySelector("ion-router");if(R)return p?.preventDefault(),R.push(m,Z,U)}return!1});return function(p,Z,U,R){return v.apply(this,arguments)}}()}}]);