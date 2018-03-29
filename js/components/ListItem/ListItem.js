import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import ViewMoreText from 'react-native-view-more-text';
import { fetchListing } from '../../redux/modules/listing';
import { withNavigation } from 'react-navigation';
import store from '../../redux/store';
import PropTypes from 'prop-types';
import moment from 'moment';

import { styles } from './styles';
import {
  renderViewMore,
  renderViewLess
} from '../../config/helpers';

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
        <View>
          <Text style={styles.title}>
            {item.listingTitle}
          </Text>
          <ViewMoreText
            numberOfLines={2}
            renderViewMore={renderViewMore}
            renderViewLess={renderViewLess}
          >
            <Text>{item.description}</Text>
          </ViewMoreText>
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
            onPress={() => {
              store.dispatch(fetchListing(item));
              navigation.navigate('Listing');
            }}
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
