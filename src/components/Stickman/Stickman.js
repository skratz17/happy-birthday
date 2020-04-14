import React from 'react';

import stickmanImage from '../../assets/misc/stickman.png';
import classes from './Stickman.module.css';

const Stickman = props => {
  const { person } = props;
  return (
    <div className={classes.stickmanWrapper}>
      <img src={stickmanImage} />
      { person && (
        <React.Fragment>
          <img className={classes.faceImage} src={person.image} /> 
          <div className={classes.happyBirthdayBubbleWrapper}>
            <div>{person.quote || 'Happy Birthday, David!'}</div>
          </div>
        </React.Fragment>
      )}
  </div>
  );
};

export default Stickman;