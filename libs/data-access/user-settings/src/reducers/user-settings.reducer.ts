import { createReducer, on } from '@ngrx/store';
import { setUserSetting } from '../actions/set-user-setting.action';
import { State } from '../models/state.model';

export const userSettingsReducer = createReducer<State>(
  {},
  on(setUserSetting, (state, action) => ({
    ...state,
    [action.key]: action.value,
  }))
);
