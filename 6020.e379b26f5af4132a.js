"use strict";(self.webpackChunkbattle_cards=self.webpackChunkbattle_cards||[]).push([[6020],{8967:(k,b,s)=>{s.d(b,{s:()=>C});var p=s(6895),m=s(3573),l=s(603),f=s(1135),x=s(9841),v=s(4004),_=s(4782),t=s(4650),A=s(1481);function w(g,c){if(1&g&&t._UZ(0,"span",4),2&g){const i=t.oxw().ngIf,u=t.oxw();t.Q6J("innerHTML",u.listify(i),t.oJD)}}function n(g,c){if(1&g){const i=t.EpF();t.TgZ(0,"span",5),t.NdJ("click",function(){t.CHM(i),t.oxw();const h=t.MAs(8),T=t.oxw();return t.KtG(T.translateOnClick&&h.present())}),t.qZA()}if(2&g){const i=t.oxw().ngIf,u=t.oxw();t.Q6J("innerHTML",u.listify(i),t.oJD)}}function F(g,c){if(1&g){const i=t.EpF();t.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",6)(3,"ion-button",7),t.NdJ("click",function(){t.CHM(i),t.oxw();const h=t.MAs(8);return t.KtG(h.dismiss())}),t._uU(4,"abbrechen"),t.qZA()(),t.TgZ(5,"ion-title"),t._uU(6,"\xdcbersetzen"),t.qZA(),t.TgZ(7,"ion-buttons",8)(8,"ion-button",9),t.NdJ("click",function(){t.CHM(i);const h=t.MAs(15);t.oxw();const T=t.MAs(8),y=t.oxw();return y.translate(y.original,h.value),t.KtG(T.dismiss())}),t._uU(9,"OK"),t.qZA()()()(),t.TgZ(10,"ion-content",10)(11,"ion-item",11),t._uU(12),t.qZA(),t.TgZ(13,"ion-item",11),t._UZ(14,"ion-textarea",12,13),t.qZA()()}if(2&g){const i=t.oxw().ngIf,u=t.oxw();t.xp6(8),t.Q6J("strong",!0),t.xp6(4),t.hij(" ",u.original,""),t.xp6(2),t.Q6J("autoGrow",!0)("value",i)}}function L(g,c){if(1&g&&(t.ynx(0),t.YNc(1,w,1,1,"span",1),t.ALo(2,"async"),t.ALo(3,"async"),t.YNc(4,n,1,1,"span",2),t.ALo(5,"async"),t.ALo(6,"async"),t.TgZ(7,"ion-modal",null,3),t.YNc(9,F,16,4,"ng-template"),t.qZA(),t.BQk()),2&g){const i=t.oxw();t.xp6(1),t.Q6J("ngIf",!1===t.lcZ(2,2,i.editable$)||!1===t.lcZ(3,4,i.editable$)),t.xp6(3),t.Q6J("ngIf",!0===t.lcZ(5,6,i.editable$)&&!0===t.lcZ(6,8,i.editable$))}}class C{constructor(c,i){this.translationService=c,this.domSanitizer=i,this.translateOnClick=!0,this.original="",this.hasTextChars$=new f.X(!1),this.editable$=(0,x.a)([this.translationService.translationsEditMode$,this.translationService.translatable$,this.hasTextChars$]).pipe((0,v.U)(([u,h,T])=>u&&h&&T))}set text(c){this.original=c,this.hasTextChars$.next(!!c.match("[a-zA-Z]+"))}ngOnChanges(c){const i=c.text;i&&(this.translation$=this.translationService.getTranslation(i.currentValue).pipe((0,_.d)(1)))}translate(c,i){this.translationService.translate(c,i||"")}listify(c){let i=c;return[...c.matchAll(/(?:(?:^|\n)(?:- [^\n]+(?:\n|$)*)+)/gm)].forEach(u=>{i=i.replace(u[0],`<ul>${u[0].replaceAll(/(?:^|\n)- (.*)(?:\n|$)/gm,"<li>$1</li>")}</ul>`)}),this.domSanitizer.bypassSecurityTrustHtml(i)}}C.\u0275fac=function(c){return new(c||C)(t.Y36(m.fA),t.Y36(A.H7))},C.\u0275cmp=t.Xpm({type:C,selectors:[["bst-translatable"]],inputs:{text:"text",translateOnClick:"translateOnClick"},standalone:!0,features:[t.TTD,t.jDz],decls:2,vars:3,consts:[[4,"ngIf"],[3,"innerHTML",4,"ngIf"],[3,"innerHTML","click",4,"ngIf"],["popover",""],[3,"innerHTML"],[3,"innerHTML","click"],["slot","start"],[3,"click"],["slot","end"],[3,"strong","click"],[1,"ion-padding"],["lines","none"],[3,"autoGrow","value"],["ta",""]],template:function(c,i){1&c&&(t.YNc(0,L,10,10,"ng-container",0),t.ALo(1,"async")),2&c&&t.Q6J("ngIf",t.lcZ(1,1,i.translation$))},dependencies:[p.ez,p.O5,p.Ov,l.Pc,l.YG,l.Sm,l.W2,l.Gu,l.Ie,l.g2,l.wd,l.sr,l.ki,l.j9],styles:["[_nghost-%COMP%]{display:inline-block}span[_ngcontent-%COMP%]{white-space:pre-wrap}ion-item[_ngcontent-%COMP%]{white-space:pre-wrap}ion-textarea[_ngcontent-%COMP%]{margin-top:10px;padding:10px;border:1px solid var(--ion-color-medium);color:1px solid var(--ion-color-dark);font-family:monospace}"]})},6020:(k,b,s)=>{s.r(b),s.d(b,{FlashCardLessonComponent:()=>M});var p=s(6895),m=s(4258),l=s(6248),f=s(8967),x=s(9300),_=s(603),t=s(4004),A=s(3900),w=s(4782),n=s(4650),F=s(9653);function L(o,e){if(1&o&&(n.ynx(0),n.TgZ(1,"ion-title")(2,"h1"),n._uU(3),n.qZA()(),n.BQk()),2&o){const a=e.ngIf;n.xp6(3),n.Oqu(a.name)}}function C(o,e){if(1&o&&(n.TgZ(0,"h1"),n._UZ(1,"bst-translatable",9),n.qZA()),2&o){const a=e.$implicit;n.xp6(1),n.Q6J("text",a)}}function g(o,e){if(1&o&&(n.TgZ(0,"h2"),n._UZ(1,"bst-translatable",9),n.qZA()),2&o){const a=e.$implicit;n.xp6(1),n.Q6J("text",a||"")}}function c(o,e){if(1&o){const a=n.EpF();n.TgZ(0,"ion-buttons")(1,"ion-button",12),n.NdJ("click",function(){n.CHM(a);const d=n.oxw(4);return n.KtG(d.answerHidden=!1)}),n._uU(2,"L\xf6sung"),n.qZA(),n.TgZ(3,"ion-button",12),n.NdJ("click",function(){n.CHM(a);const d=n.oxw(3).ngIf,Z=n.oxw();return n.KtG(Z.skipped(d))}),n._uU(4,"\xdcberspringen"),n.qZA()()}}function i(o,e){if(1&o){const a=n.EpF();n.TgZ(0,"ion-buttons")(1,"ion-button",12),n.NdJ("click",function(){n.CHM(a);const d=n.oxw(3).ngIf,Z=n.oxw();return n.KtG(Z.notKnown(d))}),n._uU(2,"wusste ich nicht"),n.qZA(),n.TgZ(3,"ion-button",12),n.NdJ("click",function(){n.CHM(a);const d=n.oxw(3).ngIf,Z=n.oxw();return n.KtG(Z.known(d))}),n._uU(4,"wusste ich"),n.qZA()()}}const u=function(o){return{hidden:o}};function h(o,e){if(1&o&&(n.ynx(0),n.TgZ(1,"ion-content")(2,"p",7),n._uU(3),n.qZA(),n.TgZ(4,"ion-card",8)(5,"ion-card-content")(6,"h1"),n._UZ(7,"bst-translatable",9),n._uU(8,": "),n.qZA(),n.YNc(9,C,2,1,"h1",10),n.qZA()(),n.TgZ(10,"ion-card",11)(11,"ion-card-content"),n.YNc(12,g,2,1,"h2",10),n.qZA()()(),n.TgZ(13,"ion-footer")(14,"ion-toolbar"),n.YNc(15,c,5,0,"ion-buttons",3),n.YNc(16,i,5,0,"ion-buttons",3),n.qZA()(),n.BQk()),2&o){const a=n.oxw().ngIf,r=n.oxw().ngIf,d=n.oxw();n.xp6(3),n.lnq(" Box ",r.box+1,"/",a.boxContent.length," | Noch ",r.remainingCards," Karten "),n.xp6(4),n.Q6J("text",r.currentCard.question),n.xp6(2),n.Q6J("ngForOf",r.currentCard.rules),n.xp6(1),n.Q6J("ngClass",n.VKq(9,u,d.answerHidden)),n.xp6(2),n.Q6J("ngForOf",r.currentCard.answers),n.xp6(3),n.Q6J("ngIf",d.answerHidden),n.xp6(1),n.Q6J("ngIf",!d.answerHidden)}}function T(o,e){if(1&o){const a=n.EpF();n.TgZ(0,"ion-button",12),n.NdJ("click",function(){n.CHM(a);const d=n.oxw(4);return n.KtG(d.continue())}),n._uU(1,"weiter"),n.qZA()}}function y(o,e){if(1&o&&(n.TgZ(0,"ion-content")(1,"div",13)(2,"div",14),n._UZ(3,"ion-icon",15),n.qZA(),n.TgZ(4,"div")(5,"ion-button",1),n._uU(6,"zur\xfcck"),n.qZA(),n.YNc(7,T,2,0,"ion-button",16),n.qZA()()()),2&o){const a=n.oxw(2).ngIf;n.xp6(5),n.Q6J("routerLink","../../"),n.xp6(2),n.Q6J("ngIf",a)}}function I(o,e){if(1&o&&(n.ynx(0),n.YNc(1,h,17,11,"ng-container",4),n.YNc(2,y,8,2,"ng-template",null,6,n.W1O),n.BQk()),2&o){const a=n.MAs(3),r=n.oxw(2);n.xp6(1),n.Q6J("ngIf",!r.isFinished)("ngIfElse",a)}}function O(o,e){if(1&o&&(n.ynx(0),n.YNc(1,I,4,2,"ng-container",3),n.ALo(2,"async"),n.BQk()),2&o){const a=n.oxw();n.xp6(1),n.Q6J("ngIf",n.lcZ(2,1,a.deck$))}}function J(o,e){1&o&&(n.TgZ(0,"ion-content")(1,"p",7),n._uU(2,"Das wars. Du wei\xdft alles. Wirklich alles!"),n.qZA(),n.TgZ(3,"div",13)(4,"div",14),n._UZ(5,"ion-icon",15),n.qZA(),n.TgZ(6,"div")(7,"ion-button",1),n._uU(8,"zur\xfcck"),n.qZA()()()()),2&o&&(n.xp6(7),n.Q6J("routerLink","../../"))}const $=function(){return["/"]};class M{constructor(e,a){this.activatedRoute=e,this.store$=a,this.session$=this.activatedRoute.paramMap.pipe((0,t.U)(r=>r.get("deck-id")),(0,x.h)(r=>null!==r),(0,A.w)(r=>this.store$.select((0,l.is)(r))),(0,w.d)({refCount:!0,bufferSize:1})),this.deck$=this.session$.pipe(o=>o.pipe((0,x.h)(e=>!!e)),(0,A.w)(r=>this.store$.select(l.Bx).pipe((0,t.U)(d=>d.find(Z=>Z.deckId===r.deckId))))),this.answerHidden=!0,this.isFinished=!1}known(e){this.answerHidden=!0,1===e.remainingCards&&(this.isFinished=!0),this.store$.dispatch((0,l.p0)({session:e}))}notKnown(e){this.answerHidden=!0,1===e.remainingCards&&(this.isFinished=!0),this.store$.dispatch((0,l.Gy)({session:e}))}skipped(e){this.answerHidden=!0,1===e.remainingCards&&(this.isFinished=!0),this.store$.dispatch((0,l.t4)({session:e}))}continue(){this.isFinished=!1}}M.\u0275fac=function(e){return new(e||M)(n.Y36(m.gz),n.Y36(F.yh))},M.\u0275cmp=n.Xpm({type:M,selectors:[["ng-component"]],standalone:!0,features:[n.jDz],decls:11,vars:9,consts:[["slot","start"],[3,"routerLink"],["name","chevron-back"],[4,"ngIf"],[4,"ngIf","ngIfElse"],["done",""],["finished",""],[1,"session-info"],[1,"question"],[3,"text"],[4,"ngFor","ngForOf"],[3,"ngClass"],[3,"click"],[1,"finished"],[1,"icon"],["color","success","name","checkmark-circle"],[3,"click",4,"ngIf"]],template:function(e,a){if(1&e&&(n.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0)(3,"ion-button",1),n._UZ(4,"ion-icon",2),n.qZA()(),n.YNc(5,L,4,1,"ng-container",3),n.ALo(6,"async"),n.qZA()(),n.YNc(7,O,3,3,"ng-container",4),n.ALo(8,"async"),n.YNc(9,J,9,1,"ng-template",null,5,n.W1O)),2&e){const r=n.MAs(10);n.xp6(3),n.Q6J("routerLink",n.DdM(8,$)),n.xp6(2),n.Q6J("ngIf",n.lcZ(6,4,a.deck$)),n.xp6(2),n.Q6J("ngIf",n.lcZ(8,6,a.session$))("ngIfElse",r)}},dependencies:[p.ez,p.mk,p.sg,p.O5,p.Ov,l.W8,m.Bz,m.rH,_.Pc,_.YG,_.Sm,_.PM,_.FN,_.W2,_.fr,_.Gu,_.gu,_.wd,_.sr,_.YI,f.s],styles:["ion-footer[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]{justify-content:space-evenly}ion-card[_ngcontent-%COMP%]{transition:all .4s;max-height:90%}ion-card.hidden[_ngcontent-%COMP%]{transition:none;overflow:scroll;max-height:0px}ion-card.question[_ngcontent-%COMP%]{text-align:center}ion-card.question[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]:first-child{margin-bottom:20px}.finished[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;justify-content:space-evenly;flex-direction:column;align-items:center;--padding-start: 20%;--padding-end: 20%}.finished[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly}.finished[_ngcontent-%COMP%]   div.icon[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{width:100px;height:100px}ion-footer[_ngcontent-%COMP%]{padding-bottom:50px}.session-info[_ngcontent-%COMP%]{text-align:center;font-style:italic;color:var(--ion-color-medium)}"]})},4782:(k,b,s)=>{s.d(b,{d:()=>l});var p=s(4707),m=s(3099);function l(f,x,v){let _,t=!1;return f&&"object"==typeof f?({bufferSize:_=1/0,windowTime:x=1/0,refCount:t=!1,scheduler:v}=f):_=f??1/0,(0,m.B)({connector:()=>new p.t(_,x,v),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:t})}}}]);