import { createAction, props } from '@ngrx/store';

export const rosterUrlAdded = createAction(
  'roster/url-added',
  props<{ url: string }>()
);
