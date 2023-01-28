import { createReducer, on } from '@ngrx/store';
import { deckAddedAction } from '../actions/deck-added.action';
import { movedToBoxAction } from '../actions/moved-to-box.action';
import { State } from '../models/state.model';

export const flashCardsReducer = createReducer<State>(
  [],
  on(deckAddedAction, (state, action) => [...state, action.deck]),
  on(movedToBoxAction, (state, action) => {
    const next = [...state];
    next[action.deckIndex] = { ...state[action.deckIndex] };
    next[action.deckIndex].cards = [...state[action.deckIndex].cards];
    next[action.deckIndex].cards[action.cardIndex] = {
      ...next[action.deckIndex].cards[action.cardIndex],
      box: next[action.deckIndex].cards[action.cardIndex].box + 1,
    };
    return next;
  })
);
