// src/components/ImageGrid.js

import React from 'react';
import styles from './ImageGrid.module.css';

const ImageGrid = ({ images }) => {
  return (
    <div className={styles.grid}>
      {images.map((src, index) => (
        <div key={index} className={styles.gridItem}>
          <img src={src} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
