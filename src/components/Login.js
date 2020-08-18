import React from 'react';

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
          <button className='btn-sign-up'>Sign up</button>
          <button className='btn-sign-in'>Sign in </button>
          <button className='btn-google' onClick={useGoogleSignIn}>
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
