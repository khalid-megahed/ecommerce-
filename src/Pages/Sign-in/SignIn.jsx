import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './SignIn.css'; // Import your CSS file for sign-up page styling

const SignUpPage = () => {
  return (
    <Container fluid className="signup-container">
      <Row className="justify-content-center align-items-center h-100">
        <Col md={6}>
          <Form className="signup-form">
            <h2 className="text-center mb-4">Create Your Account</h2>
            <Row>
              <Col>
                <Form.Group controlId="formFirstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your first name" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formLastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your last name" />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group controlId="formAge">
              <Form.Label>Age</Form.Label>
              <Form.Control type="number" placeholder="Enter your age" />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter your password" />
            </Form.Group>

            <Form.Group controlId="formConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm your password" />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Create Account
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUpPage;
