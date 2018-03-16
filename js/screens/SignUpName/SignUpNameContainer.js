import React, { Component } from "react";

import { connect } from "react-redux";
import { fetchFirstName, fetchLastName } from "../../redux/modules/signup";
import SignUpName from "./SignUpName";
import PropTypes from "prop-types";

class SignUpNameContainer extends Component {
  constructor() {
    super();

    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
  }

  handleFirstName(text) {
    this.props.dispatch(fetchFirstName(text));
  }

  handleLastName(text) {
    this.props.dispatch(fetchLastName(text));
  }

  render() {
    return (
      <SignUpName
        // handleSubmit={this.handleSubmit}
        handleFirstName={this.handleFirstName}
        handleLastName={this.handleLastName}
      />
    );
  }
}

SignUpNameContainer.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  firstName: state.signup.first,
  lastName: state.signup.last
});

export default connect(mapStateToProps)(SignUpNameContainer);
