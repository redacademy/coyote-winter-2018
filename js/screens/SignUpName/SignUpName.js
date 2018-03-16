import React from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { styles } from "../SignUp/styles";
import PropTypes from "prop-types";

const SignUpName = ({ handleSubmit, handleFirstName, handleLastName }) => {
  return (
    <View style={styles.backgroundContainer}>
      <View style={{ alignItems: "center" }}>
        {/* <Image
            source={require("../../assets/images/orange_coyote.png")}
            style={{ height: 80, width: 80, marginTop: 60 }}
          /> */}
      </View>
      <View style={styles.container}>
        <TextInput
          placeholder="First Name"
          onChangeText={handleFirstName}
          style={styles.input}
          placeholderTextColor="#ee896b"
        />
        <TextInput
          placeholder="Last Name"
          onChangeText={handleLastName}
          style={styles.input}
          placeholderTextColor="#ee896b"
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={{ color: "white" }}> Next </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

SignUpName.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleFirstName: PropTypes.func.isRequired,
  handleLastName: PropTypes.func.isRequired
};

export default SignUpName;
