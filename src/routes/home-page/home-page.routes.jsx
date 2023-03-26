import React, {useEffect, useRef} from "react";

import { Link } from "react-router-dom";

import Footer from '../../components/footer/footer.component';

import Typed from "typed.js";

// astronaut
import astronaut from '../../assets/astronaut.png'

import './home-page.styles.scss';

const HomePage = () => {

    const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["JavaScript Developer.", "React Developer."],
      startDelay: 300,
      typeSpeed: 150,
      backSpeed: 150,
      backDelay: 150,
      smartBackspace: true,
      loop: true,
      showCursor: false,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
    
  return (
    <>
      <div className="home-page-container">
        <div className="home-page-name">
          <h6 className='dynamic-text'>
            Hello I'm Mateusz <a style={{color: 'black', fontSize: '2rem'}} href='https://github.com/Mateusz-best-creator?tab=repositories' target='_blank'><i className="fab fa-github"></i></a> Wieczorek, <br /><span style={{color: 'rgba(231, 111, 12, 1)'}} ref={el}></span>
          </h6>
          <p className='home-page-text'>
            I am a front end developer. I love building 
            attractive and effective web applications.
            Hit the button below to see what I can do for your business.
          </p>
          <Link to='projects-page'>
            <button className='home-page-button'>Check My Work</button>
          </Link>
        </div>
        <div className='home-page-photo'>
          <img className='astronaut-image' style={{width: '400px'}} src={astronaut} alt='' />
        </div>
      </div>
    </>
  );
  }

  export default HomePage;