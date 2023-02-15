import { createAction, props } from '@ngrx/store';
import { Roster } from '../models/roster.model';

export const addRosterAction = createAction(
  'data-access/rosters/add',
  props<{ roster: Roster }>()
);
