import {
  Model,
  Prayer,
  Profile,
  PsychicPower,
  Rule,
  Unit,
  Weapon,
} from '@battle-scribe-tools/data-access/rosters';
import {
  AbilityProfile,
  Force as BsForce,
  Parser,
  PrayerProfile,
  PsychicPowerProfile,
  Selection as BsSelection,
  TypeName,
  UnitProfile,
  WeaponProfile,
} from '@battle-scribe-tools/utility/rosz2js';

export const createRoster = async (file: File) => {
  const parser = new Parser();
  const bsRoster = await parser.parse(file);
  return {
    title: bsRoster.name,
    detachments: bsRoster.forces.map((bsForce) => ({
      title: bsForce.name,
      units: getUnits(bsForce),
    })),
  };
};

export const getUnits = (detachment: BsForce): Unit[] => {
  return detachment.selections
    .filter((selection) => ['unit', 'model'].includes(selection.type))
    .map((selection) => ({
      title: selection.customName || selection.name,
      models: getModels(selection),
      rules: getUnitRules(detachment, selection),
    }));
};

export const getModels = (unit: BsSelection): Model[] => {
  if (unit.type === 'model') {
    return [
      {
        title: unit.customName || unit.name,
        amount: 1,
        profiles: getProfiles(unit),
        weapons: getWeapons(unit),
        psychicPowers: getPsychicPowers(unit),
        prayers: getPrayers(unit),
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
          };
        })
    );

  return deduplicateModels(models);
};

export const getProfiles = (unit: BsSelection): Profile[] => {
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

export const getWeapons = (unit: BsSelection): Weapon[] => {
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

export const getPsychicPowers = (unit: BsSelection): PsychicPower[] => {
  return unit.selections
    .filter(
      (selection) =>
        selection.type === 'upgrade' &&
        selection.profiles.filter(
          (profile): profile is PsychicPowerProfile =>
            profile.typeName === TypeName.PSYCHIC_POWER
        ).length > 0
    )
    .map((selection) => ({
      title: selection.customName || selection.name,
      profiles: selection.profiles
        .filter(
          (profile): profile is PsychicPowerProfile =>
            profile.typeName === TypeName.PSYCHIC_POWER
        )
        .map((profile) => ({
          title: profile.name,
          range: profile.range,
          warpCharge: profile.warpCharge,
          description: profile.details,
        })),
    }));
};

export const getPrayers = (unit: BsSelection): Prayer[] => {
  return unit.selections
    .filter(
      (selection) =>
        selection.type === 'upgrade' &&
        selection.profiles.filter(
          (profile): profile is PrayerProfile =>
            profile.typeName === TypeName.PRAYERS
        ).length > 0
    )
    .map((selection) => ({
      title: selection.customName || selection.name,
      profiles: selection.profiles
        .filter(
          (profile): profile is PrayerProfile =>
            profile.typeName === TypeName.PRAYERS
        )
        .map((profile) => ({
          title: profile.name,
          effect: profile.effect,
        })),
    }));
};

export const getUnitRules = (
  detachment: BsForce,
  unit: BsSelection
): Rule[] => {
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
    );
};

export const getAbilityProfiles = (
  selection: BsSelection | BsForce
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

  if (!isBsForce(selection)) {
    profiles = profiles.concat(
      selection.profiles.filter(
        (p): p is AbilityProfile => p.typeName === TypeName.ABILITY
      )
    );
  }

  return profiles;
};

export const deduplicateModels = (models: Model[]): Model[] => {
  const deduplicated: Record<string, Model> = {};
  models.forEach((model) => {
    const modelWithoutWeapons: Model = { ...model, weapons: [] };
    const hash = JSON.stringify(modelWithoutWeapons);
    if (!deduplicated[hash]) {
      deduplicated[hash] = model;
      return;
    }
    deduplicated[hash].amount++;
    model.weapons.forEach((weapon) => {
      const indexInDeduplicated = deduplicated[hash].weapons.findIndex(
        (w) => weapon.title === w.title
      );
      if (indexInDeduplicated === -1) {
        deduplicated[hash].weapons.push(weapon);
        return;
      }

      deduplicated[hash].weapons[indexInDeduplicated].amount++;
    });
  });
  return Object.values(deduplicated);
};

function isBsForce(selection: BsForce | BsSelection): selection is BsForce {
  // eslint-disable-next-line no-prototype-builtins
  return !selection.hasOwnProperty('profiles');
}
