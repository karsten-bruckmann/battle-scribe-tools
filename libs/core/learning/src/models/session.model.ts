export interface Session {
  deckName: string;
  currentCard: {
    question: string;
    rules: string[];
    answers: string[] | null;
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
