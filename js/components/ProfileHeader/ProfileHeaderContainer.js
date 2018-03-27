import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ImagePicker from 'react-native-image-crop-picker';

import ProfileHeader from './ProfileHeader';
import {
  updateUserData,
  updateToggleEditable
} from '../../redux/modules/user';

const userId = 'QhP2yK3dx4P8BAB3AHJiLPAZgn93';

class ProfileHeaderContainer extends Component {
  openPicker = () => {
    ImagePicker.openPicker({
      width: 200,
      height: 200,
      cropping: true,
      includeBase64: true,
      cropperCircleOverlay: true,
      compressImageQuality: 0
    }).then(image => {
      this.handleImage(image.data);
    });
  };

  handleImage = image => {
    this.props.dispatch(
      updateUserData(userId, { image })
    );
  };
  handleBio = userData => {
    this.props.dispatch(
      updateUserData(userId, { bio: userData })
    );
  };
  handleFirstName = userData => {
    this.props.dispatch(
      updateUserData(userId, { firstName: userData })
    );
  };
  handleLastName = userData => {
    this.props.dispatch(
      updateUserData(userId, { lastName: userData })
    );
  };
  handleLocation = userData => {
    this.props.dispatch(
      updateUserData(userId, { location: userData })
    );
  };
  handleToggleEditable = () => {
    this.props.dispatch(updateToggleEditable());
  };

  render() {
    const { userData, editable } = this.props;
    return (
      <ProfileHeader
        editable={editable}
        openPicker={this.openPicker}
        handleBio={this.handleBio}
        handleFirstName={this.handleFirstName}
        handleLastName={this.handleLastName}
        handleLocation={this.handleLocation}
        handleToggleEditable={
          this.handleToggleEditable
        }
        userData={userData.userData}
      />
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.user.isLoading,
  updateUser: state.user.updateUserData,
  editable: state.user.editable,
  userAuth: state.auth.updateAuthState
});

ProfileHeaderContainer.defaultProps = {
  firstName: '',
  lastName: '',
  location: '',
  bio: '',
  image: {},
  userData: {},
  updateUserData: {}
};

ProfileHeaderContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  updateUserData: PropTypes.object,
  userData: PropTypes.object.isRequired,
  editable: PropTypes.bool.isRequired
};

export default connect(mapStateToProps)(
  ProfileHeaderContainer
);
