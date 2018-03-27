import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from './styles';

const Listing = ({
  listing,
  images,
  faves,
  featuredImage,
  handleFeaturedImage,
  addToFaves,
  currentListing,
  address
}) => {
  return (
    <View style={{ position: 'relative', flex: 1 }}>
      <ScrollView style={{ position: 'absolute', top: 0, bottom: 0 }}>
        {featuredImage !== '' ? (
          <Image source={{ uri: featuredImage }} style={styles.featuredImage} />
        ) : null}

        <View style={styles.cardContainer}>
          <Text style={styles.morePicture}>More Pictures</Text>
          <View style={styles.imageContainer}>
            {images.map((image, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleFeaturedImage(image)}
                >
                  <Image
                    source={{
                      uri: image
                    }}
                    style={styles.image}
                  />
                </TouchableOpacity>
              );
            })}
          </View>
          <TouchableOpacity style={styles.buttonOne}>
            <Text style={styles.buttonTextOne}>Apply To This Property</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonTwo}>
            <Text style={styles.buttonTextTwo}>View Landlords Profile</Text>
          </TouchableOpacity>

          <View style={styles.faveContainer}>
            <Text style={styles.listingTitle}>
              {listing[0] && listing[0].listingTitle}
            </Text>

            <TouchableOpacity style={styles.heart} onPress={addToFaves}>
              {currentListing ? (
                faves.includes(currentListing) ? (
                  <Icon name="ios-heart" color="red" style={styles.heartSize} />
                ) : (
                  <Icon
                    name="ios-heart"
                    color="gray"
                    style={styles.heartSize}
                  />
                )
              ) : null}
            </TouchableOpacity>
          </View>
          <Text style={styles.location}>{listing[0] && listing[0].city}</Text>
          <Text style={styles.price}>
            {listing[0] && `$${listing[0].price}/month`}
          </Text>

          <Text style={styles.description}>
            {listing[0] && listing[0].description}
          </Text>

          <View />
          {address && (
            <Image
              source={{
                uri: address
              }}
              style={styles.map}
            />
          )}
        </View>
      </ScrollView>
    </View>
  );
};

Listing.defaultProps = {
  currentListing: '',
  address: ''
};

Listing.propTypes = {
  featuredImage: PropTypes.string.isRequired,
  listing: PropTypes.array.isRequired,
  images: PropTypes.array.isRequired,
  handleFeaturedImage: PropTypes.func.isRequired,
  faves: PropTypes.array.isRequired,
  addToFaves: PropTypes.func.isRequired,
  currentListing: PropTypes.string,
  landlord: PropTypes.string.isRequired,
  address: PropTypes.string
};

export default Listing;
