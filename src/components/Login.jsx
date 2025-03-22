import { Link, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/account');
  };

  return (
    <Container>
      <Row>
        <Col sm={12} md={6} xl={10} className="mx-auto card-container">
          <h1>Sign in to your PopX account</h1>
          <p className="text-muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" required />
            </Form.Group>
            <Button type="submit" className="btn-purple w-100">
              Login
            </Button>
          </Form>
          <p className="mt-3 text-center">
            Don't have an account? <Link to="/register">Register here</Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;