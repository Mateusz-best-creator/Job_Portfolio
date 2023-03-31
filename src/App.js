import './App.scss';
import {Routes, Route} from 'react-router-dom';

// Routes
import Navigation from './routes/navigation/navigation.routes';
import ProjectsPage from './routes/projects/projects.routes';
import HomePage from './routes/home-page/home-page.routes';
import AboutPage from './routes/about-page/about-page.routes';
import ContactPage from './routes/contact-page/contact-page.component';

import SingleProjectDetails from './components/single-project-details/single-project-details.component';

// video
import clothingAppVideo from './assets/crown-clothing.mp4';
import smartBrainVideo from './assets/smart-brain.mp4';
import nasaBlogVideo from './assets/nasa-blog.mp4';
import mathGameVideo from './assets/math-game.mp4'
import alienInvasionVideo from './assets/alien_invasion.mp4'

const App = () => {

  const SingleProjetcsInDetails = [
    {
      id: 1,
      basicDescription: 'The Clothing React app is a functional web application that allows users to browse, search, and purchase a wide range of clothing items.',
      purpose: "The purpose of the Clothing React app is to provide a user-friendly and visually appealing platform for browsing and purchasing a wide range of clothing items. The app's goal is to deliver a seamless and enjoyable shopping experience for users, with features such as a user account system, and a responsive design ensuring that users can easily find and purchase the clothing items they want.",
      explanation: "The React Clothing app is a web application built using several popular technologies, including React Router, Firebase, Redux Toolkit, Stripe, and Styled Components. These technologies work together to create a powerful and user-friendly platform for browsing and purchasing clothing items online.",
      technologiesExplanation: [
        "React Router is used to create a seamless and dynamic user interface, allowing users to navigate through the app's different pages and components with ease. Firebase provides a backend infrastructure for the app, enabling features such as user authentication and data storage.",
        "Redux Toolkit is used to manage the app's state and data flow, ensuring that the app remains responsive and efficient even as the complexity of the app grows. Stripe provides a secure and reliable payment processing system, allowing users to safely and easily purchase items within the app.",
        "Redux Persist is a library used in the React clothing application to persist the state of the app's Redux store between page refreshes. It does this by allowing the app to store the state data in local storage, and then rehydrate the state data when the app is loaded again. This ensures that the user's preferences and selections are preserved even after the app is closed or refreshed.",
        "Styled Components allows for the creation of beautiful and responsive user interfaces, with custom styles and themes ensuring that the app remains visually engaging and consistent throughout.",
      ],
      explanationProblems: "As I started building my complex React app from scratch, I quickly realized that there were many challenges that I would need to overcome. One of the biggest problems I encountered was the sheer complexity of the app, which required me to carefully plan and architect every aspect of the application. This involved breaking down the app into smaller components and modules, and ensuring that they worked seamlessly together.",
      videoElement: clothingAppVideo,
    },
    {
      id: 2,
      basicDescription: "smart",
      purpose: "smart",
      explanation: "Tsmart",
      technologiesExplanation: [
        "smart"
        ],
      explanationProblems: "problems",
      videoElement: smartBrainVideo,
    },
    {
      id: 3,
      basicDescription: "The blog's homepage features a daily selection of the best images from NASA's archives, with each image accompanied by a detailed caption that provides context and information about the featured celestial object or phenomenon.",
      purpose: "The purpose and goal of the NASA blog showcasing the best picture of the day is to provide users with a daily dose of breathtaking images captured by NASA's various telescopes, spacecraft, and observatories. The blog serves as a platform to showcase NASA's groundbreaking discoveries and research, as well as to inspire and educate people about the wonders of the universe.",
      explanation: "The project that was built using HTML, CSS, JavaScript, local storage, and connected with the NASA API is a web application that allows users to browse and explore NASA's vast database of space-related content, including images, videos, and articles.",
      technologiesExplanation: [
        "The application leverages the power of the NASA API to retrieve and display relevant content",
        "Application also uses local storage to save user preferences and settings, such as their favorite images. This allows users to easily access and revisit content that they have previously enjoyed",
        ],
      explanationProblems: "As I set out to build the NASA blog from scratch using JavaScript, I encountered a number of challenges that required careful planning and troubleshooting. Main challenge I faced was designing a user-friendly and visually appealing interface that would showcase the rich and diverse content available on the NASA API. I had to think carefully about how to display and organize content, including images and articles, in a way that would be intuitive and engaging for users.",
      
      videoElement: nasaBlogVideo,
    },
    {
      id: 4,
      basicDescription: "The Math Sprint game is a fast-paced and engaging web application built using JavaScript, designed to help users improve their math skills while having fun.",
      purpose: "The purpose and goal of the math sprint game is to provide an engaging and interactive platform for users to practice and improve their math skills. The game is designed to challenge users with timed math questions.",
      explanation: "'The math sprint' game built in JavaScript is a web application designed to test and improve user's math skills. One unique feature of this app is that it saves the user's best times in local storage, allowing them to track their progress and strive to improve their performance over time.",
      technologiesExplanation: [
        "For the math sprint game, JavaScript was used to handle the logic behind the quiz and challenge features, as well as the integration with other technologies such as local storage.",
        "In the math sprint game, local storage was used to save the user's best times for each quiz and challenge. This allowed the app to provide a personalized and customized experience for each user, and to track their progress over time.",
        ],
      explanationProblems: "As a developer building the math sprint game from scratch in JavaScript, I encountered several challenges along the way. One of the biggest obstacles was creating a dynamic and responsive user interface that would allow users to take timed math quizzes and challenges. I had to ensure that the user interface was intuitive and easy to use, while also incorporating the necessary features and functionality to track user progress and save best times.",
      
      videoElement: mathGameVideo,
    },
    {
      id: 5,
      basicDescription: "pygame",
      purpose: "pygame",
      explanation: "Tpygame",
      technologiesExplanation: [
        "pygame"
        ],
      explanationProblems: "problems",
      videoElement: alienInvasionVideo,
    },
  ]

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index={true} element={<HomePage />} />
        <Route path='projects-page' element={<ProjectsPage />} />
        <Route path='about-page' element={<AboutPage />} />
        <Route path='contact-page' element={<ContactPage />} />
        <Route path='project-in-detail-1' element={<SingleProjectDetails descriptionData={SingleProjetcsInDetails[0]} />} />
        <Route path='project-in-detail-2' element={<SingleProjectDetails descriptionData={SingleProjetcsInDetails[1]} />} />
        <Route path='project-in-detail-3' element={<SingleProjectDetails descriptionData={SingleProjetcsInDetails[2]} />} />
        <Route path='project-in-detail-4' element={<SingleProjectDetails descriptionData={SingleProjetcsInDetails[3]} />} />
        <Route path='project-in-detail-5' element={<SingleProjectDetails descriptionData={SingleProjetcsInDetails[4]} />} />
      </Route>
    </Routes>
  );
}

export default App;
