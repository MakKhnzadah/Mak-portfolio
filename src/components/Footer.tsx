import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className="footer py-5 mt-0" style={{ backgroundColor: '#1a1a1a', color: '#f9f7f3' }}>
      <Container>
        {/* Contact Information */}
        <Row className="justify-content-center text-center mb-5">
          <Col md={8} lg={6}>
            <h2 style={{ color: '#f9f7f3', fontWeight: 600, letterSpacing: '1px', marginBottom: '0.5rem' }}>Get In Touch</h2>
            <div className="gold-divider mb-4" style={{ 
              height: '3px', 
              width: '60px', 
              margin: '0 auto', 
              background: 'linear-gradient(to right, rgba(201, 169, 125, 0.5), #c9a97d, rgba(201, 169, 125, 0.5))' 
            }}></div>
            <p className="mb-4" style={{ fontSize: '1.1rem', fontWeight: 300 }}>
              Have a project in mind or want to collaborate? Feel free to reach out!
            </p>
          </Col>
        </Row>
        
        <Row className="pb-5 mb-5" style={{ borderBottom: '1px solid rgba(201, 169, 125, 0.3)' }}>
          <Col md={4} className="text-center mb-4 mb-md-0">
            <div style={{ 
              width: '80px', 
              height: '80px', 
              borderRadius: '50%', 
              backgroundColor: 'rgba(201, 169, 125, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem auto',
              border: '1px solid rgba(201, 169, 125, 0.2)'
            }}>
              <FontAwesomeIcon icon={faEnvelope} size="2x" style={{ color: '#c9a97d' }} />
            </div>
            <h3 className="h5" style={{ color: '#c9a97d', fontWeight: 600, marginBottom: '1rem' }}>Email</h3>
            <p>
              <a 
                href="mailto:m.khnzadah@outlook.com" 
                style={{ 
                  color: '#f9f7f3', 
                  textDecoration: 'none', 
                  transition: 'color 0.3s ease',
                  fontWeight: 300
                }}
                onMouseOver={(e) => e.currentTarget.style.color = '#c9a97d'} 
                onMouseOut={(e) => e.currentTarget.style.color = '#f9f7f3'}
              >
                m.khnzadah@outlook.com
              </a>
            </p>
          </Col>
          <Col md={4} className="text-center mb-4 mb-md-0">
            <div style={{ 
              width: '80px', 
              height: '80px', 
              borderRadius: '50%', 
              backgroundColor: 'rgba(201, 169, 125, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem auto',
              border: '1px solid rgba(201, 169, 125, 0.2)'
            }}>
              <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" style={{ color: '#c9a97d' }} />
            </div>
            <h3 className="h5" style={{ color: '#c9a97d', fontWeight: 600, marginBottom: '1rem' }}>Location</h3>
            <p style={{ fontWeight: 300 }}>Grimstad, Norway</p>
          </Col>
          <Col md={4} className="text-center mb-4 mb-md-0">
            <div style={{ 
              width: '80px', 
              height: '80px', 
              borderRadius: '50%', 
              backgroundColor: 'rgba(201, 169, 125, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem auto',
              border: '1px solid rgba(201, 169, 125, 0.2)'
            }}>
              <FontAwesomeIcon icon={faPhone} size="2x" style={{ color: '#c9a97d' }} />
            </div>
            <h3 className="h5" style={{ color: '#c9a97d', fontWeight: 600, marginBottom: '1rem' }}>Phone</h3>
            <p style={{ fontWeight: 300 }}>+47 99856496</p>
          </Col>
        </Row>
        
        {/* Copyright and Social Links */}
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <p style={{ fontWeight: 300, fontSize: '0.95rem' }}>
              &copy; {new Date().getFullYear()} Mak Khnzadah. All rights reserved.
            </p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <div className="social-links">
              <a 
                href="https://www.linkedin.com/in/mak-khnzadah-667a7072" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ 
                  color: '#c9a97d',
                  margin: '0 12px',
                  fontSize: '1.1rem',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.opacity = '0.8'} 
                onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a 
                href="https://github.com/MakKhnzadah" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ 
                  color: '#c9a97d',
                  margin: '0 12px',
                  fontSize: '1.1rem',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.opacity = '0.8'} 
                onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a 
                href="https://www.instagram.com/rodmakart/" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ 
                  color: '#c9a97d',
                  margin: '0 12px',
                  fontSize: '1.1rem',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.opacity = '0.8'} 
                onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
