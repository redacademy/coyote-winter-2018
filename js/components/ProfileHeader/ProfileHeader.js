import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity
} from 'react-native';

import {
  getUserProfile,
  updateUserProfile,
  unMarshallResult
} from '../../config/helpers';

import { styles } from './styles';

class ProfileHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editable: false,
      firstName: '',
      lastName: '',
      location: '',
      bio: ''
    };
  }

  componentDidMount() {
    //TODO this is a stub, we will get from redux
    const userId = 'QhP2yK3dx4P8BAB3AHJiLPAZgn93';

    getUserProfile(userId).then(doc => {
      if (doc.exists) {
        const userData = unMarshallResult(doc);
        this.setState({
          firstName: userData.firstName,
          lastName: userData.lastName,
          location: userData.location,
          bio: userData.bio
        });
      }
    });
  }

  editProfile = () => {
    this.setState({ editable: true });
  };

  saveEditable = () => {
    updateUserProfile({
      bio: this.state.bio,
      location: this.state.location,
      firstName: this.state.firstName,
      lastName: this.state.lastName
    });
    this.setState({ editable: false });
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.profileContainer}>
          <TouchableOpacity onPress={this.editProfile}>
            <View style={styles.editContainer}>
              <Text style={styles.editProfile}>
                Edit
              </Text>
            </View>
          </TouchableOpacity>
          <View style={styles.userWrapper}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.profileImage}
                source={{
                  uri:
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Felis_silvestris_silvestris_small_gradual_decrease_of_quality.png/200px-Felis_silvestris_silvestris_small_gradual_decrease_of_quality.png'
                }}
              />
            </View>
            <View style={styles.userInfo}>
              <TextInput
                style={styles.userName}
                onChangeText={firstName =>
                  this.setState({ firstName })
                }
                value={this.state.firstName}
                placeholder="First Name"
                editable={this.state.editable}
                selectTextOnFocus={true}
              />
              <TextInput
                style={styles.userName}
                onChangeText={lastName =>
                  this.setState({ lastName })
                }
                value={this.state.lastName}
                placeholder="Last Name"
                editable={this.state.editable}
                selectTextOnFocus={true}
              />
              <TextInput
                style={styles.textH4}
                onChangeText={location =>
                  this.setState({ location })
                }
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
              onChangeText={bio =>
                this.setState({ bio })
              }
              value={this.state.bio}
              placeholder="Tell us a little something about yourself."
              editable={this.state.editable}
            />
          </View>
          {this.state.editable === true ? (
            <TouchableOpacity
              onPress={this.saveEditable}
            >
              <View style={styles.saveButton}>
                <Text style={styles.buttonText}>
                  SAVE
                </Text>
              </View>
            </TouchableOpacity>
          ) : null}
        </View>
      </ScrollView>
    );
  }
}

export default ProfileHeader;
