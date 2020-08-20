import React from 'react';
import { Link } from 'react-router-dom';

// Google SignIn
import useGoogleSignIn from '../hooks/useGoogleSignIn';

const Login = () => {
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

export default Login;
