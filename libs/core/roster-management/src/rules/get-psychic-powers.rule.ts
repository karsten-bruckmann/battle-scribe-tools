import { PsychicPower } from '@battle-scribe-tools/data-access/rosters';
import {
  PsychicPowerProfile,
  Selection,
  TypeName,
} from '@battle-scribe-tools/utility/rosz2js';

export const getPsychicPowers = (unit: Selection): PsychicPower[] => {
  return unit.selections
    .filter(
      (selection) =>
        selection.type === 'upgrade' &&
        selection.profiles.filter(
          (profile): profile is PsychicPowerProfile =>
            profile.typeName === TypeName.PSYCHIC_POWER
        ).length > 0
    )
    .map((selection) => ({
      title: selection.customName || selection.name,
      profiles: selection.profiles
        .filter(
          (profile): profile is PsychicPowerProfile =>
            profile.typeName === TypeName.PSYCHIC_POWER
        )
        .map((profile) => ({
          title: profile.name,
          range: profile.range,
          warpCharge: profile.warpCharge,
          description: profile.details,
        })),
    }));
};
