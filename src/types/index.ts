
export type QuestionDifficulty = "Fácil" | "Médio" | "Difícil";

export type QuestionCategory = 
  | "Aritmética" 
  | "Álgebra" 
  | "Geometria" 
  | "Raciocínio Lógico-Quantitativo" 
  | "Matemática Financeira";

export interface QuizQuestion {
  id: number;
  enunciado: string;
  opcoes: string[];
  resposta: string; // A, B, C, D, E
  nivel: QuestionDifficulty;
  categoria: QuestionCategory;
}

export interface QuizAttempt {
  questionId: number;
  userAnswer: string;
  isCorrect: boolean;
  timeSpent: number; // in seconds
  timestamp: Date;
}

export interface UserStats {
  totalQuestions: number;
  correctAnswers: number;
  incorrectAnswers: number;
  averageTimePerQuestion: number;
  categoryPerformance: Record<QuestionCategory, { 
    total: number;
    correct: number; 
    rate: number;
  }>;
  difficultyPerformance: Record<QuestionDifficulty, {
    total: number;
    correct: number;
    rate: number;
  }>;
  weakestCategories: QuestionCategory[];
  strongestCategories: QuestionCategory[];
  recentAttempts: QuizAttempt[];
}
