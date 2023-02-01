"use strict";(self.webpackChunkbattle_cards=self.webpackChunkbattle_cards||[]).push([[389],{389:(F,p,a)=>{a.r(p),a.d(p,{MainMenuComponent:()=>g});var u=a(9671),_=a(6895),r=a(433),f=a(1545),d=a(2721),h=a(9652),C=a(3573),i=a(603),b=a(4004),n=a(4650);class m{constructor(e,t){this.translationsService=e,this.actionSheetCtrl=t,this.flags=this.translationsService.languages,this.selectedFlag$=this.translationsService.selectedLanguage$.pipe((0,b.U)(o=>this.flags[o].flag))}selectLanguage(){var e=this;return(0,u.Z)(function*(){(yield e.actionSheetCtrl.create({header:"Sprache w\xe4hlen",buttons:Object.keys(e.flags).map(o=>({text:e.flags[o].flag+" "+e.flags[o].name,handler:()=>{e.translationsService.setLanguage(o)}}))})).present()})()}exportTranslations(){this.translationsService.export()}importTranslations(e){var t=this;return(0,u.Z)(function*(){const o=e.target,c=o.files;if(!o||!c)return;const l=c[0];l&&t.translationsService.import(l)})()}}m.\u0275fac=function(e){return new(e||m)(n.Y36(C.fA),n.Y36(i.BX))},m.\u0275cmp=n.Xpm({type:m,selectors:[["bst-translation-settings"]],standalone:!0,features:[n.jDz],decls:27,vars:6,consts:[[3,"click"],["name","save-outline"],["name","folder-open-outline"],["type","file","accept","application/json",1,"ion-hide",3,"change"],["i",""],[3,"checked","ionChange"],["tt",""]],template:function(e,t){if(1&e){const o=n.EpF();n.TgZ(0,"ion-footer")(1,"ion-toolbar")(2,"ion-title"),n._uU(3,"\xdcbersetzen"),n.qZA()(),n.TgZ(4,"ion-toolbar")(5,"ion-buttons")(6,"ion-button",0),n.NdJ("click",function(){return t.selectLanguage()}),n._uU(7),n.ALo(8,"async"),n.qZA(),n.TgZ(9,"span")(10,"ion-button",0),n.NdJ("click",function(){return t.exportTranslations()}),n._UZ(11,"ion-icon",1),n.qZA(),n.TgZ(12,"ion-label"),n._uU(13,"Export"),n.qZA()(),n.TgZ(14,"span")(15,"ion-button",0),n.NdJ("click",function(){n.CHM(o);const l=n.MAs(20);return n.KtG(l.click())}),n._UZ(16,"ion-icon",2),n.qZA(),n.TgZ(17,"ion-label"),n._uU(18,"Import"),n.qZA(),n.TgZ(19,"input",3,4),n.NdJ("change",function(l){return t.importTranslations(l)}),n.qZA()(),n.TgZ(21,"span")(22,"ion-toggle",5,6),n.NdJ("ionChange",function(){n.CHM(o);const l=n.MAs(23);return n.KtG(t.translationsService.setTranslationsEditMode(l.checked))}),n.ALo(24,"async"),n.qZA(),n.TgZ(25,"ion-label"),n._uU(26,"Bearbeiten"),n.qZA()()()()()}2&e&&(n.xp6(7),n.hij(" ",n.lcZ(8,2,t.selectedFlag$)," "),n.xp6(15),n.Q6J("checked",n.lcZ(24,4,t.translationsService.translationsEditMode$)))},dependencies:[_.ez,_.Ov,i.Pc,i.YG,i.Sm,i.fr,i.gu,i.Q$,i.wd,i.ho,i.sr,i.w],styles:["ion-footer[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]:last-of-type{padding-bottom:50px}ion-footer[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between;align-items:flex-start}ion-footer[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between}"]});var T=a(3905);const A=["modal"];function k(s,e){if(1&s){const t=n.EpF();n.TgZ(0,"ion-button",17),n.NdJ("click",function(){n.CHM(t);const c=n.oxw().index,l=n.oxw();return n.KtG(l.updateFile(c))}),n._UZ(1,"ion-icon",19),n.qZA()}}const M=function(s){return["roster",s]};function U(s,e){if(1&s){const t=n.EpF();n.TgZ(0,"ion-item")(1,"ion-label",14),n._UZ(2,"ion-icon",1),n._uU(3),n.qZA(),n.TgZ(4,"ion-buttons",15),n.YNc(5,k,2,0,"ion-button",16),n.TgZ(6,"ion-button",17),n.NdJ("click",function(){const l=n.CHM(t).index,Z=n.oxw();return n.KtG(Z.deleteRoster(l))}),n._UZ(7,"ion-icon",18),n.qZA()()()}if(2&s){const t=e.$implicit,o=e.index;n.xp6(1),n.Q6J("routerLink",n.VKq(3,M,o)),n.xp6(2),n.hij(" ",t.title," "),n.xp6(2),n.Q6J("ngIf",t.canUpdate)}}function x(s,e){if(1&s&&(n.TgZ(0,"div",21),n._UZ(1,"ion-icon",22),n.TgZ(2,"ion-badge",23),n._uU(3),n.qZA()()),2&s){const t=e.$implicit,o=e.index,c=n.oxw().$implicit;n.xp6(1),n.Q6J("name",0===t?"file-tray-outline":"file-tray-full-outline"),n.xp6(1),n.Q6J("color",c.boxContent.length-1===o?"success":"medium"),n.xp6(1),n.Oqu(t)}}const q=function(s){return["flash-card-lesson",s]};function v(s,e){if(1&s){const t=n.EpF();n.TgZ(0,"ion-item")(1,"div",14),n._uU(2),n.qZA(),n.YNc(3,x,4,3,"div",20),n.TgZ(4,"ion-button",9),n.NdJ("click",function(){const l=n.CHM(t).index,Z=n.oxw();return n.KtG(Z.deleteDeck(l))}),n._UZ(5,"ion-icon",18),n.qZA()()}if(2&s){const t=e.$implicit,o=e.index;n.xp6(1),n.Q6J("routerLink",n.VKq(3,q,o)),n.xp6(1),n.Oqu(t.name),n.xp6(1),n.Q6J("ngForOf",t.boxContent)}}function N(s,e){if(1&s){const t=n.EpF();n.TgZ(0,"ion-select-option",49),n.NdJ("click",function(){n.CHM(t),n.oxw(2);const c=n.MAs(33);return n.KtG(c.isOpen=!1)}),n._uU(1),n.qZA()}if(2&s){const t=e.$implicit;n.Q6J("value",e.index),n.xp6(1),n.Oqu(t.title)}}function w(s,e){if(1&s){const t=n.EpF();n.TgZ(0,"ion-content")(1,"ion-header")(2,"ion-toolbar")(3,"ion-title")(4,"h1"),n._uU(5,"Deck erstellen"),n.qZA()(),n.TgZ(6,"ion-buttons",15)(7,"ion-button",24),n.NdJ("click",function(){n.CHM(t),n.oxw();const c=n.MAs(33);return n.KtG(c.isOpen=!1)}),n._UZ(8,"ion-icon",25),n.qZA()()()(),n._UZ(9,"ion-list"),n.TgZ(10,"ion-list",26)(11,"ion-item")(12,"ion-label"),n._uU(13,"Roster"),n.qZA(),n.TgZ(14,"ion-select",27),n._UZ(15,"ion-select-option"),n.YNc(16,N,2,2,"ion-select-option",28),n.ALo(17,"async"),n.qZA()(),n.TgZ(18,"ion-item")(19,"h4"),n._uU(20,"Einheiten-Profile"),n.qZA()(),n.ynx(21,29),n.TgZ(22,"ion-item")(23,"ion-label"),n._uU(24,"Atacken (A)"),n.qZA(),n._UZ(25,"ion-checkbox",30),n.qZA(),n.TgZ(26,"ion-item")(27,"ion-label"),n._uU(28,"Ballistische F\xe4higkeit (BF)"),n.qZA(),n._UZ(29,"ion-checkbox",31),n.qZA(),n.TgZ(30,"ion-item")(31,"ion-label"),n._uU(32,"Moralwert (MW)"),n.qZA(),n._UZ(33,"ion-checkbox",32),n.qZA(),n.TgZ(34,"ion-item")(35,"ion-label"),n._uU(36,"R\xfcstungswert (RW)"),n.qZA(),n._UZ(37,"ion-checkbox",33),n.qZA(),n.TgZ(38,"ion-item")(39,"ion-label"),n._uU(40,"Wiederstand (W)"),n.qZA(),n._UZ(41,"ion-checkbox",34),n.qZA(),n.TgZ(42,"ion-item")(43,"ion-label"),n._uU(44,"Kampfgeschick (KG)"),n.qZA(),n._UZ(45,"ion-checkbox",35),n.qZA(),n.TgZ(46,"ion-item")(47,"ion-label"),n._uU(48,"Lebenspunkte (LP)"),n.qZA(),n._UZ(49,"ion-checkbox",36),n.qZA(),n.TgZ(50,"ion-item")(51,"ion-label"),n._uU(52,"Bewegung (B)"),n.qZA(),n._UZ(53,"ion-checkbox",37),n.qZA(),n.TgZ(54,"ion-item")(55,"ion-label"),n._uU(56,"St\xe4rke (S)"),n.qZA(),n._UZ(57,"ion-checkbox",38),n.qZA(),n.BQk(),n.ynx(58,39),n.TgZ(59,"ion-item")(60,"h4"),n._uU(61,"Waffen-Profile"),n.qZA()(),n.TgZ(62,"ion-item")(63,"ion-label"),n._uU(64,"F\xe4higkeiten"),n.qZA(),n._UZ(65,"ion-checkbox",40),n.qZA(),n.TgZ(66,"ion-item")(67,"ion-label"),n._uU(68,"Durchschlag (DS)"),n.qZA(),n._UZ(69,"ion-checkbox",41),n.qZA(),n.TgZ(70,"ion-item")(71,"ion-label"),n._uU(72,"Schadenswert (SW)"),n.qZA(),n._UZ(73,"ion-checkbox",42),n.qZA(),n.TgZ(74,"ion-item")(75,"ion-label"),n._uU(76,"Reichweite"),n.qZA(),n._UZ(77,"ion-checkbox",43),n.qZA(),n.TgZ(78,"ion-item")(79,"ion-label"),n._uU(80,"St\xe4rke (S)"),n.qZA(),n._UZ(81,"ion-checkbox",38),n.qZA(),n.TgZ(82,"ion-item")(83,"ion-label"),n._uU(84,"Typ"),n.qZA(),n._UZ(85,"ion-checkbox",44),n.qZA(),n.TgZ(86,"ion-item")(87,"h4"),n._uU(88,"Sonstiges"),n.qZA()(),n.BQk(),n.TgZ(89,"ion-item")(90,"ion-label"),n._uU(91,"Regeln"),n.qZA(),n._UZ(92,"ion-checkbox",45),n.qZA(),n.TgZ(93,"ion-item")(94,"ion-label"),n._uU(95,"Einheiten-Regeln"),n.qZA(),n._UZ(96,"ion-checkbox",46),n.qZA(),n.TgZ(97,"ion-item")(98,"h4"),n._uU(99,"Einstellungen"),n.qZA()(),n.TgZ(100,"ion-item")(101,"ion-label"),n._uU(102,"Karten-Boxen"),n.qZA(),n._UZ(103,"ion-input",47),n.qZA(),n.TgZ(104,"ion-button",48),n.NdJ("click",function(){n.CHM(t);const c=n.oxw(),l=n.MAs(33);return c.createDeck(),n.KtG(l.isOpen=!1)}),n._uU(105,"Deck erstellen"),n.qZA()()()}if(2&s){const t=n.oxw();n.xp6(10),n.Q6J("formGroup",t.settingsForm),n.xp6(6),n.Q6J("ngForOf",n.lcZ(17,2,t.rosterList$))}}class g{constructor(e,t){this.rostersService=e,this.learningService=t,this.rosterList$=this.rostersService.list$,this.lessons$=this.learningService.lessons$,this.rosterForNewDeck=null,this.settingsForm=new r.cw({roster:new r.NI(0),name:new r.NI(""),boxes:new r.NI(3),rules:new r.NI(!0),unitRules:new r.NI(!0),unitProfiles:new r.cw({attacks:new r.NI(!0),ballisticSkill:new r.NI(!0),leadership:new r.NI(!0),movement:new r.NI(!0),save:new r.NI(!0),strength:new r.NI(!0),toughness:new r.NI(!0),weaponSkill:new r.NI(!0),wounds:new r.NI(!0)}),weaponProfiles:new r.cw({abilities:new r.NI(!0),armourPenetration:new r.NI(!0),damage:new r.NI(!0),range:new r.NI(!0),strength:new r.NI(!0),type:new r.NI(!0)})})}saveFile(e){var t=this;return(0,u.Z)(function*(){const o=e.target,c=o.files;if(!o||!c)return;const l=c[0];l&&(yield t.rostersService.addRoster(l))})()}linkFile(e){var t=this;return(0,u.Z)(function*(){yield t.rostersService.addRosterFromUrl(e)})()}updateFile(e){var t=this;return(0,u.Z)(function*(){yield t.rostersService.updateRoster(e)})()}deleteRoster(e){this.rostersService.deleteRoster(e)}deleteDeck(e){this.learningService.deleteDeck(e)}createDeck(){var e=this;return(0,u.Z)(function*(){const t=yield(0,T.z)(e.rosterList$);e.learningService.createFlashCardDeck(e.settingsForm.value.roster||0,{...e.settingsForm.value,name:t[e.settingsForm.value.roster||0].title})})()}}g.\u0275fac=function(e){return new(e||g)(n.Y36(h.s),n.Y36(d.H))},g.\u0275cmp=n.Xpm({type:g,selectors:[["ng-component"]],viewQuery:function(e,t){if(1&e&&n.Gf(A,5),2&e){let o;n.iGM(o=n.CRH())&&(t.modal=o.first)}},standalone:!0,features:[n.jDz],decls:35,vars:8,consts:[[1,"add-roster"],["color","primary","slot","start","name","document-outline"],["fill","outline",3,"click"],["type","file",1,"ion-hide",3,"change"],["f",""],["type","text"],["u",""],["slot","end","fill","outline",3,"click"],[4,"ngFor","ngForOf"],["slot","end","fill","clear",3,"click"],["name","add"],[3,"isOpen"],["form",""],[4,"ngIf"],[3,"routerLink"],["slot","end"],["fill","clear",3,"click",4,"ngIf"],["fill","clear",3,"click"],["color","primary","name","trash"],["color","primary","name","reload"],["slot","end","class","boxes",4,"ngFor","ngForOf"],["slot","end",1,"boxes"],[3,"name"],[3,"color"],[3,"click"],["name","close"],[3,"formGroup"],["formControlName","roster"],[3,"value","click",4,"ngFor","ngForOf"],["formGroupName","unitProfiles"],["formControlName","attacks"],["formControlName","ballisticSkill"],["formControlName","leadership"],["formControlName","save"],["formControlName","toughness"],["formControlName","weaponSkill"],["formControlName","wounds"],["formControlName","movement"],["formControlName","strength"],["formGroupName","weaponProfiles"],["formControlName","abilities"],["formControlName","armourPenetration"],["formControlName","damage"],["formControlName","range"],["formControlName","type"],["formControlName","rules"],["formControlName","unitRules"],["formControlName","boxes","type","number","inputmode","numeric","value","3"],["expand","full",3,"click"],[3,"value","click"]],template:function(e,t){if(1&e){const o=n.EpF();n.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),n._uU(3,"BattleScribe Tools"),n.qZA()()(),n.TgZ(4,"ion-content")(5,"ion-item-divider"),n._uU(6,"Roster"),n.qZA(),n.TgZ(7,"ion-item",0)(8,"ion-label"),n._UZ(9,"ion-icon",1),n._uU(10," Neue Datei (exportierte .rosz Datei) "),n.qZA(),n.TgZ(11,"ion-button",2),n.NdJ("click",function(){n.CHM(o);const l=n.MAs(14);return n.KtG(l.click())}),n._uU(12,"w\xe4hlen..."),n.qZA(),n.TgZ(13,"input",3,4),n.NdJ("change",function(l){n.CHM(o);const Z=n.MAs(14);return t.saveFile(l),n.KtG(Z.value="")}),n.qZA()(),n.TgZ(15,"ion-item",0)(16,"ion-label"),n._UZ(17,"ion-icon",1),n._uU(18," URL laden "),n.qZA(),n._UZ(19,"input",5,6),n.TgZ(21,"ion-button",7),n.NdJ("click",function(){n.CHM(o);const l=n.MAs(20);return n.KtG(t.linkFile(l.value))}),n._uU(22,"laden..."),n.qZA()(),n.YNc(23,U,8,5,"ion-item",8),n.ALo(24,"async"),n.TgZ(25,"ion-item-divider"),n._uU(26," Flash Card Decks "),n.TgZ(27,"ion-button",9),n.NdJ("click",function(){n.CHM(o);const l=n.MAs(33);return n.KtG(l.isOpen=!0)}),n._UZ(28,"ion-icon",10),n.qZA()(),n.YNc(29,v,6,5,"ion-item",8),n.ALo(30,"async"),n.qZA(),n._UZ(31,"bst-translation-settings"),n.TgZ(32,"ion-modal",11,12),n.YNc(34,w,106,4,"ion-content",13),n.qZA()}2&e&&(n.xp6(23),n.Q6J("ngForOf",n.lcZ(24,4,t.rosterList$)),n.xp6(6),n.Q6J("ngForOf",n.lcZ(30,6,t.lessons$)),n.xp6(3),n.Q6J("isOpen",!1),n.xp6(2),n.Q6J("ngIf",null!==t.rosterForNewDeck))},dependencies:[_.ez,_.sg,_.O5,_.Ov,f.Bz,f.rH,i.Pc,i.yp,i.YG,i.Sm,i.nz,i.W2,i.Gu,i.gu,i.pK,i.Ie,i.rH,i.Q$,i.q_,i.t9,i.n0,i.wd,i.sr,i.ki,i.w,i.as,i.QI,i.YI,h.$,d.W,m,r.UX,r.JJ,r.JL,r.sg,r.u,r.x0],styles:[".boxes[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-right:5px;height:20px}ion-item-divider[_ngcontent-%COMP%]:not(:first-of-type){margin-top:50px}.add-roster[_ngcontent-%COMP%]{--background: var(--ion-color-light)}"]})}}]);