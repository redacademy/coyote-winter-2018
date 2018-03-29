import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import ViewMoreText from 'react-native-view-more-text';
import { withNavigation } from 'react-navigation';
import { styles } from './styles';
import { fetchListing } from '../../redux/modules/listing';
import store from '../../redux/store';

const FavouriteItem = ({
  item,
  navigation,
  viewMore,
  viewLess
}) => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={{ uri: item.pictures.pic4 }}
          style={styles.image}
        />
        <Icon style={styles.heart} name="ios-heart" />
      </View>
      <View style={styles.listing}>
        <View>
          <Text style={styles.title}>
            {item.listingTitle}
          </Text>
          <ViewMoreText
            numberOfLines={2}
            renderViewMore={viewMore}
            renderViewLess={viewLess}
          >
            <Text>{item.description}</Text>
          </ViewMoreText>
        </View>
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

FavouriteItem.propTypes = {
  item: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
  viewMore: PropTypes.func.isRequired,
  viewLess: PropTypes.func.isRequired
};

export default withNavigation(FavouriteItem);
