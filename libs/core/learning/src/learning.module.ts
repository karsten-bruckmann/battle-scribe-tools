import { NgModule } from '@angular/core';
import {
  flashCardsCoreReducerRegistry,
  FlashCardsModule,
} from '@battle-scribe-tools/data-access/flash-cards';
import {
  learningSessionsCoreReducerRegistry,
  LearningSessionsModule,
} from '@battle-scribe-tools/data-access/learnig-sessions';
import { EffectsModule } from '@ngrx/effects';
import { CreateDeckEffect } from './effects/create-deck.effect';
import { flashCardsReducer } from './reducers/flash-cards.reducer';
import { learningSessionsReducer } from './reducers/learning-session.reducer';

@NgModule({
  imports: [
    FlashCardsModule,
    LearningSessionsModule,
    EffectsModule.forFeature([CreateDeckEffect]),
  ],
})
export class LearningModule {
  constructor() {
    flashCardsCoreReducerRegistry.add(flashCardsReducer, 'learning');
    learningSessionsCoreReducerRegistry.add(
      learningSessionsReducer,
      'learning'
    );
  }
}
