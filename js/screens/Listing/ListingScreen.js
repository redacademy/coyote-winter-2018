import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { View, Text, Button } from 'react-native';

class ListingScreen extends Component {
  static propTypes = {
    navigation: PropTypes.object
  };

  static navigationOptions = {
    headerMode: 'none'
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Text style={{ fontSize: 30 }}>
          This is a modal!
        </Text>
        <Button
          onPress={() =>
            this.props.navigation.goBack()
          }
          title="Dismiss"
        />
        <Button
          onPress={() =>
            this.props.navigation.navigate(
              'Application'
            )
          }
          title="application"
        />
      </View>
    );
  }
}

export default ListingScreen;
