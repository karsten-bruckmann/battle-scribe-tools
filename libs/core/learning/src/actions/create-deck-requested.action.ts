import { createAction, props } from '@ngrx/store';
import { FlashCardCreationSettings } from '../models/flash-card-creation-settings';

export const createDeckRequested = createAction(
  'core/learning/create-deck-requested',
  props<{ settings: FlashCardCreationSettings }>()
);
