import React from 'react';

import classes from './ImageGallery.module.css';

const ImageGallery = props => {
  const { images } = props;
  return (
    <div className={classes.imageGallery}>
      <h2>Photos</h2>
      {images.map(i => <div key={i}><img alt="Family" src={i} /></div>)}
    </div>
  );
};

export default ImageGallery;