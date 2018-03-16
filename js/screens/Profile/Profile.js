import React from "react";
import { View, Text } from "react-native";

import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import { styles } from "./styles";

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileTab}>
        <Text style={styles.profileText}>Profile</Text>
        <Text style={styles.profileText}>My Applications</Text>
      </View>
      <ProfileHeader />;
    </View>
  );
};

export default Profile;
