import React from 'react'
import { DefaultPlayer} from 'react-html5video';
import 'react-html5video/dist/styles.css';

const VideoComparison = (props) => {
  return (
    <DefaultPlayer
        controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
        poster={props.banner}
        onCanPlayThrough={() => {
            // Do stuff
        }}>
        <source src={props.video} type="video/mp4" />
    </DefaultPlayer>
  )
}

export default VideoComparison