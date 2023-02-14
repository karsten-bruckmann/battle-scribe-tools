import { createAction, props } from '@ngrx/store';

export const rosterUpdateRequested = createAction(
  'roster/update-requested',
  props<{ rosterIndex: number }>()
);
