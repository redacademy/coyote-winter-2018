import { StyleSheet, Dimensions } from "react-native";
import { colors, typography } from "../config/styles";

const { height, width } = Dimensions.get("window");

export const buttonStyle = StyleSheet.create({
  B_MAIN: {
    backgroundColor: colors.tangerine,
    borderRadius: 50,
    height: height / 8,
    width: width / 2
  },
  B_MAIN_OUTLINE: {
    backgroundColor: colors.white,
    borderColor: colors.MAIN_,
    borderWidth: 50,
    fontFamily: typography.OS_REGULAR
  }
});
