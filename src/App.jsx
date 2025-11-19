import React, { useState } from 'react'
import CinematicIntro from './components/CinematicIntro'
import LoveRoom from './components/LoveRoom'
import MagicalWorld from './components/MagicalWorld'
import StoryChapters from './components/StoryChapters'
import EndingScene from './components/EndingScene'

function App() {
  const [stage, setStage] = useState('intro')

  return (
    <div className="min-h-screen bg-black text-white">
      {stage === 'intro' && <CinematicIntro onStart={() => setStage('room')} />}
      {stage === 'room' && <LoveRoom onExit={() => setStage('world')} />}
      {stage === 'world' && (
        <>
          <MagicalWorld onEnd={() => setStage('chapters')} />
        </>
      )}
      {stage === 'chapters' && <StoryChapters onFinal={() => setStage('ending')} />}
      {stage === 'ending' && <EndingScene />}
    </div>
  )
}

export default App
