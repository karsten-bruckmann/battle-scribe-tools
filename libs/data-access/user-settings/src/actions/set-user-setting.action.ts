import { createAction, props } from '@ngrx/store';

export const setUserSetting = createAction(
  'user-settings/set',
  props<{ key: string; value: unknown }>()
);
