import { rostersSelector } from '@battle-scribe-tools/data-access/rosters';
import { createSelector } from '@ngrx/store';

export const rosterTitlesSelector = createSelector(rostersSelector, (rosters) =>
  rosters.map((r) => r.title)
);
