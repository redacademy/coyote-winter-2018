import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, AsyncStorage } from 'react-native';
import PropTypes from 'prop-types';

import { fetchUser } from '../../redux/modules/user';
import { colors } from '../../config/styles';
import Profile from './Profile';

class ProfileScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: (
        <Button
          onPress={() => navigation.navigate('Listing')}
          title="Info"
          color={colors.MAIN}
        />
      ),
      title: 'Profile',
      tabBarLabel: 'Profile'
    };
  };

  componentDidMount() {
    const userId = 'QhP2yK3dx4P8BAB3AHJiLPAZgn93';
    this.props.dispatch(fetchUser(userId));
  }

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };

  render() {
    return (
      <Profile
        navigation={this.props.navigation}
        signOut={this._signOutAsync}
        userData={this.props.userData}
      />
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.user.isLoading,
  userData: state.user.userData,
  userAuth: state.auth.updateAuthState
});

ProfileScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  userData: PropTypes.object
};

export default connect(mapStateToProps)(ProfileScreen);
