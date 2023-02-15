import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  deckDeletionRequested,
  LearningModule,
  lessonsSelector,
} from '@battle-scribe-tools/core/learning';
import {
  rosterDeletionRequested,
  rosterDownloadRequested,
  rosterFileAdded,
  rosterListSelector,
  RosterManagementModule,
  rosterUpdateRequested,
} from '@battle-scribe-tools/core/roster-management';
import { FlashCardLessonFormComponent } from '@battle-scribe-tools/feature/flash-card-lesson-form';
import { TranslationConfigComponent } from '@battle-scribe-tools/feature/translation-settings';
import { IonicModule } from '@ionic/angular';
import { Store } from '@ngrx/store';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    IonicModule,
    RosterManagementModule,
    LearningModule,
    TranslationConfigComponent,
    FlashCardLessonFormComponent,
  ],
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent {
  constructor(private store$: Store) {}

  public rosterList$ = this.store$.select(rosterListSelector);
  public lessons$ = this.store$.select(lessonsSelector);

  @ViewChild('modal') public modal?: HTMLIonModalElement;

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
    this.store$.dispatch(rosterFileAdded({ file }));
  }

  public linkFile(url: string): void {
    this.store$.dispatch(rosterDownloadRequested({ url }));
  }

  public async updateFile(rosterIndex: number): Promise<void> {
    this.store$.dispatch(rosterUpdateRequested({ rosterIndex }));
  }

  public deleteRoster(rosterIndex: number): void {
    this.store$.dispatch(rosterDeletionRequested({ rosterIndex }));
  }

  public deleteDeck(index: number): void {
    this.store$.dispatch(deckDeletionRequested({ index }));
  }
}
