import React from 'react';
import './Projects.css'; 
import enrollmentImg from '../Assets/portal.jpg';
import valentineImg from '../Assets/valentine.jpg';
import totoroImg from '../Assets/totoro.jpeg';

const projects = [
  {
    title: 'Totoro Tribute Page',
    description: 'A visually charming fan page dedicated to "My Neighbor Totoro," celebrating the beloved Studio Ghibli masterpiece with an elegant front-end design and responsive layout.',
    image: totoroImg,
    github: 'https://github.com/jkayekaye/Totoro',
    demo: 'https://jkayekaye.github.io/Totoro/' // 🔥 Add your real demo link here
  },
  {
    title: 'Student Enrollment Portal',
    description: 'A streamlined web application designed to manage student enrollment efficiently, integrating both front-end and back-end technologies to ensure a secure and user-friendly experience.',
    image: enrollmentImg,
    github: 'https://github.com/jkayekaye/BORABO_FINALSQUIZ-3',
    demo: 'https://jkayekaye.github.io/BORABO_FINALSQUIZ-3/' // 🔥 Add your real demo link here
  },
  {
    title: 'Valentine Proposal Website',
    description: 'An interactive and personalized website crafted for a "Will you be my Valentine?" proposal, blending creative animations with thoughtful design to deliver a heartfelt digital experience.',
    image: valentineImg,
    github: 'https://github.com/saurabhnemade/will-you-be-my-valentine',
    demo: 'https://www.i143.xyz/create?template=7' // 🔥 Add your real demo link here
  }
];

function Projects() {
  return (
    <div className="projects-container">
      <div className="projects-header">
        <h1>Projects</h1>
        <p>Highlighted works that demonstrate my creativity, technical expertise, and passion for web development.</p>
      </div>
      <div className="projects-grid">
        {projects.map((proj, index) => (
          <div key={index} className="project-card">
            <img src={proj.image} alt={proj.title} />
            <div className="project-details">
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
              <div className="button-group">
                <a 
                  href={proj.demo} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-demo"
                >
                  Demo
                </a>
                <a 
                  href={proj.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-github"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
