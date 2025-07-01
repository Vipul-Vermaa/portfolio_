import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';
import './Header.css';
import resumeFile from '../assets/resume.pdf';
import profilePhoto from '../assets/profile.jpeg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = resumeFile;
    link.download = 'vipul_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="container">
          <div className="nav-brand">
            <h2>Portfolio</h2>
          </div>
          
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <a href="#about" onClick={() => scrollToSection('about')}>About</a>
            <a href="#experience" onClick={() => scrollToSection('experience')}>Experience</a>
            <a href="#projects" onClick={() => scrollToSection('projects')}>Projects</a>
            <a href="#skills" onClick={() => scrollToSection('skills')}>Skills</a>
            <a href="#certifications" onClick={() => scrollToSection('certifications')}>Certifications</a>
            <a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a>
          </div>
          
          <div className="nav-toggle" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </nav>

      <div className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-name">VIPUL VERMA</h1>
              <h2 className="hero-title">Backend Developer</h2>
              <p className="hero-description">
                Passionate about creating robust, scalable, and efficient backend solutions,
                delivering well-documented, tested, and operable code. 
              </p>
              <div className="hero-buttons">
                <a href="#projects" className="btn" onClick={() => scrollToSection('projects')}>
                  View My Work
                </a>
                <button className="btn btn-download" onClick={downloadCV}>
                  <FaDownload /> Download CV
                </button>
                <a href="#contact" className="btn btn-outline" onClick={() => scrollToSection('contact')}>
                  Get In Touch
                </a>
              </div>
              <div className="social-links">
                <a href="https://github.com/Vipul-Vermaa" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
                <a href="https://linkedin.com/in/vipulvermaa" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                <a href="mailto:vipulvermalm8@gmail.com">
                  <FaEnvelope />
                </a>
              </div>
            </div>
            <div className="hero-image">
              <div className="profile-photo-placeholder">
                <img src={profilePhoto} alt="Profile" className="profile-photo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 