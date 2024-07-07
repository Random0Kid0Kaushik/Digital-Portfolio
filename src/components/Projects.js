import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => (
  <section id="projects" style={sectionStyle}>
    <h2 style={sectionTitleStyle}>Projects</h2>
    <div style={projectsContainer}>
      <div style={projectCard}>
        <h3 style={projectTitle}><Link to="/projects/python-sorting-system" style={linkStyle}>Python Sorting System</Link></h3>
        <p style={projectDescription}>A Python-based application that demonstrates various sorting algorithms, including bubble sort, merge sort, and quick sort, with visualizations.</p>
      </div>
      <div style={projectCard}>
        <h3 style={projectTitle}><Link to="/projects/csharp-mushroom-pocket" style={linkStyle}>C# Mushroom Pocket</Link></h3>
        <p style={projectDescription}>A C# game application where users can explore a virtual forest, collect different types of mushrooms, and learn about their characteristics and uses.</p>
      </div>
      <div style={projectCard}>
        <h3 style={projectTitle}><Link to="/projects/ecoutopia" style={linkStyle}>Ecoutopia</Link></h3>
        <p style={projectDescription}>An eco-friendly mobile app that helps users track their carbon footprint, find sustainable products, and connect with a community of like-minded individuals.</p>
      </div>
    </div>
  </section>
);

// Inline styles
const sectionStyle = {
  padding: '2rem',
  backgroundColor: '#f9f9f9',
};

const sectionTitleStyle = {
  textAlign: 'center',
  color: '#333',
};

const projectsContainer = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '20px',
};

const projectCard = {
  backgroundColor: '#fff',
  border: '1px solid #ddd',
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  padding: '20px',
  width: '80%',
  maxWidth: '600px',
};

const projectTitle = {
  margin: '0 0 10px',
  fontSize: '1.5em',
  color: '#007bff',
  textDecoration: 'none',
};

const projectDescription = {
  color: '#666',
};

const linkStyle = {
  color: '#007bff',
  textDecoration: 'none',
};

export default Projects;



