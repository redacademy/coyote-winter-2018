import { Dimensions } from "react-native";
import { colors, textStyles } from "../config/styles";

const { height, width } = Dimensions.get("window");

export const buttonStyle = {
  B_MAIN: {
    backgroundColor: colors.MAIN,
    borderRadius: 50,
    height: height / 8,
    width: width / 2,
    fontFamily: textStyles.SMALL
  },
  B_MAIN_OUTLINE: {
    backgroundColor: colors.white,
    borderColor: colors.tangerine,
    borderWidth: 50
  }
};
