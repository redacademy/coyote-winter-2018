import React from 'react';
import { Text, View, Image } from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';
import { styles } from './styles';

const ApplicationItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={{ uri: item.pictures.pic4 }} style={styles.image} />
      </View>
      <View style={styles.listing}>
        <Text style={styles.title}>{item.listingTitle}</Text>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>{item.description}</Text>
        </View>
        <Text style={styles.lastUpdated}>
          Applied On:
          {moment.unix(item.createdOn).format('MM/DD/YYYY')}
        </Text>
        <Text style={styles.price}>{item.applicationStatus}</Text>
        <View />
      </View>
    </View>
  );
};

ApplicationItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default ApplicationItem;
