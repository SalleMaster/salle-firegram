import React, { useState } from 'react';

// Components
import ProgressBar from './ProgressBar';

const UploadImage = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ['image/png', 'image/jpeg'];

  const changeHandler = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError(null);
    } else {
      setFile(null);
      setError('Please select an image file (png or jpeg)');
    }
  };

  return (
    <form className='upload-image'>
      <label>
        <input type='file' onChange={changeHandler} />
        <span>
          <div>+</div>
        </span>
      </label>
      <div className='output'>
        {error && <div className='error'>{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadImage;
