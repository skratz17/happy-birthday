import React from 'react';

import classes from './QuoteCard.module.css';

const QuoteCard = props => {
  const { quote } = props;
  return (
    <div className={classes.quoteCard}>
      {quote.split('\n').map((line, i) => <p key={i}>{line}</p>)}
    </div>
  );
};

export default QuoteCard;