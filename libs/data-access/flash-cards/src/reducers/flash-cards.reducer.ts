import { createReducer, on } from '@ngrx/store';
import { deckAddedAction } from '../actions/deck-added.action';
import { State } from '../models/state.model';

export const flashCardsReducer = createReducer<State>(
  [],
  on(deckAddedAction, (state, action) => [...state, action.deck])
);
