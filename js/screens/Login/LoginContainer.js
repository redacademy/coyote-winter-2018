import React, { Component } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { buttonStyle } from "../../config/button";
import { updateAuthState } from "../../redux/modules/auth";
import { connect } from "react-redux";
import { loginUser } from "../../lib/authHelper";
import { firebaseAuth } from "../../config/firebaseConfig";
import { styles } from "./styles";

class LoginContainer extends Component {
  constructor() {
    super();
    this.state = {
      emailInput: "",
      passwordInput: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const { emailInput, passwordInput } = this.state;
    firebaseAuth
      .signInWithEmailAndPassword(emailInput, passwordInput)
      .then(() => console.log("it worked"))
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <View style={styles.background}>
        <View style={styles.container}>
          <TextInput
            placeholderTextColor="#ee896b"
            autoCapitalize="none"
            style={styles.input}
            placeholder="Email"
            onChangeText={text => this.setState({ emailInput: text })}
          />
          <TextInput
            style={styles.input}
            placeholderTextColor="#ee896b"
            secureTextEntry={true}
            autoCapitalize="none"
            placeholder="Password"
            onChangeText={text => this.setState({ passwordInput: text })}
          />

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
              <Text> Sign In </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated
});

export default connect(mapStateToProps)(LoginContainer);
