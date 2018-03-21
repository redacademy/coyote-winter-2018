import React, { Component } from 'react';

import {
  fetchEmail,
  fetchPassword,
  newUserError,
  fetchUsers
} from '../../redux/modules/signup';

import { connect } from 'react-redux';
import SignUp from './SignUp';
import { newUser, getUsers } from '../../config/helpers';

import PropTypes from 'prop-types';

class SignUpContainer extends Component {
  constructor() {
    super();

    this.addUser = this.addUser.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.userError = this.userError.bind(this);
  }

  componentDidMount() {
    getUsers().then(querySnapshot => {
      let data = [];
      querySnapshot.forEach(doc => {
        doc.data().email ? data.push(doc.data().email) : null;
      });
      this.props.dispatch(fetchUsers(data));
    });
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
    const validEmail = /^([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const errorMessage = {
      code: 'Invalid email or password',
      message:
        'Please Enter a valid email and password of at least 6 characters'
    };
    const userMessage = {
      code: 'User already exists',
      message: 'It looks like you already have an account!'
    };
    const { email, password, firstName, lastName, users } = this.props;

    if (validEmail.test(email) && password.length > 5) {
      if (!users.includes(email)) {
        newUser(email, password, firstName, lastName);
      } else {
        this.props.dispatch(newUserError(userMessage));
      }
    } else {
      this.props.dispatch(newUserError(errorMessage));
    }
  }

  render() {
    return (
      <SignUp
        handleEmail={this.handleEmail}
        handlePassword={this.handlePassword}
        addUser={this.addUser}
        error={this.props.error}
      />
    );
  }
}

SignUpContainer.defaultProps = {
  firstName: '',
  email: '',
  password: '',
  lastName: '',
  error: {},
  users: []
};

SignUpContainer.propTypes = {
  firstName: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  lastName: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
  error: PropTypes.object,
  users: PropTypes.array
};

const mapStateToProps = state => ({
  firstName: state.signup.first,
  lastName: state.signup.last,
  email: state.signup.email,
  password: state.signup.password,
  error: state.signup.error,
  users: state.signup.users
});

export default connect(mapStateToProps)(SignUpContainer);
