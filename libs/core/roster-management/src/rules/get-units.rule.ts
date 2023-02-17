import { Unit } from '@battle-scribe-tools/data-access/rosters';
import { Category, Force } from '@battle-scribe-tools/utility/rosz2js';
import { getModels } from './get-models.rule';
import { getUnitRules } from './get-unit-rules.rule';

const primariesFirst = (a: Category, b: Category): 1 | 0 | -1 => {
  if (a.primary === b.primary) {
    return 0;
  }
  if (a.primary) {
    return -1;
  }
  return 1;
};

export const getUnitsRule = (detachment: Force): Unit[] => {
  return detachment.selections
    .filter((selection) => ['unit', 'model'].includes(selection.type))
    .map((selection) => ({
      title: selection.customName || selection.name,
      keywords: selection.categories.sort(primariesFirst).map((c) => c.name),
      models: getModels(selection),
      rules: getUnitRules(detachment, selection),
    }));
};
