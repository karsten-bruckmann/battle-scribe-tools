import {
  AbilityProfile,
  Force,
  Selection,
  TypeName,
  WeaponProfile,
} from '@battle-scribe-tools/utility/rosz2js';
import { isForce } from './is-force.rule';

export const getAbilityProfiles = (
  selection: Selection | Force
): AbilityProfile[] => {
  let profiles: AbilityProfile[] = [];

  selection.selections
    .filter(
      (s) =>
        s.type === 'upgrade' &&
        s.profiles.filter(
          (profile): profile is WeaponProfile =>
            profile.typeName === TypeName.WEAPON
        ).length === 0
    )
    .forEach(
      (subSelection) =>
        (profiles = getAbilityProfiles(subSelection).concat(profiles))
    );

  if (!isForce(selection)) {
    profiles = profiles.concat(
      selection.profiles.filter(
        (p): p is AbilityProfile => p.typeName === TypeName.ABILITY
      )
    );
  }

  return profiles;
};
