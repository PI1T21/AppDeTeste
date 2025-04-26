
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { getUserStats } from "@/utils/localStorage";
import { QuestionCategory } from "@/types";
import { TrendingUp, TrendingDown } from "lucide-react";

interface AnalyticsDashboardProps {
  onStartNewQuiz: () => void;
}

const AnalyticsDashboard: React.FC<AnalyticsDashboardProps> = ({ onStartNewQuiz }) => {
  const stats = getUserStats();
  const correctRate = stats.totalQuestions > 0 
    ? (stats.correctAnswers / stats.totalQuestions) * 100 
    : 0;

  // Cores para o gráfico de pizza
  const COLORS = ['#9B87F5', '#7E69AB', '#6750A4', '#D6BCFA', '#8B5CF6'];
    
  const categoryData = Object.entries(stats.categoryPerformance)
    .filter(([_, data]) => data.total > 0)  // Apenas categorias com tentativas
    .map(([category, data]) => ({
      name: category,
      value: Math.round(data.rate * 100),
      total: data.total
    }));
  
  const difficultyData = Object.entries(stats.difficultyPerformance)
    .filter(([_, data]) => data.total > 0)
    .map(([difficulty, data]) => ({
      name: difficulty,
      value: Math.round(data.rate * 100),
      total: data.total
    }));
  
  const recentAttempts = stats.recentAttempts.slice().reverse();

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 rounded-lg shadow border">
          <p className="font-medium">{payload[0].name}</p>
          <p className="text-sm text-muted-foreground">
            Taxa de Acerto: {payload[0].value}%
          </p>
          <p className="text-xs text-muted-foreground">
            Total: {payload[0].payload.total} questões
          </p>
        </div>
      );
    }
    return null;
  };
  
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <Card className="flex-1">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Taxa de Acerto</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-1">{Math.round(correctRate)}%</div>
              <Progress value={correctRate} className="h-2" />
              <p className="text-xs text-muted-foreground mt-2">
                {stats.correctAnswers} corretas de {stats.totalQuestions} questões
              </p>
            </CardContent>
          </Card>
          
          <Card className="flex-1">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Tempo Médio</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">
                {Math.round(stats.averageTimePerQuestion || 0)}s
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                por questão
              </p>
            </CardContent>
          </Card>
          
          <Card className="flex-1">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total de Questões</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stats.totalQuestions}</div>
              <p className="text-xs text-muted-foreground mt-2">
                respondidas
              </p>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Desempenho Detalhado</CardTitle>
            <CardDescription>
              Análise do seu desempenho por categorias e níveis de dificuldade
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="categories">
              <TabsList className="mb-4">
                <TabsTrigger value="categories">Categorias</TabsTrigger>
                <TabsTrigger value="difficulty">Dificuldade</TabsTrigger>
                <TabsTrigger value="recent">Recentes</TabsTrigger>
              </TabsList>
              
              <TabsContent value="categories">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="h-[300px]">
                    {categoryData.length > 0 ? (
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={categoryData}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            label={({ name, value }) => `${name}: ${value}%`}
                          >
                            {categoryData.map((_, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip content={<CustomTooltip />} />
                          <Legend />
                        </PieChart>
                      </ResponsiveContainer>
                    ) : (
                      <div className="flex items-center justify-center h-full text-muted-foreground">
                        Nenhum dado disponível ainda
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-muted/50 p-6 rounded-lg border">
                      <h4 className="font-medium flex items-center gap-2 mb-4">
                        <TrendingUp className="text-green-600" />
                        Pontos Fortes
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {stats.strongestCategories.length > 0 ? (
                          stats.strongestCategories.map((category) => {
                            const performance = stats.categoryPerformance[category];
                            return (
                              <div key={category} className="bg-green-50 border border-green-200 p-2 rounded-lg w-full">
                                <div className="font-medium text-green-700">{category}</div>
                                <div className="text-sm text-green-600">
                                  Taxa de acerto: {Math.round(performance.rate * 100)}%
                                </div>
                              </div>
                            );
                          })
                        ) : (
                          <p className="text-sm text-muted-foreground">
                            Responda mais questões para identificar seus pontos fortes
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="bg-muted/50 p-6 rounded-lg border">
                      <h4 className="font-medium flex items-center gap-2 mb-4">
                        <TrendingDown className="text-red-600" />
                        Pontos a Melhorar
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {stats.weakestCategories.length > 0 ? (
                          stats.weakestCategories.map((category) => {
                            const performance = stats.categoryPerformance[category];
                            return (
                              <div key={category} className="bg-red-50 border border-red-200 p-2 rounded-lg w-full">
                                <div className="font-medium text-red-700">{category}</div>
                                <div className="text-sm text-red-600">
                                  Taxa de acerto: {Math.round(performance.rate * 100)}%
                                </div>
                              </div>
                            );
                          })
                        ) : (
                          <p className="text-sm text-muted-foreground">
                            Responda mais questões para identificar áreas a melhorar
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="difficulty">
                <div className="h-[300px] w-full">
                  {difficultyData.length > 0 ? (
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={difficultyData}
                          dataKey="value"
                          nameKey="name"
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          label={({ name, value }) => `${name}: ${value}%`}
                        >
                          {difficultyData.map((_, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip content={<CustomTooltip />} />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  ) : (
                    <div className="flex items-center justify-center h-full text-muted-foreground">
                      Nenhum dado disponível ainda
                    </div>
                  )}
                </div>
              </TabsContent>
              
              <TabsContent value="recent">
                {recentAttempts.length > 0 ? (
                  <div className="space-y-2">
                    {recentAttempts.map((attempt, index) => (
                      <div 
                        key={index} 
                        className={`p-3 rounded-md border ${
                          attempt.isCorrect 
                            ? 'bg-green-50 border-green-200' 
                            : 'bg-red-50 border-red-200'
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <div className="text-sm">
                            Questão #{attempt.questionId}{' '}
                            <span className={attempt.isCorrect ? 'text-green-700' : 'text-red-700'}>
                              {attempt.isCorrect ? '✓ Correta' : '✗ Incorreta'}
                            </span>
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {formatDistanceToNow(attempt.timestamp, { 
                              addSuffix: true,
                              locale: ptBR
                            })}
                          </div>
                        </div>
                        <div className="flex mt-1 text-xs text-muted-foreground">
                          <span>Resposta: {attempt.userAnswer}</span>
                          <span className="mx-2">•</span>
                          <span>Tempo: {attempt.timeSpent}s</span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="py-8 text-center text-muted-foreground">
                    Nenhum histórico de tentativas ainda
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
        
        <div className="flex justify-center">
          <Button size="lg" onClick={onStartNewQuiz}>
            Iniciar Novo Quiz
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
