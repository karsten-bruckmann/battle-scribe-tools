import { NgModule } from '@angular/core';
import { createStorageSyncMetaReducer } from '@battle-scribe-tools/utility/ngrx-storage-sync';
import { StoreModule } from '@ngrx/store';
import { State } from './models/state.model';
import { rostersReducer } from './reducers/rosters.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature<State>('rosters', rostersReducer, {
      metaReducers: [
        createStorageSyncMetaReducer('rosters', { storage: localStorage }),
      ],
    }),
  ],
})
export class RostersModule {}
