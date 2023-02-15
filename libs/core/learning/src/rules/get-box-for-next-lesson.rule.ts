import { Deck } from '@battle-scribe-tools/data-access/flash-cards';

export const getBoxForNextLesson = (deck: Deck): number => {
  return Object.values(deck.cards).reduce(
    (box, card) => (card.box < box ? card.box : box),
    deck.boxes - 1
  );
};
