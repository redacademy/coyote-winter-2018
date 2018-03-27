import React from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView
} from 'react-native';

import { styles } from '../../config/loginStyle';
import PropTypes from 'prop-types';

const SignUp = ({
  addUser,
  handleEmail,
  handlePassword,
  error,
  navigation
}) => {
  return (
    <View style={styles.background}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={'position'}
        contentContainerStyle={{ marginBottom: 75 }}
      >
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
            <Text style={styles.buttonText}> Sign Up </Text>
          </TouchableOpacity>
          {error && (
            <View>
              <Text style={styles.error}>{error.message}</Text>

              <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.navigate('Login')}
              >
                <Text style={styles.buttonText}>Back To Login</Text>
              </TouchableOpacity>
            </View>
          )}
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
  error: PropTypes.object,
  navigation: PropTypes.object.isRequired
};

export default SignUp;
