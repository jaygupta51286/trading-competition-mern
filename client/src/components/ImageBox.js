import React from 'react';
import './ImageBox.css';
import sampleImage from './pin page.JPG'; // Replace with your image path

const ImageBox = () => {
  return (
    <div className="image-box">
      <img src={sampleImage} alt="Sample" />
    </div>
  );
};

export default ImageBox;
