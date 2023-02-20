import { Card } from './card.model';

export interface Deck {
  reference?: string;
  boxes: number;
  cards: Record<string, Card>;
}
