import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../config/styles";

const { height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.night,
    height: height
  },
  container: {
    flexDirection: "column",
    marginTop: height / 6
  },
  input: {
    borderWidth: 1,
    borderRadius: 25,
    borderColor: colors.MAIN,
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
    backgroundColor: colors.MAIN,
    borderRadius: 25,
    minWidth: 100,
    minHeight: 30,
    marginTop: 10
  },
  coyote: {
    height: 100,
    width: 100,
    alignSelf: "center",
    marginBottom: 50
  }
});
