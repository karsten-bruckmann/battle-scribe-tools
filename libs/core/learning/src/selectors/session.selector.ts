import { deckSelector } from '@battle-scribe-tools/data-access/flash-cards';
import { learningSessionsSelector } from '@battle-scribe-tools/data-access/learnig-sessions';
import { createSelector } from '@ngrx/store';
import { Session } from '../models/session.model';
import { createSession } from '../rules/create-session.rule';
import { getBoxForNextLesson } from '../rules/get-box-for-next-lesson.rule';
import { getNextCard } from '../rules/get-next-card.rule';
import { getRemainingCardsInLesson } from '../rules/get-remaining-cards-in-lesson.rule';

export const sessionSelector = (deckId: string) =>
  createSelector(
    learningSessionsSelector,
    deckSelector(deckId),
    (sessions, deck): Session | null => {
      if (!deck || Object.keys(deck.cards).length === 0) {
        return null;
      }
      const currentSession = sessions.find(
        (session) => session.deckId === deckId
      );
      if (currentSession) {
        const currentCard = getNextCard(
          currentSession.box,
          currentSession.finishedCards,
          deck
        );
        if (!currentCard) {
          return createSession(deckId, deck);
        }
        return {
          ...currentSession,
          currentCard,
          remainingCards: getRemainingCardsInLesson(
            currentSession.finishedCards,
            deck,
            currentSession.box
          ).length,
          box: getBoxForNextLesson(deck),
        };
      }

      return createSession(deckId, deck);
    }
  );
