import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ProfileImageUpload from './ProfileImageUpload';

const Hero: React.FC = () => {
  const [profileImage, setProfileImage] = useState('/images/mak_profile.jpg');
  
  return (
    <section id="home" className="hero-section py-5">
      <Container>
        <Row className="align-items-center min-vh-100">
          <Col md={6} className="text-center text-md-start">
            <h1 className="display-3 fw-bold mb-2" style={{ letterSpacing: '1px' }}>
              Hi, I'm <span style={{ color: '#c9a97d' }}>Mak Khnzadah</span>
            </h1>
            <div className="gold-divider left-aligned"></div>
            <h2 className="h3 mb-4" style={{ fontWeight: 300, letterSpacing: '1px' }}>
              Software Engineer & Data Scientist
            </h2>
            <p className="lead mb-4" style={{ fontWeight: 300, lineHeight: 1.8 }}>
              Passionate about creating innovative software solutions and deriving meaningful insights from data.
              Experienced in full-stack development, data analytics, and machine learning.
            </p>
            <div className="d-flex gap-3 justify-content-center justify-content-md-start">
              <Button 
                href="#contact" 
                size="lg"
                style={{ 
                  backgroundColor: '#c9a97d', 
                  borderColor: '#c9a97d',
                  color: '#1a1a1a',
                  fontWeight: 500,
                  padding: '0.75rem 1.5rem'
                }}
              >
                Contact Me
              </Button>
              <Button 
                href="#projects" 
                size="lg"
                style={{ 
                  backgroundColor: 'transparent', 
                  borderColor: '#c9a97d',
                  color: '#c9a97d',
                  fontWeight: 500,
                  padding: '0.75rem 1.5rem'
                }}
              >
                View Projects
              </Button>
              <a 
                className="btn btn-lg" 
                href="/Mak_Khnzadah_CV.pdf" 
                download
                style={{ 
                  backgroundColor: 'transparent', 
                  borderColor: '#e8e3d9',
                  color: '#e8e3d9',
                  fontWeight: 500,
                  padding: '0.75rem 1.5rem'
                }}
              >
                Download CV
              </a>
            </div>
          </Col>
          <Col md={6} className="text-center mt-5 mt-md-0">
            <div className="profile-image-container position-relative">
              <img 
                src={profileImage}
                alt="Mak Khnzadah" 
                className="img-fluid rounded-circle profile-image shadow"
                style={{
                  width: '300px',
                  height: '300px',
                  objectFit: 'cover',
                  border: '5px solid #c9a97d'
                }}
              />
              <ProfileImageUpload 
                currentImagePath={profileImage}
                onImageChange={setProfileImage}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
