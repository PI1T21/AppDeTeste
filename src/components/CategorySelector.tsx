
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { QuestionCategory } from "@/types";
import { getAllCategories, getCategoryCount } from "@/data/questions";

interface CategorySelectorProps {
  onSelectCategory: (category: QuestionCategory) => void;
  onSelectRandom: () => void;
}

const CATEGORY_COLORS: Record<QuestionCategory, { bg: string; hover: string }> = {
  "Aritmética": { bg: "bg-blue-100", hover: "hover:bg-blue-200" },
  "Álgebra": { bg: "bg-purple-100", hover: "hover:bg-purple-200" },
  "Geometria": { bg: "bg-green-100", hover: "hover:bg-green-200" },
  "Raciocínio Lógico-Quantitativo": { bg: "bg-orange-100", hover: "hover:bg-orange-200" },
  "Matemática Financeira": { bg: "bg-teal-100", hover: "hover:bg-teal-200" }
};

const CATEGORY_ICONS: Record<QuestionCategory, string> = {
  "Aritmética": "➕",
  "Álgebra": "✖️",
  "Geometria": "📐",
  "Raciocínio Lógico-Quantitativo": "🧩",
  "Matemática Financeira": "💰"
};

const CategorySelector: React.FC<CategorySelectorProps> = ({ onSelectCategory, onSelectRandom }) => {
  const categories = getAllCategories();
  const categoryCounts = getCategoryCount();
  
  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Quiz de Matemática</CardTitle>
        <CardDescription>
          Escolha uma categoria para começar o quiz
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              className={`p-6 rounded-lg flex flex-col items-center justify-center text-center transition-colors ${
                CATEGORY_COLORS[category].bg
              } ${CATEGORY_COLORS[category].hover} cursor-pointer`}
            >
              <div className="text-4xl mb-2">{CATEGORY_ICONS[category]}</div>
              <h3 className="text-lg font-medium mb-1">{category}</h3>
              <p className="text-sm text-muted-foreground">
                {categoryCounts[category] || 0} questões
              </p>
            </button>
          ))}
          
          <button
            onClick={onSelectRandom}
            className="p-6 rounded-lg flex flex-col items-center justify-center text-center transition-colors bg-gray-100 hover:bg-gray-200 cursor-pointer"
          >
            <div className="text-4xl mb-2">🎲</div>
            <h3 className="text-lg font-medium mb-1">Aleatório</h3>
            <p className="text-sm text-muted-foreground">
              Questões de todas as categorias
            </p>
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CategorySelector;
