import React from 'react';
import video from '../../assets/cuby.webm';
import './style.css';

function assembleVideo() {
    return (
        <div className="container video-container mt-5">
            <video loop="true" muted="" autoPlay="true" controls="true" preload="auto" width="100%">
                <source src={video} type="video/webm">
                </source>
            </video>
        </div>
    );
}

export default assembleVideo;