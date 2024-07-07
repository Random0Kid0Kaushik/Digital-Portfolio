import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header style={headerStyle}>
    <h1 style={logoStyle}>Kaushik's Digital Portfolio</h1>
    <nav style={navStyle}>
      <Link to="/about" style={linkStyle}>About</Link>
      <Link to="/projects" style={linkStyle}>Projects</Link>
      <Link to="/contact" style={linkStyle}>Contact</Link>
    </nav>
  </header>
);

// Define inline styles
const headerStyle = {
  backgroundColor: '#f0f0f0',
  padding: '1rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const logoStyle = {
  fontSize: '2rem',
  color: '#333',
  textDecoration: 'none',
};

const navStyle = {
  display: 'flex',
};

const linkStyle = {
  marginLeft: '1rem',
  textDecoration: 'none',
  color: '#555',
  transition: 'color 0.3s ease',
};

export default Header;

