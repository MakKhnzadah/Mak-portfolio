import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About: React.FC = () => {
  return (
    <section id="about" className="about-section py-5" style={{ backgroundColor: '#2c3e50', color: '#f9f7f3' }}>
      <Container>
        <h2 className="text-center mb-2" style={{ color: '#f9f7f3', fontWeight: 600, letterSpacing: '1px' }}>About Me</h2>
        <div className="gold-divider mb-5"></div>
        <Row>
          <Col lg={8} className="mx-auto">
            <p className="lead" style={{ fontWeight: 300, lineHeight: 1.8 }}>
              I am a motivated and results oriented third year Computer Engineering student with a strong focus on software development and programming. 
              I have experience in procurement and administration, along with solid skills in <span style={{ color: '#c9a97d' }}>Java</span>, <span style={{ color: '#c9a97d' }}>C</span>, <span style={{ color: '#c9a97d' }}>C#</span>, <span style={{ color: '#c9a97d' }}>C++</span>, <span style={{ color: '#c9a97d' }}>JavaScript</span>, <span style={{ color: '#c9a97d' }}>TypeScript</span>, <span style={{ color: '#c9a97d' }}>Python</span>, and design. 
             
            </p>
            <p style={{ lineHeight: 1.8 }}>
              Beyond my technical background, I am also an artist who creates acrylic paintings—an experience that enriches my creativity and enhances my problem-solving approach. 
              I am eager to contribute to innovative solutions, strengthen my technical expertise, and develop efficient code in a dynamic technology environment.
            </p>
            <div className="mt-5 pt-3">
              <Row className="g-4">
                <Col md={6}>
                  <div className="about-detail p-4" style={{ backgroundColor: 'rgba(201, 169, 125, 0.1)', borderLeft: '3px solid #c9a97d', borderRadius: '4px' }}>
                    <h3 style={{ fontSize: '1.2rem', color: '#c9a97d', fontWeight: 600 }}>Education</h3>
                    <p style={{ fontSize: '0.9rem', marginBottom: 0 }}>Bachelor in Computer Engineering<br/>University of Agder (UiA), Norway</p>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="about-detail p-4" style={{ backgroundColor: 'rgba(201, 169, 125, 0.1)', borderLeft: '3px solid #c9a97d', borderRadius: '4px' }}>
                    <h3 style={{ fontSize: '1.2rem', color: '#c9a97d', fontWeight: 600 }}>Languages</h3>
                    <p style={{ fontSize: '0.9rem', marginBottom: 0 }}>Norwegian, English, Arabic</p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
