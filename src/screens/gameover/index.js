import React, { useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { Card } from "../../components";
import { GameContext } from "../../context/gameProvider";
import { styles } from "./styles";

const GameOver = ({ result }) => {
  const {clearScore} = useContext(GameContext)
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        {result === "win" && <Text style={styles.text}>You won</Text>}
        {result === "lose" && <Text style={styles.text}>You lose</Text>}
        <TouchableOpacity onPress={clearScore} style={styles.button}>
          <Text style={styles.buttonText}>Restart</Text>
        </TouchableOpacity>
      </Card>
    </View>
  );
};

export default GameOver;
