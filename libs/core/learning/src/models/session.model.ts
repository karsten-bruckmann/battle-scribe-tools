import { LearningSession } from '@battle-scribe-tools/data-access/learnnig-sessions';

export interface Session extends LearningSession {
  remainingCards: number;
  currentCard: {
    id: string;
    question: string;
    rules: string[];
    answers: string[];
  };
}
