import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

const Education: React.FC = () => {
  const educationItems: EducationItem[] = [
    {
      degree: 'Bachelor i dataingeniør, programvareutvikling',
      institution: 'Universitetet i Agder (UiA), Norge',
      period: '2023 - Present',
      description: 'Currently pursuing a Bachelor in Computer Engineering with specialization in software development.'
    },
    {
      degree: 'Bachelor i økonomi',
      institution: 'Damaskus Universitet, Syria',
      period: '2003 - 2006',
      description: 'Completed Bachelor degree in Economics.'
    },
  ];

  return (
    <section id="education" className="education-section py-5" style={{ backgroundColor: '#2c3e50', color: '#f9f7f3' }}>
      <Container>
        <h2 className="text-center mb-2" style={{ color: '#f9f7f3', fontWeight: 600, letterSpacing: '1px' }}>Education</h2>
        <div className="gold-divider mb-5"></div>
        <Row>
          {educationItems.map((item, index) => (
            <Col lg={6} md={6} className="mb-4" key={index}>
              <Card 
                className="h-100 border-0" 
                style={{ 
                  backgroundColor: 'rgba(249, 247, 243, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(201, 169, 125, 0.2)',
                  borderRadius: '8px',
                  padding: '1.5rem',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '4px',
                    height: '100%',
                    background: 'var(--gold-gradient)'
                  }}
                ></div>
                <Card.Body style={{ padding: '0.5rem 0.5rem 0.5rem 1.5rem' }}>
                  <p className="text-uppercase mb-2" style={{ fontSize: '0.8rem', letterSpacing: '2px', color: '#c9a97d', fontWeight: 600 }}>
                    {item.period}
                  </p>
                  <h3 className="h4 mb-3" style={{ color: '#f9f7f3', fontWeight: 600 }}>{item.degree}</h3>
                  <h4 className="h6 mb-3" style={{ color: '#c9a97d', fontWeight: 500, letterSpacing: '0.5px' }}>{item.institution}</h4>
                  <p style={{ color: 'rgba(249, 247, 243, 0.8)', lineHeight: 1.7 }}>{item.description}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Education;
