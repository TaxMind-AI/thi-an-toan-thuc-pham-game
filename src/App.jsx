import { useState } from 'react';
import { GameProvider, useGame } from './contexts/GameContext';
import { GameScene } from './components/GameScene';
import { MascotDialog } from './components/MascotDialog';
import { FeedbackModal } from './components/FeedbackModal';
import { IntroModal } from './components/IntroModal';

function Game() {
  const {
    currentLevel,
    selectClue,
    goToNextLevel,
    currentLevelIndex,
  } = useGame();
  const [feedback, setFeedback] = useState('');
  const [showIntro, setShowIntro] = useState(true);

  const handleClueSelect = (clueId) => {
    const clue = currentLevel.clues.find((c) => c.id === clueId);
    if (clue && clue.isUnsafe) {
      setFeedback(clue.feedback);
      selectClue(clueId);
    }
  };

  if (showIntro) {
    return <IntroModal onStart={() => setShowIntro(false)} />;
  }

  return (
    <div className="w-full h-full max-w-sm mx-auto flex flex-col p-1 bg-white rounded-lg shadow-lg">
      <header className="text-center py-2 flex items-center justify-between px-4">
        <h1 className="text-2xl font-bold text-blue-600">Thám Tử Nhí</h1>
        <div className="text-lg font-semibold text-gray-700">
          Cấp độ {currentLevelIndex + 1}
        </div>
      </header>
      <main className="flex-1 relative overflow-hidden">
        <GameScene onClueSelect={handleClueSelect} />
      </main>
      <MascotDialog />
      {feedback && (
        <FeedbackModal
          message={feedback}
          onClose={() => {
            setFeedback('');
            goToNextLevel();
          }}
        />
      )}
    </div>
  );
}

function App() {
  return (
    <GameProvider>
      <div className="w-screen h-screen bg-gray-200 flex items-center justify-center p-2">
        <Game />
      </div>
    </GameProvider>
  );
}

export default App;
