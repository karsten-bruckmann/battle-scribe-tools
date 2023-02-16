import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import {
  RosterManagementModule,
  rosterSelector,
} from '@battle-scribe-tools/core/roster-management';
import { AvatarComponent } from '@battle-scribe-tools/feature/avatar';
import { TranslatableComponent } from '@battle-scribe-tools/feature/translatable';
import { routeParam } from '@battle-scribe-tools/utility/angular-utilities';
import { IonicModule } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { LocalStorage } from 'ngx-store';
import { switchMap } from 'rxjs';

@Component({
  standalone: true,
  imports: [
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
  constructor(private store$: Store, private activatedRoute: ActivatedRoute) {}

  public roster$ = routeParam('roster-id', this.activatedRoute).pipe(
    switchMap((rosterId) => this.store$.select(rosterSelector(rosterId)))
  );

  @ViewChild('modal') public modal?: HTMLIonModalElement;

  @LocalStorage('roster-view')
  public view: 'list' | 'grid' = 'list';

  public open(): void {
    this.modal?.present();
  }

  public setView(view: 'list' | 'grid'): void {
    this.view = view;
  }
}
