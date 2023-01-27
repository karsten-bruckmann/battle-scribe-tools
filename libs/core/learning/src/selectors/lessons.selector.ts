import { flashCardsSelector } from '@battle-scribe-tools/data-access/flash-cards';
import { createSelector } from '@ngrx/store';
import { Lesson } from '../models/lesson.model';

export const lessonsSelector = createSelector(
  flashCardsSelector,
  (state): Lesson[] =>
    state.map((deck) => ({
      name: deck.name,
      boxContent: deck.cards.reduce<number[]>((content, card) => {
        if (!content[card.box]) {
          content[card.box] = 0;
        }
        content[card.box]++;
        return content;
      }, new Array(deck.boxes).fill(0)),
    }))
);
