import React from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';

type ThemeKey = 'gold' | 'blue' | 'teal' | 'orange' | 'pink' | 'purple' | 'yellow';

interface ProjectItem {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  imageFit?: 'contain' | 'cover';
  imagePadding?: string;
  imageBackground?: string;
  demoUrl?: string;
  repoUrl?: string;
  label?: string;
  themeKey?: ThemeKey;
}

const Projects: React.FC = () => {
  const hexToRgba = (hex: string, alpha: number) => {
    const normalized = hex.replace('#', '');
    const full = normalized.length === 3
      ? normalized.split('').map((c) => c + c).join('')
      : normalized;
    const intVal = Number.parseInt(full, 16);
    const r = (intVal >> 16) & 255;
    const g = (intVal >> 8) & 255;
    const b = intVal & 255;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  const projectThemes: Record<ThemeKey, { main: string; accent: string; demoHover?: string; demoText?: string }> = {
    gold: { main: '#c9a97d', accent: '#e2c992', demoHover: '#d3b38a', demoText: '#1a1a1a' },
    blue: { main: '#1e4d92', accent: '#4a8cca', demoHover: '#3a7cb8' },
    teal: { main: '#14a098', accent: '#57cbc3', demoHover: '#12908a' },
    orange: { main: '#e67e22', accent: '#c79e5d', demoHover: '#c17a3b' },
    pink: { main: '#e07ea8', accent: '#f4a9c7', demoHover: '#f4a9c7' },
    purple: { main: '#8b5cf6', accent: '#ddd6fe', demoHover: '#7c3aed' },
    yellow: { main: '#d4a017', accent: '#f1d77a', demoHover: '#b8860b', demoText: '#1a1a1a' }
  };

  const projects: ProjectItem[] = [
    {
      title: 'NyUtdannet Job Portal',
      description: 'A comprehensive job portal platform designed specifically for newly graduated students and employers in Norway. Features include user role management (Employee/Employer), job listings with detailed views, application tracking, resume/cover letter uploads, and personalized dashboards that focus on connecting fresh graduates with relevant opportunities.',
      technologies: ['ASP.NET Core', 'C#', 'Entity Framework', 'SQLite', 'Identity', 'Razor Views', 'Bootstrap 5'],
      imageUrl: `${process.env.PUBLIC_URL}/images/nyutdannet-job-portal.png`,
      label: '',
      repoUrl: 'https://github.com/MakKhnzadah/NyUtdannet_2',
      themeKey: 'gold'
    },
    {
      title: 'TravelHub Social App',
      description: 'A feature-rich travel social application that helps users document and share their travel experiences. Users can create blog posts about places they\'ve visited, share photos, connect with friends, and discover new destinations through an interactive map interface. Includes features for travel visualization, social feed, customizable profiles, and multi-language support.',
      technologies: ['TypeScript','React Native', 'Expo', 'Firebase', 'Redux', 'MapView API', 'i18n', 'Cloud Storage'],
      imageUrl: `${process.env.PUBLIC_URL}/images/mapTogether.png`,
      label: '',
      repoUrl: 'https://github.com/MakKhnzadah/ikt205g25v-group-03',
      themeKey: 'blue'
    },
    {
      title: 'Statistics Project: Bicycle and Weather Data Analysis',
      description: 'A comprehensive data analysis project exploring the relationship between bicycle usage and weather conditions in three Norwegian cities: Bergen, Kristiansand, and Tromsø. Features include hypothesis testing, Bayesian analysis, and insightful visualizations through heatmaps, boxplots, scatter plots, and time series to uncover patterns in cycling activity relative to weather variables.',
      technologies: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Statistical Analysis', 'Jupyter Notebooks'],
      imageUrl: `${process.env.PUBLIC_URL}/images/bergen_heatmaps.png`,
      label: '',
      repoUrl: 'https://github.com/MakKhnzadah/Statistics-Project',
      themeKey: 'teal'
    },
    {
      title: 'Security Hardening Web App (Java + Jetty + SQLite)',
      description: 'A small Java web app running on embedded Jetty with FreeMarker templates and a SQLite backend, built as a software security exercise. I reviewed the authentication and patient-search flow, identified issues such as SQL injection risks, XSS potential, and weak error handling, then implemented mitigations aligned with OWASP guidance (parameterized SQL, safer template output, and tighter request/response handling).',
      technologies: ['Java', 'Jetty (Servlets)', 'FreeMarker', 'SQLite', 'JDBC', 'Gradle', 'OWASP'],
      imageUrl: `${process.env.PUBLIC_URL}/images/xss-reflected-form.PNG`,
      label: 'Security Project',
      repoUrl: 'https://github.com/MakKhnzadah/Identifying-and-Fixing-Security-Vulnerabilities-on-a-Web-Application',
      themeKey: 'yellow'
    },
    {
      title: 'ShopLite',
      description: 'ShopLite is a full-stack e-commerce web app built with React and Spring Boot. It features secure JWT authentication, role-based access (User/Admin), and RESTful APIs for products, carts, and orders. The platform includes an admin dashboard for store management, file uploads, and basic health checks, with Stripe payment integration prepared.',
      technologies: ['Java', 'TypeScript', 'HTML', 'CSS', 'React', 'Spring Boot', 'Maven', 'JUnit', 'Docker'],
      imageUrl: `${process.env.PUBLIC_URL}/images/shop-lite.png`,
      label: '',
      repoUrl: 'https://github.com/MakKhnzadah/Shop-Lite-Project',
      themeKey: 'orange'
    },
    {
      title: 'Munin Alert',
      description: 'Munin Alert is a full-stack monitoring and alerting platform with a React frontend and a Spring Boot backend. It features real-time alert updates via WebSockets, RESTful APIs for system health and event management, and interactive map visualization using Leaflet. The app supports user authentication, live status dashboards, and automated health checks for reliable system monitoring.',
      technologies: ['Java', 'JavaScript', 'HTML', 'CSS', 'React', 'Spring Boot', 'Maven', 'Batch Scripts', 'JSON', 'Markdown'],
      imageUrl: `${process.env.PUBLIC_URL}/images/munin_alert.png`,
      label: 'Real Project',
      repoUrl: 'https://github.com/MakKhnzadah/munin-alert',
      themeKey: 'pink',
      imageFit: 'contain',
      imagePadding: '10px',
      imageBackground: '#f9f7f3'
    }
  ];

  return (
    <section id="projects" className="projects-section py-5" style={{ backgroundColor: '#f9f7f3' }}>
      <Container>
        <h2 className="text-center mb-2" style={{ color: '#2c3e50', fontWeight: 600, letterSpacing: '1px' }}>Projects</h2>
        <div className="gold-divider mb-5"></div>
        <Row className="g-4">
          {projects.map((project, index) => (
            (() => {
              const isFeatured = index <= 5;
              const theme = project.themeKey ? projectThemes[project.themeKey] : projectThemes.gold;
              const featuredShadow = `0 15px 35px ${hexToRgba(theme.main, 0.2)}, 0 5px 15px rgba(0, 0, 0, 0.1)`;
              const normalShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
              const featuredBorder = `1px solid ${hexToRgba(theme.main, 0.3)}`;
              const overlayGradient = `linear-gradient(to bottom, ${hexToRgba(theme.main, 0.2)}, rgba(0, 0, 0, 0))`;
              const labelGradient = `linear-gradient(135deg, ${theme.main}, ${theme.accent})`;
              const demoTextColor = theme.demoText || '#ffffff';
              const imageFit = project.imageFit || (isFeatured ? 'contain' : 'cover');
              const imagePadding = project.imagePadding || (isFeatured ? '10px' : '0');
              const imageBackground = project.imageBackground || (isFeatured ? '#f9f7f3' : 'transparent');

              return (
            <Col lg={6} className="mb-4" key={index}>
              <Card 
                className={`h-100 border-0 ${isFeatured ? 'featured-project' : ''}`}
                style={{ 
                  overflow: 'hidden', 
                  borderRadius: '8px', 
                  boxShadow: isFeatured ? featuredShadow : normalShadow,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  border: isFeatured ? featuredBorder : 'none'
                }}
              >
                <div 
                  className="project-image-container"
                  style={{
                    height: isFeatured ? '260px' : '220px',
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
                      background: overlayGradient,
                      zIndex: 1
                    }}
                  ></div>
                  {project.label && (
                    <div 
                      style={{
                        position: 'absolute',
                        top: '10px',
                        left: '10px',
                        background: labelGradient,
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
                      {project.label}
                    </div>
                  )}
                  <Card.Img 
                    variant="top" 
                    src={project.imageUrl} 
                    alt={project.title} 
                    style={{
                      height: '100%',
                      width: '100%',
                      objectFit: imageFit,
                      objectPosition: 'center',
                      transition: 'transform 0.5s ease',
                      transform: 'scale(1.0)',
                      backgroundColor: imageBackground,
                      padding: imagePadding
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'scale(1.0)';
                    }}
                  />
                </div>
                <Card.Body style={{ padding: isFeatured ? '2.25rem 1.75rem' : '2rem 1.5rem' }}>
                  <Card.Title 
                    style={{ 
                      fontSize: isFeatured ? '1.5rem' : '1.4rem', 
                      fontWeight: 600, 
                      marginBottom: isFeatured ? '1.2rem' : '1rem',
                      color: theme.main,
                      letterSpacing: isFeatured ? '0.5px' : 'normal'
                    }}
                  >
                    {project.title}
                  </Card.Title>
                  <Card.Text style={{ 
                    color: isFeatured ? '#333' : '#555', 
                    marginBottom: '1.5rem', 
                    lineHeight: 1.6,
                    fontSize: isFeatured ? '1.05rem' : '1rem'
                  }}>
                    {project.description}
                  </Card.Text>
                  <div className="mb-4">
                    {project.technologies.map((tech, i) => {
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
                          backgroundColor: theme.main,
                          borderColor: theme.main,
                          color: demoTextColor,
                          fontWeight: 500,
                          padding: isFeatured ? '0.6rem 1.5rem' : '0.5rem 1.25rem',
                          borderRadius: '4px',
                          transition: 'all 0.3s ease',
                          boxShadow: isFeatured ? `0 4px 12px ${hexToRgba(theme.main, 0.3)}` : 'none',
                          letterSpacing: isFeatured ? '0.5px' : 'normal'
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.backgroundColor = theme.demoHover || theme.accent;
                          e.currentTarget.style.boxShadow = isFeatured ? `0 6px 15px ${hexToRgba(theme.main, 0.4)}` : 'none';
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.backgroundColor = theme.main;
                          e.currentTarget.style.boxShadow = isFeatured ? `0 4px 12px ${hexToRgba(theme.main, 0.3)}` : 'none';
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
                          borderColor: theme.main,
                          color: theme.main,
                          fontWeight: 500,
                          padding: isFeatured ? '0.6rem 1.5rem' : '0.5rem 1.25rem',
                          borderRadius: '4px',
                          transition: 'all 0.3s ease',
                          letterSpacing: isFeatured ? '0.5px' : 'normal'
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.backgroundColor = hexToRgba(theme.main, 0.1);
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
              );
            })()
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
