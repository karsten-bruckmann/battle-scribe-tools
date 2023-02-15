import { createAction, props } from '@ngrx/store';
import { Session } from '../models/session.model';

export const cardKnown = createAction(
  'core/learning/card-known',
  props<{ session: Session }>()
);
