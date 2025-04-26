
import React from "react";
import { Button } from "@/components/ui/button";

interface AppHeaderProps {
  isAnalyticsView: boolean;
  onToggleView: () => void;
}

const AppHeader: React.FC<AppHeaderProps> = ({ isAnalyticsView, onToggleView }) => {
  return (
    <header className="w-full border-b bg-card">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
            MathWiz
          </span>
        </div>
        
        <nav>
          <Button 
            variant={isAnalyticsView ? "outline" : "ghost"} 
            onClick={onToggleView}
          >
            {isAnalyticsView ? "Quiz" : "Analytics"}
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default AppHeader;
