import React from 'react';

import classes from './ImageGallery.module.css';

const ImageGallery = props => {
  return (
    <div className={classes.imageGallery}>
      <h2>Photos</h2>
      {props.images.map(i => <div key={i}><img loading="lazy" alt="Family" src={i} /></div>)}
    </div>
  );
};

export default ImageGallery;