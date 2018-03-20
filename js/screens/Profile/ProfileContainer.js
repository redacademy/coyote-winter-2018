import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Profile from './Profile';
import { fetchUser } from '../../redux/modules/user';

class ProfileContainer extends Component {
  static route = {
    navigationBar: {
      title: 'Profile'
    }
  };

  componentDidMount() {
    const userId = 'QhP2yK3dx4P8BAB3AHJiLPAZgn93';
    this.props.dispatch(fetchUser(userId));
  }

  render() {
    return <Profile userData={this.props.userData} />;
  }
}

const mapStateToProps = state => ({
  isLoading: state.user.isLoading,
  userData: state.user.userData,
  userAuth: state.auth.updateAuthState
});

ProfileContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  userData: PropTypes.object
};

export default connect(mapStateToProps)(ProfileContainer);
