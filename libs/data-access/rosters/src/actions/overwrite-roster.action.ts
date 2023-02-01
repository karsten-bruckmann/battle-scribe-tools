import { createAction, props } from '@ngrx/store';
import { Roster } from '../models/roster.model';

export const overwriteRosterAction = createAction(
  'rosters/overwrite',
  props<{ roster: Roster; index: number }>()
);
