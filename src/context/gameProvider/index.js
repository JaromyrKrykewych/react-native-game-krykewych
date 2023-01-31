import React, { useState } from "react";

export const GameContext = React.createContext([])

const GameProvider = ({children}) => {
  const [userPick, setUserPick] = useState('')
  const [robotPick, setRobotPick ] = useState('')
  const [result, setResult] = useState('')
  const [userScore, setUserScore] = useState(0)
  const [robotScore, setRobotScore] = useState(0)
  const getResult = (userPick, robotPick) =>  {
    if (userPick === robotPick) {
      return setResult('draw')
    } 
    if (userPick === 'rock' && robotPick === 'scissors') {
      return setResult('win')
    }
    if (userPick === 'scissors' && robotPick === 'paper') {
      return setResult('win')
    }
    if (userPick === 'paper' && robotPick === 'rock') {
      return setResult('win')
    }
    if (userPick === 'rock' && robotPick === 'paper') {
      return setResult('lose')
    }
    if (userPick === 'scissors' && robotPick === 'rock') {
      return setResult('lose')
    }
    if (userPick === 'paper' && robotPick === 'scissors') {
      return setResult('lose')
    }
  }

  const clear = () => {
    setRobotPick('')
    setUserPick('')
  }

  const roundScore = (result) => {
    if (result === 'win') {
      setUserScore(prevScore => prevScore + 1)
    }
    if (result === 'lose') {
      setRobotScore(prevScore => prevScore + 1)
    }
  }

  const clearScore = () => {
    setRobotScore(0)
    setUserScore(0)
    setRobotPick('')
    setUserPick('')
  }
  return (
    <GameContext.Provider
      value={{
        userPick,
        robotPick,
        setUserPick,
        setRobotPick,
        userScore,
        robotScore,
        result,
        getResult,
        roundScore,
        clear,
        clearScore,
      }}
    >
      {children}
    </GameContext.Provider>
  )
}

export default GameProvider