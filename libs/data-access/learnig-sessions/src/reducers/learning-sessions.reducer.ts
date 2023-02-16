import { createReducer } from '@ngrx/store';
import { LearningSessionsState } from '../models/learning-sessions-state.model';

export const learningSessionsReducer = createReducer<LearningSessionsState>([]);
