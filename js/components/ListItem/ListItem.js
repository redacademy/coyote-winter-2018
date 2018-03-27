import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import { withNavigation } from 'react-navigation';

import PropTypes from 'prop-types';
import moment from 'moment';

import { styles } from './styles';

const ListItem = ({ item, navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={{ uri: item.pictures.pic4 }}
          style={styles.image}
        />
      </View>
      <View style={styles.listing}>
        <Text style={styles.title}>
          {item.listingTitle}
        </Text>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>
            {item.description}
          </Text>
        </View>
        <Text style={styles.lastUpdated}>
          Last Updated:
          {moment
            .unix(item.listingCreatedDate)
            .format('MM/DD/YYYY')}
        </Text>
        <View />
        <View style={styles.priceAndButton}>
          <Text style={styles.price}>
            ${item.price}
          </Text>
          <TouchableOpacity
            style={styles.button}
            title="View"
            onPress={() =>
              navigation.navigate('Listing', {
                listingId: item.listingId
              })
            }
          >
            <Text style={styles.buttonText}>View</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

ListItem.propTypes = {
  item: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired
};

export default withNavigation(ListItem);
