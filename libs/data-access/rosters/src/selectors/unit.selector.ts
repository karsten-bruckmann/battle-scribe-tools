import { createSelector } from '@ngrx/store';
import { Unit } from '../models/roster.model';
import { rosterSelector } from './roster.selector';

export const unitSelector = (
  rosterIndex: number,
  detachmentIndex: number,
  unitIndex: number
) =>
  createSelector(
    rosterSelector(rosterIndex),
    (roster): Unit =>
      roster.detachments[detachmentIndex]?.units[unitIndex] || null
  );
