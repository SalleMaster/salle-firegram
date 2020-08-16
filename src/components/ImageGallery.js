import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';

const ImageGallery = ({ setSelectedImg }) => {
  const { docs } = useFirestore('images');

  return (
    <div className='gallery'>
      <div className='gallery-wrapper'>
        {docs &&
          docs.map((doc) => (
            <motion.div
              className='image-wrap'
              key={doc.id}
              initial={{ opacity: 1 }}
              whileHover={{ opacity: 0.8 }}
              layout
            >
              <motion.img
                src={doc.url}
                alt={doc.id}
                onClick={() => setSelectedImg(doc.url)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              />
            </motion.div>
          ))}
      </div>
    </div>
  );
};

export default ImageGallery;
