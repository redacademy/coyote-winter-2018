import React from 'react';
import { View, Button } from 'react-native';
import PropTypes from 'prop-types';
import ProfileHeader from '../../components/ProfileHeader/ProfileHeader';
import { styles } from './styles';

const Profile = ({ navigation, signOut }) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileTab} />
      <ProfileHeader />
      <Button
        title="My Applications"
        onPress={() =>
          navigation.navigate('Application')
        }
        style={styles.profileText}
      />
      <Button onPress={signOut} title="sign me out" />
    </View>
  );
};

Profile.propTypes = {
  navigation: PropTypes.object,
  signOut: PropTypes.func
};

export default Profile;
