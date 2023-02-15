import { createAction, props } from '@ngrx/store';
import { Session } from '../models/session.model';

export const cardSkipped = createAction(
  'core/learning/card-skipped',
  props<{ session: Session }>()
);
