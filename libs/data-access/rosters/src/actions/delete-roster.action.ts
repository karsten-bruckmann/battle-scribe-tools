import { createAction, props } from '@ngrx/store';

export const deleteRosterAction = createAction(
  'data-access/rosters/delete',
  props<{ index: number }>()
);
