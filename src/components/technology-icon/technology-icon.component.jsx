import React from "react";

import './technology-icon.styles.scss';

const TechnologyItem = ({ name, logo }) => {
    return (
        <div className='technology-container'>
            <div className='technology-image'>
                <img alt='' src={logo} />
            </div>
            <div className='technology-name'>
                <h4>{name}</h4>
            </div>
        </div>
    )
}

export default TechnologyItem