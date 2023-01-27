import { createFeatureSelector } from '@ngrx/store';
import { State } from '../models/state.model';

export const decksSelector = createFeatureSelector<State>('flash-cards');
