import { useState } from 'react'
import './App.css'
import Menu from './Menu'

function App() {
  const [gameState, setGameState] = useState('Menu')

  return (
    <>
      {gameState === 'Menu' ? <Menu ></Menu> : null }
    </>
  )
}

export default App
