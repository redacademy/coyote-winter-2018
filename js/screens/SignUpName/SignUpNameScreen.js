import React, { Component } from 'react';

import { connect } from 'react-redux';
import {
  fetchFirstName,
  fetchLastName,
  newUserError
} from '../../redux/modules/signup';
import SignUpName from './SignUpName';
import PropTypes from 'prop-types';
import errorMessages from '../../lib/errorMessages';

class SignUpNameScreen extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = { header: null };

  handleFirstName = text => {
    this.props.dispatch(fetchFirstName(text));
  };

  handleLastName = text => {
    this.props.dispatch(fetchLastName(text));
  };

  handleNextScreen = () => {
    const { navigation, firstName, lastName } = this.props;

    firstName !== '' && lastName !== ''
      ? navigation.navigate('SignUpEmailAndPassword')
      : this.props.dispatch(newUserError(errorMessages.NAME_ERROR));
  };

  render() {
    return (
      <SignUpName
        handleFirstName={this.handleFirstName}
        handleLastName={this.handleLastName}
        handleNextScreen={this.handleNextScreen}
        error={this.props.error}
      />
    );
  }
}

SignUpNameScreen.defaultProps = {
  firstName: '',
  lastName: '',
  error: {}
};

SignUpNameScreen.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  error: PropTypes.object
};

const mapStateToProps = state => ({
  firstName: state.signup.first,
  lastName: state.signup.last,
  error: state.signup.error
});

export default connect(mapStateToProps)(SignUpNameScreen);
