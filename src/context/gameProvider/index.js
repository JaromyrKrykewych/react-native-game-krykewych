import React, { useState } from "react";

export const GameContext = React.createContext([])

const GameProvider = ({children}) => {
  const [userPick, setUserPick] = useState('')
  const [robotPick, setRobotPick ] = useState('')
  return (
    <GameContext.Provider
      value={{
        userPick,
        robotPick,
        setUserPick,
        setRobotPick,
      }}
    >
      {children}
    </GameContext.Provider>
  )
}

export default GameProvider