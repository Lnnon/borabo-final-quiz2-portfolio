import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import './Home.css';

// Constant defined outside the component
const quotes = [
  "Code is like humor. When you have to explain it, it’s bad.",
  "Dream it. Code it. Ship it.",
  "First, solve the problem. Then, write the code.",
  "Simplicity is the soul of efficiency.",
  "Build what you love, love what you build."
];

function Home() {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Use the length of the constant quotes array
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 4000); // Change quote every 4 seconds

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);

    // An empty dependency array means this effect runs once on mount
    // and the cleanup runs once on unmount. This is correct because
    // the effect doesn't depend on any props or state.
  }, []); // <-- Fix: Removed quotes.length, leaving the array empty

  return (
    <div className="home-container">
      <div className="intro">
        <h1>
          Hello, I'm <span className="highlight">Janelle Kaye Borabo</span>
        </h1>

        <h2 className="typewriter-text">
          <Typewriter
            words={[
              'ESL Teacher',
              'Coding Dreams Into Reality',
              'Future-Focused Technologist',
              'Bringing Imagination to the Web',
              'Turning Coffee Into Code',
              'Maybe not so sure Animator'
            ]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>

        {/* Display the current quote */}
        <p className="quote-text">
          "{quotes[currentQuoteIndex]}"
        </p>

        <div className="button-group">
          <Link to="/about" className="home-button">About Me</Link>
          <Link to="/projects" className="home-button">My Projects</Link>
          <Link to="/Resume" className="home-button">Resume</Link>
        </div>

        {/* Connect Section */}
        <div className="connect-section">
          <p className="connect-subtitle">Feel free to connect with me</p>
          <div className="social-icons">
            <a href="https://www.facebook.com/janellekaye.borabo/" target="_blank" rel="noopener noreferrer" aria-label="Facebook Profile">
              <FaFacebookF className="social-icon" />
            </a>
            <a href="https://www.instagram.com/jkaye_kaye/" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile">
              <FaInstagram className="social-icon" />
            </a>
            <a href="https://www.youtube.com/@janellekayeborabo6134" target="_blank" rel="noopener noreferrer" aria-label="YouTube Channel">
              <FaYoutube className="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
