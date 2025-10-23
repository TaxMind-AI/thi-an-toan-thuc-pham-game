import React from 'react';
import { useGame } from '../contexts/GameContext';

export const MascotDialog = () => {
  const { currentLevel } = useGame();

  return (
    <div className="absolute bottom-1 left-1 right-1 bg-white/90 p-1 rounded-lg shadow-lg border border-blue-300">
      <div className="flex items-center">
        <img 
          src="/assets/mascot/red-panda.png" 
          alt="Mascot" 
          className="w-16 h-16 mr-1"
        />
        <p className="text-xs text-gray-800 flex-1">{currentLevel.mission}</p>
      </div>
    </div>
  );
};
