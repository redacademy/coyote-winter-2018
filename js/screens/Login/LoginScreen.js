import React, { Component } from 'react';

import { connect } from 'react-redux';

import { firebaseAuth } from '../../config/firebaseConfig';

import { AsyncStorage } from 'react-native';
import Login from './Login';
import PropTypes from 'prop-types';

class LoginScreen extends Component {
  constructor() {
    super();
    this.state = {
      emailInput: '',
      passwordInput: '',
      error: ''
    };
  }
  static navigationOptions = {
    header: null
  };
  static propTypes = {
    navigation: PropTypes.object
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
    this.props.navigation.navigate('LocationSearch');
  };

  handleSubmit = () => {
    const { emailInput, passwordInput } = this.state;
    firebaseAuth
      .signInWithEmailAndPassword(
        emailInput,
        passwordInput
      )
      .then(this._signInAsync)
      .catch(err => this.setState({ error: err }));
  };

  render() {
    return (
      <Login
        handleSubmit={this.handleSubmit}
        handleEmail={this.handleEmail}
        handlePassword={this.handlePassword}
        navigation={this.props.navigation}
      />
    );
  }
}
const mapStateToProps = state => ({
  authenticated: state.auth.authenticated
});

export default connect(mapStateToProps)(LoginScreen);
