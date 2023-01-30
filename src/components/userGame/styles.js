import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

const imageSize = 50;
const marginBoxUser = 40;

export const styles = StyleSheet.create({
  containerBottom: {
    flexDirection: 'column-reverse'
  },
  boxUserTop: {
    flexDirection: "row-reverse",
    alignItems: "center",
    marginVertical: marginBoxUser,
  },
  boxUserBottom: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: marginBoxUser,
  },
  boxImage: {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
    backgroundColor: colors.light,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 15,
  },
  userImage: {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  },
  userName: {
    fontFamily: "Playfair-Display-semibold",
    fontSize: 24,
  },
  options: {
    marginHorizontal: 25,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  optionGame: {
    padding: 10,
  },
});
