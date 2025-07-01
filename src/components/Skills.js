import React from 'react';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaJava, FaDatabase,
  FaAws, FaDocker, FaGit, FaGithub, FaLinux, FaServer, FaCloud, FaShieldAlt,
  FaRocket, FaCode,
} from 'react-icons/fa';
import { 
  SiExpress, SiMongodb, SiPostgresql, SiMysql, SiRedis, SiDjango, SiSpringboot,
  SiFastapi, SiStripe, SiPaypal, SiSocketdotio, SiCelery, SiDocker,
  SiKubernetes, SiJenkins, SiNginx, SiPm2, SiJest, SiMocha, SiChai,SiTailwindcss,
  SiPostman,SiRazorpay
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      id: 1,
      name: "Backend Development",
      description: "Server-side technologies and frameworks",
      skills: [
        { name: "Node.js", icon: <FaNodeJs />, color: "#68a063" },
        { name: "Express.js", icon: <SiExpress />, color: "#68a063" },
        { name: "Python", icon: <FaPython />, color: "#3776ab" },
        { name: "Java", icon: <FaJava />, color: "#ed8b00" },
        { name: "Spring Boot", icon: <SiSpringboot />, color: "#6db33f" },
      ]
    },
    {
      id: 2,
      name: "Database & Storage",
      description: "Database management and data storage solutions",
      skills: [
        { name: "MongoDB", icon: <SiMongodb />, color: "#47a248" },
        { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
        // { name: "MySQL", icon: <SiMysql />, color: "#4479a1" },
        { name: "Redis", icon: <SiRedis />, color: "#dc382d" },
        { name: "SQL", icon: <FaDatabase />, color: "#336791" },
        { name: "NoSQL", icon: <FaDatabase />, color: "#47a248" }
      ]
    },
    {
      id: 3,
      name: "Frontend Technologies",
      description: "Client-side development and UI frameworks",
      skills: [
        { name: "HTML5", icon: <FaHtml5 />, color: "#e34f26" },
        { name: "CSS3", icon: <FaCss3Alt />, color: "#1572b6" },
        { name: "JavaScript", icon: <FaJs />, color: "#f7df1e" },
        { name: "React", icon: <FaReact />, color: "#61dafb" },
        { name: "TailwindCSS", icon: <SiTailwindcss />, color: "#06b6d4" }
      ]
    },
    {
      id: 4,
      name: "DevOps & Cloud",
      description: "Deployment, cloud services and infrastructure",
      skills: [
        { name: "Docker", icon: <SiDocker />, color: "#2496ed" },
        { name: "Postman", icon: <SiPostman />, color: "#ff6c37" },
        { name: "Git", icon: <FaGit />, color: "#f05032" },
        { name: "GitHub", icon: <FaGithub />, color: "#326ce5" }
      ]
    },
    {
      id: 5,
      name: "Payment & APIs",
      description: "Payment gateways and third-party integrations",
      skills: [
        { name: "Razorpay", icon: <SiRazorpay />, color: "#00457c" },
        { name: "REST APIs", icon: <FaServer />, color: "#ff6b6b" },
      ]
    },
    // {
    //   id: 6,
    //   name: "Testing & Quality",
    //   description: "Testing frameworks and code quality tools",
    //   skills: [
    //     { name: "Jest", icon: <SiJest />, color: "#c21325" },
    //     { name: "Mocha", icon: <SiMocha />, color: "#8d6748" },
    //     { name: "Chai", icon: <SiChai />, color: "#a30701" },
    //     { name: "Unit Testing", icon: <FaShieldAlt />, color: "#28a745" },
    //     { name: "Integration Testing", icon: <FaRocket />, color: "#007bff" }
    //   ]
    // }
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-content">
          <div className="skills-grid">
            {skillCategories.map((category) => (
              <div key={category.id} className="skill-category">
                <div className="category-header">
                  <h3 className="category-title">{category.name}</h3>
                  <p className="category-description">{category.description}</p>
                </div>
                <div className="skills-list">
                  {category.skills.map((skill, index) => (
                    <div key={index} className="skill-card">
                      <div className="skill-icon" style={{ color: skill.color }}>
                        {skill.icon}
                      </div>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 