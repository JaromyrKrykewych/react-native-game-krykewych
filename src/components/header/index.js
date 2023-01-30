import { Image, Text, View } from "react-native";

import React from "react";
import logo from "../../../assets/logo.png";
import { styles } from "./styles";

const index = () => {
  return (
    <View style={styles.container}>
      <Image
        source={logo}
        style={styles.image}
        alt={"Logo"}
        resizeMode={"contain"}
      />
      <Text style={styles.text}>Rock, Paper, Scissors.</Text>
    </View>
  );
};

export default index;
