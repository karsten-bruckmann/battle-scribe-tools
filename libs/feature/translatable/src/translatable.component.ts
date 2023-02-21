import { CommonModule } from '@angular/common';
import {
  Component,
  Inject,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { TranslationsService } from '@battle-scribe-tools/data-access/translations';
import { IonicModule } from '@ionic/angular';
import {
  BehaviorSubject,
  combineLatest,
  map,
  Observable,
  shareReplay,
} from 'rxjs';
import { TRANSLATION_MODE_DISABLED } from './translation-mode-disabled.injection-token';

@Component({
  selector: 'bst-translatable',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './translatable.component.html',
  styleUrls: ['./translatable.component.scss'],
})
export class TranslatableComponent implements OnChanges {
  constructor(
    private translationService: TranslationsService,
    private domSanitizer: DomSanitizer,
    @Inject(TRANSLATION_MODE_DISABLED) public translationModeDisabled: boolean
  ) {}

  @Input() public set text(text: string) {
    this.original = text;
    this.hasTextChars$.next(!!text.match('[a-zA-Z]+'));
    return;
  }

  @Input() public translateOnClick = true;

  public original = '';

  public translation$?: Observable<string>;

  private hasTextChars$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  public editable$ = combineLatest([
    this.translationService.translationsEditMode$,
    this.translationService.translatable$,
    this.hasTextChars$,
  ]).pipe(
    map(
      ([editMode, translatable, hasTextChars]) =>
        editMode && translatable && hasTextChars
    )
  );

  ngOnChanges(changes: SimpleChanges): void {
    const textChange = changes['text'];
    if (textChange) {
      this.translation$ = this.translationService
        .getTranslation(textChange.currentValue)
        .pipe(shareReplay(1));
    }
  }

  public translate(original: string, translation: string | null | undefined) {
    this.translationService.translate(original, translation || '');
  }

  public listify(text: string): SafeHtml {
    let beautified = text.replaceAll('<', '&lt;').replaceAll('>', '&gt;');
    [...text.matchAll(/(?:(?:^|\n)(?:- [^\n]+(?:\n|$)*)+)/gm)].forEach(
      (match) => {
        beautified = beautified.replace(
          match[0],
          `<ul>${match[0].replaceAll(
            /(?:^|\n)- (.*)(?:\n|$)/gm,
            '<li>$1</li>'
          )}</ul>`
        );
      }
    );
    return this.domSanitizer.bypassSecurityTrustHtml(beautified);
  }
}
