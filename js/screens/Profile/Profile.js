import React from 'react';
import { View, Text, Button } from 'react-native';
import PropTypes from 'prop-types';
import ProfileHeaderContainer from '../../components/ProfileHeader/ProfileHeaderContainer';
import { styles } from './styles';

const Profile = ({ navigation, signOut, userData }) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileTab}>
        <Text style={styles.profileText}>Profile</Text>
        <Button
          title="My Applications"
          onPress={() => navigation.navigate('Application')}
          style={styles.profileText}
        />
      </View>
      <ProfileHeaderContainer userData={{ userData }} />;
      <View>
        <Button onPress={signOut} title="sign me out" />
      </View>
    </View>
  );
};

Profile.propTypes = {
  navigation: PropTypes.object,
  signOut: PropTypes.func
};

export default Profile;
