import React from "react";
import { Link } from "react-router-dom";
import Photo from '../../assets/astronaut.png'
import Footer from "../../components/footer/footer.component";
import TechnologyItem from "../../components/technology-icon/technology-icon.component";

import HtmlLogo from '../../assets/html-logo.png';
import CssLogo from '../../assets/css-logo.png';
import StyledComponentsLogo from '../../assets/styled-components-logo.png';
import JavaScriptLogo from '../../assets/javaScript-logo.png';
import ReactLogo from '../../assets/react-logo.png';
import ReduxLogo from '../../assets/redux-logo.png';
import StripeLogo from '../../assets/stripe-logo.png';
import FirebaseLogo from '../../assets/firebase-logo.png';
import SassLogo from '../../assets/sass-logo.png';
import PythonLogo from '../../assets/python-logo.png';
import BootstrapLogo from '../../assets/bootstrap-logo.png';
import NodeLogo from '../../assets/node-js-logo.png';
import SQLLogo from '../../assets/sql-logo.png';

import { useNavigate } from "react-router-dom";

import './about-page.styles.scss';

const AboutPage = () => {

    const navigate = useNavigate();

    const handleNavigate = (direction) => {
        navigate(`/${direction}`);
    }

    return (
        <>
        <div className='about-page-container'>
            <div className='about-me-container'>
                <h1>My name is Mateusz Wieczorek.</h1>
                <p className='about-page-note'>
                    I am<span style={{color: '#dd223b', fontWeight: '600', fontSize: '1.1rem'}}> front end web developer </span>.
                    I love<span style={{color: '#dd223b', fontWeight: '600', fontSize: '1.1rem'}}> programming </span>and 
                    <span style={{color: '#dd223b', fontWeight: '600', fontSize: '1.1rem'}}> designing </span>
                    web applications that exceed expectations. I have developed a strong passion
                    for software development industry and I love what I do.
                </p>
                <div className='about-page-buttons-container'>
                    <button onClick={() => handleNavigate('contact-page')} className='button-link'>Get In Touch</button>
                    <button onClick={() => handleNavigate('projects-page')} className='button-link'>See My Work</button>
                </div>
            </div>
            <div className='photo-container'>
                <img alt='' src={Photo} />
            </div>
        </div>
        <div className='about-page-skills-container'>
            <h1>Skills:</h1>
            <div className='technologies-container'>
                <TechnologyItem logo={HtmlLogo} name={'HTML'} />
                <TechnologyItem logo={CssLogo} name={'CSS'} />
                <TechnologyItem logo={JavaScriptLogo} name={'JavaScript'} />
                <TechnologyItem logo={PythonLogo} name={'Python'} />
                <TechnologyItem logo={ReactLogo} name={'React'} />
                <TechnologyItem logo={ReduxLogo} name={'Redux'} />
                <TechnologyItem logo={SassLogo} name={'Sass'} />
                <TechnologyItem logo={BootstrapLogo} name={'Bootstrap'} />
                <TechnologyItem logo={StyledComponentsLogo} name={'Styled Components'} />
                <TechnologyItem logo={FirebaseLogo} name={'Firebase'} />
                <TechnologyItem logo={StripeLogo} name={'Stripe'} />
                <TechnologyItem logo={NodeLogo} name={'Node'} />
                <TechnologyItem logo={SQLLogo} name={'SQL'} />
            </div>
        </div>
        <div className='history-container'>
            <div className='history-text'>
                <h2>My Programming journey:</h2>
                <p className='history-note'>It all started about a year ago when I decided to teach myself how to code. I had always been curious about how technology worked, and I wanted to have the ability to create something with my own hands. So I started learning Python</p>
                <p className='history-note'>After some time, I soon realized that I wanted to learn more than just Python. I was intrigued by web development and the idea of building websites from scratch. So, I started learning HTML, CSS, and JavaScript.</p>
                <p className='history-note'>After working on several projects, I decided to learn React and technologies connected with that liblary such as redux, styled components or firebase.</p>
                <p className='history-note'>Learning React was challenging, but I was motivated by my love for web development. I spent countless hours practicing and building projects with React, and now, it has become my favorite library to work with.</p>
            </div>
            <div className='history-photo'>
                <div className='journey-photo' style={{width: '90%', height: 'auto', margin: '10px', position: 'relative'}}><iframe allowFullScreen frameBorder="0" style={{width: '100%', height: '450px', borderRadius: '5px'}} src="https://lucid.app/documents/embedded/e855e598-264e-401e-8abf-239f1a2bfcef" id="8HnJhD1uRY6y"></iframe></div>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default AboutPage;

