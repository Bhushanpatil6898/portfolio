import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Container, Row, Col, Alert } from "react-bootstrap";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setError("All fields are required!");
      return;
    }

    setError("");
    setIsSubmitted(true);

    // Here you can integrate with an email service or backend API
    // For now, we'll log the data to the console
    console.log("Form Data Submitted:", formData);
  };

  return (
    <Container className=" " style={{marginTop:"200px",maxWidth:"800px"}}>
      <Row className="justify-content-center ">
        <Col md={6}>
          <h1 className="text-center ">Contact Us</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
              />
            </Form.Group>

            {error && (
              <Alert variant="danger">
                {error}
              </Alert>
            )}

            <Button variant="primary" type="submit" className="w-100">
              Submit
            </Button>
          </Form>

          {isSubmitted && !error && (
            <Alert variant="success" className="mt-4">
              <h4>Thank you for reaching out!</h4>
              <p>We'll get back to you soon.</p>
            </Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
