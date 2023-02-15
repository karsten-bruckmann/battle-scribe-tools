import { createAction, props } from '@ngrx/store';

export const rosterFileDownloaded = createAction(
  'core/roster-management/file-downloaded',
  props<{ file: File }>()
);
