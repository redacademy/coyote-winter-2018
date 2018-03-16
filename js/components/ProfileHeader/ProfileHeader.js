import React from "react";
import { ScrollView, View, Text, Image } from "react-native";

import { styles } from "./styles";

const ProfileHeader = () => {
  return (
    <ScrollView>
      <View style={styles.profileContainer}>
        <View style={styles.editContainer}>
          <Text style={styles.editProfile}>Edit</Text>
        </View>
        <View style={styles.userWrapper}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.profileImage}
              source={{
                uri:
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Felis_silvestris_silvestris_small_gradual_decrease_of_quality.png/200px-Felis_silvestris_silvestris_small_gradual_decrease_of_quality.png"
              }}
            />
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.userName}>Colin Musk</Text>
            <Text style={styles.textH4}>Vancouver, BC</Text>
            <Text>ratings</Text>
          </View>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.textH4}>About Me</Text>
          <Text style={styles.description}>
            This describes ever so beautifully, cause I am a beautiful soul in a
            sea of Ghouls.
          </Text>
        </View>
        <View style={styles.saveButton}>
          <Text style={styles.buttonText}>SAVE</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileHeader;
