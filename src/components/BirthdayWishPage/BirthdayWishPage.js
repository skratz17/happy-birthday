import React from 'react';

import QuoteCard from '../QuoteCard/QuoteCard';
import ImageGallery from '../ImageGallery/ImageGallery';
import pagesConfig from '../../config/pagesConfig';
import classes from './BirthdayWishPage.module.css';
import VideoGallery from '../VideoGallery/VideoGallery';

const BirthdayWishPage = props => {
  const { person } = props.match.params;
  if(!pagesConfig[person]) return null;
  const { title, quotes, images, videos } = pagesConfig[person];
  return (
    <div className={`${classes.birthdayWishPage}`}>
      <div className="container">
        <h1>{title}</h1>
      </div>
      <div className="container">
        {quotes && quotes.map((q, i) => <QuoteCard key={i} quote={q} />)}
      </div>
      {videos && <VideoGallery videos={videos} />}
      {images && <ImageGallery images={images} />}
    </div>
  );
}

export default BirthdayWishPage;