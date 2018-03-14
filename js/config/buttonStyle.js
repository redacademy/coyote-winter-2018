import { StyleSheet, Dimensions } from "react-native";
import { colors, textStyles } from "../config/styles";

const { height, width } = Dimensions.get("window");

export const buttonStyle = StyleSheet.create({
  B_MAIN: {
    backgroundColor: colors.tangerine,
    borderRadius: 50,
    height: height / 8,
    width: width / 2,
    fontFamily: textStyles.h2
  },
  B_MAIN_OUTLINE: {
    backgroundColor: colors.white,
    borderColor: colors.tangerine,
    borderWidth: 50,
    fontFamily: textStyles.h2
  }
});
