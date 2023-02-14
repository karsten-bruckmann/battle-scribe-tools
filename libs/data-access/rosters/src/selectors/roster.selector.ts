import { createSelector } from '@ngrx/store';
import { Roster } from '../models/roster.model';
import { rostersSelector } from './rosters.selector';

export const rosterSelector = (index: number) =>
  createSelector(
    rostersSelector,
    (rosters): Roster | null => rosters[index] || null
  );
