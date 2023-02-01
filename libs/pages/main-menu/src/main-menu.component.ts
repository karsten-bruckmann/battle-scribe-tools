import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  FlashCardCreationSettings,
  LearningModule,
  LearningService,
} from '@battle-scribe-tools/core/learning';
import { RosterModule, RosterService } from '@battle-scribe-tools/core/roster';
import { TranslationConfigComponent } from '@battle-scribe-tools/feature/translation-settings';
import { IonicModule } from '@ionic/angular';
import { firstValueFrom } from 'rxjs';

interface SettingsForm {
  roster: FormControl<number | null>;
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
    RouterModule,
    IonicModule,
    RosterModule,
    LearningModule,
    TranslationConfigComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent {
  constructor(
    private rostersService: RosterService,
    private learningService: LearningService
  ) {}

  public rosterTitles$ = this.rostersService.list$;
  public lessons$ = this.learningService.lessons$;

  @ViewChild('modal') public modal?: HTMLIonModalElement;

  public rosterForNewDeck: number | null = null;

  public settingsForm = new FormGroup<SettingsForm>({
    roster: new FormControl(0),
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

  public async saveFile(event: Event): Promise<void> {
    const target = event.target as HTMLInputElement;
    const files = target.files;
    if (!target || !files) {
      return;
    }
    const file: File = files[0];
    if (!file) {
      return;
    }
    await this.rostersService.addRoster(file);
  }

  public deleteRoster(index: number): void {
    this.rostersService.deleteRoster(index);
  }

  public deleteDeck(index: number): void {
    this.learningService.deleteDeck(index);
  }

  public async createDeck(): Promise<void> {
    const rosterTitles = await firstValueFrom(this.rosterTitles$);
    this.learningService.createFlashCardDeck(
      this.settingsForm.value.roster || 0,
      {
        ...(this.settingsForm.value as FlashCardCreationSettings),
        name: rosterTitles[this.settingsForm.value.roster || 0],
      }
    );
  }
}
