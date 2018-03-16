import React from "react";
import { Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";
import PropTypes from "prop-types";

const Login = ({ handleEmail, handlePassword, handleSubmit }) => {
  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <View>
          <Image
            source={require("../../assets/images/orange_coyote.png")}
            style={styles.coyote}
          />
        </View>
        <TextInput
          placeholderTextColor="#ee896b"
          autoCapitalize="none"
          style={styles.input}
          placeholder="Email"
          onChangeText={handleEmail}
        />
        <TextInput
          style={styles.input}
          placeholderTextColor="#ee896b"
          secureTextEntry={true}
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={handlePassword}
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={{ color: "white" }}> Sign In </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={{ color: "white" }}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

Login.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleEmail: PropTypes.func.isRequired,
  handlePassword: PropTypes.func.isRequired
};

export default Login;
