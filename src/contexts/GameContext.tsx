import React, { createContext, useState, useContext, ReactNode } from 'react';
import { levels, Level } from '../data/levels';

interface GameState {
  currentLevelIndex: number;
  score: number;
  foundUnsafeItems: string[];
  currentLevel: Level;
  goToNextLevel: () => void;
  selectClue: (clueId: string) => void;
}

const GameContext = createContext<GameState | undefined>(undefined);

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [currentLevelIndex, setCurrentLevelIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [foundUnsafeItems, setFoundUnsafeItems] = useState<string[]>([]);

  const currentLevel = levels[currentLevelIndex];

  const goToNextLevel = () => {
    if (currentLevelIndex < levels.length - 1) {
      setCurrentLevelIndex(prevIndex => prevIndex + 1);
      setFoundUnsafeItems([]);
    }
  };

  const selectClue = (clueId: string) => {
    const clue = currentLevel.clues.find(c => c.id === clueId);
    if (clue && clue.isUnsafe && !foundUnsafeItems.includes(clueId)) {
      setFoundUnsafeItems(prev => [...prev, clueId]);
      setScore(prev => prev + 10);
    }
  };

  const value = {
    currentLevelIndex,
    score,
    foundUnsafeItems,
    currentLevel,
    goToNextLevel,
    selectClue,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};
