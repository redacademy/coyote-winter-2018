import React, { Component } from "react";

import { connect } from "react-redux";
import { firebaseAuth } from "../../config/firebaseConfig";
import Login from "./Login";
import PropTypes from "prop-types";

class LoginContainer extends Component {
  constructor() {
    super();
    this.state = {
      emailInput: "",
      passwordInput: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  handleEmail(text) {
    this.setState({
      emailInput: text
    });
  }

  handlePassword(text) {
    this.setState({
      passwordInput: text
    });
  }

  handleSubmit() {
    const { emailInput, passwordInput } = this.state;
    firebaseAuth
      .signInWithEmailAndPassword(emailInput, passwordInput)
      .then(() => console.log("it worked"))
      .catch(err => {
        console.log(err);
      });
  }

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

export default connect(mapStateToProps)(LoginContainer);
