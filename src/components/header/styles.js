import { Dimensions, StyleSheet } from "react-native";

import { colors } from "../../constants/colors";

const { height } = Dimensions.get("screen");

export const styles = StyleSheet.create({
  container: {
    height: height * 0.12,
    backgroundColor: colors.background,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  image: {
    width: 90,
    height: 70,
  },
  text: {
    fontFamily: 'Playfair-Display-semibold',
    fontSize: 22,
    color: colors.dark,
  }
});
