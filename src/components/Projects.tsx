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
  const colorThemes = [
    { main: '#c9a97d', accent: '#e2c992' }, // Gold
    { main: '#1e4d92', accent: '#4a8cca' }, // Deep Blue
    { main: '#14a098', accent: '#57cbc3' }, // Teal
    { main: '#b87c47', accent: '#c79e5d' }, // Warm Brown/Orange
    { main: '#7e57c2', accent: '#b085f5' }  // Purple
  ];

  const projects: ProjectItem[] = [
    {
      title: 'NyUtdannet Job Portal',
      description: 'A comprehensive job portal platform designed specifically for newly graduated students and employers in Norway. Features include user role management (Employee/Employer), job listings with detailed views, application tracking, resume/cover letter uploads, and personalized dashboards that focus on connecting fresh graduates with relevant opportunities.',
      technologies: ['ASP.NET Core', 'C#', 'Entity Framework', 'SQLite', 'Identity', 'Razor Views', 'Bootstrap 5'],
  imageUrl: `${process.env.PUBLIC_URL}/images/nyutdannet-job-portal.png`,
      repoUrl: 'https://github.com/MakKhnzadah/NyUtdannet_2'
    },
    {
      title: 'TravelHub Social App',
      description: 'A feature-rich travel social application that helps users document and share their travel experiences. Users can create blog posts about places they\'ve visited, share photos, connect with friends, and discover new destinations through an interactive map interface. Includes features for travel visualization, social feed, customizable profiles, and multi-language support.',
      technologies: ['TypeScript','React Native', 'Expo', 'Firebase', 'Redux', 'MapView API', 'i18n', 'Cloud Storage'],
  imageUrl: `${process.env.PUBLIC_URL}/images/mapTogether.png`,
      repoUrl: 'https://github.com/MakKhnzadah/ikt205g25v-group-03'
    },
    {
      title: 'Statistics Project: Bicycle and Weather Data Analysis',
      description: 'A comprehensive data analysis project exploring the relationship between bicycle usage and weather conditions in three Norwegian cities: Bergen, Kristiansand, and Tromsø. Features include hypothesis testing, Bayesian analysis, and insightful visualizations through heatmaps, boxplots, scatter plots, and time series to uncover patterns in cycling activity relative to weather variables.',
      technologies: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Statistical Analysis', 'Jupyter Notebooks'],
  imageUrl: `${process.env.PUBLIC_URL}/images/bergen_heatmaps.png`,
      repoUrl: 'https://github.com/MakKhnzadah/Statistics-Project'
    },
    {
      title: 'ShopLite',
      description: 'ShopLite is a full-stack e-commerce web app built with React and Spring Boot. It features secure JWT authentication, role-based access (User/Admin), and RESTful APIs for products, carts, and orders. The platform includes an admin dashboard for store management, file uploads, and basic health checks, with Stripe payment integration prepared.',
      technologies: ['Java', 'TypeScript', 'HTML', 'CSS', 'React', 'Spring Boot', 'Maven', 'JUnit', 'Docker'],
  imageUrl: `${process.env.PUBLIC_URL}/images/shop-lite.png`,
      repoUrl: 'https://github.com/MakKhnzadah/Shop-Lite-Project'
    },
    {
      title: 'Munin Alert',
      description: 'Munin Alert is a full-stack monitoring and alerting platform with a React frontend and a Spring Boot backend. It features real-time alert updates via WebSockets, RESTful APIs for system health and event management, and interactive map visualization using Leaflet. The app supports user authentication, live status dashboards, and automated health checks for reliable system monitoring.',
      technologies: ['Java', 'JavaScript', 'HTML', 'CSS', 'React', 'Spring Boot', 'Maven', 'Batch Scripts', 'JSON', 'Markdown'],
  imageUrl: `${process.env.PUBLIC_URL}/images/munin_alert.png`,
      repoUrl: 'https://github.com/MakKhnzadah/munin-alert'
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
                className={`h-100 border-0 ${index <= 4 ? 'featured-project' : ''}`}
                style={{ 
                  overflow: 'hidden', 
                  borderRadius: '8px', 
                  boxShadow: index === 0 
                    ? '0 15px 35px rgba(201, 169, 125, 0.2), 0 5px 15px rgba(0, 0, 0, 0.1)' 
                    : index === 1
                    ? '0 15px 35px rgba(30, 77, 146, 0.2), 0 5px 15px rgba(0, 0, 0, 0.1)'
                    : index === 2
                    ? '0 15px 35px rgba(20, 160, 152, 0.2), 0 5px 15px rgba(0, 0, 0, 0.1)'
                    : index === 3
                    ? '0 15px 35px rgba(230, 126, 34, 0.2), 0 5px 15px rgba(0, 0, 0, 0.1)'
                    : index === 4
                    ? '0 15px 35px rgba(126, 87, 194, 0.2), 0 5px 15px rgba(0, 0, 0, 0.1)'
                    : '0 10px 30px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  border: index === 0 
                    ? '1px solid rgba(201, 169, 125, 0.3)' 
                    : index === 1 
                    ? '1px solid rgba(30, 77, 146, 0.3)' 
                    : index === 2
                    ? '1px solid rgba(20, 160, 152, 0.3)'
                    : index === 3
                    ? '1px solid rgba(230, 126, 34, 0.3)'
                    : index === 4
                    ? '1px solid rgba(126, 87, 194, 0.3)'
                    : 'none'
                }}
              >
                <div 
                  className="project-image-container"
                  style={{
                    height: index <= 4 ? '260px' : '220px',
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
                      background: index === 0 
                        ? 'linear-gradient(to bottom, rgba(201, 169, 125, 0.2), rgba(0, 0, 0, 0))'
                        : index === 1
                        ? 'linear-gradient(to bottom, rgba(30, 77, 146, 0.2), rgba(0, 0, 0, 0))'
                        : index === 2
                        ? 'linear-gradient(to bottom, rgba(20, 160, 152, 0.2), rgba(0, 0, 0, 0))'
                        : index === 3
                        ? 'linear-gradient(to bottom, rgba(230, 126, 34, 0.2), rgba(0, 0, 0, 0))'
                        : index === 4
                        ? 'linear-gradient(to bottom, rgba(126, 87, 194, 0.2), rgba(0, 0, 0, 0))'
                        : 'linear-gradient(to bottom, rgba(44, 62, 80, 0.1), rgba(0, 0, 0, 0))',
                      zIndex: 1
                    }}
                  ></div>
                  {(index === 0 || index === 1 || index === 2 || index === 3 || index === 4) && (
                    <div 
                      style={{
                        position: 'absolute',
                        top: '10px',
                        left: '10px',
                        background: index === 0 
                          ? 'linear-gradient(135deg, #c9a97d, #e2c992)' 
                          : index === 1
                          ? 'linear-gradient(135deg, #1e4d92, #4a8cca)'
                          : index === 2
                          ? 'linear-gradient(135deg, #14a098, #57cbc3)'
                          : index === 3
                          ? 'linear-gradient(135deg, #b87c47ff, #c79e5dff)'
                          : 'linear-gradient(135deg, #e0a2a2ff, #db9dc7ff)',
                        color: '#ffffff',
                        padding: '4px 12px',
                        borderRadius: '4px',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        letterSpacing: '0.5px',
                        zIndex: 2,
                        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
                      }}
                    >
                      
                    </div>
                  )}
                  <Card.Img 
                    variant="top" 
                    src={project.imageUrl} 
                    alt={project.title} 
                    style={{
                      height: '100%',
                      width: '100%',
                      objectFit: index <= 4 ? 'contain' : 'cover',
                      objectPosition: 'center',
                      transition: 'transform 0.5s ease',
                      transform: 'scale(1.0)',
                      backgroundColor: index <= 4 ? '#f9f7f3' : 'transparent',
                      padding: index <= 4 ? '10px' : '0'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'scale(1.0)';
                    }}
                  />
                </div>
                <Card.Body style={{ padding: index <= 4 ? '2.25rem 1.75rem' : '2rem 1.5rem' }}>
                  <Card.Title 
                    style={{ 
                      fontSize: index <= 4 ? '1.5rem' : '1.4rem', 
                      fontWeight: 600, 
                      marginBottom: index <= 4 ? '1.2rem' : '1rem',
                      color: index === 0 ? '#c9a97d' : index === 1 ? '#1e4d92' : index === 2 ? '#14a098' : index === 3 ? '#e67e22' : index === 4 ? '#7e57c2' : '#2c3e50',
                      letterSpacing: index <= 4 ? '0.5px' : 'normal'
                    }}
                  >
                    {project.title}
                  </Card.Title>
                  <Card.Text style={{ 
                    color: index <= 4 ? '#333' : '#555', 
                    marginBottom: '1.5rem', 
                    lineHeight: 1.6,
                    fontSize: index <= 4 ? '1.05rem' : '1rem'
                  }}>
                    {project.description}
                  </Card.Text>
                  <div className="mb-4">
                    {project.technologies.map((tech, i) => {
                      const theme = colorThemes[index] || { main: 'rgba(44,62,80,0.3)', accent: 'rgba(44,62,80,0.15)' };
                      return (
                        <Badge
                          className="me-2 mb-2"
                          key={i}
                          style={{
                            background: `linear-gradient(135deg, ${theme.main}, ${theme.accent})`,
                            color: '#ffffff',
                            padding: '0.5rem 0.75rem',
                            borderRadius: '4px',
                            fontWeight: 500,
                            fontSize: '0.8rem',
                            letterSpacing: '0.3px',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.12)',
                            border: '1px solid rgba(255,255,255,0.15)',
                            transition: 'transform 0.25s ease, box-shadow 0.25s ease'
                          }}
                          onMouseOver={(e) => {
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.boxShadow = '0 4px 10px rgba(0,0,0,0.18)';
                          }}
                          onMouseOut={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.12)';
                          }}
                        >
                          {tech}
                        </Badge>
                      );
                    })}
                  </div>
                  <div className="d-flex gap-3">
                    {project.demoUrl && (
                      <Button 
                        href={project.demoUrl} 
                        target="_blank" 
                        style={{
                          backgroundColor: index === 0 ? '#c9a97d' : index === 1 ? '#4a8cca' : index === 2 ? '#14a098' : index === 3 ? '#e67e22' : index === 4 ? '#7e57c2' : '#c9a97d',
                          borderColor: index === 0 ? '#c9a97d' : index === 1 ? '#4a8cca' : index === 2 ? '#14a098' : index === 3 ? '#e67e22' : index === 4 ? '#7e57c2' : '#c9a97d',
                          color: index === 0 ? '#1a1a1a' : '#ffffff',
                          fontWeight: 500,
                          padding: index <= 4 ? '0.6rem 1.5rem' : '0.5rem 1.25rem',
                          borderRadius: '4px',
                          transition: 'all 0.3s ease',
                          boxShadow: index === 0 
                            ? '0 4px 12px rgba(201, 169, 125, 0.3)'
                            : index === 1
                            ? '0 4px 12px rgba(30, 77, 146, 0.3)'
                            : index === 2
                            ? '0 4px 12px rgba(20, 160, 152, 0.3)'
                            : index === 3
                            ? '0 4px 12px rgba(209, 130, 60, 0.3)'
                            : index === 4
                            ? '0 4px 12px rgba(126, 87, 194, 0.3)'
                            : 'none',
                          letterSpacing: index <= 4 ? '0.5px' : 'normal'
                        }}
                        onMouseOver={(e) => {
                          if (index === 0) {
                            e.currentTarget.style.backgroundColor = '#d3b38a';
                            e.currentTarget.style.boxShadow = '0 6px 15px rgba(201, 169, 125, 0.4)';
                          } else if (index === 1) {
                            e.currentTarget.style.backgroundColor = '#3a7cb8';
                            e.currentTarget.style.boxShadow = '0 6px 15px rgba(30, 77, 146, 0.4)';
                          } else if (index === 2) {
                            e.currentTarget.style.backgroundColor = '#12908a';
                            e.currentTarget.style.boxShadow = '0 6px 15px rgba(20, 160, 152, 0.4)';
                          } else if (index === 3) {
                            e.currentTarget.style.backgroundColor = '#c17a3bff';
                            e.currentTarget.style.boxShadow = '0 6px 15px rgba(230, 126, 34, 0.4)';
                          } else if (index === 4) {
                            e.currentTarget.style.backgroundColor = '#e0a2a2ff';
                            e.currentTarget.style.boxShadow = '0 6px 15px rgba(126, 87, 194, 0.4)';
                          } else {
                            e.currentTarget.style.backgroundColor = '#d3b38a';
                          }
                        }}
                        onMouseOut={(e) => {
                          if (index === 0) {
                            e.currentTarget.style.backgroundColor = '#c9a97d';
                            e.currentTarget.style.boxShadow = '0 4px 12px rgba(201, 169, 125, 0.3)';
                          } else if (index === 1) {
                            e.currentTarget.style.backgroundColor = '#4a8cca';
                            e.currentTarget.style.boxShadow = '0 4px 12px rgba(30, 77, 146, 0.3)';
                          } else if (index === 2) {
                            e.currentTarget.style.backgroundColor = '#14a098';
                            e.currentTarget.style.boxShadow = '0 4px 12px rgba(20, 160, 152, 0.3)';
                          } else if (index === 3) {
                            e.currentTarget.style.backgroundColor = '#bb793fff';
                            e.currentTarget.style.boxShadow = '0 4px 12px rgba(230, 126, 34, 0.3)';
                          } else if (index === 4) {
                            e.currentTarget.style.backgroundColor = '#7e57c2';
                            e.currentTarget.style.boxShadow = '0 4px 12px rgba(126, 87, 194, 0.3)';
                          } else {
                            e.currentTarget.style.backgroundColor = '#c9a97d';
                            e.currentTarget.style.boxShadow = 'none';
                          }
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
                          borderColor: index === 0 
                            ? '#c9a97d' 
                            : index === 1 
                            ? '#4a8cca' 
                            : index === 2
                            ? '#14a098'
                            : index === 3
                            ? '#e67e22'
                            : index === 4
                            ? '#7e57c2'
                            : '#c9a97d',
                          color: index === 0 
                            ? '#c9a97d' 
                            : index === 1 
                            ? '#4a8cca' 
                            : index === 2
                            ? '#14a098'
                            : index === 3
                            ? '#e67e22'
                            : index === 4
                            ? '#7e57c2'
                            : '#c9a97d',
                          fontWeight: 500,
                          padding: index <= 4 ? '0.6rem 1.5rem' : '0.5rem 1.25rem',
                          borderRadius: '4px',
                          transition: 'all 0.3s ease',
                          letterSpacing: index <= 4 ? '0.5px' : 'normal'
                        }}
                        onMouseOver={(e) => {
                          if (index === 0) {
                            e.currentTarget.style.backgroundColor = 'rgba(201, 169, 125, 0.1)';
                          } else if (index === 1) {
                            e.currentTarget.style.backgroundColor = 'rgba(30, 77, 146, 0.1)';
                          } else if (index === 2) {
                            e.currentTarget.style.backgroundColor = 'rgba(20, 160, 152, 0.1)';
                          } else if (index === 3) {
                            e.currentTarget.style.backgroundColor = 'rgba(230, 126, 34, 0.1)';
                          } else if (index === 4) {
                            e.currentTarget.style.backgroundColor = 'rgba(126, 87, 194, 0.1)';
                          } else {
                            e.currentTarget.style.backgroundColor = 'rgba(201, 169, 125, 0.1)';
                          }
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.backgroundColor = 'transparent';
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
