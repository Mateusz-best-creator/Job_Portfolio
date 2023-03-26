import './App.scss';
import {Routes, Route} from 'react-router-dom';

// Routes
import Navigation from './routes/navigation/navigation.routes';
import ProjectsPage from './routes/projects/projects.routes';
import HomePage from './routes/home-page/home-page.routes';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index={true} element={<HomePage />} />
        <Route path='projects-page' element={<ProjectsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
