import { StyleSheet } from "react-native";

export const colors = {
  snow: "#ffffff",
  shadow: "#f1f1f1",
  vanilla: "#f3e8bb",
  tangerine: "#fbb756",
  juicy: "#f18b01",
  peachy: "#ee896b",
  lilac: "#ab627d",
  night: "#323e54"
};

const typography = {
  M_BOLD: "Montserrat-Bold",
  M_SEMIBOLD: "Montserrat-SemiBold",
  M_REGULAR: "Montserrat-Regular",
  OS_REGULAR: "OpenSans-Regular"
};

export const textStyles = StyleSheet.create({
  h1: {
    fontFamily: { M_BOLD },
    fontSize: 25
  },
  h2: {
    fontFamily: { M_SEMIBOLD },
    fontSize: 17
  },
  h3: {
    fontFamily: { M_SEMIBOLD },
    fontSize: 16
  },
  h4: {
    fontFamily: { M_SEMIBOLD },
    fontSize: 14
  },
  small: {
    fontFamily: { M_REGULAR },
    fontSize: 10
  },
  body: {
    fontFamily: { OS_REGULAR },
    fontSize: 13
  }
});
