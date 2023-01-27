import { createReducer, on } from '@ngrx/store';
import { addRosterAction } from '../actions/add-roster.action';
import { deleteRosterAction } from '../actions/delete-roster.action';
import { selectRosterAction } from '../actions/select-roster.action';
import { Roster } from '../models/roster.model';
import { State } from '../models/state.model';

export const rostersReducer = createReducer<State>(
  { selected: null, rosters: [] },
  on(addRosterAction, (state, action) => {
    const next = [...state.rosters];
    next.push(action.roster);
    return {
      ...state,
      rosters: next,
    };
  }),
  on(deleteRosterAction, (state, action) => {
    const next: Roster[] = [...state.rosters];
    return {
      ...state,
      rosters: next.filter((v, i) => i !== action.index),
    };
  }),
  on(selectRosterAction, (state, action) => ({
    ...state,
    selected: action.index,
  }))
);
