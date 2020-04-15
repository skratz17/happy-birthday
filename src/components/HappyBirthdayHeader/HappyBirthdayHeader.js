import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import classes from './HappyBirthdayHeader.module.css';
import textStyles from './HappyBirthdayTextStyles.module.css';

class HappyBirthdayHeader extends Component {
  constructor(props) {
    super(props);
    this.setupHeaderAnimation();
    this.state = { currentClass: this.getRandomClass(), hidden: false };
  }

  setupHeaderAnimation = () => {
    this.textStyles = Object.keys(textStyles).filter(s => s.indexOf('-animate') === -1).map(s => textStyles[s]);
    this.prevTimestamp = 0;
    requestAnimationFrame(this.handleHeaderAnimation);
  };

  getRandomClass = () => {
    let randomIndex = Math.floor(Math.random() * this.textStyles.length);
    let newClass = this.textStyles[randomIndex];
    if(this.state && this.state.currentClass === newClass) {
      newClass = (randomIndex === this.textStyles.length - 1) ? this.textStyles[randomIndex - 1] : this.textStyles[randomIndex +  1];
    }
    return newClass;
  };

  handleHeaderAnimation = timestamp => {
    const period = timestamp - this.prevTimestamp;

    if(this.state.hidden && period > 0 && period < 1000) this.fadeIn();
    else if(!this.state.hidden && period > 4000 && period < 5000) this.fadeOut();
    else if(period > 5000) this.restartAnimationWithNewTextStyle(timestamp);

    requestAnimationFrame(this.handleHeaderAnimation);
  };

  fadeIn = () => {
    this.setState({ hidden: false });
  };

  fadeOut = () => {
    this.setState({ hidden: true });
  };

  restartAnimationWithNewTextStyle = timestamp => {
    this.setState({ currentClass: this.getRandomClass() });
    this.prevTimestamp = timestamp;
  };

  render() {
    const { currentClass, hidden } = this.state;
    return (
      <header className={classes.happyBirthdayHeader}>
        <Link to="/">
          <h1 className={`${currentClass} ${hidden ? 'hidden' : ''}`}>
            <span>Happy </span>
            <span>Birthday </span>
            <span>David!!!</span>
          </h1>
        </Link>
      </header>
    );
  }
}

export default HappyBirthdayHeader;