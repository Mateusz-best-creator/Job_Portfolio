import React from "react";

import './footer.styles.scss';

const Footer = () => {
    return (
        <div className='footer-container'>
            <p>Website created by <span style={{color: 'red'}}>Mateusz Wieczorek</span> in 2023</p>
            <div className='social-icons-container'>
                <a href='https://github.com/Mateusz-best-creator?tab=repositories' target='_blank'><i className="fab fa-github"></i></a>
                <a href='https://www.linkedin.com/in/mateusz-wieczorek-b9b21925a/' target='_blank'><i className="fab fa-linkedin"></i></a>
                <a href='https://www.facebook.com/mateusz.wieczorek.5264382' target='_blank'><i className="fab fa-facebook"></i></a>
            </div>
        </div>
    )
}

export default Footer;