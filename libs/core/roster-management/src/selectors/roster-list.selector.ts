import { rostersSelector } from '@battle-scribe-tools/data-access/rosters';
import { recordToIdAwareArray } from '@battle-scribe-tools/utility/ngrx-utils';
import { createSelector } from '@ngrx/store';

export const rosterListSelector = createSelector(
  rostersSelector,
  (rosters): { title: string; canUpdate: boolean; id: string }[] =>
    recordToIdAwareArray(rosters).map((roster) => ({
      title: roster.title,
      canUpdate: !!roster.roszUrl,
      id: roster.id,
    }))
);
