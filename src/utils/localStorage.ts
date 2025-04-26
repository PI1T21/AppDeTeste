import { QuizAttempt, UserStats, QuestionCategory, QuestionDifficulty } from "../types";
import { quizQuestions } from "../data/questions";

const STORAGE_KEYS = {
  ATTEMPTS: "math-quiz-attempts",
  STATS: "math-quiz-stats"
};

// Save a new quiz attempt
export const saveQuizAttempt = (attempt: Omit<QuizAttempt, "timestamp">): void => {
  const attempts: QuizAttempt[] = getQuizAttempts();
  const newAttempt: QuizAttempt = {
    ...attempt,
    timestamp: new Date()
  };
  attempts.push(newAttempt);
  localStorage.setItem(STORAGE_KEYS.ATTEMPTS, JSON.stringify(attempts));
  
  // After saving the attempt, update stats
  updateUserStats(newAttempt);
};

// Get all quiz attempts
export const getQuizAttempts = (): QuizAttempt[] => {
  const attemptsJson = localStorage.getItem(STORAGE_KEYS.ATTEMPTS);
  if (!attemptsJson) return [];
  
  const attempts: QuizAttempt[] = JSON.parse(attemptsJson);
  
  // Convert string dates to Date objects
  return attempts.map(attempt => ({
    ...attempt,
    timestamp: new Date(attempt.timestamp)
  }));
};

// Clear all quiz attempts
export const clearQuizAttempts = (): void => {
  localStorage.removeItem(STORAGE_KEYS.ATTEMPTS);
  localStorage.removeItem(STORAGE_KEYS.STATS);
};

// Update user statistics based on new attempt
const updateUserStats = (newAttempt: QuizAttempt): void => {
  const attempts = getQuizAttempts();
  const stats = getUserStats();
  
  // Find the question for this attempt
  const question = quizQuestions.find(q => q.id === newAttempt.questionId);
  if (!question) return;
  
  // Update total counts
  stats.totalQuestions++;
  if (newAttempt.isCorrect) {
    stats.correctAnswers++;
  } else {
    stats.incorrectAnswers++;
  }
  
  // Calculate new average time
  const totalTime = attempts.reduce((sum, a) => sum + a.timeSpent, 0);
  stats.averageTimePerQuestion = totalTime / attempts.length;
  
  // Update category performance
  if (!stats.categoryPerformance[question.categoria]) {
    stats.categoryPerformance[question.categoria] = {
      total: 0,
      correct: 0,
      rate: 0
    };
  }
  
  stats.categoryPerformance[question.categoria].total++;
  if (newAttempt.isCorrect) {
    stats.categoryPerformance[question.categoria].correct++;
  }
  stats.categoryPerformance[question.categoria].rate = 
    stats.categoryPerformance[question.categoria].correct / 
    stats.categoryPerformance[question.categoria].total;
    
  // Update difficulty performance
  if (!stats.difficultyPerformance[question.nivel]) {
    stats.difficultyPerformance[question.nivel] = {
      total: 0,
      correct: 0,
      rate: 0
    };
  }
  
  stats.difficultyPerformance[question.nivel].total++;
  if (newAttempt.isCorrect) {
    stats.difficultyPerformance[question.nivel].correct++;
  }
  stats.difficultyPerformance[question.nivel].rate = 
    stats.difficultyPerformance[question.nivel].correct / 
    stats.difficultyPerformance[question.nivel].total;
  
  // Update strongest and weakest categories
  const categoryRates = Object.entries(stats.categoryPerformance)
    .map(([category, data]) => ({ 
      category: category as QuestionCategory, 
      rate: data.rate,
      total: data.total 
    }))
    .filter(item => item.total > 0) // Only consider categories with attempts
    .sort((a, b) => a.rate - b.rate);
  
  stats.weakestCategories = categoryRates
    .slice(0, Math.min(2, categoryRates.length))
    .map(item => item.category);
  
  stats.strongestCategories = categoryRates
    .slice(-Math.min(2, categoryRates.length))
    .map(item => item.category)
    .reverse();
    
  // Keep recent attempts (last 10)
  stats.recentAttempts = attempts.slice(-10);
  
  // Save updated stats
  localStorage.setItem(STORAGE_KEYS.STATS, JSON.stringify(stats));
};

// Get user statistics
export const getUserStats = (): UserStats => {
  const statsJson = localStorage.getItem(STORAGE_KEYS.STATS);
  if (!statsJson) {
    // Return default stats
    return {
      totalQuestions: 0,
      correctAnswers: 0,
      incorrectAnswers: 0,
      averageTimePerQuestion: 0,
      categoryPerformance: {} as Record<QuestionCategory, { 
        total: number;
        correct: number; 
        rate: number;
      }>,
      difficultyPerformance: {} as Record<QuestionDifficulty, {
        total: number;
        correct: number;
        rate: number;
      }>,
      weakestCategories: [],
      strongestCategories: [],
      recentAttempts: []
    };
  }
  
  const stats: UserStats = JSON.parse(statsJson);
  
  // Convert string dates to Date objects in recentAttempts
  stats.recentAttempts = stats.recentAttempts.map(attempt => ({
    ...attempt,
    timestamp: new Date(attempt.timestamp)
  }));
  
  return stats;
};

// Initialize stats if they don't exist
export const initializeStats = (): void => {
  if (!localStorage.getItem(STORAGE_KEYS.STATS)) {
    const emptyStats: UserStats = {
      totalQuestions: 0,
      correctAnswers: 0,
      incorrectAnswers: 0,
      averageTimePerQuestion: 0,
      categoryPerformance: {} as Record<QuestionCategory, { 
        total: number;
        correct: number; 
        rate: number;
      }>,
      difficultyPerformance: {} as Record<QuestionDifficulty, {
        total: number;
        correct: number;
        rate: number;
      }>,
      weakestCategories: [],
      strongestCategories: [],
      recentAttempts: []
    };
    localStorage.setItem(STORAGE_KEYS.STATS, JSON.stringify(emptyStats));
  }
  
  if (!localStorage.getItem(STORAGE_KEYS.ATTEMPTS)) {
    localStorage.setItem(STORAGE_KEYS.ATTEMPTS, JSON.stringify([]));
  }
};
