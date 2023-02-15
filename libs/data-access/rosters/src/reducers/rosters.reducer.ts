import { createReducer, on } from '@ngrx/store';
import { v4 as uuid } from 'uuid';
import { addRosterAction } from '../actions/add-roster.action';
import { deleteRosterAction } from '../actions/delete-roster.action';
import { overwriteRosterAction } from '../actions/overwrite-roster.action';
import { RostersState } from '../models/rosters-state.model';

export const rostersReducer = createReducer<RostersState>(
  {},
  on(addRosterAction, (state, action) => {
    const next = { ...state };
    next[uuid()] = action.roster;
    return next;
  }),
  on(overwriteRosterAction, (state, action) => {
    const next = { ...state };
    next[action.id] = action.roster;
    return next;
  }),
  on(deleteRosterAction, (state, action) => {
    const next: RostersState = { ...state };
    delete next[action.id];
    return next;
  })
);
