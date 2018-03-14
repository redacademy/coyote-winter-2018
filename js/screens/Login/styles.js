import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../config/styles";

const { height, width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.night,
    height: height
  },
  container: {
    flexDirection: "column",
    marginTop: height / 2.5
  },
  input: {
    borderWidth: 1,
    borderRadius: 25,
    borderColor: colors.MAIN_,
    marginTop: 20,
    marginRight: 20,
    marginLeft: 10,
    height: 40,
    backgroundColor: "white",
    textAlign: "center"
  },
  buttonContainer: {
    marginTop: 15,
    flexDirection: "column",
    alignItems: "center"
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.MAIN_,
    borderRadius: 25,
    minWidth: 100,
    minHeight: 30,
    marginTop: 10
  }
});
