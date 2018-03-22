import React from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView
} from 'react-native';
import { styles } from './styles';
import PropTypes from 'prop-types';

const SignUp = ({ addUser, handleEmail, handlePassword, error }) => {
  return (
    <View style={styles.backgroundContainer}>
      <KeyboardAvoidingView style={styles.container} behavior={'position'}>
        <View>
          <Image
            source={require('../../assets/images/orange_coyote.png')}
            style={styles.coyote}
          />
        </View>
        <TextInput
          placeholder="Email"
          onChangeText={handleEmail}
          style={styles.input}
          placeholderTextColor="#ee896b"
          autoCapitalize="none"
        />
        <TextInput
          placeholder="Password"
          onChangeText={handlePassword}
          style={styles.input}
          placeholderTextColor="#ee896b"
          secureTextEntry={true}
          autoCapitalize="none"
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={addUser}>
            <Text style={{ color: 'white' }}> Sign Up </Text>
          </TouchableOpacity>
          {error ? <Text style={styles.error}>{error.message}</Text> : null}
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

SignUp.defaultProps = {
  error: {}
};

SignUp.propTypes = {
  addUser: PropTypes.func.isRequired,
  handleEmail: PropTypes.func.isRequired,
  handlePassword: PropTypes.func.isRequired,
  error: PropTypes.object
};

export default SignUp;
