import { createAction, props } from '@ngrx/store';

export const deleteRosterAction = createAction(
  'rosters/delete',
  props<{ index: number }>()
);
