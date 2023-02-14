import { createFeatureSelector } from '@ngrx/store';
import { RostersState } from '../models/rosters-state.model';

export const rostersSelector = createFeatureSelector<RostersState>('rosters');
