import { createSelector } from '@ngrx/store';
import { Detachment } from '../models/roster.model';
import { rosterSelector } from './roster.selector';

export const detachmentSelector = (
  rosterIndex: number,
  detachmentIndex: number
) =>
  createSelector(
    rosterSelector(rosterIndex),
    (roster): Detachment | null => roster.detachments[detachmentIndex] || null
  );
