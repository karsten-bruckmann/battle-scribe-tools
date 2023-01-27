import { Injectable } from '@angular/core';
import { deckAddedAction } from '@battle-scribe-tools/data-access/flash-cards';
import {
  addRosterAction,
  deleteRosterAction,
  selectedRosterSelector,
  selectRosterAction,
} from '@battle-scribe-tools/data-access/rosters';
import {
  loadTranslation,
  TranslationsService,
} from '@battle-scribe-tools/data-access/translations';
import { Store } from '@ngrx/store';
import { firstValueFrom } from 'rxjs';
import { createRoster } from './create-roster';
import { roosterFlashCardDeckSelector } from './selectors/rooster-flash-card-deck.selector';
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

  public get selected$() {
    return this.store$.select(selectedRosterSelector);
  }

  public async addRoster(file: File): Promise<void> {
    const roster = await createRoster(file);
    this.store$.dispatch(addRosterAction({ roster }));
  }

  public async deleteRoster(index: number): Promise<void> {
    this.store$.dispatch(deleteRosterAction({ index }));
  }

  public async selectRoster(index: number): Promise<void> {
    this.store$.dispatch(selectRosterAction({ index }));
  }

  public async createFlashCardDeck(): Promise<void> {
    const language = await firstValueFrom(
      this.translationService.selectedLanguage$
    );
    const deck = await firstValueFrom(
      this.store$.select(
        roosterFlashCardDeckSelector(language, loadTranslation)
      )
    );
    this.store$.dispatch(deckAddedAction({ deck }));
  }
}
