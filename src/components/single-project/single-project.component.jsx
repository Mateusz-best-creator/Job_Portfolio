import React from "react";

import SkillIcon from "../skill-icon/skill-icon.component";

// styling
import './single-project.styles.scss';

const SingleProject = ({projectData}) => {
    
    const { title, skills, description, photo, sourceCodeLink, livePageLink } = projectData;

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
                    <div className='button-border'><button><a target="_blank" href='#'>Project In Details</a></button></div>
                </div>
                <div className='project-description-container'>
                    <span>{description}</span>
                </div>
            </div>
            <div className='project-photo-container'>
                <img className='project-photo' alt='' src={photo} />
            </div>
        </div>
        
    )
}

export default SingleProject;