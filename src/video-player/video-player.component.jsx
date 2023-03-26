import React from "react";

import {DefaultPlayer as Video} from 'react-html5video'
import 'react-html5video/dist/styles.css'

import './video-player.styles.scss'

const VideoPlayer = ({videoElement}) => {
    console.log("video : ", videoElement);
    return (
        <div className='video-container'>
            <Video >
                <source src={videoElement} type='video/webm'></source>
            </Video>
            
        </div>
    )

}

export default VideoPlayer