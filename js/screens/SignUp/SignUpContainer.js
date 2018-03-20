import React, { Component } from 'react';

import {
  fetchEmail,
  fetchPassword,
  newUserError
} from '../../redux/modules/signup';

import { connect } from 'react-redux';
import SignUp from './SignUp';
import { newUser } from '../../config/helpers';

import PropTypes from 'prop-types';

class SignUpContainer extends Component {
  constructor() {
    super();

    this.addUser = this.addUser.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.userError = this.userError.bind(this);
  }

  handleEmail(text) {
    this.props.dispatch(fetchEmail(text));
  }

  handlePassword(text) {
    this.props.dispatch(fetchPassword(text));
  }

  userError(error) {
    this.props.dispatch(newUserError(error));
  }

  addUser() {
    const { email, password, firstName, lastName, error } = this.props;
    newUser(email, password, firstName, lastName, this.userError(error));
  }

  render() {
    return (
      <SignUp
        handleEmail={this.handleEmail}
        handlePassword={this.handlePassword}
        addUser={this.addUser}
      />
    );
  }
}

SignUpContainer.defaultProps = {
  firstName: '',
  email: '',
  password: '',
  lastName: '',
  error: ''
};

SignUpContainer.propTypes = {
  firstName: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  lastName: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
  error: PropTypes.string
};

const mapStateToProps = state => ({
  firstName: state.signup.first,
  lastName: state.signup.last,
  email: state.signup.email,
  password: state.signup.password,
  error: state.signup.error
});

export default connect(mapStateToProps)(SignUpContainer);
