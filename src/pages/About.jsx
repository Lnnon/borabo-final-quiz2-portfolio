import React from 'react';
import './About.css';
import profilePic from '../Assets/about.jpg';

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-image">
          <img src={profilePic} alt="Vince Allen Quinto" className="profile-pic" />
        </div>

        <div className="about-text">
          <h1>About Me</h1>
          <p>
            Hello! I'm <strong>Janelle Kaye Borabo</strong> — a web development enthusiast from Lucena City with a love for crafting smart and user-centered digital experiences.
            I'm currently studying at <strong>Dalubhasaan ng Lungsod ng Lucena</strong>, sharpening my skills and exploring the art of building on the web.
          </p>
          <p>
            I first discovered my passion for tech at <strong>Systems Technology Institute</strong> and have been hooked ever since. 
            I'm always excited to learn, improve, and dive into new challenges as I grow in this fast-paced industry.
          </p>

          <div className="skills-section">
            <h2>Skills & Technologies</h2>
            <div className="skills-grid">
              {[
                'HTML', 'CSS', 'JavaScript', 'React', 'Node.js','Laravel',
                'Python', 'MongoDB', 'Java','Communicate', 'Multitasking','Persuasion',
                'Initiative','Focus', 'Adaptability','Listening','Patience','Clarity'
              ].map((skill, index) => (
                <div key={index} className="skill-card">{skill}</div>
              ))}
            </div>
          </div>

        <div className="quote-section">
          <blockquote>
            "The expert in anything was once a beginner."
          </blockquote>
          <span>- Helen Hayes</span>
        </div>

        </div>
      </div>

      {/* Timeline Section */}
      <div className="timeline-section">
        <h2 className="timeline-title">MY JOURNEY</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-year">2022</div>
            <div className="timeline-content">
              <h3>First Professional Experience</h3>
              <h4>Joined the workforce as a Call Center Agent</h4>
              <p>
                Embarked on my professional journey by working in the BPO industry, where I developed strong communication, problem-solving, and customer service skills.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-year">2023</div>
            <div className="timeline-content">
              <h3>Academic Pursuit</h3>
              <h4>Enrolled in Bachelor of Science in Information Technology (BSIT)</h4>
              <p>
                Took a significant step toward my passion for technology by enrolling in BSIT, solidifying my foundation in programming, system analysis, and web development.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-year">2024</div>
            <div className="timeline-content">
              <h3>Advancement in Tech</h3>
              <h4>Proficient in Multiple Programming Languages</h4>
              <p>
                Progressed into my second year of BSIT, expanding my expertise in JavaScript, Python, Java, and more. Worked on personal and academic projects to sharpen my skills further.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-year">2025</div>
            <div className="timeline-content">
              <h3>Global Aspirations</h3>
              <h4>Application to Become an ESL Teacher in Japan</h4>
              <p>
                Ventured into international opportunities by applying for an ESL teaching position in Japan, embracing both professional growth and cultural immersion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
