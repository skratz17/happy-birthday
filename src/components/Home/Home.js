import React, { Component } from 'react';

import LinkList from '../LinkList/LinkList';
import Stickman from '../Stickman/Stickman';
import linksConfig from '../../config/linksConfig';
import classes from './Home.module.css';

class Home extends Component {
  state = {
    hoveredLink: null
  }

  handleImageMouseOver = event => {
    const hoveredLink = linksConfig.find(l => l.id === event.target.id);
    this.setState({ hoveredLink });
  };

  handleImageMouseOut = () => {
    this.setState({ hoveredLink: null });
  }

  render() {
    const { hoveredLink } = this.state;
    const image = hoveredLink && (hoveredLink.hoverImage || hoveredLink.image);
    const quote = hoveredLink && hoveredLink.quote;
    return (
      <section className={classes.home}>
        <LinkList 
          links={linksConfig} 
          onImageMouseOver={this.handleImageMouseOver} 
          onImageMouseOut={this.handleImageMouseOut} 
        />
        <Stickman image={image} quote={quote} person={this.state.hoveredLink} />
      </section>
    );
  }
}

export default Home;