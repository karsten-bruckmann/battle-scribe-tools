import { Weapon } from '@battle-scribe-tools/data-access/rosters';
import {
  AbilityProfile,
  Selection,
  TypeName,
  WeaponProfile,
} from '@battle-scribe-tools/utility/rosz2js';

export const getWeapons = (unit: Selection): Weapon[] => {
  return unit.selections
    .filter(
      (selection) =>
        selection.type === 'upgrade' &&
        selection.profiles.filter(
          (profile): profile is WeaponProfile =>
            profile.typeName === TypeName.WEAPON
        ).length > 0
    )
    .map((selection) => ({
      title: selection.customName || selection.name,
      amount: selection.number,
      abilities: selection.profiles
        .filter(
          (profile): profile is AbilityProfile =>
            profile.typeName === TypeName.ABILITY
        )
        .map((a) => a.description),
      profiles: selection.profiles
        .filter(
          (profile): profile is WeaponProfile =>
            profile.typeName === TypeName.WEAPON
        )
        .map((profile) => ({
          title: profile.name,
          range: profile.range,
          type: profile.type,
          strength: profile.strength,
          armourPenetration: profile.armourPenetration,
          damage: profile.damage,
          abilities: profile.abilities,
        })),
    }));
};
