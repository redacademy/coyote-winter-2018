import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import Application from './Application';
import PropTypes from 'prop-types';
import Loader from '../../components/Loader/';
import { getApplicationsByUser } from '../../config/helpers';
import {
  updateApplicationState,
  updateLoadingState
} from '../../redux/modules/application';
import { styles } from './styles';

class ApplicationScreen extends Component {
  async componentDidMount() {
    const { dispatch, authenticated } = this.props;
    dispatch(updateLoadingState(true));

    const listingIds = await getApplicationsByUser(authenticated);

    dispatch(updateApplicationState(listingIds));
    dispatch(updateLoadingState(false));
  }
  render() {
    const { applications, loading } = this.props;
    return loading ? (
      <Loader />
    ) : (
      <ScrollView style={styles.scroll}>
        <Application listings={applications} />
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  applications: state.application.applications,
  authenticated: state.auth.authenticated,
  loading: state.application.loading
});

ApplicationScreen.propTypes = {
  applications: PropTypes.array.isRequired,
  authenticated: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(ApplicationScreen);
