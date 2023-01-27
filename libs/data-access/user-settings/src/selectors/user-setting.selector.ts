import { createSelector } from '@ngrx/store';
import { userSettingsSelector } from './user-settings.selector';

export const userSettingSelector = (key: string) =>
  createSelector(userSettingsSelector, (all) => all[key]);
