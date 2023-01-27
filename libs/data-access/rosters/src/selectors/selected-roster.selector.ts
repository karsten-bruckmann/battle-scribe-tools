import { createSelector } from '@ngrx/store';
import { rostersSelector } from './rosters.selector';
import { selectedSelector } from './selected.selector';

export const selectedRosterSelector = createSelector(
  rostersSelector,
  selectedSelector,
  (rosters, index) => (index !== null ? rosters[index] : null)
);
