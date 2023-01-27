import { createFeatureSelector } from '@ngrx/store';
import { State } from '../models/state.model';

export const flashCardsSelector = createFeatureSelector<State>('flash-cards');
