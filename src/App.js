import React from 'react';
import { Router, Routes, Route, Link } from 'react-router-dom';
import About from './components/About';
import Projects from './components/Projects';
import PythonSortingSystem from './components/PythonSortingSystem';
import CSharpMushroomPocket from './components/CSharpMushroomPocket';
import Ecoutopia from './components/Ecoutopia';

const App = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li><Link to="/">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/projects/python-sorting-system" component={PythonSortingSystem} />
        <Route path="/projects/csharp-mushroom-pocket" component={CSharpMushroomPocket} />
        <Route path="/projects/ecoutopia" component={Ecoutopia} />
      </Routes>
    </div>
  </Router>
);

export default App;

