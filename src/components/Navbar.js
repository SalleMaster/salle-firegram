import React from 'react';

// Hooks
import useSingOut from '../hooks/useSingOut';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-wrapper'>
        <div className='logo'>FireGram</div>
        <ul className='nav-list'>
          <li className='nav-list-item' onClick={useSingOut}>
            Logout
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
