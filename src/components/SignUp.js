import React, { useState } from 'react';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  return (
    <form className='sign-up'>
      <div className='form-control'>
        <label for='email'>Email</label>
        <input type='text' name='email' id='email' value={email} />
      </div>
    </form>
  );
};

export default SignUp;
