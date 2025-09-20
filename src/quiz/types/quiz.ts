export interface Question {
  question: string;
  options: string[];
  correct: string;
}

export interface Answer {
  selected: string | null;
  correct: string;
  question: string;
}