import { createAction, props } from '@ngrx/store';

export const deckDeletedAction = createAction(
  'data-access/flash-cards/deck-deleted',
  props<{ id: string }>()
);
