const GET_LISTING = 'GET_LISTING';
const GET_IMAGES = 'GET_IMAGES';
const FEATURED_IMAGE = 'FEATURED_IMAGE';
const LANDLORD_ID = 'LANDLORD_ID';
const GET_ADDRESS = 'GET_ADDRESS';
const GET_LISTING_ID = 'GET_LISTING_ID';
const UPDATE_LOADING = 'UPDATE_LOADING';

const getListing = listing => ({
  type: GET_LISTING,
  payload: listing
});

export const updateLoading = loading => ({
  type: UPDATE_LOADING,
  payload: loading
});

export const getListingId = listingId => ({
  type: GET_LISTING_ID,
  payload: listingId
});

const getImages = images => ({
  type: GET_IMAGES,
  payload: images
});

const featuredImage = featuredImage => ({
  type: FEATURED_IMAGE,
  payload: featuredImage
});

const landlordId = id => ({
  type: LANDLORD_ID,
  payload: id
});

export const getAddress = address => ({
  type: GET_ADDRESS,
  payload: address
});

export const fetchListing = listing => dispatch => {
  dispatch(getListing(listing));
};

export const fetchListingId = listingId => dispatch => {
  dispatch(getListingId(listingId));
};

export const fetchImages = images => dispatch => {
  dispatch(getImages(images));
};

export const fetchFeaturedImage = image => dispatch => {
  dispatch(featuredImage(image));
};

export const fetchLandlord = id => dispatch => {
  dispatch(landlordId(id));
};

export default (
  state = {
    listing: [],
    listingId: '',
    images: [],
    featuredImage: '',
    landlordId: '',
    address: '',
    listingId: '',
    loading: true
  },
  action
) => {
  switch (action.type) {
    case GET_LISTING: {
      return {
        ...state,
        listing: action.payload
      };
    }
    case UPDATE_LOADING: {
      return {
        ...state,
        loading: action.payload
      };
    }
    case GET_LISTING_ID: {
      return {
        ...state,
        listingId: action.payload
      };
    }
    case GET_IMAGES: {
      return {
        ...state,
        images: action.payload
      };
    }
    case FEATURED_IMAGE: {
      return {
        ...state,
        featuredImage: action.payload
      };
    }
    case LANDLORD_ID: {
      return {
        ...state,
        landlordId: action.payload
      };
    }
    case GET_ADDRESS: {
      return {
        ...state,
        address: action.payload
      };
    }
    default:
      return state;
  }
};
