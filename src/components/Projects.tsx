import React from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';

interface ProjectItem {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  demoUrl?: string;
  repoUrl?: string;
}

const Projects: React.FC = () => {
  const projects: ProjectItem[] = [
    {
      title: 'Data Visualization Dashboard',
      description: 'A comprehensive dashboard for visualizing complex datasets with interactive charts and filters. Implements real-time data updates and user-customizable views.',
      technologies: ['React', 'TypeScript', 'D3.js', 'Socket.IO', 'Node.js'],
      imageUrl: '/project-placeholder.jpg',
      demoUrl: 'https://example.com/demo1',
      repoUrl: 'https://github.com/yourusername/data-viz-dashboard'
    },
    {
      title: 'Machine Learning Pipeline',
      description: 'An end-to-end ML pipeline for processing and analyzing large datasets. Features automated model training, evaluation, and deployment with monitoring capabilities.',
      technologies: ['Python', 'TensorFlow', 'Flask', 'Docker', 'AWS'],
      imageUrl: '/project-placeholder.jpg',
      demoUrl: 'https://example.com/demo2',
      repoUrl: 'https://github.com/yourusername/ml-pipeline'
    },
    {
      title: 'E-Commerce Microservices',
      description: 'A scalable microservices architecture for e-commerce applications. Implements service discovery, load balancing, and fault tolerance patterns.',
      technologies: ['Node.js', 'Express', 'MongoDB', 'Docker', 'Kubernetes'],
      imageUrl: '/project-placeholder.jpg',
      repoUrl: 'https://github.com/yourusername/ecommerce-microservices'
    },
    {
      title: 'Personal Finance Tracker',
      description: 'A web application for tracking personal finances, including expenses, income, and investments. Features data visualization and predictive analytics.',
      technologies: ['React', 'Redux', 'Firebase', 'Chart.js'],
      imageUrl: '/project-placeholder.jpg',
      demoUrl: 'https://example.com/demo3',
      repoUrl: 'https://github.com/yourusername/finance-tracker'
    }
  ];

  return (
    <section id="projects" className="projects-section py-5" style={{ backgroundColor: '#f9f7f3' }}>
      <Container>
        <h2 className="text-center mb-2" style={{ color: '#2c3e50', fontWeight: 600, letterSpacing: '1px' }}>Projects</h2>
        <div className="gold-divider mb-5"></div>
        <Row className="g-4">
          {projects.map((project, index) => (
            <Col lg={6} className="mb-4" key={index}>
              <Card 
                className="h-100 border-0"
                style={{ 
                  overflow: 'hidden', 
                  borderRadius: '8px', 
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
              >
                <div 
                  className="project-image-container"
                  style={{
                    height: '220px',
                    overflow: 'hidden',
                    position: 'relative'
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(to bottom, rgba(201, 169, 125, 0.2), rgba(0, 0, 0, 0))',
                      zIndex: 1
                    }}
                  ></div>
                  <Card.Img 
                    variant="top" 
                    src={project.imageUrl} 
                    alt={project.title} 
                    style={{
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }}
                  />
                </div>
                <Card.Body style={{ padding: '2rem 1.5rem' }}>
                  <Card.Title 
                    style={{ 
                      fontSize: '1.4rem', 
                      fontWeight: 600, 
                      marginBottom: '1rem',
                      color: '#2c3e50'
                    }}
                  >
                    {project.title}
                  </Card.Title>
                  <Card.Text style={{ color: '#555', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                    {project.description}
                  </Card.Text>
                  <div className="mb-4">
                    {project.technologies.map((tech, i) => (
                      <Badge 
                        className="me-2 mb-2" 
                        key={i}
                        style={{
                          backgroundColor: 'rgba(44, 62, 80, 0.1)',
                          color: '#2c3e50',
                          padding: '0.5rem 0.75rem',
                          borderRadius: '4px',
                          fontWeight: 500,
                          fontSize: '0.8rem'
                        }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="d-flex gap-3">
                    {project.demoUrl && (
                      <Button 
                        href={project.demoUrl} 
                        target="_blank" 
                        style={{
                          backgroundColor: '#c9a97d',
                          borderColor: '#c9a97d',
                          color: '#1a1a1a',
                          fontWeight: 500,
                          padding: '0.5rem 1.25rem',
                          borderRadius: '4px',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        Live Demo
                      </Button>
                    )}
                    {project.repoUrl && (
                      <Button 
                        href={project.repoUrl} 
                        target="_blank"
                        style={{
                          backgroundColor: 'transparent',
                          borderColor: '#c9a97d',
                          color: '#c9a97d',
                          fontWeight: 500,
                          padding: '0.5rem 1.25rem',
                          borderRadius: '4px',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        Source Code
                      </Button>
                    )}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
