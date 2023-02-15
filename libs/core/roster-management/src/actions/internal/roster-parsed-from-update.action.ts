import { Roster } from '@battle-scribe-tools/data-access/rosters';
import { createAction, props } from '@ngrx/store';

export const rosterParsedFromUpdate = createAction(
  'core/roster-management/parsed-from-update',
  props<{ roster: Roster; index: number }>()
);
