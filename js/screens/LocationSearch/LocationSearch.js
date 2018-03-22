import React from 'react';
import logo from '../../assets/images/orange_coyote.png';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView
} from 'react-native';
import { styles } from './styles.js';
import PropTypes from 'prop-types';

const LocationSearch = ({ onLocationSearchChange, onSearch }) => {
  return (
    <KeyboardAvoidingView
      style={styles.background}
      behavior={'position'}
      contentContainerStyle={styles.keyboard}
    >
      <View style={styles.headerContainer}>
        <Image source={logo} style={styles.headerImage} />
      </View>
      <View>
        <Text style={styles.label}> Where do you want to live? </Text>
        <TextInput
          style={styles.input}
          onChangeText={text => onLocationSearchChange(text)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => onSearch()}>
          <Text style={styles.text}> Search </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

LocationSearch.propTypes = {
  onLocationSearchChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired
};

export default LocationSearch;
