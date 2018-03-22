import React, { Component } from 'react';

import {
  fetchEmail,
  fetchPassword,
  newUserError,
  fetchUsers
} from '../../redux/modules/signup';
import { isValidEmailAndPassword } from '../../lib/authHelper';

import { connect, AsyncStorage } from 'react-redux';
import SignUp from './SignUp';
import { newUser, getUsers } from '../../config/helpers';

import PropTypes from 'prop-types';

class SignUpScreen extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = { header: null };

  componentDidMount() {
    getUsers().then(querySnapshot => {
      let data = [];
      querySnapshot.forEach(doc => {
        doc.data().email ? data.push(doc.data().email) : null;
      });
      this.props.dispatch(fetchUsers(data));
    });
  }

  handleEmail = text => {
    this.props.dispatch(fetchEmail(text));
  };

  handlePassword = text => {
    this.props.dispatch(fetchPassword(text));
  };

  userError = error => {
    this.props.dispatch(newUserError(error));
  };

  addUser() {
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

    if (isValidEmailAndPassword(email, password)) {
      if (!users.includes(email)) {
        newUser(email, password, firstName, lastName).then(this._signInAsync);
      } else {
        this.props.dispatch(newUserError(userMessage));
      }
    } else {
      this.props.dispatch(newUserError(errorMessage));
    }
  }
  _signInAsync = async ({ newUser }) => {
    await AsyncStorage.setItem('userToken', {
      newUser
    });
    this.props.navigation.navigate('Profile');
  };

  addUser = () => {
    const { email, password, firstName, lastName, error } = this.props;
    newUser(email, password, firstName, lastName, this.userError(error));
    this.props.navigation.navigate('Profile');
  };

  render() {
    return (
      <SignUp
        handleEmail={this.handleEmail}
        handlePassword={this.handlePassword}
        addUser={this.addUser}
        error={this.props.error}
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
  error: {},
  users: []
};

SignUpScreen.propTypes = {
  firstName: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  lastName: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
  error: PropTypes.object,
  users: PropTypes.array,
  navigation: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  firstName: state.signup.first,
  lastName: state.signup.last,
  email: state.signup.email,
  password: state.signup.password,
  error: state.signup.error,
  users: state.signup.users
});

export default connect(mapStateToProps)(SignUpScreen);
