import { createSelector } from '@ngrx/store';
import { Deck } from '../models/deck.model';
import { decksSelector } from './decks.selector';

export const deckSelector = (id: string) =>
  createSelector(decksSelector, (decks): Deck | null => decks[id] || null);
