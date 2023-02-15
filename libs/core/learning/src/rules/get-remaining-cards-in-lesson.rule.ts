import { Deck } from '@battle-scribe-tools/data-access/flash-cards';

export const getRemainingCardsInLesson = (
  finishedCards: string[],
  deck: Deck,
  box: number
): string[] => {
  return Object.keys(deck.cards).filter(
    (cardId) =>
      !finishedCards.includes(cardId) && deck.cards[cardId].box === box
  );
};
