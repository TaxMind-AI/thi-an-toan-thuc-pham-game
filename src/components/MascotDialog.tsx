import React from 'react';
import { useGame } from '../contexts/GameContext';

export const MascotDialog = () => {
  const { currentLevel } = useGame();

  return (
    <div className="bg-white/90 p-2 rounded-lg shadow-lg border border-blue-300 mt-2">
      <div className="flex items-center">
        <img 
          src="/assets/mascot/red-panda_1.png" 
          alt="Mascot" 
          className="w-16 h-16 mr-2 object-contain"
        />
        <p className="text-sm text-gray-800 flex-1">{currentLevel.mission}</p>
      </div>
    </div>
  );
};
