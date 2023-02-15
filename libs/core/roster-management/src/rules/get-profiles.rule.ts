import { Profile } from '@battle-scribe-tools/data-access/rosters';
import {
  Selection,
  TypeName,
  UnitProfile,
} from '@battle-scribe-tools/utility/rosz2js';

export const getProfiles = (unit: Selection): Profile[] => {
  return unit.profiles
    .filter(
      (profile): profile is UnitProfile => profile.typeName === TypeName.UNIT
    )
    .map((profile) => ({
      title: profile.name,
      movement: profile.movement,
      weaponSkill: profile.weaponSkill,
      ballisticSkill: profile.ballisticSkill,
      strength: profile.strength,
      toughness: profile.toughness,
      wounds: profile.wounds,
      attacks: profile.attacks,
      leadership: profile.leadership,
      save: profile.save,
    }));
};
