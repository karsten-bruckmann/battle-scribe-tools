import { createAction, props } from '@ngrx/store';

export const rosterDeletionRequested = createAction(
  'roster/deletion-requested',
  props<{ rosterIndex: number }>()
);
