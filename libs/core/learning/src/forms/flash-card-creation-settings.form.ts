import { FormControl, FormGroup } from '@angular/forms';
import {
  FlashCardCreationSettings,
  isFlashCardCreationSettings,
} from '../models/flash-card-creation-settings';
import { FlashCardCreationSettingsForm } from '../models/flash-card-creation-settings-form';

export const flashCardCreationSettingsForm = () =>
  new FormGroup<FlashCardCreationSettingsForm>(
    {
      rosterIndex: new FormControl(0),
      name: new FormControl(''),
      boxes: new FormControl(3),
      rules: new FormControl(true),
      unitRules: new FormControl(true),
      unitProfiles: new FormGroup({
        attacks: new FormControl(true),
        ballisticSkill: new FormControl(true),
        leadership: new FormControl(true),
        movement: new FormControl(true),
        save: new FormControl(true),
        strength: new FormControl(true),
        toughness: new FormControl(true),
        weaponSkill: new FormControl(true),
        wounds: new FormControl(true),
      }),
      weaponProfiles: new FormGroup({
        abilities: new FormControl(true),
        armourPenetration: new FormControl(true),
        damage: new FormControl(true),
        range: new FormControl(true),
        strength: new FormControl(true),
        type: new FormControl(true),
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
