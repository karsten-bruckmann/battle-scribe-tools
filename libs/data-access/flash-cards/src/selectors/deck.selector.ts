import { createSelector } from '@ngrx/store';
import { Deck } from '../models/deck.model';
import { decksSelector } from './decks.selector';

export const deckSelector = (index: number) =>
  createSelector(decksSelector, (decks): Deck | null => decks[index] || null);
