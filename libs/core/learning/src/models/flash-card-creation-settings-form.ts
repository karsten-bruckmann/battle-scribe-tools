import { FormControl, FormGroup } from '@angular/forms';

export interface FlashCardCreationSettingsForm {
  rosterId: FormControl<string | null>;
  name: FormControl<string | null>;
  rules: FormControl<boolean | null>;
  unitRules: FormControl<boolean | null>;
  psychicPowers: FormControl<boolean | null>;
  unitPsychicPowers: FormControl<boolean | null>;
  boxes: FormControl<number | null>;
  unitProfiles: FormGroup<{
    movement: FormControl<boolean | null>;
    weaponSkill: FormControl<boolean | null>;
    ballisticSkill: FormControl<boolean | null>;
    strength: FormControl<boolean | null>;
    toughness: FormControl<boolean | null>;
    wounds: FormControl<boolean | null>;
    attacks: FormControl<boolean | null>;
    leadership: FormControl<boolean | null>;
    save: FormControl<boolean | null>;
  }>;
  weaponProfiles: FormGroup<{
    range: FormControl<boolean | null>;
    type: FormControl<boolean | null>;
    strength: FormControl<boolean | null>;
    armourPenetration: FormControl<boolean | null>;
    damage: FormControl<boolean | null>;
    abilities: FormControl<boolean | null>;
  }>;
}
