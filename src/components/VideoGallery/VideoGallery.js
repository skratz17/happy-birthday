import React, { Component } from 'react';

import classes from './VideoGallery.module.css';

class VideoGallery extends Component {
  state = { selectedVideo: this.props.videos[0] }

  render() {
    const videoOptions = this.props.videos.map((v, i) => (
      <button 
        key={v}
        className={`${this.state.selectedVideo === v ? classes.selected : ''}`} 
        onClick={() => this.setState({ selectedVideo: v })}
      >
        {i + 1}
      </button>
    ));

    return (
      <div className={classes.videoGallery}>
        <h2>Videos</h2>
        <video controls src={this.state.selectedVideo} />
        {this.props.videos.length > 1 && (
          <div className={classes.videoOptions}>
            <p>Select Video: </p>
            {videoOptions}
          </div>
        )}
      </div>
    );
  }
};

export default VideoGallery;