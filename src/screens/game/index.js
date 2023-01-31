import React, { useContext, useEffect } from "react";
import { Text, View } from "react-native";

import { GameContext } from "../../context/gameProvider";
import GameOver from "../gameover";
import { UserGame } from "../../components";
import { styles } from "./styles";

const Game = ({ user }) => {
  const {
    userPick,
    setUserPick,
    robotPick,
    setRobotPick,
    userScore,
    robotScore,
    getResult,
    roundScore,
    result,
    clear,
  } = useContext(GameContext);

  useEffect(() => {
    userPick !== "" && robotPick !== "" ? getResult(userPick, robotPick) : null;
  }, [userPick, robotPick, getResult]);

  useEffect(() => {
    setTimeout(() => {
      if (result === "win" || result === "lose") {
        roundScore(result);
      }
    }, 100);

    setTimeout(() => {
      clear();
    }, 200);
  }, [result]);

  const onHandlePick = (pick) => setUserPick(pick);
  const onHandlePickRobot = () => {
    const choices = ["rock", "paper", "scissors"];
    const number = Math.floor(Math.random() * 3);
    setRobotPick(choices[number]);
  };

  if (userScore === 2 || robotScore === 2) {
    return <GameOver result={result} />;
  }

  return (
    <View style={styles.container}>
      <UserGame
        name={"Robot"}
        player={"robot"}
        location={"top"}
        disabled={true}
        onHandlePick={onHandlePickRobot}
      />
      <View style={styles.boxVs}>
        <Text style={styles.textVs}>VS</Text>
      </View>
      <UserGame
        img={user?.image}
        name={user?.username}
        player={"user"}
        location={"bottom"}
        disabled={false}
        onHandlePick={onHandlePick}
      />
    </View>
  );
};

export default Game;
