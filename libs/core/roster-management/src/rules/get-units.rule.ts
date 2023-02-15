import { Unit } from '@battle-scribe-tools/data-access/rosters';
import { Force } from '@battle-scribe-tools/utility/rosz2js';
import { getModels } from './get-models.rule';
import { getUnitRules } from './get-unit-rules.rule';

export const getUnitsRule = (detachment: Force): Unit[] => {
  return detachment.selections
    .filter((selection) => ['unit', 'model'].includes(selection.type))
    .map((selection) => ({
      title: selection.customName || selection.name,
      models: getModels(selection),
      rules: getUnitRules(detachment, selection),
    }));
};
