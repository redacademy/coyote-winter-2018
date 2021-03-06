import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Landlord from './Landlord';
import { getUserProfile } from '../../config/helpers';
import { updateLandlordData } from '../../redux/modules/landlord';

class LandlordScreen extends Component {
  static navigationOptions = {
    title: 'Landlord'
  };

  async componentWillMount() {
    const landlordId = this.props.navigation.state
      .params.landlord;
    getUserProfile(landlordId).then(data => {
      this.props.dispatch(
        updateLandlordData({
          bio: data.data().bio,
          firstName: data.data().firstName,
          lastName: data.data().lastName,
          avatar: data.data().photoURL,
          location: data.data().location,
          email: data.data().email
        })
      );
    });
  }

  render() {
    return (
      <Landlord
        navigation={this.props.navigation}
        landlord={this.props.landlordData}
      />
    );
  }
}

LandlordScreen.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
  landlordData: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  landlordData: state.landlord.landlordData
});

export default connect(mapStateToProps)(
  LandlordScreen
);
