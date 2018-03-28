import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
import { withNavigation } from 'react-navigation';

import { styles } from './styles';

const Listing = ({
  address,
  listing,
  navigation,
  images,
  faveIds,
  featuredImage,
  handleFeaturedImage,
  addToFaves,
  application,
  applications
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

          {!applications.find(app => app[0] === listing.listingId) ? (
            <TouchableOpacity style={styles.buttonOne} onPress={application}>
              <Text style={styles.buttonTextOne}>Apply To This Property</Text>
            </TouchableOpacity>
          ) : (
            applications.map((app, i) => {
              return (
                app[0] === listing.listingId && (
                  <Text style={styles.confirmed} key={i}>
                    You applied to this on
                    {' ' + moment.unix(app[1]).format('MM/DD/YYYY')}
                  </Text>
                )
              );
            })
          )}

          <TouchableOpacity
            style={styles.buttonTwo}
            onPress={() => {
              navigation.navigate('Landlord');
            }}
          >
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
  navigation: PropTypes.object.isRequired,
  featuredImage: PropTypes.string.isRequired,
  listing: PropTypes.object.isRequired,
  images: PropTypes.array.isRequired,
  handleFeaturedImage: PropTypes.func.isRequired,
  faveIds: PropTypes.array,
  addToFaves: PropTypes.func.isRequired,
  landlord: PropTypes.string.isRequired,
  address: PropTypes.string,
  application: PropTypes.func.isRequired,
  applications: PropTypes.array.isRequired
};

export default withNavigation(Listing);
