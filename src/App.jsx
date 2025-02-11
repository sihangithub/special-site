import { useState } from 'react'
import Content from './components/Content'
import Blog from './components/Blog'
import './App.css'

function App() {
  const [showIntro, setShowIntro] = useState(true);

  const handlePowerOff = () => {
    setShowIntro(false);
  };

  return (
    <>
      {showIntro ? (
        <Content onPowerOff={handlePowerOff} />
      ) : (
        <Blog />
      )}
    </>
  )
}

export default App
