import { createFeatureSelector } from '@ngrx/store';
import { State } from '../models/state.model';

export const stateSelector = createFeatureSelector<State>('rosters');
