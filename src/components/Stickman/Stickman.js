import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import stickmanImage from '../../assets/misc/stickman.png';
import davidImage from '../../assets/people-icons/david.jpg';
import classes from './Stickman.module.css';

class Stickman extends Component {
  renderStickmanContent = () => {
    const image = this.props.image || davidImage;
    const quote = this.props.quote || 'Happy Birthday, David!';
    const bubble = image !== davidImage ?
      (<div className={classes.happyBirthdayBubbleWrapper}>
          <div>{quote || 'Happy Birthday, David!'}</div>
        </div>) : null;
    return (
      <Link to="/david">
        <img alt="Person's Face" className={classes.faceImage} src={image} /> 
        {bubble}
      </Link>
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