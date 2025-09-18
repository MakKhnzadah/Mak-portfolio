import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      title: 'Senior Data Engineer',
      company: 'Tech Company XYZ',
      period: 'Jan 2023 - Present',
      description: [
        'Led a team of 5 engineers in designing and implementing a new data pipeline architecture that reduced processing time by 40%',
        'Developed ETL processes using Python and Apache Airflow to integrate multiple data sources',
        'Implemented data quality monitoring systems to ensure accuracy and completeness of data',
        'Collaborated with data science teams to optimize data models for machine learning applications'
      ]
    },
    {
      title: 'Software Engineer',
      company: 'Software Solutions Inc.',
      period: 'Jun 2020 - Dec 2022',
      description: [
        'Developed and maintained front-end applications using React and TypeScript',
        'Created RESTful APIs using Node.js and Express to support web applications',
        'Implemented CI/CD pipelines using GitHub Actions to automate testing and deployment',
        'Participated in code reviews and mentored junior developers'
      ]
    },
    {
      title: 'Junior Developer',
      company: 'Startup ABC',
      period: 'Jul 2018 - May 2020',
      description: [
        'Assisted in developing a customer-facing web application using React',
        'Built and maintained database schemas in PostgreSQL',
        'Conducted user testing and implemented UI improvements based on feedback',
        'Participated in agile development processes including daily standups and sprint planning'
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5">Professional Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <Row key={index} className="mb-4">
              <Col md={4} className="mb-3 mb-md-0">
                <div className="experience-heading">
                  <h3>{exp.title}</h3>
                  <h4>{exp.company}</h4>
                  <p className="text-muted">{exp.period}</p>
                </div>
              </Col>
              <Col md={8}>
                <Card>
                  <Card.Body>
                    <ul className="mb-0">
                      {exp.description.map((item, i) => (
                        <li key={i} className="mb-2">{item}</li>
                      ))}
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Experience;
