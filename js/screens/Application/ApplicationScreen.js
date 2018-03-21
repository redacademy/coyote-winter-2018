import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import PropTypes from 'prop-types';

class ApplicationScreen extends Component {
  static propTypes = {
    navigation: PropTypes.object
  };
  static navigationOptions = {
    title: 'Application'
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Text>profile</Text>
        <Button
          title="Go to details"
          onPress={() => navigate('Favourites')}
        />
      </View>
    );
  }
}

export default ApplicationScreen;
