import { Roster } from '@battle-scribe-tools/data-access/rosters';
import { createAction, props } from '@ngrx/store';

export const rosterParsedFromFile = createAction(
  'core/roster-management/parsed-from-file',
  props<{ roster: Roster }>()
);
