import { createReducer, on } from '@ngrx/store';
import { addRosterAction } from '../actions/add-roster.action';
import { deleteRosterAction } from '../actions/delete-roster.action';
import { overwriteRosterAction } from '../actions/overwrite-roster.action';
import { RostersState } from '../models/rosters-state.model';

export const rostersReducer = createReducer<RostersState>(
  [],
  on(addRosterAction, (state, action) => {
    const next = [...state];
    next.push(action.roster);
    return next;
  }),
  on(overwriteRosterAction, (state, action) => {
    const next = [...state];
    next[action.index] = action.roster;
    return next;
  }),
  on(deleteRosterAction, (state, action) => {
    const next: RostersState = [...state];
    return next.filter((v, i) => i !== action.index);
  })
);
