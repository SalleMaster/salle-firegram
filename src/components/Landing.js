import React, { Fragment, useEffect } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Components
import Login from './Login';
import Navbar from './Navbar';
import Header from './Header';
import UploadImage from './UploadImage';
import ImageGallery from './ImageGallery';
import ImageModal from './ImageModal';

const Landing = ({ selectedImg, setSelectedImg, user }) => {
  return (
    <Fragment>
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
    </Fragment>
  );
};

Landing.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(Landing);
