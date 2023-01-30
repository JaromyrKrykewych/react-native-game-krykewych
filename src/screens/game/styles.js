import { Dimensions, StyleSheet } from "react-native";

const { height } = Dimensions.get("screen");

export const styles = StyleSheet.create({
  container: {
    height: height * 0.7,
    marginVertical: 20,
    paddingHorizontal: 20,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  boxVs: {
    alignItems: 'center'
  },
  textVs: {
    fontFamily: 'Playfair-Display-semibold',
    fontSize: 28,
  },
});
