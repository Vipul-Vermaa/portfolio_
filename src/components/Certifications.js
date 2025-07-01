import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaExternalLinkAlt, FaGoogleDrive } from 'react-icons/fa';
import './Certifications.css';
import guvi from '../assets/guvi.png';
import ccna from '../assets/ccna.png';
import react from '../assets/react.png';

const Certifications = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const certificates = [
    {
      id: 1,
      name: "Full Stack Development",
      issuer: "Guvi-HCL",
      date: "March 2025",
      image: guvi,
      smallImage: guvi,
      link: guvi
    },
    {
      id: 2,
      name: "Introduction to Networks",
      issuer: "CCNA",
      date: "June 2023",
      image: ccna,
      smallImage: ccna,
      link: ccna
    },
    {
      id: 3,
      name: "React",
      issuer: "HackerRank",
      date: "September 2023",
      image: react,
      smallImage: react,
      link: react
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === certificates.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? certificates.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const openCertificate = (link) => {
    window.open(link, '_blank');
  };

  return (
    <section id="certifications" className="section certifications-section">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        
        <div className="certifications-header">
          <p className="certifications-description">
            Professional certifications.
          </p>
        </div>

        <div className="certifications-carousel">
          <button className="carousel-btn prev" onClick={prevSlide}>
            <FaChevronLeft />
          </button>
          <div className="carousel-container">
            <div className="carousel-track" style={{ transform: 'none' }}>
              <div className="certificate-card">
                <div className="certificate-image">
                  <img src={certificates[currentIndex].image} alt={certificates[currentIndex].name} />
                  <div className="certificate-overlay">
                    <button
                      className="view-certificate-btn"
                      onClick={() => openCertificate(certificates[currentIndex].link)}
                    >
                      <FaExternalLinkAlt /> View Certificate
                    </button>
                  </div>
                </div>
                <div className="certificate-info">
                  <div className="certificate-header">
                    <img src={certificates[currentIndex].smallImage} alt={certificates[currentIndex].name} className="certificate-small-image" />
                    <h3 className="certificate-name">{certificates[currentIndex].name}</h3>
                  </div>
                  <p className="certificate-issuer">{certificates[currentIndex].issuer}</p>
                  <p className="certificate-date">{certificates[currentIndex].date}</p>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-btn next" onClick={nextSlide}>
            <FaChevronRight />
          </button>
        </div>

        <div className="carousel-indicators">
          <button
            className={`indicator ${currentIndex === 0 ? 'active' : ''}`}
            onClick={() => goToSlide(0)}
          />
        </div>
      </div>
    </section>
  );
};

export default Certifications; 