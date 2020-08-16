import React, { useState } from 'react';
import './App.css';

// Components
import Navbar from './components/Navbar';
import Header from './components/Header';
import UploadImage from './components/UploadImage';
import ImageGallery from './components/ImageGallery';
import ImageModal from './components/ImageModal';

const App = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className='App'>
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
    </div>
  );
};

export default App;
