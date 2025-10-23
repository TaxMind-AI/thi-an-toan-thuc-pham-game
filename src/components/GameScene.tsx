import React from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { useGame } from '../contexts/GameContext';
import { Clue as ClueComponent } from './Clue';

interface GameSceneProps {
  onClueSelect: (clueId: string) => void;
}

export const GameScene = ({ onClueSelect }: GameSceneProps) => {
  const { currentLevel } = useGame();

  return (
    <div className="w-full h-full relative overflow-hidden rounded-lg shadow-lg bg-gray-200">
      <TransformWrapper>
        <TransformComponent>
          <div className="relative w-full h-full">
            <img src={currentLevel.imageUrl} alt="Game Scene" className="w-full h-full object-contain" />
            {currentLevel.clues.map(clue => (
              <ClueComponent key={clue.id} clue={clue} onClueSelect={onClueSelect} />
            ))}
          </div>
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
};
