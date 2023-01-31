import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslationsService } from '@battle-scribe-tools/data-access/translations';
import { ActionSheetController, IonicModule } from '@ionic/angular';
import { map } from 'rxjs';

@Component({
  selector: 'translation-settings',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './translation-settings.component.html',
  styleUrls: ['./translation-settings.component.scss'],
})
export class TranslationConfigComponent {
  constructor(
    public translationsService: TranslationsService,
    private actionSheetCtrl: ActionSheetController
  ) {}

  public flags = this.translationsService.languages;
  public selectedFlag$ = this.translationsService.selectedLanguage$.pipe(
    map((language) => this.flags[language].flag)
  );

  public async selectLanguage(): Promise<void> {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Sprache wählen',
      buttons: Object.keys(this.flags).map((flag) => ({
        text:
          this.flags[flag as keyof typeof this.flags].flag +
          ' ' +
          this.flags[flag as keyof typeof this.flags].name,
        handler: () => {
          this.translationsService.setLanguage(flag as keyof typeof this.flags);
        },
      })),
    });

    actionSheet.present();
  }

  public exportTranslations(): void {
    this.translationsService.export();
  }

  public async importTranslations(event: Event): Promise<void> {
    const target = event.target as HTMLInputElement;
    const files = target.files;
    if (!target || !files) {
      return;
    }
    const file: File = files[0];
    if (!file) {
      return;
    }
    this.translationsService.import(file);
  }
}
