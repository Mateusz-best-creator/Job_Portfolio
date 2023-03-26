import React from "react";

import SkillIcon from "../skill-icon/skill-icon.component";

// react router
import { Link } from "react-router-dom";

import SingleProjectDetails from "../single-project-details/single-project-details.component";

// video 
import VideoPlayer from "../../video-player/video-player.component";

// styling
import './single-project.styles.scss';

const SingleProject = ({projectData}) => {
    
    const { title, skills, description, photo, sourceCodeLink, livePageLink, videoElement } = projectData;

    return (
        <div className='single-project-container'>
            <div className="project-description-container">
                <h2>{title.toUpperCase()}</h2>
                <h2>Skills Used: </h2>
                <div className='skills-project-coctainer'>
                    {
                        skills.map((skill, index) => {
                            return <SkillIcon key={index} skill={skill} />
                        })
                    }
                </div>
                <div className='project-buttons-container'>
                    <div className='button-border'><button><a target="_blank" href={sourceCodeLink}>Source Code</a></button></div>
                    <div className='button-border'><button><a target="_blank" href={livePageLink}>Live Project</a></button></div>
                    <div className='button-border'>
                        <Link to='clothing-app-details'>
                            <button>
                                Project In Details
                            </button>
                        </Link> 
                    </div>
                </div>
                <div className='project-description-container'>
                    <span>{description}</span>
                </div>
            </div>
            <div className='project-photo-container'>
                <VideoPlayer style={{width: '500px', maxWidth: '95%'}} videoElement={videoElement} />
                {/* <img className='project-photo' alt='' src={photo} /> */}
            </div>
        </div>
        
    )
}

export default SingleProject;