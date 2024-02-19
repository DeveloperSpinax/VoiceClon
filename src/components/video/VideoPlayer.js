import React from 'react'
import Plyr from "plyr-react"
import "plyr-react/plyr.css"
import videoDemo from '../../static/video/Test video original.mp4';

const VideoPlayer = () => {
    return (
        <Plyr
            source={{
                type: 'video',
                sources: [
                    {
                        src: videoDemo, // Replace with your video URL
                        type: 'video/mp4',
                    },
                    // Add additional source types if needed (e.g., WebM, Ogg)
                ],
                tracks: [
                    {
                        kind: 'captions',
                        label: 'English',
                        srclang: 'en',
                        src: '/path/to/captions.en.vtt',
                        default: true,
                    },
                    {
                        kind: 'captions',
                        label: 'French',
                        srclang: 'fr',
                        src: '/path/to/captions.fr.vtt',
                    },
                ],
            }}
        />
    )
}

export default VideoPlayer