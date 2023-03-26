import './App.scss';
import {Routes, Route} from 'react-router-dom';

// Routes
import Navigation from './routes/navigation/navigation.routes';
import ProjectsPage from './routes/projects/projects.routes';
import HomePage from './routes/home-page/home-page.routes';

import SingleProjectDetails from './components/single-project-details/single-project-details.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index={true} element={<HomePage />} />
        <Route path='projects-page/*' element={<ProjectsPage />} />
        <Route path='cos' element={<SingleProjectDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
