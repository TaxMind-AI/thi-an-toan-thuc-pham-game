import React from 'react';
import { Clue as ClueType } from '../data/levels';

interface ClueProps {
  clue: ClueType;
  onClueSelect: (clueId: string) => void;
}

export const Clue = ({ clue, onClueSelect }: ClueProps) => {
  const style = {
    position: 'absolute' as const,
    top: `${clue.position.top}%`,
    left: `${clue.position.left}%`,
    width: `${clue.position.width}%`,
    height: `${clue.position.height}%`,
    cursor: 'pointer',
    border: '2px dashed red', // Temporary for debugging
  };

  return <div style={style} onClick={() => onClueSelect(clue.id)} />;
};
