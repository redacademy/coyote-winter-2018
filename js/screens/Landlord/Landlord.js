import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';

import PropTypes from 'prop-types';
import { styles } from './styles';

const Landlord = ({ landlord }) => {
  const { bio, firstName, lastName, photoURL, email, location } = landlord;

  return (
    <ScrollView>
      <View style={styles.profileContainer}>
        <View style={styles.userWrapper}>
          <View style={styles.imageContainer}>
            console.log(photoURL);
            <Image
              style={styles.profileImage}
              source={{
                url: `data:image/jpg;base64, ${photoURL}`
              }}
            />
          </View>
          <View style={styles.userInfo}>
            <View style={styles.userNameContainer}>
              <Text style={styles.userName}>{firstName}</Text>
              <Text style={styles.userName}>{lastName}</Text>
            </View>
            <Text style={styles.location}>{location}</Text>
            <Text style={styles.location}>{email}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.subTitle}>About Me</Text>
          <View style={styles.descriptionContainer}>
            <Text style={styles.textDescription}>{bio}</Text>
          </View>
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
