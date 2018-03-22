import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import ButtonGrid from '../../components/ButtonGrid';
import Button from '../../components/Button';
import IncrementalInput from '../../components/IncrementalInput/';
import Slider from '../../components/Slider';

import {
  updateLaundryTags,
  updateOccupantTags,
  updateOtherTags,
  updateParkingTags,
  updatePropertyTags
} from '../../redux/modules/filter';

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
  query,
  tagAction,
  updateNumBathrooms,
  updateNumBedrooms
}) => {
  return (
    <View>
      <Slider
        label={'Prices'}
        priceRange={priceRange}
        onPriceRangeChange={onPriceRangeChange}
        min={100}
        max={10000}
        increaseBy={100}
      />
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

      <IncrementalInput
        label={'Bedrooms'}
        value={numBedrooms}
        incrementValue={updateNumBedrooms}
        decrementValue={updateNumBedrooms}
      />

      <IncrementalInput
        label={'Bathrooms'}
        value={numBathrooms}
        incrementValue={updateNumBathrooms}
        decrementValue={updateNumBathrooms}
      />

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
      <Button
        label={'Apply Filters'}
        onPress={query}
      />
    </View>
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
  query: PropTypes.func.isRequired,
  tagAction: PropTypes.func.isRequired,
  updateNumBathrooms: PropTypes.func.isRequired,
  updateNumBedrooms: PropTypes.func.isRequired
};

export default Filtering;
