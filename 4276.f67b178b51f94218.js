"use strict";(self.webpackChunkbattle_cards=self.webpackChunkbattle_cards||[]).push([[4276],{4276:(U,p,s)=>{s.r(p),s.d(p,{RosterComponent:()=>m});var d=s(6895),_=s(4258),f=s(5925),r=s(9653);const h=(0,r.PH)("data-access/user-settings/set",(0,r.Ky)()),x=(0,r.ZF)("user-settings");var C=s(6166);const y=(0,r.Lq)({},(0,r.on)(h,(e,n)=>({...e,[n.key]:n.value})));var t=s(4650);class l{}l.\u0275fac=function(n){return new(n||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[r.Aw.forFeature("user-settings",y,{metaReducers:[(0,C.Wi)("user-settings",{storage:localStorage})]})]});class g{}g.\u0275fac=function(n){return new(n||g)},g.\u0275mod=t.oAB({type:g}),g.\u0275inj=t.cJS({imports:[l]});const O=(0,r.P1)(("list-view",(0,r.P1)(x,n=>n["list-view"])),e=>"string"==typeof e&&function w(e){return["list","grid"].includes(e)}(e)?e:"list");class u{constructor(n){this.store$=n}get listView$(){return this.store$.select(O)}setListView(n){this.store$.dispatch(h({key:"list-view",value:n}))}}u.\u0275fac=function(n){return new(n||u)(t.LFG(r.yh))},u.\u0275prov=t.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"});var Z=s(9024),M=s(8967),S=s(9287),c=s(603),P=s(3900);const Q=["modal"];function J(e,n){if(1&e&&t._UZ(0,"bst-avatar",17),2&e){const o=t.oxw().$implicit;t.Q6J("name",o.title)}}const R=function(e,n){return["detachment",e,"unit",n]};function T(e,n){if(1&e&&(t.TgZ(0,"div",15)(1,"ion-text",12),t.YNc(2,J,1,1,"bst-avatar",16),t.TgZ(3,"h4"),t._UZ(4,"bst-translatable",4),t.qZA()()()),2&e){const o=n.$implicit,i=n.index,a=t.oxw().index,L=t.oxw(2).ngIf;t.Q6J("routerLink",t.WLB(4,R,a,i)),t.xp6(2),t.Q6J("ngIf","grid"===L),t.xp6(2),t.Q6J("text",o.title)("translateOnClick",!1)}}const b=function(e,n){return{list:e,grid:n}};function k(e,n){if(1&e&&(t.TgZ(0,"div",11)(1,"ion-text",12)(2,"h2"),t._UZ(3,"bst-translatable",4),t.qZA()(),t.TgZ(4,"div",13),t.YNc(5,T,5,7,"div",14),t.qZA()()),2&e){const o=n.$implicit,i=t.oxw(2).ngIf;t.xp6(3),t.Q6J("text",o.title)("translateOnClick",!1),t.xp6(1),t.Q6J("ngClass",t.WLB(4,b,"list"===i,"grid"===i)),t.xp6(1),t.Q6J("ngForOf",o.units)}}function A(e,n){if(1&e){const o=t.EpF();t.ynx(0),t.TgZ(1,"ion-header")(2,"ion-toolbar")(3,"ion-buttons",1)(4,"ion-button",2),t._UZ(5,"ion-icon",3),t.qZA()(),t.TgZ(6,"ion-title")(7,"h1"),t._UZ(8,"bst-translatable",4),t.qZA()(),t.TgZ(9,"ion-buttons",5)(10,"ion-button",6),t.NdJ("click",function(){t.CHM(o);const a=t.oxw(2);return t.KtG(a.setView("list"))}),t._UZ(11,"ion-icon",7),t.qZA(),t.TgZ(12,"ion-button",6),t.NdJ("click",function(){t.CHM(o);const a=t.oxw(2);return t.KtG(a.setView("grid"))}),t._UZ(13,"ion-icon",8),t.qZA()()()(),t.TgZ(14,"ion-content",9),t.YNc(15,k,6,7,"div",10),t.qZA(),t.BQk()}if(2&e){const o=n.ngIf,i=t.oxw().ngIf;t.xp6(4),t.Q6J("routerLink","../../"),t.xp6(4),t.Q6J("text",o.title)("translateOnClick",!1),t.xp6(2),t.Q6J("color","list"===i?"primary":"medium"),t.xp6(2),t.Q6J("color","grid"===i?"primary":"medium"),t.xp6(3),t.Q6J("ngForOf",o.detachments)}}function F(e,n){if(1&e&&(t.ynx(0),t.YNc(1,A,16,6,"ng-container",0),t.ALo(2,"async"),t.BQk()),2&e){const o=t.oxw();t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,o.roster$))}}class m{constructor(n,o,i){this.store$=n,this.userSettings=o,this.activatedRoute=i,this.roster$=(0,S.j)("roster-id",this.activatedRoute).pipe((0,P.w)(a=>this.store$.select((0,f.bQ)(a)))),this.view$=this.userSettings.listView$}open(){this.modal?.present()}setView(n){this.userSettings.setListView(n)}}m.\u0275fac=function(n){return new(n||m)(t.Y36(r.yh),t.Y36(u),t.Y36(_.gz))},m.\u0275cmp=t.Xpm({type:m,selectors:[["ng-component"]],viewQuery:function(n,o){if(1&n&&t.Gf(Q,5),2&n){let i;t.iGM(i=t.CRH())&&(o.modal=i.first)}},standalone:!0,features:[t.jDz],decls:2,vars:3,consts:[[4,"ngIf"],["slot","start"],[3,"routerLink"],["name","chevron-back"],[3,"text","translateOnClick"],["slot","end"],[3,"color","click"],["name","list-outline"],["name","grid-outline"],[1,"ion-padding"],["class","detachment",4,"ngFor","ngForOf"],[1,"detachment"],["color","primary"],[1,"units",3,"ngClass"],["class","unit",3,"routerLink",4,"ngFor","ngForOf"],[1,"unit",3,"routerLink"],[3,"name",4,"ngIf"],[3,"name"]],template:function(n,o){1&n&&(t.YNc(0,F,3,3,"ng-container",0),t.ALo(1,"async")),2&n&&t.Q6J("ngIf",t.lcZ(1,1,o.view$))},dependencies:[g,d.ez,d.mk,d.sg,d.O5,d.Ov,c.Pc,c.YG,c.Sm,c.W2,c.Gu,c.gu,c.yW,c.wd,c.sr,c.YI,_.Bz,_.rH,M.s,Z.A,f.hg],styles:["[_nghost-%COMP%]{display:block}.detachment[_ngcontent-%COMP%]:not(:first-child){margin-top:30px}.detachment[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .detachment[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .detachment[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:var(--ion-color-medium)}.detachment[_ngcontent-%COMP%]   .units[_ngcontent-%COMP%]   .unit[_ngcontent-%COMP%]{margin-top:10px;padding-left:10px}.detachment[_ngcontent-%COMP%]   .units.grid[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:space-between}.detachment[_ngcontent-%COMP%]   .units.grid[_ngcontent-%COMP%]   .unit[_ngcontent-%COMP%]{width:33%;padding:10px;text-align:center;display:flex;flex-direction:column;justify-content:space-between}.summary[_ngcontent-%COMP%]{margin-top:30px}"]})}}]);