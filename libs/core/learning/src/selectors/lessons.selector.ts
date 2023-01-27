import { flashCardsSelector } from '@battle-scribe-tools/data-access/flash-cards';
import { createSelector } from '@ngrx/store';

export const lessonsSelector = createSelector(flashCardsSelector, (state) =>
  state.map((deck) => deck.name)
);
