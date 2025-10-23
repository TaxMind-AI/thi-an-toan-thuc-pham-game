import React from 'react';
import { useGame } from '../contexts/GameContext';

export const MascotDialog = () => {
  const { currentLevel } = useGame();

  return (
    <div className="absolute bottom-4 left-4 right-4 bg-white p-4 rounded-lg shadow-xl border-2 border-blue-500">
      <div className="flex items-center">
        <img 
          src="https://via.placeholder.com/80x80.png?text=Mascot" 
          alt="Mascot" 
          className="w-20 h-20 rounded-full mr-4"
        />
        <p className="text-lg text-gray-800">{currentLevel.mission}</p>
      </div>
    </div>
  );
};
