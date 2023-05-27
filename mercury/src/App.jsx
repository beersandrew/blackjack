import { useState } from 'react'
import './App.css'
import Menu from './Menu'
import Game from './Game'

function App() {
  const [gameState, setGameState] = useState('Menu')

  const goToGame = () => {
    setGameState('Game')
  }
  const goToMenu = () => {
    setGameState('Menu')
  }

  return (
    <>
      {gameState === 'Menu' 
        ? <Menu clickAction={goToGame}></Menu> 
        : <Game clickAction={goToMenu}></Game> }
    </>
  )
}

export default App
