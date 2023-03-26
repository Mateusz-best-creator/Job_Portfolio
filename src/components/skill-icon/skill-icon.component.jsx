import React from "react";

import './skill-icon.styles.scss';

const SkillIcon = ({skill}) => {
    return (
        <div className='single-skil-container'>
            <p>{skill.toUpperCase()}</p>
        </div>
    )
}

export default SkillIcon;