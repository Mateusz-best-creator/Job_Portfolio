import React from "react";

import {DefaultPlayer as Video} from 'react-html5video'
import 'react-html5video/dist/styles.css'

import './video-player.styles.scss'

const VideoPlayer = ({videoElement}) => {

    return (
        <div className='video-container'>
            {
                '/static/media/meals-to-go.e09f11e72aa3cc925fe4.mp4' === videoElement
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