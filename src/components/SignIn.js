import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// Actions
import { signIn } from '../actions/auth';

const SignIn = ({ user }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = async (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    signIn(formData);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='sign-in'>
      <form className='sign-in-form' onSubmit={(e) => onSubmit(e)}>
        <h1>Sign In</h1>
        <div className='form-control'>
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            name='email'
            id='email'
            value={email}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='password'>Password</label>
          <input
            type='text'
            name='password'
            id='password'
            value={password}
            onChange={(e) => onChange(e)}
          />
        </div>
        <button type='submit'>Sign In</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(SignIn);
