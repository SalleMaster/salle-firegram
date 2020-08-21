import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// Google SignIn
import useGoogleSignIn from '../hooks/useGoogleSignIn';

const Login = ({ user }) => {
  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='login'>
      <div className='login-wrapper'>
        <h1>FireGram</h1>
        <h3>Sign in to FireGram</h3>
        <p>www.firegram.com</p>
        <div className='button-wrapper'>
          <Link to='/sign-up' className='btn btn-sign-up'>
            Sign up
          </Link>
          <Link to='/sign-in' className='btn btn-sign-in'>
            Sign in
          </Link>
          <button className='btn btn-google' onClick={useGoogleSignIn}>
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(Login);
