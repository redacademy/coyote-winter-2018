import React from 'react';

import MapView, { Marker } from 'react-native-maps';
import styles from './styles';

const region = {
  latitude: 49.263348,
  longitude: -123.138128,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421
};

const Map = ({ data }) => {
  return (
    <MapView initialRegion={region} style={styles.map}>
      <Marker
        coordinate={{
          latitude: 49.263348,
          longitude: -123.138128
        }}
        title="coyote"
        calloutOffset={{ x: -8, y: 28 }}
        calloutAnchor={{ x: 0.5, y: 0.4 }}
      />
    </MapView>
  );
};

export default Map;
