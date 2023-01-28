export interface Session {
  deckName: string;
  currentCard: {
    question: string;
    answer: string | null;
    box: number;
  } | null;
  box: number;
  maxBox: number;
  remainingCards: number;
  showAnswer: () => void;
  markCorrect: () => void;
  markIncorrect: () => void;
  skip: () => void;
}
