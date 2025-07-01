import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I am a passionate Backend Developer with a strong foundation in server-side development, 
              database design, and API development. With expertise in modern backend technologies, 
              I specialize in building scalable, secure, and high-performance applications.
            </p>
            <p>
              My journey in software development began with a curiosity about how systems work behind 
              the scenes. Today, I focus on creating robust backend solutions that power modern web 
              applications, mobile apps, and enterprise systems.
            </p>
            <p>
              I believe in writing clean, maintainable code and following best practices in software 
              development. My experience includes working with various databases, cloud platforms, 
              and microservices architecture.
            </p>
            <div className="about-highlights">
              <div className="highlight-item">
                <h4>Projects</h4>
                <p>15+ Completed Projects</p>
              </div>
              <div className="highlight-item">
                <h4>Technologies</h4>
                <p>Node.js, Python, Java, SQL, NoSQL, React</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 