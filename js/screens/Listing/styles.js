import { StyleSheet, Dimensions } from 'react-native';

import { colors } from '../../config/styles';
import { typography } from '../../config/styles';

const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  featuredImage: {
    width: width,
    height: height / 2
  },
  cardContainer: {
    backgroundColor: '#fff',
    marginTop: -60,
    height: height,
    width: width - 20,
    alignSelf: 'center',
    marginRight: 10,
    marginLeft: 10,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    borderRadius: 5
  },
  morePicture: {
    marginTop: 7,
    marginBottom: 7,
    marginLeft: 10,
    fontFamily: typography.M_MEDIUM
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomColor: colors.GREY,
    borderBottomWidth: 2,
    paddingBottom: 20
  },
  image: {
    width: 50,
    height: 35,
    borderRadius: 5
  },
  button: {
    backgroundColor: 'orange',
    width: 180,
    marginTop: 10,
    alignSelf: 'center',
    minHeight: 25,
    justifyContent: 'center',
    borderRadius: 25
  },
  buttonTextOne: {
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    color: '#fff',
    fontSize: 10,
    fontFamily: typography.M_MEDIUM
  },
  buttonTextTwo: {
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    color: colors.MAIN,
    fontSize: 10,
    fontFamily: typography.M_MEDIUM
  },
  buttonOne: {
    backgroundColor: colors.MAIN,
    width: 180,
    marginTop: 10,
    alignSelf: 'center',
    minHeight: 25,
    justifyContent: 'center',
    borderRadius: 25
  },
  buttonTwo: {
    backgroundColor: '#fff',
    width: 180,
    marginTop: 10,
    alignSelf: 'center',
    minHeight: 25,
    justifyContent: 'center',
    borderRadius: 25,
    borderColor: colors.MAIN,
    borderWidth: 1
  },
  location: {
    marginTop: 3,
    fontFamily: typography.M_MEDIUM
  },
  listingTitle: {
    marginTop: 10,
    fontFamily: typography.M_MEDIUM
  },
  price: {
    color: colors.MAIN,
    marginTop: 8,
    fontFamily: typography.M_MEDIUM
  },
  description: {
    marginTop: 10,
    fontSize: 13,
    fontFamily: typography.M_MEDIUM
  },
  heart: {
    marginTop: 5,
    marginRight: 20
  },
  faveContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  heartSize: {
    fontSize: 30
  },
  map: {
    height: 400,
    width: width - 20
  },
  confirmed: {
    textAlign: 'center',
    fontFamily: typography.M_MEDIUM,
    color: colors.MAIN
  }
});
