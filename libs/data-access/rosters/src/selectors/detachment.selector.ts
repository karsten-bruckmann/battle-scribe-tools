import { createSelector } from '@ngrx/store';
import { Detachment } from '../models/roster.model';
import { rosterSelector } from './roster.selector';

export const detachmentSelector = (rosterId: string, detachmentIndex: number) =>
  createSelector(
    rosterSelector(rosterId),
    (roster): Detachment | null => roster?.detachments[detachmentIndex] || null
  );
