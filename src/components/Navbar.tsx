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
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ borderColor: '#c9a97d' }} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" style={{ color: '#f9f7f3', margin: '0 0.5rem' }}>Home</Nav.Link>
            <Nav.Link href="#about" style={{ color: '#f9f7f3', margin: '0 0.5rem' }}>About</Nav.Link>
            <Nav.Link href="#skills" style={{ color: '#f9f7f3', margin: '0 0.5rem' }}>Skills</Nav.Link>
            <Nav.Link href="#projects" style={{ color: '#f9f7f3', margin: '0 0.5rem' }}>Projects</Nav.Link>
            <Nav.Link href="#education" style={{ color: '#f9f7f3', margin: '0 0.5rem' }}>Education</Nav.Link>
            <Nav.Link href="/Mak_Khnzadah_CV.pdf" download className="ms-2">
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
