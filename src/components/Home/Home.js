import React, { Component } from 'react';

import LinkList from '../LinkList/LinkList';
import Stickman from '../Stickman/Stickman';
import classes from './Home.module.css';

class Home extends Component {
  state = {
    hoveredLink: null
  }

  handleImageMouseOver = event => {
    const hoveredLink = this.props.links.find(l => l.id === event.target.id);
    this.setState({ hoveredLink });
  };

  handleImageMouseOut = () => {
    this.setState({ hoveredLink: null });
  }

  render() {
    return (
      <section className={classes.home}>
        <LinkList 
          links={this.props.links} 
          onImageMouseOver={this.handleImageMouseOver} 
          onImageMouseOut={this.handleImageMouseOut} 
        />
        <Stickman person={this.state.hoveredLink} />
      </section>
    );
  }
}

export default Home;