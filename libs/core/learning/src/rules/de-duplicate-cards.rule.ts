import { Card } from '@battle-scribe-tools/data-access/flash-cards';

export const deDuplicateCardsRule = (cards: Card[]): Card[] =>
  cards.filter(
    (card, index) =>
      index ===
      cards.findIndex(
        (c) =>
          c.question === card.question &&
          c.answers.join() === card.answers.join()
      )
  );
