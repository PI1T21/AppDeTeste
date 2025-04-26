import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { QuizQuestion, QuestionCategory } from "@/types";
import { saveQuizAttempt } from "@/utils/localStorage";
import { getQuestionsByCategory, getRandomQuestions } from "@/data/questions";

interface QuizProps {
  category?: QuestionCategory;
  onComplete: () => void;
  isRandomMode?: boolean;
}

const Quiz: React.FC<QuizProps> = ({ category, onComplete, isRandomMode = false }) => {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [timeSpent, setTimeSpent] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  
  const optionLabels = ['A', 'B', 'C', 'D', 'E'];
  const timer = useRef<NodeJS.Timeout | null>(null);
  
  useEffect(() => {
    let quizQuestions: QuizQuestion[];
    
    if (isRandomMode) {
      quizQuestions = getRandomQuestions(5);
    } else if (category) {
      const categoryQuestions = getQuestionsByCategory(category);
      quizQuestions = [...categoryQuestions].sort(() => Math.random() - 0.5).slice(0, 5);
    } else {
      quizQuestions = [];
    }
    
    setQuestions(quizQuestions);
    
    setStartTime(Date.now());
  }, [category, isRandomMode]);
  
  useEffect(() => {
    if (questions.length > 0 && !isAnswered && !quizCompleted) {
      timer.current = setInterval(() => {
        const elapsed = Math.floor((Date.now() - startTime) / 1000);
        setTimeSpent(elapsed);
      }, 1000);
    }
    
    return () => {
      if (timer.current) {
        clearInterval(timer.current);
      }
    };
  }, [questions, startTime, isAnswered, quizCompleted]);
  
  const handleOptionSelect = (optionIndex: number) => {
    if (isAnswered) return;
    
    const option = optionLabels[optionIndex];
    setSelectedOption(option);
  };
  
  const handleSubmitAnswer = () => {
    if (selectedOption === null || isAnswered) return;
    
    const currentQuestion = questions[currentQuestionIndex];
    const correct = selectedOption === currentQuestion.resposta;
    
    if (timer.current) {
      clearInterval(timer.current);
    }
    
    setIsAnswered(true);
    setIsCorrect(correct);
    
    saveQuizAttempt({
      questionId: currentQuestion.id,
      userAnswer: selectedOption,
      isCorrect: correct,
      timeSpent: timeSpent
    });
  };
  
  const handleNextQuestion = () => {
    if (currentQuestionIndex >= questions.length - 1) {
      setQuizCompleted(true);
      onComplete();
      return;
    }
    
    setCurrentQuestionIndex(prev => prev + 1);
    setSelectedOption(null);
    setIsAnswered(false);
    setIsCorrect(false);
    setTimeSpent(0);
    setStartTime(Date.now());
  };
  
  if (questions.length === 0) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardContent className="p-6">
          <div className="flex justify-center items-center h-40">
            <p className="text-lg">Carregando perguntas...</p>
          </div>
        </CardContent>
      </Card>
    );
  }
  
  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  
  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg">
      <CardHeader className="space-y-1 pb-2">
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <Badge variant="outline">{currentQuestion.categoria}</Badge>
            <Badge 
              variant="outline" 
              className={
                currentQuestion.nivel === "Fácil" ? "bg-green-50 text-green-700 border-green-200" :
                currentQuestion.nivel === "Médio" ? "bg-yellow-50 text-yellow-700 border-yellow-200" :
                "bg-red-50 text-red-700 border-red-200"
              }
            >
              {currentQuestion.nivel}
            </Badge>
          </div>
          <div className="text-sm text-muted-foreground">
            Tempo: {timeSpent}s
          </div>
        </div>
        <Progress value={progress} className="h-2" />
        <div className="text-xs text-muted-foreground text-right">
          {currentQuestionIndex + 1} de {questions.length}
        </div>
      </CardHeader>
      
      <CardContent className="pt-2">
        <div className="mb-6">
          <p className="text-lg font-medium mb-6">{currentQuestion.enunciado}</p>
          
          <RadioGroup value={selectedOption || ""} className="space-y-3">
            {currentQuestion.opcoes.map((option, index) => (
              <div 
                key={index} 
                className={`flex items-center space-x-2 p-3 rounded-md border ${
                  isAnswered && optionLabels[index] === currentQuestion.resposta
                    ? 'bg-green-50 border-green-300'
                    : isAnswered && optionLabels[index] === selectedOption
                    ? 'bg-red-50 border-red-300'
                    : 'hover:bg-muted/50'
                }`}
                onClick={() => handleOptionSelect(index)}
              >
                <RadioGroupItem 
                  value={optionLabels[index]} 
                  id={`option-${index}`}
                  disabled={isAnswered}
                />
                <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                  <span className="font-medium mr-2">{optionLabels[index]}.</span>
                  {option}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      </CardContent>
      
      <CardFooter className="flex justify-between">
        {!isAnswered ? (
          <Button 
            onClick={handleSubmitAnswer} 
            disabled={selectedOption === null}
            className="w-full"
          >
            Responder
          </Button>
        ) : (
          <div className="w-full">
            <div className={`mb-4 p-3 rounded-md ${isCorrect ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
              {isCorrect 
                ? "Correto! Muito bem!"
                : `Incorreto. A resposta correta é ${currentQuestion.resposta}.`
              }
            </div>
            <Button 
              onClick={handleNextQuestion} 
              className="w-full"
            >
              {currentQuestionIndex >= questions.length - 1 ? "Ver resultados" : "Próxima pergunta"}
            </Button>
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default Quiz;
