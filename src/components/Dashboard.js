import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// Components
import Navbar from './Navbar';
import Header from './Header';

// Action
import { getCurrentUser } from '../actions/auth';

const Dashboard = ({ user, getCurrentUser }) => {
  useEffect(() => {
    getCurrentUser();
  }, [getCurrentUser]);

  if (!user) {
    return <Redirect to='/login' />;
  }
  return (
    <Fragment>
      <Navbar />
      <Header />
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentUser: PropTypes.func.isRequired,
  user: PropTypes.object,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, { getCurrentUser })(Dashboard);
