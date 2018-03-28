import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from './styles';

const Listing = ({
  listing,
  images,
  faveIds,
  featuredImage,
  handleFeaturedImage,
  addToFaves,
  address
}) => {
  return (
    <View>
      <ScrollView>
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
              {listing && listing.listingTitle}
            </Text>

            <TouchableOpacity style={styles.heart} onPress={addToFaves}>
              {listing.listingId ? (
                faveIds && faveIds.includes(listing.listingId) ? (
                  <Icon name="ios-heart" color="red" style={styles.heartSize} />
                ) : (
                  <Icon
                    name="ios-heart-outline"
                    color="red"
                    style={styles.heartSize}
                  />
                )
              ) : null}
            </TouchableOpacity>
          </View>
          <Text style={styles.location}>{listing && listing.city}</Text>
          <Text style={styles.price}>
            {listing && `$${listing.price}/month`}
          </Text>
          <Text style={styles.description}>
            {listing && listing.description}
          </Text>
          <View>
            {address && (
              <Image
                source={{
                  uri: address
                }}
                style={styles.map}
              />
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

Listing.defaultProps = {
  address: '',
  faveIds: []
};

Listing.propTypes = {
  featuredImage: PropTypes.string.isRequired,
  listing: PropTypes.object.isRequired,
  images: PropTypes.array.isRequired,
  handleFeaturedImage: PropTypes.func.isRequired,
  faveIds: PropTypes.array,
  addToFaves: PropTypes.func.isRequired,
  landlord: PropTypes.string.isRequired,
  address: PropTypes.string
};

export default Listing;
