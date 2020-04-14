import React from 'react';
import { Link } from 'react-router-dom';

import classes from './LinkList.module.css';

const LinkList = props => {
  const links = props.links.map(l => (
    <Link key={l.id} className={classes.link} to={l.to}>
      <img id={l.id} src={l.image} alt={l.altText} onMouseOver={props.onImageMouseOver} onMouseOut={props.onImageMouseOut} />
      <div>{l.altText}</div>
    </Link>
  ));
  return <div className={classes.linksWrapper}>{links}</div>;
};

export default LinkList;