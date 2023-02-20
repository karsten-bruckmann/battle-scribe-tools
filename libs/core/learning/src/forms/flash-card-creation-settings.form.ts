import { FormControl, FormGroup } from '@angular/forms';
import {
  FlashCardCreationSettings,
  isFlashCardCreationSettings,
} from '../models/flash-card-creation-settings';
import { FlashCardCreationSettingsForm } from '../models/flash-card-creation-settings-form';

export const flashCardCreationSettingsForm = () =>
  new FormGroup<FlashCardCreationSettingsForm>(
    {
      rosterId: new FormControl(null),
      boxes: new FormControl(4),
      rules: new FormControl(true),
      unitRules: new FormControl(true),
      psychicPowers: new FormControl(true),
      unitPsychicPowers: new FormControl(true),
      unitProfiles: new FormGroup({
        attacks: new FormControl(false),
        ballisticSkill: new FormControl(false),
        leadership: new FormControl(false),
        movement: new FormControl(false),
        save: new FormControl(false),
        strength: new FormControl(false),
        toughness: new FormControl(false),
        weaponSkill: new FormControl(false),
        wounds: new FormControl(false),
      }),
      weaponProfiles: new FormGroup({
        abilities: new FormControl(false),
        armourPenetration: new FormControl(false),
        damage: new FormControl(false),
        range: new FormControl(false),
        strength: new FormControl(false),
        type: new FormControl(false),
      }),
    },
    (form) =>
      isFlashCardCreationSettings(form.value) ? null : { invalid: true }
  );

export const flashCardCreationSettingsFormTypeSafeValue = (
  form: FormGroup<FlashCardCreationSettingsForm>
): FlashCardCreationSettings | null => {
  const value = form.value;
  if (value === null || !isFlashCardCreationSettings(value)) {
    return null;
  }

  return value;
};
