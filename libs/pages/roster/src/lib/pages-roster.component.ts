import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { RosterService } from '@battle-scribe-tools/core/roster';
import {
  UserSettingsModule,
  UserSettingsService,
} from '@battle-scribe-tools/core/user-settings';
import { RostersModule } from '@battle-scribe-tools/data-access/rosters';
import { AvatarComponent } from '@battle-scribe-tools/feature/avatar';
import { FeatureTranslatableComponent } from '@battle-scribe-tools/feature/translatable';
import { IonicModule } from '@ionic/angular';

@Component({
  standalone: true,
  imports: [
    RostersModule,
    UserSettingsModule,
    CommonModule,
    IonicModule,
    RouterModule,
    FeatureTranslatableComponent,
    AvatarComponent,
  ],
  templateUrl: './pages-roster.component.html',
  styleUrls: ['./pages-roster.component.scss'],
})
export class PagesRosterComponent {
  constructor(
    private rosterService: RosterService,
    private userSettings: UserSettingsService,
    private activatedRoute: ActivatedRoute
  ) {}

  public roster$ = this.rosterService.getRosterFromRoute$(this.activatedRoute);

  @ViewChild('modal') public modal?: HTMLIonModalElement;

  public view$ = this.userSettings.listView$;

  public open(): void {
    this.modal?.present();
  }

  public setView(view: 'list' | 'grid'): void {
    this.userSettings.setListView(view);
  }
}
