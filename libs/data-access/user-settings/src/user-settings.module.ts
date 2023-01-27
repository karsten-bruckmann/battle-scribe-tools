import { NgModule } from '@angular/core';
import { createStorageSyncMetaReducer } from '@battle-scribe-tools/utility/ngrx-storage-sync';
import { StoreModule } from '@ngrx/store';
import { State } from './models/state.model';
import { userSettingsReducer } from './reducers/user-settings.reducer';
@NgModule({
  imports: [
    StoreModule.forFeature<State>('user-settings', userSettingsReducer, {
      metaReducers: [
        createStorageSyncMetaReducer('user-settings', {
          storage: localStorage,
        }),
      ],
    }),
  ],
})
export class UserSettingsModule {}
