import { Deck } from '@battle-scribe-tools/data-access/flash-cards';
import { createAction, props } from '@ngrx/store';

export const deckCreated = createAction(
  'core/learning/deck-created',
  props<{ deck: Deck }>()
);
