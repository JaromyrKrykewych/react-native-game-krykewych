import React, { useContext } from "react";
import { Text, View } from "react-native";

import { GameContext } from "../../context/gameProvider";
import { UserGame } from "../../components";
import { styles } from "./styles";

const Game = ({ user }) => {
  const { userPick, setUserPick, robotPick, setRobotPick } =
    useContext(GameContext);

  const onHandlePick = (pick) => setUserPick(pick);
  const onHandlePickRobot = () => {
    const choices = ["rock", "paper", "scissors"];
    const number = Math.floor(Math.random() * 3);
    setRobotPick(choices[number]);
  };

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
        name={user.username}
        player={"user"}
        location={"bottom"}
        disabled={false}
        onHandlePick={onHandlePick}
      />
    </View>
  );
};

export default Game;
