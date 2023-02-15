import { createFeatureSelector } from '@ngrx/store';
import { FlashCardsState } from '../models/flash-cards-state.model';

export const decksSelector =
  createFeatureSelector<FlashCardsState>('flash-cards');
