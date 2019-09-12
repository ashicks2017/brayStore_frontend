import React from 'react';
import YouTube from 'react-youtube';
 
class Video extends React.Component {

    VideoOnReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
    }

  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
  
    return (
      <YouTube
        videoId="QXR2DOFwpP0"
        opts={opts}
        onReady={this.VideoOnReady}
      />
    );
  }
 
  
}

export default Video
