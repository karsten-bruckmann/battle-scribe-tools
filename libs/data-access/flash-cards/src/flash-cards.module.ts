import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { State } from './models/state.model';
import { flashCardsReducer } from './reducers/flash-cards.reducer';

@NgModule({
  imports: [StoreModule.forFeature<State>('flash-cards', flashCardsReducer)],
})
export class FlashCardsModule {}
