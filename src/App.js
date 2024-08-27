import './App.css';
import Objective from './components/objective';
import WorkExperience from './components/workExperience';
import Projects from './components/projects';
import Education from './components/education';
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Objective />} />
          <Route path='/education' element={<Education />} />
          <Route path='/experience' element={<WorkExperience />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
