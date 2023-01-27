import { createAction, props } from '@ngrx/store';

export const selectRosterAction = createAction(
  'rosters/select',
  props<{ index: number }>()
);
