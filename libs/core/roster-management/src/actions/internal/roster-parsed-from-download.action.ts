import { Roster } from '@battle-scribe-tools/data-access/rosters';
import { createAction, props } from '@ngrx/store';

export const rosterParsedFromDownload = createAction(
  'core/roster-management/parsed-from-download',
  props<{ roster: Roster }>()
);
