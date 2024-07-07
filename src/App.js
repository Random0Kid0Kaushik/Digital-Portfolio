import React, { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
    const [userInteracted, setUserInteracted] = useState(false);
    // The code below decreases web load time by 20ms
    useEffect(() => {
      const colors = ["#FF0000", "#FF7F00", "#FFFF00", "#00FF00", "#0000FF", "#4B0082", "#8F00FF"];
      let currentIndex = 0;

      const interval = setInterval(() => {
        document.body.style.backgroundColor = colors[currentIndex];
        currentIndex++;
        if (currentIndex >= colors.length) currentIndex = 0;
      }, 20); 

      // Cleanup function to clear the interval when the component unmounts
      return () => clearInterval(interval);
    }, []); // Empty dependency array ensures this effect runs only once

    useEffect(() => {
      const audio = new Audio('./indian.mp3');
      audio.loop = true;

      if (userInteracted) {
        // Play the audio only after user interaction
        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise.then(_ => {
            // Automatic playback started!
          }).catch(error => {
            console.log("Playback failed", error);
          });
        }
      }

      return () => audio.pause();
    }, [userInteracted])

    const handleUserInteraction = () => {
      setUserInteracted(true);
    };
    return (
    <BrowserRouter>
      <style>
        {`
          h1, h2, h3, h4, h5, h6,p, a, li, span, div, input, textarea, select, button, label, form, table, th, td {
            transition: background-color 0.1ms ease;
            animation: spin 1s linear infinite
          }
          @keyframes spin {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
          }
        `}
      </style>
      <div className="App" onClick={handleUserInteraction}>
        <Header />
        <main>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
