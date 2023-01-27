export interface Session {
  deckName: string;
  currentCard: {
    question: string;
    answer: string | null;
  } | null;
  showAnswer: () => void;
  markCorrect: () => void;
  markIncorrect: () => void;
  skip: () => void;
}
