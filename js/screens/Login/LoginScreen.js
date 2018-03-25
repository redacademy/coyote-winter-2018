import React, { Component } from 'react';

import { connect } from 'react-redux';
import { firebaseAuth } from '../../config/firebaseConfig';
import { AsyncStorage } from 'react-native';

import Login from './Login';
import PropTypes from 'prop-types';
import {
  displayLoginError,
  fetchEmail,
  fetchPassword
} from '../../redux/modules/login';
import { updateAuthState } from '../../redux/modules/auth';

class LoginContainer extends Component {
  constructor() {
    super();
  }

  static navigationOptions = {
    header: null
  };

  handleEmail = text => {
    this.props.dispatch(fetchEmail(text));
  };

  handlePassword = text => {
    this.props.dispatch(fetchPassword(text));
  };
  _signInAsync = async uid => {
    await AsyncStorage.setItem('userToken', uid);
    this.props.navigation.navigate('LocationSearch');
  };
  handleSubmit = () => {
    const { email, password } = this.props;

    firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        this._signInAsync(user.uid);
        this.props.dispatch(updateAuthState(user.uid));
      })
      .catch(err => {
        this.props.dispatch(displayLoginError(err));
      });
  };

  render() {
    return (
      <Login
        handleSubmit={this.handleSubmit}
        handleEmail={this.handleEmail}
        handlePassword={this.handlePassword}
        email={this.props.email}
        password={this.props.password}
        error={this.props.error}
        navigation={this.props.navigation}
      />
    );
  }
}

LoginContainer.defaultProps = {
  email: '',
  password: '',
  error: {}
};

LoginContainer.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  error: PropTypes.object,
  dispatch: PropTypes.func,
  navigation: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated,
  error: state.login.error,
  email: state.login.email,
  password: state.login.password
});

export default connect(mapStateToProps)(LoginContainer);
