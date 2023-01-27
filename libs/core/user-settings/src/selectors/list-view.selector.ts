import { userSettingSelector } from '@battle-scribe-tools/data-access/user-settings';
import { createSelector } from '@ngrx/store';
import { isListView, ListView } from '../models/list-view.model';

export const listViewSelector = createSelector(
  userSettingSelector('list-view'),
  (value): ListView => {
    if (typeof value !== 'string' || !isListView(value)) {
      return 'list';
    }

    return value;
  }
);
