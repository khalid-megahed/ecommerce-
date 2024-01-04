import { Container, Form, Button } from 'react-bootstrap';
import './Login.css'; // Import your CSS file for login page styling
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <Container fluid className="login-container">
      <Form className="login-form">
        <h2 className="text-center mb-4">Login</h2>
        <Form.Group controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter your username" />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter your password" />
        </Form.Group>


        <Button variant="primary" type="submit" className=" login-btn">
         Login
        </Button>
        <div className="text-center mb-3">
          <a href="#forgotPassword">Forgot Password?</a>
        </div>
        <Link to='/sign-in'> 
        <Button variant="primary" type="submit" className="w-75 sign-in">
        Sign in
        </Button>
        </Link>
      </Form>
    </Container>
  );
};

export default LoginPage;
