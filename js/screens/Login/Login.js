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

const Login = ({
  handleEmail,
  handlePassword,
  handleSubmit,
  error,
  navigation
}) => {
  return (
    <View style={styles.background}>
      <KeyboardAvoidingView
        style={styles.container}
        keyboardVerticalOffset={100}
        behavior={'position'}
        contentContainerStyle={styles.keyboard}
      >
        <View>
          <Image
            source={require('../../assets/images/orange_coyote.png')}
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
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>

          <Text style={styles.noAccountText}>
            {"Don't have an account? Sign Up Here!"}
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('SignUpName')}
          >
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.error}>{error.message}</Text>
      </KeyboardAvoidingView>
    </View>
  );
};

Login.defaultProps = {
  error: {}
};

Login.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleEmail: PropTypes.func.isRequired,
  handlePassword: PropTypes.func.isRequired,
  error: PropTypes.object,
  navigation: PropTypes.object.isRequired
};

export default Login;
