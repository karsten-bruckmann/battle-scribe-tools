import {
  deleteRosterAction,
  rostersReducer as dataReducer,
  RostersState,
} from '@battle-scribe-tools/data-access/rosters';
import { createCoreReducer } from '@battle-scribe-tools/utility/ngrx-utils';
import { on } from '@ngrx/store';
import { rosterDeletionRequested } from '../actions/roster-deletion-requested.action';

export const rostersReducer = createCoreReducer<RostersState>(
  on(rosterDeletionRequested, (state, action) =>
    dataReducer(state, deleteRosterAction({ index: action.rosterIndex }))
  )
);
