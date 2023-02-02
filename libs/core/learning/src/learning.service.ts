import { Injectable } from '@angular/core';
import {
  deckAddedAction,
  deckDeletedAction,
  deckSelector,
  movedToBoxAction,
} from '@battle-scribe-tools/data-access/flash-cards';
import { Store } from '@ngrx/store';
import { firstValueFrom } from 'rxjs';
import { FlashCardCreationSettings } from './models/flash-card-creation-settings';
import { Session } from './models/session.model';
import { lessonsSelector } from './selectors/lessons.selector';
import { rosterFlashCardDeckSelector } from './selectors/roster-flash-card-deck.selector';

@Injectable({ providedIn: 'root' })
export class LearningService {
  constructor(private store$: Store) {}

  public get lessons$() {
    return this.store$.select(lessonsSelector);
  }

  public deleteDeck(index: number): void {
    this.store$.dispatch(deckDeletedAction({ index }));
  }

  public async createFlashCardDeck(
    rosterIndex: number,
    settings: FlashCardCreationSettings
  ): Promise<void> {
    const deck = await firstValueFrom(
      this.store$.select(rosterFlashCardDeckSelector(rosterIndex, settings))
    );
    this.store$.dispatch(deckAddedAction({ deck }));
  }

  public async getSession(index: number): Promise<Session> {
    const sortedDeck = await firstValueFrom(
      this.store$.select(deckSelector(index))
    );
    if (!sortedDeck) {
      throw new Error('No Deck');
    }
    const currentBox = [...sortedDeck.cards].reduce(
      (firstBox, card) => (card.box < firstBox ? card.box : firstBox),
      sortedDeck.boxes
    );
    if (currentBox === sortedDeck.boxes) {
      return {
        deckName: sortedDeck.name,
        currentCard: null,
        box: currentBox,
        maxBox: sortedDeck.boxes - 1,
        remainingCards: sortedDeck.cards.length,
        showAnswer: () => {
          return;
        },
        skip: () => {
          return;
        },
        markCorrect: () => {
          return;
        },
        markIncorrect: () => {
          return;
        },
      };
    }
    const deck = [...sortedDeck.cards]
      .sort(() => 0.5 - Math.random())
      .filter((c) => c.box === currentBox);
    let currentCard = deck.pop();
    const session: Session = {
      deckName: sortedDeck.name,
      box: currentBox,
      maxBox: sortedDeck.boxes - 1,
      remainingCards: deck.length + 1,
      currentCard: currentCard
        ? {
            question: currentCard.question,
            rules: currentCard.rules,
            answers: null,
            box: currentCard.box,
          }
        : null,
      showAnswer: () => {
        if (!currentCard || !session.currentCard) {
          return;
        }
        session.currentCard.answers = currentCard.answers;
      },
      markCorrect: () => {
        if (!currentCard || !session.currentCard) {
          return;
        }
        this.store$.dispatch(
          movedToBoxAction({
            deckIndex: index,
            cardIndex: sortedDeck.cards.findIndex(
              (c) =>
                c.question === currentCard?.question &&
                JSON.stringify(c.rules) === JSON.stringify(currentCard.rules)
            ),
            box: currentCard?.box + 1,
          })
        );
        session.skip();
      },
      markIncorrect: () => {
        if (!currentCard || !session.currentCard) {
          return;
        }
        this.store$.dispatch(
          movedToBoxAction({
            deckIndex: index,
            cardIndex: sortedDeck.cards.findIndex(
              (c) =>
                c.question === currentCard?.question &&
                JSON.stringify(c.rules) === JSON.stringify(currentCard.rules)
            ),
            box: 0,
          })
        );
        session.skip();
      },
      skip: () => {
        currentCard = deck.pop();
        if (!session.currentCard) {
          return;
        }
        session.currentCard = currentCard
          ? {
              ...session.currentCard,
              question: currentCard.question,
              rules: currentCard.rules,
              answers: null,
            }
          : null;
        session.remainingCards = deck.length + (currentCard ? 1 : 0);
      },
    };
    return session;
  }
}
