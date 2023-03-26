import React from "react";

// video
import VideoPlayer from "../../video-player/video-player.component";
import ClothingVideo from '../../assets/crown-clothing.mp4'

import Footer from "../footer/footer.component";

import './single-project-details.styles.scss';

const SingleProjectDetails = () => {

    const basicDescription = 'The Clothing React app is a functional web application that allows users to browse, search, and purchase a wide range of clothing items';
    const purpose = "The purpose of the Clothing React app is to provide a user-friendly and visually appealing platform for browsing and purchasing a wide range of clothing items. The app's goal is to deliver a seamless and enjoyable shopping experience for users, with features such as a user account system, and a responsive design ensuring that users can easily find and purchase the clothing items they want.";
    const explanation = "The React Clothing app is a web application built using several popular technologies, including React Router, Firebase, Redux Toolkit, Stripe, and Styled Components. These technologies work together to create a powerful and user-friendly platform for browsing and purchasing clothing items online."
    const technologiesExplanation = [
        "React Router is used to create a seamless and dynamic user interface, allowing users to navigate through the app's different pages and components with ease. Firebase provides a backend infrastructure for the app, enabling features such as user authentication and data storage.",
        "Redux Toolkit is used to manage the app's state and data flow, ensuring that the app remains responsive and efficient even as the complexity of the app grows. Stripe provides a secure and reliable payment processing system, allowing users to safely and easily purchase items within the app.",
        "Styled Components allows for the creation of beautiful and responsive user interfaces, with custom styles and themes ensuring that the app remains visually engaging and consistent throughout.",
    ]
    const explanationProblems = "As I started building my complex React app from scratch, I quickly realized that there were many challenges that I would need to overcome. One of the biggest problems I encountered was the sheer complexity of the app, which required me to carefully plan and architect every aspect of the application. This involved breaking down the app into smaller components and modules, and ensuring that they worked seamlessly together.";
    return (
        <>
            <div className='project-details-container'>
                <h1>Refy</h1>
                <p>2 minute read</p>
                <p>{basicDescription}</p>
                <div className='video-details-container'>
                    <VideoPlayer style={{width: '80%'}} videoElement={ClothingVideo} />
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
            <button className='go-back-button'>Go Back To Projects Site</button>
            <Footer />
        </>
    )
}

export default SingleProjectDetails;