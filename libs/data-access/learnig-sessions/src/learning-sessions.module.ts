import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { learningSessionsCoreReducerRegistry } from './learning-sessions.core-reducer-registry';
import { LearningSessionsState } from './models/learning-sessions-state.model';
import { learningSessionsReducer } from './reducers/learning-sessions.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature<LearningSessionsState>(
      'learning-sessions',
      learningSessionsReducer,
      { metaReducers: [learningSessionsCoreReducerRegistry.metaReducer] }
    ),
  ],
})
export class LearningSessionsModule {}
