import { createAction, props } from '@ngrx/store';

export const deckDeletedAction = createAction(
  'flash-cards/deck-deleted',
  props<{ index: number }>()
);
