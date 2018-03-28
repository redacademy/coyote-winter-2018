import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Landlord from './Landlord';
import { fetchLandlord } from '../../redux/modules/landlord';
import Loader from '../../components/Loader/Loader';

class LandlordScreen extends Component {
  static navigationOptions = {
    title: 'Landlord'
  };

  async componentWillMount() {
    const { dispatch, landlordId } = this.props;
    await dispatch(fetchLandlord(landlordId));
  }

  render() {
    const { navigation, landlordData, isLoading } = this.props;
    return isLoading ? (
      <Loader />
    ) : (
      <Landlord navigation={navigation} landlord={landlordData} />
    );
  }
}

LandlordScreen.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  navigation: PropTypes.object.isRequired,
  landlordData: PropTypes.object.isRequired,
  landlordId: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  isLoading: state.landlord.isLoading,
  landlordData: state.landlord.landlordData,
  landlordId: state.landlord.landlordId
});

export default connect(mapStateToProps)(LandlordScreen);
