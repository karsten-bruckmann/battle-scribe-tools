import { decksSelector } from '@battle-scribe-tools/data-access/flash-cards';
import { recordToIdAwareArray } from '@battle-scribe-tools/utility/ngrx-utils';
import { createSelector } from '@ngrx/store';
import { DeckListItem } from '../models/deck-list-item.model';

export const decksListSelector = createSelector(
  decksSelector,
  (state): DeckListItem[] =>
    recordToIdAwareArray(state).map((deck) => ({
      name: deck.name,
      deckId: deck.id,
      boxContent: recordToIdAwareArray(deck.cards).reduce<number[]>(
        (content, card) => {
          if (!content[card.box]) {
            content[card.box] = 0;
          }
          content[card.box]++;
          return content;
        },
        new Array(deck.boxes).fill(0)
      ),
    }))
);
