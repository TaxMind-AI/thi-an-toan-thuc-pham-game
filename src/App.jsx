import { useState } from 'react';
import { GameProvider, useGame } from './contexts/GameContext';
import { GameScene } from './components/GameScene';
import { MascotDialog } from './components/MascotDialog';
import { FeedbackModal } from './components/FeedbackModal';

function Game() {
  const { currentLevel, selectClue } = useGame();
  const [feedback, setFeedback] = useState('');

  const handleClueSelect = (clueId) => {
    const clue = currentLevel.clues.find(c => c.id === clueId);
    if (clue) {
      setFeedback(clue.feedback);
      selectClue(clueId);
    }
  };

  return (
    <div className="w-full h-full max-w-screen-lg max-h-screen-lg mx-auto p-4 flex flex-col">
      <header className="text-center mb-4">
        <h1 className="text-4xl font-bold text-blue-600">Thám Tử Nhí</h1>
      </header>
      <main className="flex-1 relative">
        <GameScene onClueSelect={handleClueSelect} />
        <MascotDialog />
      </main>
      {feedback && <FeedbackModal message={feedback} onClose={() => setFeedback('')} />}
    </div>
  );
}

function App() {
  return (
    <GameProvider>
      <div className="w-screen h-screen bg-blue-50">
        <Game />
      </div>
    </GameProvider>
  );
}

export default App;
