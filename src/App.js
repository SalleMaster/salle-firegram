import React, { useState, Fragment, useEffect } from 'react';
import './App.css';

// Hooks
import useAuthStatus from './hooks/useAuthStatus';

// Components
import Navbar from './components/Navbar';
import Header from './components/Header';
import UploadImage from './components/UploadImage';
import ImageGallery from './components/ImageGallery';
import ImageModal from './components/ImageModal';
import Login from './components/Login';

const App = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [user, setUser] = useState(null);

  // listen for auth status changes
  useAuthStatus(setUser);

  return (
    <div className='App'>
      {!user ? (
        <Login />
      ) : (
        <Fragment>
          <Navbar />
          <div className='container'>
            <Header />
            <UploadImage />
            <ImageGallery setSelectedImg={setSelectedImg} />
            {selectedImg && (
              <ImageModal
                selectedImg={selectedImg}
                setSelectedImage={setSelectedImg}
              />
            )}
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default App;
