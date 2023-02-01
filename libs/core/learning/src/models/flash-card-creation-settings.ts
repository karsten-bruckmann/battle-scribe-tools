export interface FlashCardCreationSettings {
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
  boxes: number;
  name: string;
}
