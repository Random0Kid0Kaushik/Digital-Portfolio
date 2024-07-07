import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './components/About';
import Projects from './components/Projects';
import PythonSortingSystem from './components/PythonSortingSystem';
import CSharpMushroomPocket from './components/CSharpMushroomPocket';
import Ecoutopia from './components/Ecoutopia';
import Contact from './components/Contact';
import Header from './components/Header';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/python-sorting-system" element={<PythonSortingSystem />} />
      <Route path="/projects/csharp-mushroom-pocket" element={<CSharpMushroomPocket />} />
      <Route path="/projects/ecoutopia" element={<Ecoutopia />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
);

export default App;

