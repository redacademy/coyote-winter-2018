export const SORT_OPTIONS = ['Newest', 'Highest Price', 'Lowest Price'];
import {
  filterByAnd,
  filterByBoolean,
  filterByPriceRange,
  filterBySingleValue,
  filterByTags,
  getNewListings,
  sortFilter
} from '../../lib/filterHelpers';
import store from '../store';
import { unMarshallResult } from '../../config/helpers';

const UPDATE_FILTER_TAGS = 'UPDATE_FILTER_TAGS';
const UPDATE_PROPERTY_TAGS = 'TOGGLE_PROPERTY_TAGS';
const UPDATE_LISTINGS = 'UPDATE_LISTINGS';
const UPDATE_OTHER_TAGS = 'UPDATE_OTHER_TAGS';
const UPDATE_LAUNDRY_TAGS = 'UPDATE_LAUNDRY_TAGS';
const UPDATE_PARKING_TAGS = 'UPDATE_PARKING_TAGS';
const UPDATE_LOADING = 'UPDATE_LOADING';
const UPDATE_LOCATION = 'UPDATE_LOCATION';
const UPDATE_OCCUPANT_TAGS = 'UPDATE_OCCUPANT_TAGS';
const UPDATE_NUM_BATHROOMS = 'UPDATE_NUM_BATHROOMS';
const UPDATE_NUM_BEDROOMS = 'UPDATE_NUM_BEDROOMS';
const UPDATE_PRICE_RANGE = 'UPDATE_PRICE_RANGE';
const UPDATE_SORT_OPTIONS = 'UPDATE_SORT_OPTIONS';

export const queryBasedOnFilters = async () => {
  const {
    priceRange,
    propertyTags,
    laundryTags,
    location,
    occupantTags,
    parkingTags,
    otherTags,
    numBathrooms,
    numBedrooms,
    sortOptions
  } = store.getState().filter;

  const listingArray = await getNewListings(location);
  let results = listingArray.docs.map(result => unMarshallResult(result));

  results = filterByPriceRange(results, priceRange);
  results = filterByTags(results, propertyTags, 'propertyType');
  results = filterByBoolean(results, laundryTags);
  results = filterByBoolean(results, occupantTags);
  results = filterByTags(results, parkingTags, 'parking');
  results = filterByAnd(results, otherTags);
  // if number of bed and bath are both 0, then not incld in query
  if (numBathrooms !== 0 && numBedrooms !== 0) {
    results = filterBySingleValue(results, 'numBathrooms', numBathrooms);
    results = filterBySingleValue(results, 'numBedrooms', numBedrooms);
  }
  results = sortFilter(results, sortOptions);

  store.dispatch(updateListings(results));
};

export const updateNumBathrooms = numBathrooms => ({
  type: UPDATE_NUM_BATHROOMS,
  payload: numBathrooms
});

export const updateNumBedrooms = numBedrooms => ({
  type: UPDATE_NUM_BEDROOMS,
  payload: numBedrooms
});

export const updateFilterTags = filterTags => ({
  type: UPDATE_FILTER_TAGS,
  payload: filterTags
});

export const updateLaundryTags = laundryTags => ({
  type: UPDATE_LAUNDRY_TAGS,
  payload: laundryTags
});

export const updateListings = listings => ({
  type: UPDATE_LISTINGS,
  payload: listings
});

export const updateLoading = loading => ({
  type: UPDATE_LOADING,
  payload: loading
});

export const updateLocation = location => ({
  type: UPDATE_LOCATION,
  payload: location
});

export const updateOccupantTags = occupantTags => ({
  type: UPDATE_OCCUPANT_TAGS,
  payload: occupantTags
});

export const updateOtherTags = otherTags => ({
  type: UPDATE_OTHER_TAGS,
  payload: otherTags
});

export const updateParkingTags = parkingTags => ({
  type: UPDATE_PARKING_TAGS,
  payload: parkingTags
});

export const updatePriceRange = priceRange => ({
  type: UPDATE_PRICE_RANGE,
  payload: priceRange
});

export const updatePropertyTags = propertyTags => ({
  type: UPDATE_PROPERTY_TAGS,
  payload: propertyTags
});

export const updateSortOptions = sortOptions => ({
  type: UPDATE_SORT_OPTIONS,
  payload: sortOptions
});

export default function(
  state = {
    laundryTags: {
      'In Suite': false,
      Shared: false
    },
    listings: [],
    loading: true,
    location: '',
    numBathrooms: 0,
    numBedrooms: 0,
    occupantTags: {
      Roommate: false,
      'Entire Place': false
    },
    otherTags: {
      'Pets Ok': false,
      Accessible: false,
      Furnished: false,
      'Smoking Ok': false
    },
    parkingTags: {
      'Car Port': false,
      Attached: false,
      Detached: false,
      Street: false,
      'No Parking': false
    },
    priceRange: [100, 10000],
    propertyTags: {
      Apartment: false,
      Condo: false,
      Duplex: false,
      Cabin: false,
      Townhouse: false,
      House: false
    },
    sortOptions: '0'
  },
  action
) {
  switch (action.type) {
    case UPDATE_FILTER_TAGS:
      return { ...state, filterTags: action.payload };
    case UPDATE_LAUNDRY_TAGS:
      return { ...state, laundryTags: action.payload };
    case UPDATE_LISTINGS:
      return { ...state, listings: action.payload };
    case UPDATE_LOADING:
      return { ...state, loading: action.payload };
    case UPDATE_LOCATION:
      return { ...state, location: action.payload };
    case UPDATE_NUM_BATHROOMS:
      return {
        ...state,
        numBathrooms: action.payload
      };
    case UPDATE_NUM_BEDROOMS:
      return { ...state, numBedrooms: action.payload };
    case UPDATE_OCCUPANT_TAGS:
      return {
        ...state,
        occupantTags: action.payload
      };
    case UPDATE_OTHER_TAGS:
      return { ...state, otherTags: action.payload };
    case UPDATE_PARKING_TAGS:
      return { ...state, parkingTags: action.payload };
    case UPDATE_PRICE_RANGE:
      return { ...state, priceRange: action.payload };
    case UPDATE_PROPERTY_TAGS:
      return {
        ...state,
        propertyTags: action.payload
      };
    case UPDATE_SORT_OPTIONS:
      return { ...state, sortOptions: action.payload };
    default:
      return state;
  }
}
