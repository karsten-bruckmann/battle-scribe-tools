import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import {
  cardKnown,
  cardNotKnown,
  cardSkipped,
  decksListSelector,
  LearningModule,
  Session,
  sessionSelector,
} from '@battle-scribe-tools/core/learning';
import { TranslatableComponent } from '@battle-scribe-tools/feature/translatable';
import { filterNullValues } from '@battle-scribe-tools/utility/ngrx-utils';
import { IonicModule } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { filter, map, shareReplay, switchMap } from 'rxjs';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    LearningModule,
    RouterModule,
    IonicModule,
    TranslatableComponent,
  ],
  templateUrl: './flash-card-lesson.component.html',
  styleUrls: ['./flash-card-lesson.component.scss'],
})
export class FlashCardLessonComponent {
  constructor(private activatedRoute: ActivatedRoute, private store$: Store) {}

  public session$ = this.activatedRoute.paramMap.pipe(
    map((map) => map.get('deck-id')),
    filter((deckId): deckId is string => null !== deckId),
    switchMap((deckId) => this.store$.select(sessionSelector(deckId))),
    shareReplay({ refCount: true, bufferSize: 1 })
  );

  public deck$ = this.session$.pipe(
    filterNullValues(),
    switchMap((session) =>
      this.store$
        .select(decksListSelector)
        .pipe(
          map((decks) => decks.find((deck) => deck.deckId === session.deckId))
        )
    )
  );

  public answerHidden = true;
  public isFinished = false;

  public known(session: Session): void {
    this.answerHidden = true;
    if (session.remainingCards === 1) {
      this.isFinished = true;
    }
    this.store$.dispatch(cardKnown({ session }));
  }

  public notKnown(session: Session): void {
    this.answerHidden = true;
    if (session.remainingCards === 1) {
      this.isFinished = true;
    }
    this.store$.dispatch(cardNotKnown({ session }));
  }

  public skipped(session: Session): void {
    this.answerHidden = true;
    if (session.remainingCards === 1) {
      this.isFinished = true;
    }
    this.store$.dispatch(cardSkipped({ session }));
  }

  public continue(): void {
    this.isFinished = false;
  }
}
