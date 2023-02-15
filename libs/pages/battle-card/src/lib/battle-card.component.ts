import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import {
  BattleCardsModule,
  detachmentSelector,
  unitSelector,
  Weapon,
} from '@battle-scribe-tools/core/battle-cards';
import {
  RosterManagementModule,
  rosterSelector,
} from '@battle-scribe-tools/core/roster-management';
import { AvatarComponent } from '@battle-scribe-tools/feature/avatar';
import { TranslatableComponent } from '@battle-scribe-tools/feature/translatable';
import {
  routeParam,
  routeParams,
} from '@battle-scribe-tools/utility/angular-utilities';
import { IonicModule } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { combineLatest, map, switchMap } from 'rxjs';
import { CleanEmptyPipe } from './pipes/clean-empty.pipe';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    RosterManagementModule,
    TranslatableComponent,
    AvatarComponent,
    CleanEmptyPipe,
    RouterModule,
    BattleCardsModule,
  ],
  providers: [CleanEmptyPipe],
  templateUrl: './battle-card.component.html',
  styleUrls: ['./battle-card.component.scss'],
})
export class BattleCardComponent {
  constructor(
    private store$: Store,
    private cleanEmptyPipe: CleanEmptyPipe,
    private activatedRoute: ActivatedRoute
  ) {}

  public roster$ = routeParam('roster-id', this.activatedRoute).pipe(
    switchMap((rosterId) => this.store$.select(rosterSelector(rosterId)))
  );

  public detachment$ = routeParams(
    ['roster-id', 'detachment-index'],
    this.activatedRoute
  ).pipe(
    switchMap(([rosterId, detachmentIndex]) =>
      this.store$.select(
        detachmentSelector(rosterId, parseInt(detachmentIndex))
      )
    )
  );

  public unit$ = routeParams(
    ['roster-id', 'detachment-index', 'unit-index'],
    this.activatedRoute
  ).pipe(
    switchMap(([rosterId, detachmentIndex, unitIndex]) =>
      this.store$.select(
        unitSelector(rosterId, parseInt(detachmentIndex), parseInt(unitIndex))
      )
    )
  );

  public detachmentRules$ = combineLatest([this.detachment$, this.unit$]).pipe(
    map(
      ([detachment, unit]) =>
        detachment?.rules.filter(
          (rule) =>
            unit?.rules.find(
              (unitRule) =>
                unitRule.title === rule.title &&
                unitRule.description === rule.description
            ) === undefined
        ) || []
    )
  );

  public getMultiProfileWeaponLineAmount(weapon: Weapon): number {
    return weapon.profiles.reduce(
      (lines, profile) =>
        lines + (this.cleanEmptyPipe.transform(profile.abilities) ? 2 : 1),
      1
    );
  }
}
