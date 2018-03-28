import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import ProfileHeaderContainer from '../../components/ProfileHeader/ProfileHeaderContainer';
import { styles } from './styles';

const Profile = ({ navigation, userData }) => {
  console.log(userData);
  return (
    <View style={styles.container}>
      <ProfileHeaderContainer userData={{ userData }} navigation={navigation} />;
    </View>
  );
};

Profile.propTypes = {
  navigation: PropTypes.object.isRequired,
  signOut: PropTypes.func,
  userData: PropTypes.object
};

export default Profile;
