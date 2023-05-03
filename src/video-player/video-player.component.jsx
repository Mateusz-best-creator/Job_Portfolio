import React from "react";

import {DefaultPlayer as Video} from 'react-html5video'
import 'react-html5video/dist/styles.css'

import './video-player.styles.scss'

const VideoPlayer = ({videoElement}) => {
    console.log(videoElement)
    return (
        <div className='video-container'>
            {
                '/static/media/meals-to-go.68cd23cc76a1e3ecec6b.mp4' === videoElement
                ? (
                    <Video style={{height: '400px'}} >
                        <source src={videoElement} type='video/webm'></source>
                    </Video>
                ) : (
                    <Video >
                        <source src={videoElement} type='video/webm'></source>
                    </Video>
                )
            }    
        </div>
    )

}

export default VideoPlayer