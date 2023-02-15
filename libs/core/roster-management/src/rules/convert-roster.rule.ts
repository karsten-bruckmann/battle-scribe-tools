import { Roster } from '@battle-scribe-tools/data-access/rosters';
import { Roster as BsRoster } from '@battle-scribe-tools/utility/rosz2js';
import { getDetachmentRules } from './get-detachment-rules.rule';
import { getUnitsRule } from './get-units.rule';

export const convertRoster = (bsRoster: BsRoster): Roster => {
  return {
    title: bsRoster.name,
    detachments: bsRoster.forces.map((bsForce) => ({
      title: bsForce.name,
      units: getUnitsRule(bsForce),
      rules: getDetachmentRules(bsForce),
    })),
  };
};
