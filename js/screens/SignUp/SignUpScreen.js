import React, { Component } from 'react';

import {
  fetchEmail,
  fetchPassword,
  newUserError
} from '../../redux/modules/signup';

import { connect, AsyncStorage } from 'react-redux';
import SignUp from './SignUp';
import { newUser } from '../../config/helpers';

import PropTypes from 'prop-types';

class SignUpScreen extends Component {
  constructor(props) {
    super(props);

    this.userError = this.userError.bind(this);
  }

  static navigationOptions = { header: null };

  handleEmail = text => {
    this.props.dispatch(fetchEmail(text));
  };

  handlePassword = text => {
    this.props.dispatch(fetchPassword(text));
  };

  userError = error => {
    this.props.dispatch(newUserError(error));
  };

  _signInAsync = async ({ newUser }) => {
    await AsyncStorage.setItem('userToken', {
      newUser
    });
    this.props.navigation.navigate('Profile');
  };

  addUser = () => {
    const {
      email,
      password,
      firstName,
      lastName,
      error
    } = this.props;
    newUser(
      email,
      password,
      firstName,
      lastName,
      this.userError(error)
    );
    this.props.navigation.navigate('Profile');
  };

  render() {
    return (
      <SignUp
        handleEmail={this.handleEmail}
        handlePassword={this.handlePassword}
        addUser={this.addUser}
        navigation={this.props.navigation}
      />
    );
  }
}

SignUpScreen.defaultProps = {
  firstName: '',
  email: '',
  password: '',
  lastName: '',
  error: ''
};

SignUpScreen.propTypes = {
  firstName: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  lastName: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
  error: PropTypes.string,
  navigation: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  firstName: state.signup.first,
  lastName: state.signup.last,
  email: state.signup.email,
  password: state.signup.password,
  error: state.signup.error
});

export default connect(mapStateToProps)(SignUpScreen);
