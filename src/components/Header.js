import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

const Header = ({ user }) => {
  const [currentUser, setCurrentUser] = useState(user);

  useEffect(() => {
    setCurrentUser(user);
  }, [user, setCurrentUser]);

  return (
    <header className='header'>
      <div className='header-wrapper'>
        <h1>Welcome {user?.displayName}</h1>
        <p>Your pictures are bellow</p>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(Header);
