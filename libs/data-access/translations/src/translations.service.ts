import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  filter,
  firstValueFrom,
  map,
  Observable,
  startWith,
  Subject,
  switchMap,
} from 'rxjs';
import { Md5 } from 'ts-md5';
import { Language } from './language';
import {
  loadTranslation,
  translationsStorageKeyPrefix,
  writeTranslation,
} from './translation.loader';

@Injectable({ providedIn: 'root' })
export class TranslationsService {
  private readonly languageStorageKey = 'language-v2';

  private _updatedTexts$: Subject<string> = new Subject();
  public updatedTexts$ = this._updatedTexts$.asObservable();

  public readonly languages: Record<Language, { flag: string; name: string }> =
    {
      en: { flag: '🇬🇧', name: 'English' },
      de: { flag: '🇩🇪', name: 'Deutsch' },
      fr: { flag: '🇫🇷', name: 'Français' },
      es: { flag: '🇪🇸', name: 'Español' },
    };

  public readonly selectedLanguage$: BehaviorSubject<Language> =
    new BehaviorSubject(
      (localStorage.getItem(this.languageStorageKey) || 'de') as Language
    );

  public readonly translatable$: Observable<boolean> =
    this.selectedLanguage$.pipe(map((language) => 'en' !== language));

  private _translationsEditMode$ = new BehaviorSubject<boolean>(
    localStorage.getItem('translationsEditMode') ? true : false
  );

  public setLanguage(language: Language): void {
    localStorage.setItem(this.languageStorageKey, language);
    this.selectedLanguage$.next(language);
  }

  public getTranslation(original: string): Observable<string> {
    const md5 = Md5.hashStr(original);
    return this.selectedLanguage$.pipe(
      switchMap((language) =>
        this.updatedTexts$.pipe(
          startWith(md5),
          filter((hash) => hash === md5),
          map(() => loadTranslation(original, language))
        )
      )
    );
  }

  public async translate(
    original: string,
    translation: string | null,
    translationLanguage?: Language
  ): Promise<void> {
    const language =
      translationLanguage || (await firstValueFrom(this.selectedLanguage$));

    const md5 = writeTranslation(original, translation, language);
    this._updatedTexts$.next(md5);
  }

  public export(): void {
    const data = this.getAllTranslations();
    const a = document.createElement('a');
    const json = JSON.stringify(data);
    const blob = new Blob([json], { type: 'octet/stream' });
    const url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = 'translations.json';
    a.click();
    window.URL.revokeObjectURL(url);
  }

  public async import(file: File): Promise<void> {
    const importedJson = await file.text();
    const imported: Record<string, string> = JSON.parse(importedJson);
    Object.entries(imported).forEach(([key, value]) => {
      const md5 = key.match(/[0-9a-f]{32}$/)?.[0];
      if (!md5) {
        return;
      }
      localStorage.setItem(key, value);
      this._updatedTexts$.next(md5);
    });
  }

  private getAllTranslations(): Record<string, string> {
    const all: Record<string, string> = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (!key) {
        continue;
      }
      if (
        !key.match(
          new RegExp(
            `^${translationsStorageKeyPrefix}(en|de|fr|es)-[0-9a-f]{32}`
          )
        )
      ) {
        continue;
      }

      all[key] = localStorage.getItem(key) || '';
    }
    return all;
  }

  public get translationsEditMode$() {
    return this._translationsEditMode$.asObservable();
  }

  public setTranslationsEditMode(enabled: boolean) {
    this._translationsEditMode$.next(enabled);
    if (enabled) {
      localStorage.setItem('translationsEditMode', 'enabled');
    } else {
      localStorage.removeItem('translationsEditMode');
    }
  }
}
