import { NgModule } from '@angular/core';
import { createStorageSyncMetaReducer } from '@battle-scribe-tools/utility/ngrx-storage-sync';
import { StoreModule } from '@ngrx/store';
import { flashCardsCoreReducerRegistry } from './flash-cards.core-reducer-registry';
import { FlashCardsState } from './models/flash-cards-state.model';
import { flashCardsReducer } from './reducers/flash-cards.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature<FlashCardsState>('flash-cards', flashCardsReducer, {
      metaReducers: [
        createStorageSyncMetaReducer('flash-cards/v2', {
          storage: localStorage,
        }),
        flashCardsCoreReducerRegistry.metaReducer,
      ],
    }),
  ],
})
export class FlashCardsModule {}
