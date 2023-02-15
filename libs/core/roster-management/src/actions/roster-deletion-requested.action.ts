import { createAction, props } from '@ngrx/store';

export const rosterDeletionRequested = createAction(
  'core/roster-management/deletion-requested',
  props<{ rosterIndex: number }>()
);
