import React, { Component } from "react";
import { firebaseAuth, firestoreDb } from "../../config/firebaseConfig";
import { fetchEmail, fetchPassword } from "../../redux/modules/signup";

import { connect } from "react-redux";
import SignUp from "./SignUp";

import PropTypes from "prop-types";

class SignUpContainer extends Component {
  constructor() {
    super();

    this.addUser = this.addUser.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  handleEmail(text) {
    this.props.dispatch(fetchEmail(text));
  }

  handlePassword(text) {
    this.props.dispatch(fetchPassword(text));
  }

  addUser() {
    firebaseAuth
      .createUserWithEmailAndPassword(this.props.email, this.props.password)
      .then(authUser => {
        console.log(authUser);
        firestoreDb
          .collection("users")
          .doc(authUser.uid)

          .set({
            firstName: this.props.firstName,
            lastName: this.props.lastName
          })
          .then(() => {
            console.log("wooo");
          })
          .catch(function(error) {
            console.error("Error adding document: ", error);
          });
      });
  }

  render() {
    console.log(this.props.email);
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
  firstName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired.isRequired
};

SignUpContainer.propTypes = {
  firstName: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  lastName: PropTypes.string,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  firstName: state.signup.first,
  lastName: state.signup.last,
  email: state.signup.email,
  password: state.signup.password
});

export default connect(mapStateToProps)(SignUpContainer);
