import { createAction, props } from '@ngrx/store';
import { Roster } from '../models/roster.model';

export const overwriteRosterAction = createAction(
  'data-access/rosters/overwrite',
  props<{ roster: Roster; id: string }>()
);
