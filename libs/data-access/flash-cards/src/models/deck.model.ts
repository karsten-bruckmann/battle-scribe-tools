import { Card } from './card.model';

export interface Deck {
  name: string;
  boxes: number;
  cards: Record<string, Card>;
}
