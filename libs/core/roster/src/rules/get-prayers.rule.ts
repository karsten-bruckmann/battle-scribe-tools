import { Prayer } from '@battle-scribe-tools/data-access/rosters';
import {
  PrayerProfile,
  Selection,
  TypeName,
} from '@battle-scribe-tools/utility/rosz2js';

export const getPrayers = (unit: Selection): Prayer[] => {
  return unit.selections
    .filter(
      (selection) =>
        selection.type === 'upgrade' &&
        selection.profiles.filter(
          (profile): profile is PrayerProfile =>
            profile.typeName === TypeName.PRAYERS
        ).length > 0
    )
    .map((selection) => ({
      title: selection.customName || selection.name,
      profiles: selection.profiles
        .filter(
          (profile): profile is PrayerProfile =>
            profile.typeName === TypeName.PRAYERS
        )
        .map((profile) => ({
          title: profile.name,
          effect: profile.effect,
        })),
    }));
};
