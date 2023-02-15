import { createReducer, on } from '@ngrx/store';
import { deckAddedAction } from '../actions/deck-added.action';
import { deckDeletedAction } from '../actions/deck-deleted.action';
import { movedToBoxAction } from '../actions/moved-to-box.action';
import { FlashCardsState } from '../models/flash-cards-state.model';

export const flashCardsReducer = createReducer<FlashCardsState>(
  [],
  on(deckAddedAction, (state, action) => [...state, action.deck]),
  on(movedToBoxAction, (state, action) => {
    const next = [...state];
    next[action.deckIndex] = { ...state[action.deckIndex] };
    next[action.deckIndex].cards = [...state[action.deckIndex].cards];
    next[action.deckIndex].cards[action.cardIndex] = {
      ...next[action.deckIndex].cards[action.cardIndex],
      box: action.box,
    };
    return next;
  }),
  on(deckDeletedAction, (state, action) =>
    [...state].filter((v, i) => i !== action.index)
  )
);
