import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaEye } from 'react-icons/fa';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaJava, FaDatabase,
  FaAws, FaDocker, FaGit, FaGithub as FaGithubIcon, FaLinux, FaServer
} from 'react-icons/fa';
import { 
  SiExpress, SiMongodb, SiPostgresql, SiMysql, SiRedis, SiDjango, SiSpringboot,
  SiFastapi, SiStripe, SiPaypal, SiSocketdotio, SiCelery, SiDocker as SiDockerIcon,
  SiKubernetes, SiJenkins, SiNginx, SiPm2,SiPrisma,SiZod,SiTypescript,SiJsonwebtokens,SiThymeleaf,SiRedux,SiRazorpay
} from 'react-icons/si';
import './Projects.css';
import project4 from '../assets/project4.png';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project5 from '../assets/project5.png';
import project6 from '../assets/project6.png'
// import { SiRazorpay } from 'react-icons/si';

const Projects = () => {
  // Technology icon mapping
  const techIcons = {
    "Node.js": { icon: <FaNodeJs />, color: "#68a063" },
    "Express.js": { icon: <SiExpress />, color: "#6db33f" },
    "MongoDB": { icon: <SiMongodb />, color: "#47a248" },
    "PostgreSQL": { icon: <SiPostgresql />, color: "#336791" },
    "MySQL": { icon: <SiMysql />, color: "#4479a1" },
    "Redis": { icon: <SiRedis />, color: "#dc382d" },
    "Python": { icon: <FaPython />, color: "#3776ab" },
    "Django": { icon: <SiDjango />, color: "#092e20" },
    "FastAPI": { icon: <SiFastapi />, color: "#05998b" },
    "Java": { icon: <FaJava />, color: "#ed8b00" },
    "Spring Boot": { icon: <SiSpringboot />, color: "#6db33f" },
    "Socket.io": { icon: <SiSocketdotio />, color: "#010101" },
    "Celery": { icon: <SiCelery />, color: "#37814a" },
    "AWS": { icon: <FaAws />, color: "#ff9900" },
    "Docker": { icon: <SiDockerIcon />, color: "#2496ed" },
    "Redux": { icon: <SiRedux />, color: "#2496ed" },
    "Kubernetes": { icon: <SiKubernetes />, color: "#326ce5" },
    "Jenkins": { icon: <SiJenkins />, color: "#d24939" },
    "Nginx": { icon: <SiNginx />, color: "#009639" },
    "PM2": { icon: <SiPm2 />, color: "#2b037a" },
    "Stripe": { icon: <SiStripe />, color: "#008cdd" },
    "Razorpay": { icon: <SiRazorpay />, color: "#00457c" },
    "HTML5": { icon: <FaHtml5 />, color: "#e34f26" },
    "CSS3": { icon: <FaCss3Alt />, color: "#1572b6" },
    "JavaScript": { icon: <FaJs />, color: "#f7df1e" },
    "React": { icon: <FaReact />, color: "#61dafb" },
    "Git": { icon: <FaGit />, color: "#f05032" },
    "GitHub": { icon: <FaGithubIcon />, color: "#181717" },
    "Linux": { icon: <FaLinux />, color: "#fcc624" },
    "REST API": { icon: <FaServer />, color: "#ff6b6b" },
    "Prisma":{icon:<SiPrisma/>,color:"#2496ed"},
    "Zod":{icon:<SiZod/>,color:"#2496ed"},
    "Typescript":{icon:<SiTypescript/>,color:"#2496ed"},
    "JWT":{icon:<SiJsonwebtokens/>,color:"#ff6b6b"},
    "Thymeleaf":{icon:<SiThymeleaf/>,color:"#2496ed"}
    
  };

  const projects = [
    {
      id: 1,
      name: "ServiceFlow: Backend Microservices Demo",
      description: "A modular system where different parts like user and product management work independently but communicate through a central gateway. Built to be scalable and easy to maintain, this setup ensures smooth request handling and faster responses.",
      techStack: ["Node.js", "Express.js", "PostgreSQL", "Redis", "Docker","Prisma"],
      githubLink: "https://github.com/Vipul-Vermaa/microservices_nodejs",
      // deploymentLink: "https://ecommerce-api-demo.herokuapp.com",
      image: project1
    },
    {
      id: 2,
      name: "Connect_Hub",
      description: "A backend system for a social platform that handles user sign-up, login, and profile security. It ensures smooth data validation and fast response times for user-related actions like login, posting, and fetching data.",
      techStack: ["MongoDB", "Node.js", "Express.js", "Typescript", "Zod"],
      githubLink: "https://github.com/Vipul-Vermaa/Connect__hub",
      // deploymentLink: "https://task-manager-demo.vercel.app",
      image: project2
    },
    {
      id: 3,
      name: "FlashSale",
      description: "A system built to manage limited-time sales where products are sold until they run out. It tracks stock levels in real time and automatically ends the sale once items are sold out, helping businesses run smooth and fair sales events.",
      techStack: ["Node.js", "Express.js", "JWT", "MongoDB"],
      githubLink: "https://github.com/Vipul-Vermaa/flashSale",
      // deploymentLink: "https://weather-api-demo.netlify.app",
      // image: project4
    },
    {
      id: 4,
      name: "Online BusBooking",
      description: "A complete ticket booking system where users can search for buses, check seat availability, and book tickets. It also allows users to view their booking history and manage their profile, making travel planning simple and organized.",
      techStack: ["Java", "Spring Boot", "MySQL", "Thymeleaf","JWT"],
      githubLink: "https://github.com/Vipul-Vermaa/onlineBusBooking",
      // deploymentLink: "https://social-api-demo.herokuapp.com",
      image: project4
    },
    {
      id: 5,
      name: "Marketplace",
      description: "An online marketplace where users can browse products, add them to their cart, and complete purchases with a secure payment system. The platform is designed for fast performance and smooth checkout experiences.",
      techStack: ["React", "Redux", "Node.js", "Express.js", "MongoDB","Razorpay"],
      githubLink: "https://github.com/Vipul-Vermaa/backend_marketplace",
      // deploymentLink: "https://inventory-demo.vercel.app",
      image: project5
    },
    {
      id: 6,
      name: "Employee Management System",
      description: "An internal tool for managing employees in an organization. It allows admins to add, update, or remove employee details, and provides a user-friendly interface for viewing and organizing employee records.",
      techStack: ["Java", "Spring Boot", "MySQL", "Thymeleaf","JWT"],
      githubLink: "https://github.com/Vipul-Vermaa/employee-management-system",
      // deploymentLink: "https://payment-demo.netlify.app",
      image: project6
    }
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card card">
              <div className="project-image">
                <img src={project.image} alt={project.name} />
                <div className="project-overlay">
                  <div className="project-links">
                    {/* <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaGithub />
                    </a> */}
                    {/* <a href={project.deploymentLink} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaExternalLinkAlt />
                    </a> */}
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-actions">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-small">
                    <FaGithub /> View Code
                  </a>
                  {/* <a href={project.deploymentLink} target="_blank" rel="noopener noreferrer" className="btn btn-small btn-outline">
                    <FaEye /> Live Demo
                  </a> */}
                </div>
                <div className="project-tech">
                  <div className="tech-badges">
                    {project.techStack.map((tech, index) => {
                      const techInfo = techIcons[tech];
                      return (
                        <div key={index} className="tech-badge" style={{ color: techInfo?.color || '#ffffff' }}>
                          <span className="tech-icon">{techInfo?.icon || tech}</span>
                          <span className="tech-name">{tech}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 