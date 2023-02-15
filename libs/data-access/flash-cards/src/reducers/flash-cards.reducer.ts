import { createReducer, on } from '@ngrx/store';
import { v4 as uuid } from 'uuid';
import { deckAddedAction } from '../actions/deck-added.action';
import { deckDeletedAction } from '../actions/deck-deleted.action';
import { movedToBoxAction } from '../actions/moved-to-box.action';
import { FlashCardsState } from '../models/flash-cards-state.model';

export const flashCardsReducer = createReducer<FlashCardsState>(
  {},
  on(deckAddedAction, (state, action) => ({ ...state, [uuid()]: action.deck })),
  on(movedToBoxAction, (state, action) => {
    const next = { ...state };
    next[action.deckId] = { ...state[action.deckId] };
    next[action.deckId].cards = { ...state[action.deckId].cards };
    next[action.deckId].cards[action.cardId] = {
      ...next[action.deckId].cards[action.cardId],
      box: action.box,
    };
    return next;
  }),
  on(deckDeletedAction, (state, action) => {
    const next = { ...state };
    delete next[action.id];
    return next;
  })
);
