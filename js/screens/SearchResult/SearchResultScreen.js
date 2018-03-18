import React, { Component } from "react";
import PropTypes from "prop-types";

import {
  Text,
  ScrollView,
  Button,
  AsyncStorage
} from "react-native";
// import SearchResult from "./SearchResult";

import Ionicons from "react-native-vector-icons/Ionicons";

import {
  getListingsByLocation,
  unMarshallResult,
  sortListingsByDateDesc
} from "../../config/helpers";
import ListingList from "../../components/ListingList/";
import FilterAndSearchBar from "../../components/FilterAndSearchBar/";

import { searchIcon } from "../../config/iconType";

import { colors } from "../../config/styles";

export default class SearchResultScreen extends Component {
  constructor() {
    super();
    this.state = { listings: [], loading: true };
    // this._signOutAsync = this._signOutAsync.bind(this);
  }
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: (
        <Button
          onPress={() =>
            navigation.navigate("Listing")
          }
          title="Filter"
          color={colors.MAIN}
        />
      ),
      title: "Search",
      tabBarLabel: "Search Result",
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={
            focused
              ? searchIcon
              : `${searchIcon}-outline`
          }
          size={26}
          style={{ color: tintColor }}
        />
      )
    };
  };
  componentDidMount() {
    // perform query based on location passed via route
    // TODO: get value from route
    const location =
      "Vancouver"; /*hard-coded value to remove upon routing*/
    getListingsByLocation(location).then(doc => {
      const listingArray = [];
      doc.docs.forEach(querySnap => {
        listingArray.push(unMarshallResult(querySnap));
      });
      const listingsSorted = listingArray.sort(
        sortListingsByDateDesc
      );
      this.setState({
        listings: listingsSorted,
        loading: false
      });
    });
  }
  // static propTypes = {
  //   prop: PropTypes
  // };
  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate("Auth");
  };

  render() {
    const { listings, loading } = this.state;
    return loading ? (
      <Text>Loading</Text>
    ) : (
      <ScrollView style={{ marginTop: 25 }}>
        <Text>im not loading</Text>
        <Button
          onPress={this._signOutAsync}
          title="sign me out"
        />
      </ScrollView>
    );
  }
}
