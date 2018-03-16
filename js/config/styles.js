/*
GREY is light grey
MAIN_ is the accent color
MAIN_LIGHT is the primary color
*/
export const colors = {
  BACKGROUND: "#ffffff",
  GREY: "#f1f1f1",
  OFF_WHITE: "#f3e8bb",
  MAIN_: "#fbb756",
  MAIN_LIGHT: "#f18b01",
  MAIN: "#ee896b",
  lilac: "#ab627d",
  night: "#323e54"
};

export const typography = {
  M_BOLD: "Montserrat-Bold",
  M_SEMIBOLD: "Montserrat-SemiBold",
  M_MEDIUM: "Montserrat-Medium",
  OS_REGULAR: "OpenSans-Regular"
};

export const textStyles = {
  H1: {
    fontFamily: typography.M_BOLD,
    fontSize: 25
  },
  H2: {
    fontFamily: typography.M_SEMIBOLD,
    fontSize: 17
  },
  H3: {
    fontFamily: typography.M_SEMIBOLD,
    fontSize: 16
  },

  H4: {
    fontFamily: typography.M_SEMIBOLD,
    fontSize: 14
  },
  SMALL: {
    fontFamily: typography.M_MEDIUM,
    fontSize: 10
  },
  BODY: {
    fontFamily: typography.OS_REGULAR,
    fontSize: 13
  }
};
