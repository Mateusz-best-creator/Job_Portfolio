import React from "react";

import SkillIcon from "../skill-icon/skill-icon.component";

// react router
import { useNavigate } from "react-router";

// video 
import VideoPlayer from "../../video-player/video-player.component";

// styling
import './single-project.styles.scss';

const SingleProject = ({projectData}) => {
    
    const { title, skills, description, photo, sourceCodeLink, livePageLink, videoElement, id } = projectData;
    const navigate = useNavigate();

    const handleNavigation = (id) => {
        navigate(`/project-in-detail-${id}`)
    }

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
                        <button onClick={() => handleNavigation(id)}>
                            Project In Details
                        </button>
                    </div>
                </div>
                <div className='project-description-container'>
                    <span>{description}</span>
                </div>
            </div>
            <div className='project-photo-container'>
                <VideoPlayer style={{width: '500px', maxWidth: '95%'}} videoElement={videoElement} />
            </div>
        </div>
        
    )
}

export default SingleProject;