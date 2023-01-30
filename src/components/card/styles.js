import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
  card: {
    borderRadius: 4,
    backgroundColor: '#fff',
    shadowColor: colors.dark,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.23,
    shadowRadius: 1.62,

    elevation: 3,
  },
});
