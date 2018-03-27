import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Image
} from 'react-native';

import PropTypes from 'prop-types';
import { styles } from './styles';

const Landlord = ({ landlord }) => {
  const {
    bio,
    firstName,
    lastName,
    avatar,
    email,
    location
  } = landlord;

  return (
    <ScrollView>
      <View style={styles.profileContainer}>
        <View style={styles.userWrapper}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.profileImage}
              source={{
                url: `data:image/jpg;base64, ${avatar}`
              }}
            />
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.userName}>
              {firstName}
            </Text>
            <Text style={styles.userName}>
              {lastName}
            </Text>
            <Text style={styles.textH4}>
              {location}
            </Text>
            <Text>{email}</Text>
          </View>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.textH4}>About Me</Text>
          <Text style={styles.description}>{bio}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

Landlord.propTypes = {
  navigation: PropTypes.object.isRequired,
  landlord: PropTypes.object.isRequired
};

export default Landlord;
