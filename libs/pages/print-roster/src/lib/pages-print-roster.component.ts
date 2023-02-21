import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ViewChildren } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import {
  BattleCardsModule,
  detachmentSelector,
  unitSelector,
} from '@battle-scribe-tools/core/battle-cards';
import { rosterSelector } from '@battle-scribe-tools/core/roster-management';
import {
  TranslatableComponent,
  TRANSLATION_MODE_DISABLED,
} from '@battle-scribe-tools/feature/translatable';
import { UnitCardComponent } from '@battle-scribe-tools/feature/unit-card';
import {
  routeParam,
  routeParams,
} from '@battle-scribe-tools/utility/angular-utilities';
import { IonicModule } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { combineLatest, firstValueFrom, map, switchMap } from 'rxjs';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    IonicModule,
    TranslatableComponent,
    UnitCardComponent,
    BattleCardsModule,
  ],
  providers: [
    {
      provide: TRANSLATION_MODE_DISABLED,
      useValue: true,
    },
  ],
  templateUrl: './pages-print-roster.component.html',
  styleUrls: ['./pages-print-roster.component.scss'],
})
export class PagesPrintRosterComponent implements AfterViewInit {
  constructor(private store$: Store, private activatedRoute: ActivatedRoute) {}

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

  @ViewChildren(UnitCardComponent)
  public unitCards?: UnitCardComponent[];

  public async ngAfterViewInit(): Promise<void> {
    if (!this.unitCards) {
      return;
    }
    await firstValueFrom(
      combineLatest(this.unitCards.map((card) => card.avatarLoaded))
    );
    window.print();
    history.back();
  }
}
