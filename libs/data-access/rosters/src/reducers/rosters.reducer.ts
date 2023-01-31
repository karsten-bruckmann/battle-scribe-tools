import { createReducer, on } from '@ngrx/store';
import { addRosterAction } from '../actions/add-roster.action';
import { deleteRosterAction } from '../actions/delete-roster.action';
import { State } from '../models/state.model';

export const rostersReducer = createReducer<State>(
  [],
  on(addRosterAction, (state, action) => {
    const next = [...state];
    next.push(action.roster);
    return next;
  }),
  on(deleteRosterAction, (state, action) => {
    const next: State = [...state];
    return next.filter((v, i) => i !== action.index);
  })
);
