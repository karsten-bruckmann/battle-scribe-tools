import { NgModule } from '@angular/core';
import {
  flashCardsCoreReducerRegistry,
  FlashCardsModule,
} from '@battle-scribe-tools/data-access/flash-cards';
import { EffectsModule } from '@ngrx/effects';
import { CreateDeckEffect } from './effects/create-deck.effect';
import { flashCardsReducer } from './reducers/flash-cards.reducer';

@NgModule({
  imports: [FlashCardsModule, EffectsModule.forFeature([CreateDeckEffect])],
})
export class LearningModule {
  constructor() {
    flashCardsCoreReducerRegistry.add(flashCardsReducer);
  }
}
