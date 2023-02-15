import {
  addRosterAction,
  deleteRosterAction,
  overwriteRosterAction,
  rostersReducer as dataReducer,
  RostersState,
} from '@battle-scribe-tools/data-access/rosters';
import { createCoreReducer } from '@battle-scribe-tools/utility/ngrx-utils';
import { on } from '@ngrx/store';
import { rosterParsedFromDownload } from '../actions/internal/roster-parsed-from-download.action';
import { rosterParsedFromFile } from '../actions/internal/roster-parsed-from-file.action';
import { rosterParsedFromUpdate } from '../actions/internal/roster-parsed-from-update.action';
import { rosterDeletionRequested } from '../actions/roster-deletion-requested.action';

export const rostersReducer = createCoreReducer<RostersState>(
  on(rosterParsedFromFile, rosterParsedFromDownload, (state, action) =>
    dataReducer(state, addRosterAction({ roster: action.roster }))
  ),
  on(rosterParsedFromUpdate, (state, action) =>
    dataReducer(
      state,
      overwriteRosterAction({ roster: action.roster, id: action.id })
    )
  ),
  on(rosterDeletionRequested, (state, action) =>
    dataReducer(state, deleteRosterAction({ id: action.id }))
  )
);
