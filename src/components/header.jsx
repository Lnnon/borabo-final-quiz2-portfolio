import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'

function Header() {
  return (
    <nav className="navbar">
      <a
        href="https://jkayekaye.github.io/my-website/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="logo"
      >
        My Story
      </a>
      
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/resume">Resume</Link></li>
      </ul>
    </nav>
  );
}

export default Header;
