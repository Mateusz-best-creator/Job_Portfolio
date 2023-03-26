import React from "react";

// video
import VideoPlayer from "../../video-player/video-player.component";

import Footer from "../footer/footer.component";

import { useNavigate } from "react-router";

import './single-project-details.styles.scss';

const SingleProjectDetails = ({ descriptionData }) => {

    const navigate = useNavigate();
    const { basicDescription, purpose, explanation, technologiesExplanation, explanationProblems, videoElement } = descriptionData;

    const handleNavigate = () => {
        navigate('/projects-page');
    }

    return (
        <>
            <div className='project-details-container'>
                <h1>Refy</h1>
                <p>2 minute read</p>
                <p>{basicDescription}</p>
                <div className='video-details-container'>
                    <VideoPlayer style={{width: '80%'}} videoElement={videoElement} />
                </div>
                <h2>Project Purpose and Goal</h2>
                <p className='text purpose'>{purpose}</p>
                <h2>Web stack and explanation</h2>
                <p className='text build-explanation'>{explanation}</p>
                {
                    technologiesExplanation.map((technology) => {
                        return <p className='text'>{technology}</p>
                    })
                }
                <h2>Problems And Though Process</h2>
                <p className='text'>{explanationProblems}</p>
            </div>
            <button onClick={handleNavigate} className='go-back-button'>Go Back To Projects Site</button>
            <Footer />
        </>
    )
}

export default SingleProjectDetails;