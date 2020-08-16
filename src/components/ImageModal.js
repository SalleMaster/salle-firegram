import React from 'react';
import { motion } from 'framer-motion';

const ImageModal = ({ selectedImg, setSelectedImage }) => {
  const closeModal = () => {
    setSelectedImage(null);
  };

  const onClick = (e) => {
    if (e.target.classList[0] !== 'image') {
      closeModal();
    }
  };

  return (
    <div className='image-modal' onClick={onClick}>
      <motion.div
        className='overlay'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div
          className='modal'
          initial={{ y: '-100vh' }}
          animate={{ y: '0' }}
        >
          <img src={selectedImg} alt='modal' className='image' />
          <div className='close-btn'>
            <span className='span'></span>
            <span className='span'></span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ImageModal;
