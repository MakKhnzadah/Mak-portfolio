import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Skills: React.FC = () => {

  return (
    <section id="skills" className="skills-section py-5" style={{ backgroundColor: '#1a1a1a', color: '#f9f7f3' }}>
      <Container>
        <h2 className="text-center mb-2" style={{ color: '#f9f7f3', fontWeight: 600, letterSpacing: '1px' }}>Skills</h2>
        <div className="gold-divider mb-5"></div>
        
        <Row className="mb-5">
          <Col md={12} className="text-center">
            <h3 className="mb-4" style={{ color: '#c9a97d', fontWeight: 500, fontSize: '1.5rem' }}> Languages & Tools</h3>
            <div className="d-flex flex-wrap justify-content-center align-items-center gap-4 mb-4">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" alt="C" width="50" height="50" style={{ filter: 'brightness(0.9)' }} />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" width="50" height="50" style={{ filter: 'brightness(0.9)' }} />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt="C#" width="50" height="50" style={{ filter: 'brightness(0.9)' }} />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" alt=".NET Core" width="50" height="50" style={{ filter: 'brightness(0.9)' }} />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" width="50" height="50" style={{ filter: 'brightness(0.9)' }} />
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/79/Spring_Boot.svg" alt="Spring Boot" width="50" height="50" style={{ filter: 'brightness(0.9)' }} />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg" alt="Maven" width="50" height="50" style={{ filter: 'brightness(0.9)' }} />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" width="50" height="50" style={{ filter: 'brightness(0.9)' }} />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" width="50" height="50" style={{ filter: 'brightness(0.9)' }} />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" width="50" height="50" style={{ filter: 'brightness(0.9)' }} />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" width="50" height="50" style={{ filter: 'brightness(0.9)' }} />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" width="50" height="50" style={{ filter: 'brightness(0.9)' }} />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" width="50" height="50" style={{ filter: 'brightness(0.9)' }} />
            </div>
          </Col>
        </Row>
        
        <Row>
          <Col md={12} className="text-center">
            <div className="mb-4" style={{ fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
              <p>I specialize in full-stack development with a strong foundation in object-oriented programming, web development, and database management. My technical toolkit spans multiple programming paradigms and frameworks, allowing me to approach problems with versatility and precision.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
