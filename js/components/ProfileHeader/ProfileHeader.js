import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity
} from 'react-native';

import ImagePicker from 'react-native-image-crop-picker';

import {
  getUserProfile,
  updateUserProfile,
  unMarshallResult
} from '../../config/helpers';

import { styles } from './styles';

const userId = 'QhP2yK3dx4P8BAB3AHJiLPAZgn93';

class ProfileHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editable: false,
      photoURL: '',
      firstName: '',
      lastName: '',
      location: '',
      bio: ''
    };
  }

  openPicker = () => {
    ImagePicker.openPicker({
      width: 200,
      height: 200,
      cropping: true,
      includeBase64: true,
      cropperCircleOverlay: true,
      compressImageQuality: 0
    }).then(image => {
      this.setState({ photoURL: image.data });
    });
  };

  componentDidMount() {
    getUserProfile(userId).then(doc => {
      if (doc.exists) {
        const userData = unMarshallResult(doc);
        this.setState({
          firstName: userData.firstName,
          lastName: userData.lastName,
          location: userData.location,
          bio: userData.bio,
          photoURL: userData.photoURL
        });
      }
    });
  }

  editProfile = () => {
    this.setState({ editable: true });
  };

  saveEditable = () => {
    updateUserProfile(userId, {
      bio: this.state.bio,
      location: this.state.location,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      photoURL: this.state.photoURL
    });
    this.setState({ editable: false });
  };

  render() {
    const base64Image = `data:image/jpg;base64, ${this.state.photoURL}`;
    const dpr =
      this.state.photoURL && this.state.editable === false ? (
        <Image style={styles.profileImage} source={{ url: base64Image }} />
      ) : (
        <TouchableOpacity onPress={() => this.openPicker()}>
          <View>
            <Image style={styles.profileImage} source={{ url: base64Image }} />
            <Text style={styles.changeImage}>Change Image</Text>
          </View>
        </TouchableOpacity>
      );
    return (
      <ScrollView>
        <View style={styles.profileContainer}>
          <TouchableOpacity onPress={this.editProfile}>
            <View style={styles.editContainer}>
              <Text style={styles.editProfile}>Edit</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.userWrapper}>
            <View style={styles.imageContainer}>{dpr}</View>
            <View style={styles.userInfo}>
              <TextInput
                style={styles.userName}
                onChangeText={firstName => this.setState({ firstName })}
                value={this.state.firstName}
                placeholder="First Name"
                editable={this.state.editable}
                selectTextOnFocus={true}
              />
              <TextInput
                style={styles.userName}
                onChangeText={lastName => this.setState({ lastName })}
                value={this.state.lastName}
                placeholder="Last Name"
                editable={this.state.editable}
                selectTextOnFocus={true}
              />
              <TextInput
                style={styles.textH4}
                onChangeText={location => this.setState({ location })}
                value={this.state.location}
                placeholder="Location"
                editable={this.state.editable}
                selectTextOnFocus={true}
              />
            </View>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.textH4}>About Me</Text>
            <TextInput
              style={styles.description}
              onChangeText={bio => this.setState({ bio })}
              value={this.state.bio}
              placeholder="Tell us a little something about yourself."
              editable={this.state.editable}
            />
          </View>
          {this.state.editable === true ? (
            <TouchableOpacity onPress={this.saveEditable}>
              <View style={styles.saveButton}>
                <Text style={styles.buttonText}>SAVE</Text>
              </View>
            </TouchableOpacity>
          ) : null}
        </View>
      </ScrollView>
    );
  }
}

export default ProfileHeader;
