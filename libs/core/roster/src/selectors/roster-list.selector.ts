import { rostersSelector } from '@battle-scribe-tools/data-access/rosters';
import { createSelector } from '@ngrx/store';

export const rosterListSelector = createSelector(
  rostersSelector,
  (rosters): { title: string; canUpdate: boolean }[] =>
    rosters.map((r) => ({ title: r.title, canUpdate: !!r.roszUrl }))
);
