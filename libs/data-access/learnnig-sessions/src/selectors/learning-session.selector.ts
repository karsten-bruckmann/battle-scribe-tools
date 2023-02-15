import { createFeatureSelector } from '@ngrx/store';
import { LearningSessionsState } from '../models/learning-sessions-state.model';

export const learningSessionsSelector =
  createFeatureSelector<LearningSessionsState>('learning-sessions');
