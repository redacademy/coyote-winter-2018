import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
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
import { colors, typography } from '../../config/styles';

class ApplicationScreen extends Component {
  async componentDidMount() {
    const { dispatch, authenticated } = this.props;
    dispatch(updateLoadingState(true));

    const listingIds = await getApplicationsByUser(authenticated);
    if (listingIds) {
      dispatch(getApplicationObject(listingIds));
    }
    dispatch(updateLoadingState(false));
  }

  render() {
    const { loading, applicationObject } = this.props;
    return loading ? (
      <Loader />
    ) : applicationObject.length === 0 ? (
      <View style={{ alignItems: 'center' }}>
        <Text
          style={{
            color: colors.MAIN,
            fontFamily: typography.M_SEMIBOLD
          }}
        >
          {'No Applications Yet!'}
        </Text>
      </View>
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
