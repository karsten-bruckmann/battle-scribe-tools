import { Deck } from '@battle-scribe-tools/data-access/flash-cards';
import { Session } from '../models/session.model';
import { getBoxForNextLesson } from './get-box-for-next-lesson.rule';
import { getNextCard } from './get-next-card.rule';
import { getRemainingCardsInLesson } from './get-remaining-cards-in-lesson.rule';

export const createSession = (deckId: string, deck: Deck): Session | null => {
  const box = getBoxForNextLesson(deck);
  if (box === deck.boxes - 1) {
    return null;
  }
  const currentCard = getNextCard(box, [], deck);
  if (!currentCard) {
    throw new Error('no card found');
  }
  return {
    deckId,
    box,
    finishedCards: [],
    remainingCards: getRemainingCardsInLesson([], deck, box).length,
    currentCard,
  };
};
