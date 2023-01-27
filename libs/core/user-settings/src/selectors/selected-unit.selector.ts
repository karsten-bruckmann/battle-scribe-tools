import { userSettingSelector } from '@battle-scribe-tools/data-access/user-settings';
import { createSelector } from '@ngrx/store';
import { isUnitSelection, UnitSelection } from '../models/unit-selection.model';

export const selectedUnitSelector = createSelector(
  userSettingSelector('selected-unit'),
  (value): UnitSelection | null => {
    if (!isUnitSelection(value)) {
      return null;
    }

    return value;
  }
);
