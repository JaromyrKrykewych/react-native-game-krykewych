import { Image, Text, TouchableOpacity, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import {
  faHandPaper,
  faHandRock,
  faHandScissors,
  faUser,
} from "@fortawesome/free-regular-svg-icons";

import Card from "../card";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { GameContext } from "../../context/gameProvider";
import { colors } from "../../constants/colors";
import { faRobot } from "@fortawesome/free-solid-svg-icons";
import { styles } from "./styles";

const UserGame = ({ img, name, player, location, disabled, onHandlePick }) => {
  const { userPick, robotPick, userScore, robotScore } =
    useContext(GameContext);
  const [available, setAvailable] = useState(disabled);
  const [selector, setSelector] = useState(null);
  useEffect(() => {
    userPick !== "" && player === "robot" ? onHandlePick() : null;
  }, [userPick, player]);

  useEffect(() => {
    if (player === "robot") {
      setSelector(robotPick);
    }
    if (player === "user") {
      setSelector(userPick);
    }
  }, [player, userPick, robotPick]);

  const zeroCount = robotScore + userScore;

  return (
    <View style={location === "bottom" && styles.containerBottom}>
      <View
        style={location === "top" ? styles.boxUserTop : styles.boxUserBottom}
      >
        {player === "robot" && zeroCount !== 0 ? (
          <Text style={styles.score}>{robotScore}</Text>
        ) : null}
        {player === "user" && zeroCount !== 0 ? (
          <Text style={styles.score}>{userScore}</Text>
        ) : null}
        <View style={styles.boxImage}>
          {!img ? (
            player === "robot" ? (
              <FontAwesomeIcon icon={faRobot} size={26} />
            ) : (
              <FontAwesomeIcon icon={faUser} size={22} />
            )
          ) : (
            <Image
              source={{ uri: img }}
              alt={"user"}
              style={styles.userImage}
            />
          )}
        </View>
        <Text style={styles.userName}>{name}</Text>
      </View>
      <View style={styles.options}>
        <TouchableOpacity
          onPress={() => (available === true ? null : onHandlePick("paper"))}
        >
          <Card
            style={
              selector === "paper"
                ? { ...styles.optionGame, backgroundColor: colors.light }
                : styles.optionGame
            }
          >
            <FontAwesomeIcon icon={faHandPaper} size={30} color={colors.dark} />
          </Card>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => (available === true ? null : onHandlePick("rock"))}
        >
          <Card
            style={
              selector === "rock"
                ? { ...styles.optionGame, backgroundColor: colors.light }
                : styles.optionGame
            }
          >
            <FontAwesomeIcon icon={faHandRock} size={30} color={colors.dark} />
          </Card>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => (available === true ? null : onHandlePick("scissors"))}
        >
          <Card
            style={
              selector === "scissors"
                ? { ...styles.optionGame, backgroundColor: colors.light }
                : styles.optionGame
            }
          >
            <FontAwesomeIcon
              icon={faHandScissors}
              size={30}
              color={colors.dark}
            />
          </Card>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserGame;
