import axios from "axios";
import { useState } from "react";
import { Form, Button, Container, Toast } from "react-bootstrap";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://e-commerce-website-c9c94-default-rtdb.firebaseio.com/e-commerce.json",
        formData
      );
      setShowSuccess(true);
      setFormData({ name: "", email: "", phone: "" });
    } catch (error) {
      console.error("submission error:", error);
    }
  };

  return (
    <Container className="my-5" style={{ maxWidth: "500px" }}>
      <h2>Contact Us</h2>
      <Toast
        show={showSuccess}
        onClose={() => setShowSuccess(false)}
        delay={3000}
        autohide
        bg="success"
        style={{ position: "fixed", top: 20, right: 20, zIndex: 9999 }}
      >
        <Toast.Body className="text-white">
          Order added successfully!
        </Toast.Body>
      </Toast>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="phone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Enter your phone number"
            pattern="[0-9]{10}"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default ContactUs;
