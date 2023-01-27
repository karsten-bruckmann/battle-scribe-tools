import { createSelector } from '@ngrx/store';
import { stateSelector } from './state.selector';

export const selectedSelector = createSelector(
  stateSelector,
  (s) => s.selected
);
