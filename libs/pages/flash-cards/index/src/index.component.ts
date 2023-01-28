import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  LearningModule,
  LearningService,
} from '@battle-scribe-tools/core/learning';
import {
  FlashCardCreationSettings,
  RosterModule,
  RosterService,
} from '@battle-scribe-tools/core/roster';
import { IonicModule } from '@ionic/angular';

interface SettingsForm {
  name: FormControl<string | null>;
  rules: FormControl<boolean | null>;
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

@Component({
  standalone: true,
  imports: [
    CommonModule,
    LearningModule,
    IonicModule,
    RouterModule,
    RosterModule,
    ReactiveFormsModule,
  ],
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent {
  constructor(
    private learningService: LearningService,
    private rosterService: RosterService
  ) {}

  public lessons$ = this.learningService.lessons$;
  public rosters$ = this.rosterService.list$;

  public rosterForNewDeck: number | null = null;

  public settingsForm = new FormGroup<SettingsForm>({
    name: new FormControl(''),
    boxes: new FormControl(3),
    rules: new FormControl(true),
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
  });

  public createDeck(): void {
    this.rosterService.createFlashCardDeck(
      this.rosterForNewDeck || 0,
      this.settingsForm.value as FlashCardCreationSettings
    );
  }
}
