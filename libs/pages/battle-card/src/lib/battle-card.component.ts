import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import {
  detachmentSelector,
  RosterModule,
  rosterSelector,
  unitSelector,
  Weapon,
} from '@battle-scribe-tools/core/roster';
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
    RosterModule,
    TranslatableComponent,
    AvatarComponent,
    CleanEmptyPipe,
    RouterModule,
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

  public roster$ = routeParam('roster-index', this.activatedRoute).pipe(
    switchMap((index) => this.store$.select(rosterSelector(parseInt(index))))
  );

  public detachment$ = routeParams(
    ['roster-index', 'detachment-index'],
    this.activatedRoute
  ).pipe(
    switchMap(([rosterIndex, detachmentIndex]) =>
      this.store$.select(
        detachmentSelector(parseInt(rosterIndex), parseInt(detachmentIndex))
      )
    )
  );

  public unit$ = routeParams(
    ['roster-index', 'detachment-index', 'unit-index'],
    this.activatedRoute
  ).pipe(
    switchMap(([rosterIndex, detachmentIndex, unitIndex]) =>
      this.store$.select(
        unitSelector(
          parseInt(rosterIndex),
          parseInt(detachmentIndex),
          parseInt(unitIndex)
        )
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
