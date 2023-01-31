import { Dimensions, StyleSheet } from "react-native";

import { colors } from "../../constants/colors";

const { height } = Dimensions.get('screen')

export const styles = StyleSheet.create({
  container: {
    height: height * 0.6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    padding: 25,
  },
  text: {
    fontFamily: 'Playfair-Display-regular',
    fontSize: 22,
  },
  button: {
    marginTop: 25,
    borderRadius: 5,
    paddingVertical: 10,
    backgroundColor: colors.light,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'Playfair-Display-regular',
    fontSize: 16,
    color: colors.dark,
  }
})