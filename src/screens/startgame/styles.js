import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Playfair-Display-bold',
    color: colors.dark,
    fontSize: 28,
  },
  containerCard: {
    width: '60%',
    marginTop: 30,
    paddingVertical: 20,
    alignItems: 'center',
  },
  inputUser: {
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    backgroundColor: colors.light,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15,
  },
  imageSelected: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
  },
  userText: {
    fontFamily: 'Playfair-Display-semibold'
  },
  buttonStart: {
    marginTop: 25,
    alignItems: 'center',
    backgroundColor: colors.light,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  text: {
    fontFamily: 'Playfair-Display-regular',
    color: colors.dark,
  },
  textOpacity: {
    fontFamily: 'Playfair-Display-regular',
    color: colors.dark,
    opacity: 0.3,
  }
})