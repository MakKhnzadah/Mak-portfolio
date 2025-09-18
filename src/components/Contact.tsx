import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact-section py-5">
      <Container>
        <h2 className="text-center mb-5">Get In Touch</h2>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Form onSubmit={(e) => e.preventDefault()}>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" name="name" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" name="email" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formSubject">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text" placeholder="Enter subject" name="subject" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="Your message" name="message" required />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>

        <Row className="mt-5 text-center">
          <Col md={4} className="mb-4 mb-md-0">
            <div className="contact-info">
              <i className="fas fa-envelope mb-3 fa-2x"></i>
              <h3 className="h5">Email</h3>
              <p><a href="mailto:your.email@example.com">m.khnzadah@outlook.com</a></p>
            </div>
          </Col>
          <Col md={4} className="mb-4 mb-md-0">
            <div className="contact-info">
              <i className="fas fa-map-marker-alt mb-3 fa-2x"></i>
              <h3 className="h5">Location</h3>
              <p>Grimstad, Norway</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="contact-info">
              <i className="fas fa-phone mb-3 fa-2x"></i>
              <h3 className="h5">Phone</h3>
              <p>+47 99856496</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
