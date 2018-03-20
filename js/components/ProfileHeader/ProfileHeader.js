import React from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity
} from 'react-native';

import { styles } from './styles';

const ProfileHeader = ({
  editable,
  handleBio,
  handleFirstName,
  handleLastName,
  handleLocation,
  handleToggleEditable,
  openPicker,
  userData
}) => {
  const base64Image = `data:image/jpg;base64, ${userData.image}`;
  let userImage =
    userData.image && editable === false ? (
      <Image style={styles.profileImage} source={{ url: base64Image }} />
    ) : (
      <TouchableOpacity onPress={() => openPicker()}>
        <View>
          <Image style={styles.profileImage} source={{ url: base64Image }} />
          <Text style={styles.changeImage}>Change Image</Text>
        </View>
      </TouchableOpacity>
    );

  return (
    <ScrollView>
      <View style={styles.profileContainer}>
        <TouchableOpacity onPress={handleToggleEditable}>
          <View style={styles.editContainer}>
            <Text style={styles.editProfile}>Edit</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.userWrapper}>
          <View style={styles.imageContainer}>{userImage}</View>
          <View style={styles.userInfo}>
            <TextInput
              style={styles.userName}
              onChangeText={handleFirstName}
              value={userData.firstName}
              placeholder="First Name"
              editable={editable}
              selectTextOnFocus={true}
            />
            <TextInput
              style={styles.userName}
              value={userData.lastName}
              onChangeText={handleLastName}
              placeholder="Last Name"
              editable={editable}
              selectTextOnFocus={true}
            />
            <TextInput
              style={styles.textH4}
              onChangeText={handleLocation}
              value={userData.location}
              placeholder="Location"
              editable={editable}
              selectTextOnFocus={true}
            />
          </View>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.textH4}>About Me</Text>
          <TextInput
            style={styles.description}
            onChangeText={handleBio}
            value={userData.bio}
            placeholder="Tell us a little something about yourself."
            editable={editable}
          />
        </View>
        {editable === true ? (
          <TouchableOpacity onPress={handleToggleEditable}>
            <View style={styles.saveButton}>
              <Text style={styles.buttonText}>SAVE</Text>
            </View>
          </TouchableOpacity>
        ) : null}
      </View>
    </ScrollView>
  );
};

ProfileHeader.propTypes = {
  editable: PropTypes.bool.isRequired,
  handleBio: PropTypes.func.isRequired,
  handleFirstName: PropTypes.func.isRequired,
  handleLastName: PropTypes.func.isRequired,
  handleLocation: PropTypes.func.isRequired,
  handleToggleEditable: PropTypes.func.isRequired,
  openPicker: PropTypes.func.isRequired,
  userData: PropTypes.object
};

export default ProfileHeader;
