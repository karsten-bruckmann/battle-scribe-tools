import { createAction, props } from '@ngrx/store';
import { Deck } from '../models/deck.model';

export const deckAddedAction = createAction(
  'data-access/flash-cards/deck-added',
  props<{ deck: Deck }>()
);
