import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RosterModule, RosterService } from '@battle-scribe-tools/core/roster';
import { TranslationConfigComponent } from '@battle-scribe-tools/feature/translation-settings';
import { IonicModule } from '@ionic/angular';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    IonicModule,
    RosterModule,
    TranslationConfigComponent,
  ],
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent {
  constructor(private rostersService: RosterService) {}

  public rosterTitles$ = this.rostersService.list$;

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
    await this.rostersService.addRoster(file);
  }

  public deleteRoster(index: number): void {
    this.rostersService.deleteRoster(index);
  }
}
