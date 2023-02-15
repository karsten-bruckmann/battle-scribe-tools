import { createAction, props } from '@ngrx/store';

export const rosterFileAdded = createAction(
  'core/roster-management/file-added',
  props<{ file: File }>()
);
