import React from 'react';

const About = () => (
  <section id="header" style={sectionStyle}>
    <h2 style={headingStyle}>About Me</h2>
    <p style={paragraphStyle}>
      Hi, I'm Kaushik, a 2nd-year student at Nanyang Polytechnic. I have a strong interest in full stack development and have earned badges from AWS for serverless and machine learning.
    </p>
    <h3 style={subHeadingStyle}>Skills</h3>
    <ul style={listStyle}>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>Node.js</li>
      <li>Express</li>
      <li>MUI</li>
      <li>Rust</li>
      <li>Python</li>
      <li>C++</li>
      <li>C#</li>
    </ul>
    <h3 style={subHeadingStyle}>Hobbies</h3>
    <ul style={listStyle}>
      <li>Reading</li>
      <li>Playing Guitar</li>
      <li>Swimming</li>
      <li>Video Games</li>
      <li>Hiking</li>
    </ul>
    <p>You can check out some of my current stories <a href="https://www.reddit.com/r/OCism_official/comments/1cd7yxr/zygardes_backstory_the_characters/" style={linkStyle} target="_blank" rel="noopener noreferrer">here</a>.</p>
  </section>
);

// Updated styles for a cleaner look
const sectionStyle = {
  padding: '2rem',
  backgroundColor: '#f9f9f9',
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  marginBottom: '2rem',
  textAlign: 'center',
  fontFamily: 'Arial, sans-serif', // Updated font
};

const headingStyle = {
  fontSize: '2.5rem',
  color: '#333',
  marginBottom: '1rem', // Improved spacing
};

const subHeadingStyle = {
  fontSize: '1.8rem',
  color: '#555',
  marginTop: '1.5rem',
};

const paragraphStyle = {
  fontSize: '1.1rem',
  lineHeight: '1.6',
};

const listStyle = {
  listStyleType: 'none',
  padding: '0',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
  gap: '10px',
};

const linkStyle = {
  color: '#007bff',
  textDecoration: 'none',
};

export default About;


