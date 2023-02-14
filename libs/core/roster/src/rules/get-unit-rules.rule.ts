import { Rule } from '@battle-scribe-tools/data-access/rosters';
import {
  AbilityProfile,
  Force,
  Selection,
} from '@battle-scribe-tools/utility/rosz2js';
import { getAbilityProfiles } from './get-ability-profiles.rule';

export const getUnitRules = (detachment: Force, unit: Selection): Rule[] => {
  const mergedProfiles = (<AbilityProfile[]>[]).concat(
    getAbilityProfiles(detachment),
    getAbilityProfiles(unit)
  );

  return mergedProfiles
    .map((profile) => ({
      title: profile.name,
      description: profile.description,
    }))
    .concat(
      unit.rules.map((rule) => ({
        title: rule.name,
        description: rule.description,
      }))
    )
    .filter(
      (r, i, all) =>
        all.findIndex(
          (r2) => r.title === r2.title && r.description === r2.description
        ) === i
    );
};
