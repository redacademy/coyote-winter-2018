import React from 'react';
import PropTypes from 'prop-types';
import {
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { styles } from './styles.js';
import { connect } from 'react-redux';
import { findClosestString } from '../../lib/autocompleteHelper';
import { updateAutoSelected } from '../../redux/modules/autocomplete';
import logo from '../../assets/images/orange_coyote.png';
import backgroundPic from '../../assets/images/Vancouver.jpg';

const searchedCities = (
  searchedText,
  dispatch,
  onLocationSearchChange,
  cities
) => {
  const searchedCities = findClosestString(cities, searchedText);
  dispatch(updateAutoSelected(searchedCities));
  if (searchedText.length > 2) onLocationSearchChange(searchedCities);
};

const LocationSearch = ({
  dispatch,
  location,
  onLocationSearchChange,
  onSearch,
  cities
}) => {
  return (
    <View style={styles.background}>
      <ImageBackground source={backgroundPic} style={styles.backgroundImage}>
        <View style={styles.headerContainer}>
          <Image source={logo} style={styles.headerImage} />
        </View>
        <View>
          <Text style={styles.label}>Where do you want to live?</Text>
          <TextInput
            value={location}
            style={styles.input}
            onChangeText={text =>
              searchedCities(text, dispatch, onLocationSearchChange, cities)
            }
            placeholder="Type city here"
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={onSearch}>
            <Text style={styles.text}> Search </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

LocationSearch.propTypes = {
  cities: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
  location: PropTypes.string.isRequired,
  navigation: PropTypes.object.isRequired,
  onLocationSearchChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  searchLocation: PropTypes.string.isRequired,
  selected: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  location: state.filter.location,
  selected: state.autocomplete.selected,
  cities: state.autocomplete.suggestions
});

export default connect(mapStateToProps)(LocationSearch);
