import { createAction, props } from '@ngrx/store';

export const rosterDownloadRequested = createAction(
  'core/roster-management/download-requested',
  props<{ url: string }>()
);
