import React from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView
} from 'react-native';
import { styles } from '../SignUp/styles';
import PropTypes from 'prop-types';

const SignUpName = ({
  handleFirstName,
  handleLastName,
  navigation
}) => {
  return (
    <View style={styles.backgroundContainer}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={'position'}
        contentContainerStyle={{ marginBottom: 20 }}
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
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate(
                'SignUpEmailAndPassword'
              );
            }}
          >
            <Text style={{ color: 'white' }}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

SignUpName.propTypes = {
  handleFirstName: PropTypes.func.isRequired,
  handleLastName: PropTypes.func.isRequired,
  navigation: PropTypes.object
};

export default SignUpName;
