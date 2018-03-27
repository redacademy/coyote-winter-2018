import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';
import Chip from '../Chip/';
import { styles } from './styles';

const ChipGrid = ({ tags, action }) => {
  return (
    <View style={styles.body}>
      <View style={styles.cell}>
        {tags.map(name => (
          <View key={name} style={styles.chip}>
            <Chip key={name} label={name} close={() => action(name)} />
          </View>
        ))}
      </View>
    </View>
  );
};

ChipGrid.propTypes = {
  tags: PropTypes.array.isRequired,
  action: PropTypes.func.isRequired
};
export default ChipGrid;
