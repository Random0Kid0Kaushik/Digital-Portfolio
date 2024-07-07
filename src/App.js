import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
            <Route path="/" exact component={About} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
