import React from "react";

// project component
import SingleProject from "../../components/single-project/single-project.component";
import Footer from "../../components/footer/footer.component";

// videos
import clothingAppVideo from '../../assets/crown-clothing.mp4';
import nasaBlogVideo from '../../assets/nasa-blog.mp4';
import mathGameVideo from '../../assets/math-game.mp4';
import smartBrainVideo from '../../assets/smart-brain.mp4';
import mealsToGoVideo from '../../assets/meals-to-go.mp4';

// styles
import './projects.styles.scss';

const ProjectsPage = () => {
    
    const projectsData = [
        {
            id: 1,
            title: 'Crown Clothing App',
            skills: ['html', 'css', 'styled components', 'java Script', 'react', 'react router', 'redux toolkit', 'redux persist', 'firebase', 'stripe', 'netlify functions'],
            description: 'The Clothing React app is a beautifully designed and functional web application that allows users to browse, search, and purchase a wide range of clothing items.',
            sourceCodeLink: 'https://github.com/Mateusz-best-creator/clothingApp',
            livePageLink: 'https://glittering-dasik-8709b7.netlify.app/',
            videoElement: clothingAppVideo,

        },
        {
            id: 2,
            title: 'Meals To Go',
            skills: ['html','Java Script', 'react native','expo' , 'styled components','expo map' ,'google/apple maps', 'ANDROID/IOS camera', 'react-context', 'firebase', 'async storage'],
            description: "Meals To Go is a react native application that allows user to search for resturants in different parts of the world using expo-map and google/apple map.",
            sourceCodeLink: 'https://github.com/Mateusz-best-creator/MealsToGo',
            livePageLink: 'https://expo.dev/@mateusz915/MealsToGo?serviceType=classic&distribution=expo-go',
            videoElement: mealsToGoVideo,
        },
        {
            id: 3,
            title: 'Look For Pictures',
            skills: ['html', 'css', 'Java Script', 'react', 'node', 'express', 'bcrypt', 'postqresql'],
            description: "The Smart-Brain app is a sophisticated web application that is built using React, Node.js, Express.js, PostgreSQL, and Knex library.",
            sourceCodeLink: 'https://github.com/Mateusz-best-creator/brain_FrontEnd',
            livePageLink: 'https://brain-frontend.onrender.com',
            videoElement: smartBrainVideo,
        },
        {
            id: 4,
            title: 'Nasa Documentation',
            skills: ['html', 'css', 'Java Script', 'local storage'],
            description: "One of the key features of the NASA Best Picture of the Day blog is its integration with NASA's APIs, which allow the application to dynamically fetch and display the latest images as they are released by NASA.",
            sourceCodeLink: 'https://github.com/Mateusz-best-creator/NASA-pictures-generator',
            livePageLink: 'https://mateusz-best-creator.github.io/NASA-pictures-generator/',
            videoElement: nasaBlogVideo,
        },
        {
            id: 5,
            title: 'Math Sprint Game',
            skills: ['html', 'css', 'Java Script', 'local storage'],
            description: "The Math Sprint game is a fast-paced and engaging web application built using JavaScript, designed to help users improve their math skills while having fun.",
            sourceCodeLink: 'https://github.com/Mateusz-best-creator/Math_Game',
            livePageLink: 'https://mateusz-best-creator.github.io/Math_Game/',
            videoElement: mathGameVideo,
        },
    ]

    return (
        <>
            <div className='projects-container'>
                <div className='projects-title-container'>
                    <h1 className='projects-title'>Projects</h1>
                    <div className='title-line'></div>
                </div>
                
                <h3 style={{fontWeight:'400'}}>Front End Developer / Python Developer</h3>
                {
                    projectsData.map((item) => {
                        const { id } = item;
                        return <SingleProject key={id} projectData={item} />
                    })
                }

                <div className='other-projects-container'>
                    <button><a target='_blank' href='https://github.com/Mateusz-best-creator?tab=repositories'>Check my other projects</a></button>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ProjectsPage;