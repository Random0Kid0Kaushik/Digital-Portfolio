import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const App = () => (
  <Router>
    <div>
      <header style={headerStyle}>
        <h1 style={titleStyle}>Kaushik's Digital Portfolio</h1>
        <nav style={navStyle}>
          <Link to="/about" style={linkStyle}>About</Link>
          <Link to="/projects" style={linkStyle}>Projects</Link>
          <Link to="/contact" style={linkStyle}>Contact</Link>
        </nav>
      </header>
      
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/python-sorting-system" element={<PythonSortingSystem />} />
        <Route path="/projects/csharp-mushroom-pocket" element={<CSharpMushroomPocket />} />
        <Route path="/projects/ecoutopia" element={<Ecoutopia />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <section id="about" style={sectionStyle}>
        <h2 style={headingStyle}>About Me</h2>
        <p style={paragraphStyle}>
          Hi, I'm Kaushik, a 2nd-year student at Nanyang Polytechnic. I have a strong interest in full stack development and have earned badges from AWS for serverless and machine learning. You can check out some of my current stories <a href="https://www.reddit.com/r/OCism_official/comments/1cd7yxr/zygardes_backstory_the_characters/" style={linkStyle} target="_blank" rel="noopener noreferrer">here</a>.
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
      </section>

      <section id="projects" style={sectionStyle}>
        <h2 style={headingStyle}>Projects</h2>
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

      <section id="contact" style={sectionStyle}>
        <h2 style={headingStyle}>Contact</h2>
        <p style={paragraphStyle}>Feel free to reach out to me through my email: <a href="mailto:example@example.com" style={linkStyle}>example@example.com</a>.</p>
      </section>
    </div>
  </Router>
);

// Inline styles (unchanged)
const headerStyle = {
  backgroundColor: '#282c34',
  padding: '1rem',
  textAlign: 'center',
};

const titleStyle = {
  color: 'white',
  fontSize: '2rem',
};

const navStyle = {
  marginTop: '1rem',
};

const linkStyle = {
  color: '#007bff',
  margin: '0 1rem',
  textDecoration: 'none',
};

const sectionStyle = {
  padding: '2rem',
  backgroundColor: '#f9f9f9',
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  marginBottom: '2rem',
  textAlign: 'center',
};

const headingStyle = {
  fontSize: '2.5rem',
  color: '#333',
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

export default App;
