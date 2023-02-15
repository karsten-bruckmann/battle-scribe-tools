import { createAction, props } from '@ngrx/store';

export const rosterUpdateRequested = createAction(
  'core/roster-management/update-requested',
  props<{ id: string }>()
);
