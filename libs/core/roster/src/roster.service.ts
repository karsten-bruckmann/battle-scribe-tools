import { Injectable } from '@angular/core';
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
    const data = deck.cards.reduce(
      (csv, card) =>
        csv + `"${csvify(card.question)}","${csvify(card.answer)}"\n`,
      ''
    );
    const a = document.createElement('a');
    const blob = new Blob([data], { type: 'octet/stream' });
    const url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = 'flash-cards.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  }
}

function csvify(input: string): string {
  return input.replaceAll('"', '""').replaceAll('\n', '\\n');
}
