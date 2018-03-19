import React, { Component } from 'react';

import { connect } from 'react-redux';

import { AsyncStorage } from 'react-native';
import { firebaseAuth } from '../../config/firebaseConfig';
import Login from './Login';
import PropTypes from 'prop-types';

class LoginScreen extends Component {
  constructor() {
    super();
    this.state = {
      emailInput: '',
      passwordInput: ''
    };
  }
  static navigationOptions = {
    headerMode: 'none'
  };
  static propTypes = {
    navigation: PropTypes.object,
    navigate: PropTypes.func
  };

  handleEmail = text => {
    this.setState({
      emailInput: text
    });
  };

  handlePassword = text => {
    this.setState({
      passwordInput: text
    });
  };

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };

  handleSubmit = () => {
    const { emailInput, passwordInput } = this.state;
    firebaseAuth
      .signInWithEmailAndPassword(
        emailInput,
        passwordInput
      )
      .then(this._signInAsync)
      /* eslint-disable-next-line no-console */
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Login
        handleSubmit={this.handleSubmit}
        handleEmail={this.handleEmail}
        handlePassword={this.handlePassword}
      />
    );
  }
}
const mapStateToProps = state => ({
  authenticated: state.auth.authenticated
});

export default connect(mapStateToProps)(LoginScreen);
// export default LoginScreen;
