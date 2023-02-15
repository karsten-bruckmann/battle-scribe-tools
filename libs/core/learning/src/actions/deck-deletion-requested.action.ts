import { createAction, props } from '@ngrx/store';

export const deckDeletionRequested = createAction(
  'core/learning/deck-deletion-requested',
  props<{ index: number }>()
);
