import { createAction, props } from '@ngrx/store';
import { Roster } from '../models/roster.model';

export const addRosterAction = createAction(
  'rosters/add',
  props<{ roster: Roster }>()
);
