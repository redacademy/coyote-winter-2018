import React from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView
} from 'react-native';

import { styles } from '../../config/loginStyle';
import PropTypes from 'prop-types';

const SignUpName = ({
  handleFirstName,
  handleLastName,
  handleNextScreen,
  error
}) => {
  return (
    <View style={styles.background}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={'position'}
        contentContainerStyle={{ marginBottom: 78 }}
      >
        <View>
          <Image
            source={require('../../assets/images/orange_coyote.png')}
            style={styles.coyote}
          />
        </View>
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
          <TouchableOpacity style={styles.button} onPress={handleNextScreen}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
          <Text style={styles.error}>{error && error.message}</Text>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

SignUpName.defaultProps = {
  error: {}
};

SignUpName.propTypes = {
  handleFirstName: PropTypes.func.isRequired,
  handleLastName: PropTypes.func.isRequired,
  handleNextScreen: PropTypes.func.isRequired,
  error: PropTypes.object
};

export default SignUpName;
