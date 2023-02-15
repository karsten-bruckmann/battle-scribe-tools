import { createAction, props } from '@ngrx/store';
import { Session } from '../models/session.model';

export const cardNotKnown = createAction(
  'core/learning/card-not-known',
  props<{ session: Session }>()
);
