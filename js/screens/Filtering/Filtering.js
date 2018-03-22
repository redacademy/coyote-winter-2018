import React from 'react';
import {
  View,
  ScrollView,
  Text,
  Picker
} from 'react-native';
import PropTypes from 'prop-types';
import ButtonGrid from '../../components/ButtonGrid';
import Slider from '../../components/Slider';
import {
  updateLaundryTags,
  updateOccupantTags,
  updateOtherTags,
  updateParkingTags,
  updatePropertyTags
} from '../../redux/modules/filter';
import { styles } from './styles';
import { colors } from '../../config/styles';

const Filtering = ({
  laundryTags,
  numBathrooms,
  numBedrooms,
  occupantTags,
  onPriceRangeChange,
  otherTags,
  parkingTags,
  priceRange,
  propertyTags,
  tagAction,
  updateNumBathrooms,
  updateNumBedrooms
}) => {
  return (
    <ScrollView>
      <Text style={styles.heading}>Price</Text>
      <View style={styles.price}>
        <Slider
          priceRange={priceRange}
          onPriceRangeChange={onPriceRangeChange}
          min={100}
          max={10000}
          increaseBy={100}
        />
      </View>
      <ButtonGrid
        heading="Property Type"
        tags={propertyTags}
        action={name =>
          tagAction(
            propertyTags,
            name,
            updatePropertyTags
          )
        }
      />
      <ButtonGrid
        heading="I'm Looking for..."
        tags={occupantTags}
        action={name =>
          tagAction(
            occupantTags,
            name,
            updateOccupantTags
          )
        }
      />
      <Text style={styles.heading}>I Need...</Text>

      <View style={styles.pickerContainer}>
        <View style={styles.pickerWrapper}>
          <Text style={styles.pickerHeader}>
            Bedrooms
          </Text>
          <Picker
            style={styles.picker}
            itemStyle={{ color: colors.MAIN }}
            selectedValue={numBedrooms}
            onValueChange={updateNumBedrooms}
          >
            <Picker.Item label="1" value={1} />
            <Picker.Item label="2" value={2} />
            <Picker.Item label="3" value={3} />
            <Picker.Item label="4" value={4} />
            <Picker.Item label="5" value={5} />
            <Picker.Item label="6" value={6} />
            <Picker.Item label="7" value={7} />
            <Picker.Item label="8" value={8} />
          </Picker>
        </View>
        <View style={styles.pickerWrapper}>
          <Text style={styles.pickerHeader}>
            Bathrooms
          </Text>
          <Picker
            style={styles.picker}
            itemStyle={{ color: colors.MAIN }}
            selectedValue={numBathrooms}
            onValueChange={updateNumBathrooms}
          >
            <Picker.Item label="1" value={1} />
            <Picker.Item label="2" value={2} />
            <Picker.Item label="3" value={3} />
            <Picker.Item label="4" value={4} />
            <Picker.Item label="5" value={5} />
            <Picker.Item label="6" value={6} />
            <Picker.Item label="7" value={7} />
            <Picker.Item label="8" value={8} />
          </Picker>
        </View>
      </View>
      <ButtonGrid
        heading="Other"
        tags={otherTags}
        action={name =>
          tagAction(otherTags, name, updateOtherTags)
        }
      />
      <ButtonGrid
        heading="Laundry"
        tags={laundryTags}
        action={name =>
          tagAction(
            laundryTags,
            name,
            updateLaundryTags
          )
        }
      />
      <ButtonGrid
        heading="Parking"
        tags={parkingTags}
        action={name =>
          tagAction(
            parkingTags,
            name,
            updateParkingTags
          )
        }
      />
      {/* <View style={styles.applyButton}>
        <Button
          label={'Apply Filters'}
          onPress={() => queryBasedOnFilters()}
        />
      </View> */}
    </ScrollView>
  );
};

Filtering.propTypes = {
  laundryTags: PropTypes.object.isRequired,
  numBathrooms: PropTypes.number.isRequired,
  numBedrooms: PropTypes.number.isRequired,
  occupantTags: PropTypes.object.isRequired,
  onPriceRangeChange: PropTypes.func.isRequired,
  otherTags: PropTypes.object.isRequired,
  parkingTags: PropTypes.object.isRequired,
  priceRange: PropTypes.array.isRequired,
  propertyTags: PropTypes.object.isRequired,
  tagAction: PropTypes.func.isRequired,
  updateNumBathrooms: PropTypes.func.isRequired,
  updateNumBedrooms: PropTypes.func.isRequired
};

export default Filtering;
