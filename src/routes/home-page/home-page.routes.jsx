import React, {useEffect, useRef} from "react";

// import Typed from "typed.js";

import './home-page.styles.scss';

const HomePage = () => {

    const el = useRef(null);

  // useEffect(() => {
  //   const typed = new Typed(el.current, {
  //     strings: ["Front End Developer", "Python Developer", "Hardworking Guy"],
  //     startDelay: 300,
  //     typeSpeed: 150,
  //     backSpeed: 150,
  //     backDelay: 150,
  //     smartBackspace: true,
  //     loop: true,
  //     showCursor: false,
  //   });

  //   // Destropying
  //   return () => {
  //     typed.destroy();
  //   };
  // }, []);
    
  return (
    <>
      <div className="home-page-container">
        <div className="Content">
          <h6>
            Hello I'm Mateusz Wieczorek, <br /><span ref={el}></span>
          </h6>
        </div>
      </div>
    </>
  );
  }

  export default HomePage;