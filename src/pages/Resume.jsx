import React from 'react';
import './Resume.css';

function Resume() {
  return (
    <div className="resume-container">
      <h1 className="resume-title">My Resume</h1>

      <div className="resume-frame">
        <iframe
          src="/resume.pdf"
          title="Resume"
          width="100%"
          height="800px"
          style={{ border: "none", borderRadius: "10px", boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)" }}
        ></iframe>
      </div>

      <div className="resume-highlights">
        <div className="highlight-card">
         
          <h3><span role="img" aria-label="Man Technologist Emoji">👨‍💻</span> Experience</h3>
          <p>3+ years of software development across web and mobile platforms.</p>
        </div>
        <div className="highlight-card">
      
          <h3><span role="img" aria-label="Graduation Cap Emoji">🎓</span> Education</h3>
          <p>Bachelor's in Computer Science, Major in Software Engineering.</p>
        </div>
        <div className="highlight-card">
      
          <h3><span role="img" aria-label="Tools Emoji">🛠</span> Skills</h3>
          <p>React, JavaScript, Node.js, Python, CSS, Git, REST APIs</p>
        </div>
      </div>

 
      <a href="/resume.pdf" download className="resume-button download">
        <span role="img" aria-label="Page with Curl Emoji">📄</span> Download Resume
      </a>
    </div>
  );
}

export default Resume;
