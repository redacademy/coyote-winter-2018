import React, { Component } from 'react';

import { connect } from 'react-redux';
import { firebaseAuth } from '../../config/firebaseConfig';
import Login from './Login';
import PropTypes from 'prop-types';
import {
  displayLoginError,
  fetchEmail,
  fetchPassword
} from '../../redux/modules/login';

class LoginContainer extends Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  handleEmail(text) {
    this.props.dispatch(fetchEmail(text));
  }

  handlePassword(text) {
    this.props.dispatch(fetchPassword(text));
  }

  handleSubmit() {
    const { email, password } = this.props;

    const validEmail = /^([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const errorMessage = {
      code: 'Invalid login',
      message: 'Please Enter a Valid Email Address'
    };

    if (validEmail.test(email) && password.length > 5) {
      firebaseAuth.signInWithEmailAndPassword(email, password).catch(err => {
        this.props.dispatch(displayLoginError(err));
      });
    } else {
      this.props.dispatch(displayLoginError(errorMessage));
    }
  }

  render() {
    return (
      <Login
        handleSubmit={this.handleSubmit}
        handleEmail={this.handleEmail}
        handlePassword={this.handlePassword}
        email={this.props.email}
        password={this.props.password}
        error={this.props.error}
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
  dispatch: PropTypes.func
};

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated,
  error: state.login.error,
  email: state.login.email,
  password: state.login.password
});

export default connect(mapStateToProps)(LoginContainer);
