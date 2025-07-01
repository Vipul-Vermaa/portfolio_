import React from 'react';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Full Stack Intern",
      company: "Gamersback",
      location: "Remote",
      duration: "April 2024 - June 2024",
      description: "Coordinated with a team of 15 interns to dissect project requirements into achievable tasks.Designed and implemented RESTful APIs to ensure seamless communication between front-end and back-end systems, boosting overall application responsiveness and reliability. Contributed to both client-side and server-side development, ensuring consistent and high-performing interactions across the tech stack.",
      technologies: ["Node.js", "Express.js", "MongoDB", "React", "Redux"]
    },
    {
      id: 2,
      title: "Web Developer Intern",
      company: "Unified MEntor",
      location: "Remote",
      duration: "October 2023 - November 2023",
      description: "Ceated an interactive web-based music player using HTML, CSS, and JavaScript, focusing on seamless functionality.Engineered core functionalities using JavaScript DOM manipulation.Enhanced user experience by creating an interactive and responsive UI, using Tailwind CSS. ",
      technologies: ["HTML", "CSS", "Javascript", "TailwindCSS"]
    },
  ];

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-timeline">
          {experiences.map((experience) => (
            <div key={experience.id} className="experience-item">
              <div className="experience-content">
                <div className="experience-header">
                  <h3 className="experience-title">{experience.title}</h3>
                  <div className="experience-company">
                    <FaBriefcase className="icon" />
                    <span>{experience.company}</span>
                  </div>
                  <div className="experience-details">
                    <div className="experience-location">
                      <FaMapMarkerAlt className="icon" />
                      <span>{experience.location}</span>
                    </div>
                    <div className="experience-duration">
                      <FaCalendarAlt className="icon" />
                      <span>{experience.duration}</span>
                    </div>
                  </div>
                </div>
                <p className="experience-description">{experience.description}</p>
                <div className="experience-technologies">
                  {experience.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 