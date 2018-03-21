import PropTypes from 'prop-types';
import React from 'react';
import { Text, View } from 'react-native';
import OutlineButton from '../OutlineButton/';

const ButtonGrid = ({ heading, tags, action }) => {
  const tagNames = Object.keys(tags);
  return (
    <View>
      <Text style={{ marginBottom: 10 }}>{heading}</Text>
      <View
        style={{
          justifyContent: 'center',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}
      >
        {tagNames.map(name => (
          <OutlineButton
            key={name}
            label={name}
            isPressed={tags[name]}
            onPress={() => action(name)}
          />
        ))}
      </View>
    </View>
  );
};

ButtonGrid.propTypes = {
  heading: PropTypes.string.isRequired,
  tags: PropTypes.object.isRequired,
  action: PropTypes.func.isRequired
};
export default ButtonGrid;
