import { createAction, props } from '@ngrx/store';

export const setUserSetting = createAction(
  'data-access/user-settings/set',
  props<{ key: string; value: unknown }>()
);
