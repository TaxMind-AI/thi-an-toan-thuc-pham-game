import { useState } from 'react';
import { GameProvider, useGame } from './contexts/GameContext';
import { GameScene } from './components/GameScene';
import { MascotDialog } from './components/MascotDialog';
import { FeedbackModal } from './components/FeedbackModal';
import { IntroModal } from './components/IntroModal';

function Game() {
  const { currentLevel, selectClue } = useGame();
  const [feedback, setFeedback] = useState('');
  const [showIntro, setShowIntro] = useState(true);

  const handleClueSelect = (clueId) => {
    const clue = currentLevel.clues.find(c => c.id === clueId);
    if (clue) {
      setFeedback(clue.feedback);
      selectClue(clueId);
    }
  };

  if (showIntro) {
    return <IntroModal onStart={() => setShowIntro(false)} />;
  }

  return (
    <div className="w-full h-full max-w-md mx-auto flex flex-col p-2">
      <header className="text-center mb-2">
        <h1 className="text-3xl font-bold text-blue-600">Thám Tử Nhí</h1>
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
