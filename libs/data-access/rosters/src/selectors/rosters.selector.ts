import { createFeatureSelector } from '@ngrx/store';
import { State } from '../models/state.model';

export const rostersSelector = createFeatureSelector<State>('rosters');
