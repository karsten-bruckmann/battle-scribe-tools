"use strict";(self.webpackChunkbattle_cards=self.webpackChunkbattle_cards||[]).push([[438],{438:(P,m,s)=>{s.r(m),s.d(m,{RosterComponent:()=>a});var r=s(6895),g=s(1545),d=s(1210),_=s(6037),u=s(688),p=s(9024),f=s(8967),c=s(9725),t=s(4650);const x=["modal"];function C(e,n){if(1&e&&t._UZ(0,"bst-avatar",17),2&e){const o=t.oxw().$implicit;t.Q6J("name",o.title)}}const h=function(e,n){return["detachment",e,"unit",n]};function v(e,n){if(1&e&&(t.TgZ(0,"div",15)(1,"ion-text",12),t.YNc(2,C,1,1,"bst-avatar",16),t.TgZ(3,"h4"),t._UZ(4,"bst-translatable",4),t.qZA()()()),2&e){const o=n.$implicit,i=n.index,l=t.oxw().index,w=t.oxw(2).ngIf;t.Q6J("routerLink",t.WLB(4,h,l,i)),t.xp6(2),t.Q6J("ngIf","grid"===w),t.xp6(2),t.Q6J("text",o.title)("translateOnClick",!1)}}const O=function(e,n){return{list:e,grid:n}};function Z(e,n){if(1&e&&(t.TgZ(0,"div",11)(1,"ion-text",12)(2,"h2"),t._UZ(3,"bst-translatable",4),t.qZA()(),t.TgZ(4,"div",13),t.YNc(5,v,5,7,"div",14),t.qZA()()),2&e){const o=n.$implicit,i=t.oxw(2).ngIf;t.xp6(3),t.Q6J("text",o.title)("translateOnClick",!1),t.xp6(1),t.Q6J("ngClass",t.WLB(4,O,"list"===i,"grid"===i)),t.xp6(1),t.Q6J("ngForOf",o.units)}}function M(e,n){if(1&e){const o=t.EpF();t.ynx(0),t.TgZ(1,"ion-header")(2,"ion-toolbar")(3,"ion-buttons",1)(4,"ion-button",2),t._UZ(5,"ion-icon",3),t.qZA()(),t.TgZ(6,"ion-title")(7,"h1"),t._UZ(8,"bst-translatable",4),t.qZA()(),t.TgZ(9,"ion-buttons",5)(10,"ion-button",6),t.NdJ("click",function(){t.CHM(o);const l=t.oxw(2);return t.KtG(l.setView("list"))}),t._UZ(11,"ion-icon",7),t.qZA(),t.TgZ(12,"ion-button",6),t.NdJ("click",function(){t.CHM(o);const l=t.oxw(2);return t.KtG(l.setView("grid"))}),t._UZ(13,"ion-icon",8),t.qZA()()()(),t.TgZ(14,"ion-content",9),t.YNc(15,Z,6,7,"div",10),t.qZA(),t.BQk()}if(2&e){const o=n.ngIf,i=t.oxw().ngIf;t.xp6(4),t.Q6J("routerLink","../../"),t.xp6(4),t.Q6J("text",o.title)("translateOnClick",!1),t.xp6(2),t.Q6J("color","list"===i?"primary":"medium"),t.xp6(2),t.Q6J("color","grid"===i?"primary":"medium"),t.xp6(3),t.Q6J("ngForOf",o.detachments)}}function y(e,n){if(1&e&&(t.ynx(0),t.YNc(1,M,16,6,"ng-container",0),t.ALo(2,"async"),t.BQk()),2&e){const o=t.oxw();t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,o.roster$))}}class a{constructor(n,o,i){this.rosterService=n,this.userSettings=o,this.activatedRoute=i,this.roster$=this.rosterService.getRosterFromRoute$(this.activatedRoute),this.view$=this.userSettings.listView$}open(){this.modal?.present()}setView(n){this.userSettings.setListView(n)}}a.\u0275fac=function(n){return new(n||a)(t.Y36(d.s),t.Y36(_.sF),t.Y36(g.gz))},a.\u0275cmp=t.Xpm({type:a,selectors:[["ng-component"]],viewQuery:function(n,o){if(1&n&&t.Gf(x,5),2&n){let i;t.iGM(i=t.CRH())&&(o.modal=i.first)}},standalone:!0,features:[t.jDz],decls:2,vars:3,consts:[[4,"ngIf"],["slot","start"],[3,"routerLink"],["name","chevron-back"],[3,"text","translateOnClick"],["slot","end"],[3,"color","click"],["name","list-outline"],["name","grid-outline"],[1,"ion-padding"],["class","detachment",4,"ngFor","ngForOf"],[1,"detachment"],["color","primary"],[1,"units",3,"ngClass"],["class","unit",3,"routerLink",4,"ngFor","ngForOf"],[1,"unit",3,"routerLink"],[3,"name",4,"ngIf"],[3,"name"]],template:function(n,o){1&n&&(t.YNc(0,y,3,3,"ng-container",0),t.ALo(1,"async")),2&n&&t.Q6J("ngIf",t.lcZ(1,1,o.view$))},dependencies:[u.zk,_.$l,r.ez,r.mk,r.sg,r.O5,r.Ov,c.Pc,c.YG,c.Sm,c.W2,c.Gu,c.gu,c.yW,c.wd,c.sr,c.YI,g.Bz,g.rH,f.s,p.A],styles:["[_nghost-%COMP%]{display:block}.detachment[_ngcontent-%COMP%]:not(:first-child){margin-top:30px}.detachment[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .detachment[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .detachment[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:var(--ion-color-medium)}.detachment[_ngcontent-%COMP%]   .units[_ngcontent-%COMP%]   .unit[_ngcontent-%COMP%]{margin-top:10px;padding-left:10px}.detachment[_ngcontent-%COMP%]   .units.grid[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:space-between}.detachment[_ngcontent-%COMP%]   .units.grid[_ngcontent-%COMP%]   .unit[_ngcontent-%COMP%]{width:33%;padding:10px;text-align:center;display:flex;flex-direction:column;justify-content:space-between}.summary[_ngcontent-%COMP%]{margin-top:30px}"]})}}]);