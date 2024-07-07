import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';
import PythonSortingSystem from './PythonSortingSystem';
import CSharpMushroomPocket from './CSharpMushroomPocket';
import Ecoutopia from './Ecoutopia';

const App = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
        </ul>
      </nav>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/projects/python-sorting-system" component={PythonSortingSystem} />
        <Route path="/projects/csharp-mushroom-pocket" component={CSharpMushroomPocket} />
        <Route path="/projects/ecoutopia" component={Ecoutopia} />
      </Switch>
    </div>
  </Router>
);

export default App;

