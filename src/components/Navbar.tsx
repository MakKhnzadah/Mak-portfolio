import React, { useEffect, useState } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

const NavigationBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar 
      expand="lg" 
      fixed="top"
      className="transition-all duration-300"
      style={{ 
        backgroundColor: '#1a1a1a',
        boxShadow: isScrolled ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none',
        padding: isScrolled ? '0.5rem 1rem' : '1rem',
      }}
    >
      <Container>
        <Navbar.Brand 
          href="#home" 
          style={{ 
            color: '#c9a97d', 
            fontWeight: 700,
            fontSize: '1.5rem',
            letterSpacing: '1px'
          }}
        >
          Mak Khnzadah
        </Navbar.Brand>
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          aria-label="Toggle navigation"
          style={{ borderColor: '#c9a97d' }}
        >
          <span
            className="navbar-toggler-icon"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cpath stroke='rgba(201,169,125,0.95)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\")",
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: '1.5rem 1.5rem'
            }}
          />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" style={{ color: '#f9f7f3', margin: '0 0.5rem' }}>Home</Nav.Link>
            <Nav.Link href="#about" style={{ color: '#f9f7f3', margin: '0 0.5rem' }}>About</Nav.Link>
            <Nav.Link href="#skills" style={{ color: '#f9f7f3', margin: '0 0.5rem' }}>Skills</Nav.Link>
            <Nav.Link href="#projects" style={{ color: '#f9f7f3', margin: '0 0.5rem' }}>Projects</Nav.Link>
            <Nav.Link href="#education" style={{ color: '#f9f7f3', margin: '0 0.5rem' }}>Education</Nav.Link>
            <Nav.Link href={`${process.env.PUBLIC_URL}/Mak_Khnzadah_CV.pdf`} download className="ms-2">
              <Button 
                style={{ 
                  backgroundColor: '#c9a97d', 
                  borderColor: '#c9a97d',
                  color: '#1a1a1a',
                  fontWeight: 600,
                  padding: '0.375rem 1rem'
                }} 
                size="sm"
              >
                Resume
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
