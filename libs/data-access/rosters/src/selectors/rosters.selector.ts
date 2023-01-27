import { createSelector } from '@ngrx/store';
import { stateSelector } from './state.selector';

export const rostersSelector = createSelector(stateSelector, (s) => s.rosters);
