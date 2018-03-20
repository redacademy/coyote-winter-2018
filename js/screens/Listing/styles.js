import { StyleSheet, Dimensions } from 'react-native';

import { colors } from '../../config/styles';

const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  featuredImage: {
    marginTop: 60,
    width: width,
    height: height / 2
  },
  cardContainer: {
    backgroundColor: '#fff',
    height: height,
    width: width - 20,
    alignSelf: 'center',
    marginRight: 10,
    position: 'absolute',
    top: 300,
    borderRadius: 5
  },
  morePicture: {
    marginTop: 7,
    marginBottom: 7,
    marginLeft: 10
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
    fontSize: 10
  },
  buttonTextTwo: {
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    color: colors.MAIN,
    fontSize: 10
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
    marginTop: 3
  },
  listingTitle: {
    marginTop: 10
  },
  price: {
    color: colors.MAIN,
    marginTop: 8
  },
  description: {
    marginTop: 10,
    fontSize: 13
  },
  fave: {
    alignSelf: 'center',
    marginTop: 5
  }
});
