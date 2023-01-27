import { Injectable } from '@angular/core';
import { deckSelector } from '@battle-scribe-tools/data-access/flash-cards';
import { Store } from '@ngrx/store';
import { firstValueFrom } from 'rxjs';
import { Session } from './models/session.model';
import { lessonsSelector } from './selectors/lessons.selector';

@Injectable({ providedIn: 'root' })
export class LearningService {
  constructor(private store$: Store) {}

  public get lessons$() {
    return this.store$.select(lessonsSelector);
  }

  public async getSession(index: number): Promise<Session> {
    const sortedDeck = await firstValueFrom(
      this.store$.select(deckSelector(index))
    );
    if (!sortedDeck) {
      throw new Error('No Deck');
    }
    const deck = [...sortedDeck.cards].sort((a, b) => 0.5 - Math.random());
    let currentCard = deck.pop();
    const session: Session = {
      deckName: sortedDeck.name,
      currentCard: currentCard
        ? {
            question: currentCard?.question,
            answer: null,
          }
        : null,
      showAnswer: () => {
        if (!currentCard || !session.currentCard) {
          return;
        }
        session.currentCard.answer = currentCard.answer;
      },
      markCorrect: () => {
        session.skip();
      },
      markIncorrect: () => {
        session.skip();
      },
      skip: () => {
        currentCard = deck.pop();
        if (!currentCard || !session.currentCard) {
          return;
        }
        session.currentCard.answer = null;
        session.currentCard.question = currentCard.question;
      },
    };
    return session;
  }
}
