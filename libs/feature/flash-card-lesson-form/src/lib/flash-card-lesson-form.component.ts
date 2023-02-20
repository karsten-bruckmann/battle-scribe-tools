import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  createDeckRequested,
  flashCardCreationSettingsForm,
  flashCardCreationSettingsFormTypeSafeValue,
  LearningModule,
} from '@battle-scribe-tools/core/learning';
import { rosterListSelector } from '@battle-scribe-tools/core/roster-management';
import { IonicModule } from '@ionic/angular';
import { Store } from '@ngrx/store';

@Component({
  selector: 'bst-flash-card-lesson-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, IonicModule, LearningModule],
  templateUrl: './flash-card-lesson-form.component.html',
  styleUrls: ['./flash-card-lesson-form.component.scss'],
})
export class FlashCardLessonFormComponent {
  constructor(private store$: Store) {}

  public form = flashCardCreationSettingsForm();
  public rosterList$ = this.store$.select(rosterListSelector);

  @Input() public set rosterId(id: string | null) {
    this.form.controls.rosterId.setValue(id);
  }

  @Output() public lessonCreated = new EventEmitter<void>();

  public async create() {
    if (!this.form.valid) {
      return;
    }

    const value = flashCardCreationSettingsFormTypeSafeValue(this.form);
    if (!value) {
      return;
    }
    this.store$.dispatch(
      createDeckRequested({
        settings: {
          ...value,
        },
      })
    );
    this.lessonCreated.next();
  }

  public setUnitProfiles(enabled: boolean) {
    this.form.controls.unitProfiles.controls.attacks.setValue(enabled);
    this.form.controls.unitProfiles.controls.ballisticSkill.setValue(enabled);
    this.form.controls.unitProfiles.controls.leadership.setValue(enabled);
    this.form.controls.unitProfiles.controls.movement.setValue(enabled);
    this.form.controls.unitProfiles.controls.save.setValue(enabled);
    this.form.controls.unitProfiles.controls.strength.setValue(enabled);
    this.form.controls.unitProfiles.controls.toughness.setValue(enabled);
    this.form.controls.unitProfiles.controls.weaponSkill.setValue(enabled);
    this.form.controls.unitProfiles.controls.wounds.setValue(enabled);
  }

  public setWeaponProfiles(enabled: boolean) {
    this.form.controls.weaponProfiles.controls.abilities.setValue(enabled);
    this.form.controls.weaponProfiles.controls.armourPenetration.setValue(
      enabled
    );
    this.form.controls.weaponProfiles.controls.damage.setValue(enabled);
    this.form.controls.weaponProfiles.controls.range.setValue(enabled);
    this.form.controls.weaponProfiles.controls.strength.setValue(enabled);
    this.form.controls.weaponProfiles.controls.type.setValue(enabled);
  }
}
