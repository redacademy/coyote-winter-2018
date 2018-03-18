import React, { Component } from 'react';

import { connect } from 'react-redux';
import {
  fetchFirstName,
  fetchLastName
} from '../../redux/modules/signup';
import SignUpName from './SignUpName';
import PropTypes from 'prop-types';

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

  render() {
    return (
      <SignUpName
        handleFirstName={this.handleFirstName}
        handleLastName={this.handleLastName}
        navigation={this.props.navigation}
      />
    );
  }
}

SignUpNameScreen.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  firstName: state.signup.first,
  lastName: state.signup.last
});

export default connect(mapStateToProps)(
  SignUpNameScreen
);
