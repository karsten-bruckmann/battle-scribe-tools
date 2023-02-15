import { Deck } from '@battle-scribe-tools/data-access/flash-cards';
import { Session } from '../models/session.model';
import { getRemainingCardsInLesson } from './get-remaining-cards-in-lesson.rule';

export const getNextCard = (
  box: number,
  finishedCards: string[],
  deck: Deck
): Session['currentCard'] | null => {
  const remainingCards = getRemainingCardsInLesson(finishedCards, deck, box);
  if (remainingCards.length === 0) {
    return null;
  }
  const nextCardId =
    remainingCards[Math.floor(Math.random() * remainingCards.length)];
  const nextCard = deck.cards[nextCardId];
  return {
    id: nextCardId,
    answers: nextCard.answers,
    question: nextCard.question,
    rules: nextCard.rules,
  };
};
