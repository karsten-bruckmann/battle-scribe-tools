import { Model } from '@battle-scribe-tools/data-access/rosters';
import { Selection } from '@battle-scribe-tools/utility/rosz2js';
import { deduplicateModels } from './deduplicate-models.rule';
import { getMutations } from './get-mutations.rule';
import { getPrayers } from './get-prayers.rule';
import { getProfiles } from './get-profiles.rule';
import { getPsychicPowers } from './get-psychic-powers.rule';
import { getWeapons } from './get-weapons.rule';

export const getModels = (unit: Selection): Model[] => {
  if (unit.type === 'model') {
    return [
      {
        title: unit.customName || unit.name,
        amount: 1,
        profiles: getProfiles(unit),
        weapons: getWeapons(unit),
        psychicPowers: getPsychicPowers(unit),
        prayers: getPrayers(unit),
        mutations: getMutations(unit),
      },
    ];
  }

  const unitProfiles = getProfiles(unit);

  const models = unit.profiles
    .filter((profile) => ['Unit'].includes(profile.typeName))
    .map((profile) => {
      return {
        title: profile.name,
        amount: 1,
        profiles: getProfiles(unit),
        weapons: getWeapons(unit),
        psychicPowers: getPsychicPowers(unit),
        prayers: getPrayers(unit),
        mutations: getMutations(unit),
      };
    })
    .concat(
      unit.selections
        .filter((selection) => ['unit', 'model'].includes(selection.type))
        .map((selection) => {
          const modelProfiles = getProfiles(selection);
          const profiles =
            modelProfiles.length > 0 ? modelProfiles : unitProfiles;
          return {
            title: selection.customName || selection.name,
            amount: selection.number,
            profiles: profiles,
            weapons: getWeapons(selection),
            psychicPowers: getPsychicPowers(selection),
            prayers: getPrayers(selection),
            mutations: getMutations(unit, selection),
          };
        })
    );

  return deduplicateModels(models);
};
