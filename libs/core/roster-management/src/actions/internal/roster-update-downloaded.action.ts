import { createAction, props } from '@ngrx/store';

export const rosterFileAdded = createAction(
  'core/roster-management/update-downloaded',
  props<{ file: File }>()
);
