import React from 'react';
import PropTypes from 'prop-types';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { Text, View } from 'react-native';
import { styles } from './styles';

const Slider = ({
  label,
  priceRange,
  onPriceRangeChange,
  min,
  max,
  increaseBy
}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.container}>
        <View style={styles.priceContainer}>
          <Text style={styles.priceLabel}>${priceRange[0]}</Text>
          <Text style={styles.priceLabel}>${priceRange[1]}</Text>
        </View>
        <View style={styles.center}>
          <MultiSlider
            selectedStyle={styles.slider}
            values={priceRange}
            sliderLength={220}
            onValuesChange={onPriceRangeChange}
            min={min}
            max={max}
            step={increaseBy}
          />
        </View>
      </View>
    </View>
  );
};

Slider.propTypes = {
  label: PropTypes.string.isRequired,
  max: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  onPriceRangeChange: PropTypes.func.isRequired,
  priceRange: PropTypes.array.isRequired,
  increaseBy: PropTypes.number.isRequired
};
export default Slider;
