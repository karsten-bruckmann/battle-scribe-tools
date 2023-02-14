import { Rule } from '@battle-scribe-tools/data-access/rosters';
import { unique } from '@battle-scribe-tools/utility/array-utilities';
import { Force } from '@battle-scribe-tools/utility/rosz2js';
import { getAbilityProfiles } from './get-ability-profiles.rule';

export const getDetachmentRules = (detachment: Force): Rule[] => {
  return unique(
    getAbilityProfiles(detachment)
      .map((profile) => ({
        title: profile.name,
        description: profile.description,
      }))
      .concat(
        detachment.rules.map((r) => ({
          title: r.name,
          description: r.description,
        }))
      ),
    (a, b) => a.title === b.title && a.description === b.description
  );
};
