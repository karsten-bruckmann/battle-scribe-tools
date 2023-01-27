import { NgModule } from '@angular/core';
import { createStorageSyncMetaReducer } from '@battle-scribe-tools/utility/ngrx-storage-sync';
import { StoreModule } from '@ngrx/store';
import { State } from './models/state.model';
import { flashCardsReducer } from './reducers/flash-cards.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature<State>('flash-cards', flashCardsReducer, {
      metaReducers: [
        createStorageSyncMetaReducer('flash-cards', { storage: localStorage }),
      ],
    }),
  ],
})
export class FlashCardsModule {}
