import React from 'react';

import classes from './QuoteCard.module.css';

const QuoteCard = props => {
  const { quote } = props;
  return (
    <div className={classes.quoteCard}>
      <p>{quote}</p>
    </div>
  );
};

export default QuoteCard;