import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// Actions
import { signUp } from '../actions/auth';

const SignUp = ({ user }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    displayName: '',
  });

  const { email, password, displayName } = formData;

  const onChange = async (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    signUp(formData);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='sign-up'>
      <form className='sign-up-form' onSubmit={(e) => onSubmit(e)}>
        <h1>Sign Up</h1>
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
        <div className='form-control'>
          <label htmlFor='displayName'>Username</label>
          <input
            type='text'
            name='displayName'
            id='displayName'
            value={displayName}
            onChange={(e) => onChange(e)}
          />
        </div>
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  );
};

// SignUp.propTypes = {
//   signUp: PropTypes.func.isRequired,
//   user: PropTypes.object,
// };

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(SignUp);
