import React from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";

interface Skill {
  name: string;
  proficiency: number;
}

const Skills: React.FC = () => {
  const technicalSkills: Skill[] = [
    { name: "HTML/CSS", proficiency: 90 },
    { name: "JavaScript", proficiency: 85 },
    { name: "TypeScript", proficiency: 80 },
    { name: "React", proficiency: 85 },
    { name: "Node.js", proficiency: 80 },
    { name: "SQL", proficiency: 75 },
    { name: "C#", proficiency: 75 },
    { name: "C++", proficiency: 70 },
    { name: "Python", proficiency: 70 },
    { name: "Java", proficiency: 70 },
  ];

  const softSkills: Skill[] = [
    { name: "Problem Solving", proficiency: 90 },
    { name: "Communication", proficiency: 85 },
    { name: "Teamwork", proficiency: 85 },
    { name: "Project Management", proficiency: 70 },
    { name: "Creativity", proficiency: 80 },
    { name: "Adaptability", proficiency: 85 },
  ];

  const progressBarStyles = {
    height: '8px',
    borderRadius: '4px',
    backgroundColor: 'rgba(201, 169, 125, 0.2)'
  };

  const progressFilledStyles = {
    backgroundColor: '#c9a97d',
    backgroundImage: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)',
    backgroundSize: '30px 30px',
    animation: 'progress-bar-stripes 1s linear infinite'
  };

  return (
    <section id="skills" className="skills-section py-5" style={{ backgroundColor: '#1a1a1a', color: '#f9f7f3' }}>
      <Container>
        <h2 className="text-center mb-2" style={{ color: '#f9f7f3', fontWeight: 600, letterSpacing: '1px' }}>Skills</h2>
        <div className="gold-divider mb-5"></div>
        
        <Row className="mb-5 gx-5">
          <Col md={6}>
            <h3 className="mb-4" style={{ color: '#c9a97d', fontWeight: 500, fontSize: '1.5rem' }}>Technical Skills</h3>
            {technicalSkills.map((skill, index) => (
              <div key={index} className="mb-4">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span style={{ fontSize: '1rem', fontWeight: 500 }}>{skill.name}</span>
                  <span style={{ fontSize: '0.9rem', color: '#c9a97d', fontWeight: 600 }}>{skill.proficiency}%</span>
                </div>
                <div className="progress" style={progressBarStyles}>
                  <div 
                    className="progress-bar" 
                    role="progressbar" 
                    style={{
                      ...progressFilledStyles,
                      width: `${skill.proficiency}%`,
                    }}
                    aria-valuenow={skill.proficiency}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  ></div>
                </div>
              </div>
            ))}
          </Col>
          
          <Col md={6}>
            <h3 className="mb-4" style={{ color: '#c9a97d', fontWeight: 500, fontSize: '1.5rem' }}>Soft Skills</h3>
            {softSkills.map((skill, index) => (
              <div key={index} className="mb-4">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span style={{ fontSize: '1rem', fontWeight: 500 }}>{skill.name}</span>
                  <span style={{ fontSize: '0.9rem', color: '#c9a97d', fontWeight: 600 }}>{skill.proficiency}%</span>
                </div>
                <div className="progress" style={progressBarStyles}>
                  <div 
                    className="progress-bar" 
                    role="progressbar" 
                    style={{
                      ...progressFilledStyles,
                      width: `${skill.proficiency}%`,
                    }}
                    aria-valuenow={skill.proficiency}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  ></div>
                </div>
              </div>
            ))}
          </Col>
        </Row>
        
        <Row>
          <Col md={12}>
            <h3 className="mb-4" style={{ color: '#c9a97d', fontWeight: 500, fontSize: '1.5rem' }}>Tools & Technologies</h3>
            <div className="d-flex flex-wrap gap-2">
              {["HTML", "CSS", "JavaScript", "TypeScript", "React", 
                "C/C++", "Java", "Python", "SQL", "MySQL", "PostgreSQL", "MongoDB", 
                "Bootstrap", "Git", "GitHub", "Gitea", "Gitlab", "Figma"].map((tool, index) => (
                <span 
                  key={index} 
                  className="badge p-2 m-1" 
                  style={{ 
                    backgroundColor: 'rgba(201, 169, 125, 0.15)', 
                    color: '#e8e3d9',
                    border: '1px solid rgba(201, 169, 125, 0.3)',
                    borderRadius: '4px',
                    padding: '8px 15px',
                    fontSize: '0.85rem',
                    fontWeight: 500,
                    letterSpacing: '0.5px',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
