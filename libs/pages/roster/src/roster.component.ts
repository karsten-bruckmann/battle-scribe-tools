import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import {
  RosterManagementModule,
  rosterSelector,
} from '@battle-scribe-tools/core/roster-management';
import {
  UserSettingsModule,
  UserSettingsService,
} from '@battle-scribe-tools/core/user-settings';
import { AvatarComponent } from '@battle-scribe-tools/feature/avatar';
import { TranslatableComponent } from '@battle-scribe-tools/feature/translatable';
import { routeParam } from '@battle-scribe-tools/utility/angular-utilities';
import { IonicModule } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { switchMap } from 'rxjs';

@Component({
  standalone: true,
  imports: [
    UserSettingsModule,
    CommonModule,
    IonicModule,
    RouterModule,
    TranslatableComponent,
    AvatarComponent,
    RosterManagementModule,
  ],
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.scss'],
})
export class RosterComponent {
  constructor(
    private store$: Store,
    private userSettings: UserSettingsService,
    private activatedRoute: ActivatedRoute
  ) {}

  public roster$ = routeParam('roster-index', this.activatedRoute).pipe(
    switchMap((index) => this.store$.select(rosterSelector(parseInt(index))))
  );

  @ViewChild('modal') public modal?: HTMLIonModalElement;

  public view$ = this.userSettings.listView$;

  public open(): void {
    this.modal?.present();
  }

  public setView(view: 'list' | 'grid'): void {
    this.userSettings.setListView(view);
  }
}
