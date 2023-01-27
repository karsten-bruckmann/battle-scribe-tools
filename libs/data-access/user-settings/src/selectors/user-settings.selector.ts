import { createFeatureSelector } from '@ngrx/store';
import { State } from '../models/state.model';

export const userSettingsSelector =
  createFeatureSelector<State>('user-settings');
