import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProfileCard from './ProfileCard';

const Hero: React.FC = () => {
  // Prefer PNG; fallback to JPG if PNG not found (browser will 404 silently if missing)
  const base = process.env.PUBLIC_URL || '';
  const profileImage = `${base}/images/mak_profile.png`;
  const profileFallback = `${base}/images/mak_profile.jpg`;
  const miniProfile = `${base}/images/mak_profile-mini.png`;
  const miniFallback = `${base}/images/mak_profile-mini.jpg`;

  const handleContactCTA = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

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
              Data Engineer and Software Developer
            </h2>
            <p className="lead mb-4" style={{ fontWeight: 300, lineHeight: 1.8 }}>
              Passionate about creating innovative software solutions and turning data into meaningful insights. 
              I’m currently studying Computer Engineering at the University of Agder, where I focus on full-stack development. 
              I enjoy building practical, impactful solutions, finding smart ways to solve both small and complex problems through code and creative thinking.
            </p>
            {/* CTA buttons removed per request */}
          </Col>


        </Row>
      </Container>
    </section>
  );
};

export default Hero;
