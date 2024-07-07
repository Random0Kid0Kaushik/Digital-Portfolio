import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

const Projects = () => (
  <section id="projects">
    <h2>Projects</h2>
    <div className="projects-container">
      <div className="project-card">
        <h3><Link to="/projects/python-sorting-system">Python Sorting System</Link></h3>
        <p>A Python-based application that demonstrates various sorting algorithms, including bubble sort, merge sort, and quick sort, with visualizations.</p>
      </div>
      <div className="project-card">
        <h3><Link to="/projects/csharp-mushroom-pocket">C# Mushroom Pocket</Link></h3>
        <p>A C# game application where users can explore a virtual forest, collect different types of mushrooms, and learn about their characteristics and uses.</p>
      </div>
      <div className="project-card">
        <h3><Link to="/projects/ecoutopia">Ecoutopia</Link></h3>
        <p>An eco-friendly mobile app that helps users track their carbon footprint, find sustainable products, and connect with a community of like-minded individuals.</p>
      </div>
    </div>
  </section>
);

export default Projects;


