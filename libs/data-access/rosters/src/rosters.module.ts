import { NgModule } from '@angular/core';
import { createStorageSyncMetaReducer } from '@battle-scribe-tools/utility/ngrx-storage-sync';
import { StoreModule } from '@ngrx/store';
import { RostersState } from './models/rosters-state.model';
import { rostersReducer } from './reducers/rosters.reducer';
import { rostersCoreReducerRegistry } from './rosters.core-reducer-registry';

@NgModule({
  imports: [
    StoreModule.forFeature<RostersState>('rosters', rostersReducer, {
      metaReducers: [
        createStorageSyncMetaReducer('rosters/v2', { storage: localStorage }),
        rostersCoreReducerRegistry.metaReducer,
      ],
    }),
  ],
})
export class RostersModule {}
