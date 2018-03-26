import {
  getListings,
  getListingsByLocation,
  sortListingsByDateDesc,
  sortListingsByPriceAsc,
  sortListingsByPriceDsc
} from '../config/helpers';

/**
 * This function filters a given array of listings
 * for tags that match fields in the listings
 * ie. propertyType=='Apartment'
 */
export const filterByTags = (listings, tags, field) => {
  const propQueries = getTrueParams(tags);
  if (Object.keys(propQueries).length === 0) return listings;

  const results = listings.reduce((filtered, listing) => {
    if (propQueries.includes(listing[field])) {
      filtered.push(listing);
    }
    return filtered;
  }, []);

  return Object.values(results);
};

/**
 * This function filters a given array of listings for fields
 * matching the given tags which are listed as 'true' in the given listings. (equiv to logical or)
 */
export const filterByBoolean = (listings, tags) => {
  const tagArray = getTrueParams(tags);
  if (Object.keys(tagArray).length === 0) return listings;

  const results = listings.reduce((filtered, listing) => {
    tagArray.forEach(tag => {
      if (listing[tag]) filtered.add(listing);
    });
    return filtered;
  }, new Set());
  return Array.from(results);
};

/**
 * This function filters an individual field in a listing
 */
export const filterBySingleValue = (listings, field, value) => {
  const results = listings.reduce((filtered, listing) => {
    if (listing[field] === value) filtered.push(listing);
    return filtered;
  }, []);
  return results;
};

/**
 * This function constructs a logical and statement from
 * the tags and applies that to each listing in listings.
 */
export const filterByAnd = (listings, tags) => {
  // get tags that are true
  const tagArray = getTrueParams(tags);
  if (Object.keys(tagArray).length === 0) return listings;
  // construct an and statement with these tags
  // listing[tag] && listing[tag] && ... && listing[tag]
  let query = tagArray.reduce((queryString, tag) => {
    queryString = queryString.concat(`listing['${tag}'] &&`);
    return queryString;
  }, '');
  query = query.slice(0, -2);

  // get listings that match the query filter:
  const results = listings.reduce((filtered, listing) => {
    if (eval(query)) filtered.push(listing);
    return filtered;
  }, []);
  return results;
};

/**
 * This function returns listings that fall within the
 * given priceRange
 */
export const filterByPriceRange = (listings, priceRange) => {
  const results = listings.reduce((filtered, listing) => {
    if (priceRange[0] < listing['price'] && listing['price'] < priceRange[1])
      filtered.push(listing);
    return filtered;
  }, []);
  return results;
};

/**
 * This is a local helper function to return all the
 * tags are true as an array of tag names.
 */
export const getTrueParams = tags => {
  const propArray = Object.entries(tags);
  // get all the properties that are true:
  const propQueries = propArray.reduce((query, property) => {
    if (property[1] === true) query.push(property[0]);
    return query;
  }, []);
  return propQueries;
};

/**
 * Sets the value of the given tag to false
 */
export const setParamToFalse = (tag, array) => {
  let foundTagSet = {};

  array.forEach(tagSet => {
    const tagSetValues = Object.values(tagSet)[0];
    const tagSetKey = Object.keys(tagSet)[0];
    if (tagSetValues[tag]) {
      tagSetValues[tag] = false;
      foundTagSet[tagSetKey] = tagSetValues;
    }
  });
  return foundTagSet;
};

/**
 * Sort listings in 0 (descending date), 1 (ascending price),
 * 2 (descending price)
 */
export const sortFilter = (listings, sortOrder) => {
  switch (sortOrder) {
    case '0':
      return listings.sort(sortListingsByDateDesc);
    case '1':
      return listings.sort(sortListingsByPriceAsc);
    case '2': {
      return listings.sort(sortListingsByPriceDsc);
    }
    default:
      return listings;
  }
};

/**
 * Returns a promise for listings depending on whether location
 * has been provided or not
 */
export const getNewListings = location => {
  return location.length !== 0
    ? getListingsByLocation(location)
    : getListings();
};
