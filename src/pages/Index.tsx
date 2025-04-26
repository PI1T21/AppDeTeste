
import React, { useState, useEffect } from "react";
import AppHeader from "@/components/AppHeader";
import CategorySelector from "@/components/CategorySelector";
import Quiz from "@/components/Quiz";
import AnalyticsDashboard from "@/components/AnalyticsDashboard";
import { QuestionCategory } from "@/types";
import { initializeStats } from "@/utils/localStorage";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<QuestionCategory | null>(null);
  const [isQuizActive, setIsQuizActive] = useState(false);
  const [isAnalyticsView, setIsAnalyticsView] = useState(false);
  const [isRandomMode, setIsRandomMode] = useState(false);
  
  // Initialize local storage
  useEffect(() => {
    initializeStats();
  }, []);
  
  const handleCategorySelect = (category: QuestionCategory) => {
    setSelectedCategory(category);
    setIsQuizActive(true);
    setIsRandomMode(false);
  };
  
  const handleRandomSelect = () => {
    setIsRandomMode(true);
    setIsQuizActive(true);
    setSelectedCategory(null);
  };
  
  const handleQuizComplete = () => {
    setIsQuizActive(false);
    setSelectedCategory(null);
    setIsRandomMode(false);
    setIsAnalyticsView(true);
  };
  
  const handleStartNewQuiz = () => {
    setIsAnalyticsView(false);
    setSelectedCategory(null);
    setIsRandomMode(false);
  };
  
  const handleToggleView = () => {
    setIsAnalyticsView(!isAnalyticsView);
    if (isQuizActive) {
      setIsQuizActive(false);
      setSelectedCategory(null);
      setIsRandomMode(false);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <AppHeader 
        isAnalyticsView={isAnalyticsView}
        onToggleView={handleToggleView}
      />
      
      <main className="flex-1 container mx-auto py-8 px-4">
        {isAnalyticsView ? (
          <AnalyticsDashboard onStartNewQuiz={handleStartNewQuiz} />
        ) : isQuizActive ? (
          <Quiz 
            category={selectedCategory || undefined}
            isRandomMode={isRandomMode} 
            onComplete={handleQuizComplete}
          />
        ) : (
          <CategorySelector 
            onSelectCategory={handleCategorySelect}
            onSelectRandom={handleRandomSelect}
          />
        )}
      </main>
      
      <footer className="border-t py-6 bg-background">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          MathWiz Analytics &copy; {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  );
};

export default Index;
