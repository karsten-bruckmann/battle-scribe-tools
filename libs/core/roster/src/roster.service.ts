import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { deckAddedAction } from '@battle-scribe-tools/data-access/flash-cards';
import {
  addRosterAction,
  deleteRosterAction,
  Detachment,
  detachmentSelector,
  Roster,
  rosterSelector,
  Unit,
  unitSelector,
} from '@battle-scribe-tools/data-access/rosters';
import {
  loadTranslation,
  TranslationsService,
} from '@battle-scribe-tools/data-access/translations';
import { Store } from '@ngrx/store';
import { firstValueFrom, NEVER, Observable, switchMap } from 'rxjs';
import { createRoster } from './create-roster';
import { FlashCardCreationSettings } from './models/flash-card-creation-settings';
import { rosterFlashCardDeckSelector } from './selectors/roster-flash-card-deck.selector';
import { rosterTitlesSelector } from './selectors/roster-titles.selector';

@Injectable({ providedIn: 'root' })
export class RosterService {
  constructor(
    private store$: Store,
    private translationService: TranslationsService
  ) {}

  public get list$() {
    return this.store$.select(rosterTitlesSelector);
  }

  public getRosterFromRoute$(
    activatedRoute: ActivatedRoute
  ): Observable<Roster> {
    return activatedRoute.paramMap.pipe(
      switchMap((paramMap) => {
        const indexParam = paramMap.get('roster-index');
        if (!indexParam) {
          return NEVER;
        }
        const index = parseInt(indexParam);
        return this.store$.select(rosterSelector(index));
      })
    );
  }

  public getDetachmentFromRoute$(
    activatedRoute: ActivatedRoute
  ): Observable<Detachment | null> {
    return activatedRoute.paramMap.pipe(
      switchMap((paramMap) => {
        const rosterIndexParam = paramMap.get('roster-index');
        const detachmentIndexParam = paramMap.get('detachment-index');
        if (!rosterIndexParam || !detachmentIndexParam) {
          return NEVER;
        }
        const rosterIndex = parseInt(rosterIndexParam);
        const detachmentIndex = parseInt(detachmentIndexParam);
        return this.store$.select(
          detachmentSelector(rosterIndex, detachmentIndex)
        );
      })
    );
  }

  public getUnitFromRoute$(
    activatedRoute: ActivatedRoute
  ): Observable<Unit | null> {
    return activatedRoute.paramMap.pipe(
      switchMap((paramMap) => {
        const rosterIndexParam = paramMap.get('roster-index');
        const detachmentIndexParam = paramMap.get('detachment-index');
        const unitIndexParam = paramMap.get('unit-index');
        if (!rosterIndexParam || !detachmentIndexParam || !unitIndexParam) {
          return NEVER;
        }
        const rosterIndex = parseInt(rosterIndexParam);
        const detachmentIndex = parseInt(detachmentIndexParam);
        const unitIndex = parseInt(unitIndexParam);
        return this.store$.select(
          unitSelector(rosterIndex, detachmentIndex, unitIndex)
        );
      })
    );
  }

  public async addRoster(file: File): Promise<void> {
    const roster = await createRoster(file);
    this.store$.dispatch(addRosterAction({ roster }));
  }

  public async deleteRoster(index: number): Promise<void> {
    this.store$.dispatch(deleteRosterAction({ index }));
  }

  public async createFlashCardDeck(
    rosterIndex: number,
    settings: FlashCardCreationSettings
  ): Promise<void> {
    const language = await firstValueFrom(
      this.translationService.selectedLanguage$
    );
    const deck = await firstValueFrom(
      this.store$.select(
        rosterFlashCardDeckSelector(
          rosterIndex,
          settings,
          language,
          loadTranslation
        )
      )
    );
    this.store$.dispatch(deckAddedAction({ deck }));
  }
}
