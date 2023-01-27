import { createSelector } from '@ngrx/store';
import { rostersSelector } from './rosters.selector';

export const rosterSelector = (index: number) =>
  createSelector(rostersSelector, (rosters) => rosters[index] || null);
