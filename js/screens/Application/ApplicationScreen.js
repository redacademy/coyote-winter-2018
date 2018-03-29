import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import Application from './Application';
import PropTypes from 'prop-types';
import Loader from '../../components/Loader/';
import { getApplicationsByUser } from '../../config/helpers';

import {
  updateLoadingState,
  getApplicationObject
} from '../../redux/modules/application';
import { styles } from './styles';

class ApplicationScreen extends Component {
  async componentDidMount() {
    const { dispatch, authenticated } = this.props;
    dispatch(updateLoadingState(true));

    const listingIds = await getApplicationsByUser(authenticated);

    // dispatch(updateApplicationState(listingIds));
    dispatch(updateLoadingState(false));
    dispatch(getApplicationObject(listingIds));
  }

  render() {
    const { loading, applicationObject } = this.props;

    return loading ? (
      <Loader />
    ) : (
      <ScrollView style={styles.scroll}>
        <Application listings={applicationObject} />
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  applicationObject: state.application.applicationObject,
  loading: state.application.loading,
  authenticated: state.auth.authenticated
});

ApplicationScreen.propTypes = {
  authenticated: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
 
  applicationObject: PropTypes.array
};

export default connect(mapStateToProps)(ApplicationScreen);