import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Hero: React.FC = () => {
  // Prefer PNG; fallback to JPG if PNG not found (browser will 404 silently if missing)
  const profileImage = '/images/mak_profile.png';

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
            {/* CTA buttons removed per request */}
          </Col>

          <Col md={6} className="text-center mt-5 mt-md-0">
            <div className="profile-image-container position-relative">
              <img 
                src={profileImage}
                onError={(e) => {
                  // Graceful fallback to JPG if PNG isn't present yet
                  const target = e.currentTarget as HTMLImageElement;
                  if (!target.dataset.fallback) {
                    target.dataset.fallback = 'true';
                    target.src = '/images/mak_profile.jpg';
                  }
                }}
                alt="Mak Khnzadah" 
                className="img-fluid rounded-circle profile-image shadow"
                style={{
                  width: '300px',
                  height: '300px',
                  objectFit: 'cover',
                  border: '5px solid #c9a97d'
                }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
