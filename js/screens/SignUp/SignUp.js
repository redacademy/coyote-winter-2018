import React from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity
} from 'react-native';
import { styles } from './styles';
import PropTypes from 'prop-types';

const SignUp = ({
  addUser,
  handleEmail,
  handlePassword
}) => {
  return (
    <View style={styles.backgroundContainer}>
      <View style={styles.container}>
        <TextInput
          placeholder="Email"
          onChangeText={handleEmail}
          style={styles.input}
          placeholderTextColor="#ee896b"
        />
        <TextInput
          placeholder="Password"
          onChangeText={handlePassword}
          style={styles.input}
          placeholderTextColor="#ee896b"
          secureTextEntry={true}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={addUser}
          >
            <Text style={{ color: 'white' }}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

SignUp.propTypes = {
  addUser: PropTypes.func.isRequired,
  handleEmail: PropTypes.func.isRequired,
  handlePassword: PropTypes.func.isRequired
};

export default SignUp;
