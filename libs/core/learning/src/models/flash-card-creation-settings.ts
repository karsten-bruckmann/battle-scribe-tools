/* eslint-disable @typescript-eslint/no-explicit-any */
export interface FlashCardCreationSettings {
  rosterId: string;
  unitProfiles: {
    movement: boolean;
    weaponSkill: boolean;
    ballisticSkill: boolean;
    strength: boolean;
    toughness: boolean;
    wounds: boolean;
    attacks: boolean;
    leadership: boolean;
    save: boolean;
  };
  weaponProfiles: {
    range: boolean;
    type: boolean;
    strength: boolean;
    armourPenetration: boolean;
    damage: boolean;
    abilities: boolean;
  };
  rules: boolean;
  unitRules: boolean;
  psychicPowers: boolean;
  unitPsychicPowers: boolean;
  boxes: number;
  name: string;
}

export function isFlashCardCreationSettings(
  value: unknown
): value is FlashCardCreationSettings {
  if (value === null) {
    return false;
  }
  if (typeof value !== 'object') {
    return false;
  }
  if (Object.keys(value).length !== 9) {
    return false;
  }
  if (typeof (value as any)['rosterId'] !== 'string') {
    return false;
  }
  if (typeof (value as any)['unitProfiles'] !== 'object') {
    return false;
  }
  if (Object.keys((value as any)['unitProfiles']).length !== 9) {
    return false;
  }
  if (typeof (value as any)['unitProfiles']['movement'] !== 'boolean') {
    return false;
  }
  if (typeof (value as any)['unitProfiles']['weaponSkill'] !== 'boolean') {
    return false;
  }
  if (typeof (value as any)['unitProfiles']['ballisticSkill'] !== 'boolean') {
    return false;
  }
  if (typeof (value as any)['unitProfiles']['strength'] !== 'boolean') {
    return false;
  }
  if (typeof (value as any)['unitProfiles']['toughness'] !== 'boolean') {
    return false;
  }
  if (typeof (value as any)['unitProfiles']['wounds'] !== 'boolean') {
    return false;
  }
  if (typeof (value as any)['unitProfiles']['attacks'] !== 'boolean') {
    return false;
  }
  if (typeof (value as any)['unitProfiles']['leadership'] !== 'boolean') {
    return false;
  }
  if (typeof (value as any)['unitProfiles']['save'] !== 'boolean') {
    return false;
  }
  if (typeof (value as any)['weaponProfiles'] !== 'object') {
    return false;
  }
  if (Object.keys((value as any)['weaponProfiles']).length !== 6) {
    return false;
  }
  if (typeof (value as any)['weaponProfiles']['range'] !== 'boolean') {
    return false;
  }
  if (typeof (value as any)['weaponProfiles']['type'] !== 'boolean') {
    return false;
  }
  if (typeof (value as any)['weaponProfiles']['strength'] !== 'boolean') {
    return false;
  }
  if (
    typeof (value as any)['weaponProfiles']['armourPenetration'] !== 'boolean'
  ) {
    return false;
  }
  if (typeof (value as any)['weaponProfiles']['damage'] !== 'boolean') {
    return false;
  }
  if (typeof (value as any)['weaponProfiles']['abilities'] !== 'boolean') {
    return false;
  }
  if (typeof (value as any)['rules'] !== 'boolean') {
    return false;
  }
  if (typeof (value as any)['unitRules'] !== 'boolean') {
    return false;
  }
  if (typeof (value as any)['psychicPowers'] !== 'boolean') {
    return false;
  }
  if (typeof (value as any)['unitPsychicPowers'] !== 'boolean') {
    return false;
  }
  if (typeof (value as any)['boxes'] !== 'number') {
    return false;
  }
  if (typeof (value as any)['name'] !== 'string') {
    return false;
  }

  return true;
}
