import { createAction, props } from '@ngrx/store';

export const rosterFileAdded = createAction(
  'roster/file-added',
  props<{ file: File }>()
);
