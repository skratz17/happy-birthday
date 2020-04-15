import React, { Component } from 'react';

import stickmanImage from '../../assets/misc/stickman.png';
import classes from './Stickman.module.css';

class Stickman extends Component {
  renderStickmanContent = () => {
    const { image, quote } = this.props;
    if(!image) return null;
    return (
      <React.Fragment>
        <img alt="Person's Face" className={classes.faceImage} src={image} /> 
        <div className={classes.happyBirthdayBubbleWrapper}>
          <div>{quote || 'Happy Birthday, David!'}</div>
        </div>
     </React.Fragment>
    );
  };

  render() {
    return (
      <div className={classes.stickmanWrapper}>
        <img alt="Stick Man" src={stickmanImage} />
        {this.renderStickmanContent()}
      </div>
    );
  }
}

export default Stickman;