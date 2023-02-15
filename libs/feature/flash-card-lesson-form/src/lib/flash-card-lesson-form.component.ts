import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  flashCardCreationSettingsForm,
  flashCardCreationSettingsFormTypeSafeValue,
  LearningService,
} from '@battle-scribe-tools/core/learning';
import { rosterListSelector } from '@battle-scribe-tools/core/roster-management';
import { IonicModule } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'bst-flash-card-lesson-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, IonicModule],
  templateUrl: './flash-card-lesson-form.component.html',
  styleUrls: ['./flash-card-lesson-form.component.scss'],
})
export class FlashCardLessonFormComponent {
  constructor(
    private learningService: LearningService,
    private store$: Store
  ) {}

  public form = flashCardCreationSettingsForm();
  public rosterList$ = this.store$.select(rosterListSelector);

  @Output() public lessonCreated = new EventEmitter<void>();

  public async create() {
    if (!this.form.valid) {
      return;
    }

    const value = flashCardCreationSettingsFormTypeSafeValue(this.form);
    if (!value) {
      return;
    }
    const rosterList = await firstValueFrom(this.rosterList$);
    this.learningService.createFlashCardDeck({
      ...value,
      name: rosterList[value.rosterIndex || 0].title,
    });
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
