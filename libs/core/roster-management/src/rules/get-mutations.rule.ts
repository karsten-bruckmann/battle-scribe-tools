import { Mutation } from '@battle-scribe-tools/data-access/rosters';
import {
  MutatedBeyondReasonProfile,
  Selection,
  TypeName,
} from '@battle-scribe-tools/utility/rosz2js';

export const getMutations = (
  unit: Selection,
  model?: Selection
): Mutation[] => {
  return unit.profiles
    .concat(model?.selections.map((s) => s.profiles).flat() || [])
    .filter(
      (profile): profile is MutatedBeyondReasonProfile =>
        profile.typeName === TypeName.MUTATED_BEYOND_REASON
    )
    .map((profile) => ({
      title: profile.name,
      effect: profile.effect,
    }));
};
