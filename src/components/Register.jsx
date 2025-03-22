import { Link, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <Container>
      <Row>
        <Col sm={12} md={6} xl={10} className="mx-auto card-container">
          <h1>Create your PopX account</h1>
          <Form onSubmit={handleRegister}>
            <Form.Group className="mb-3" controlId="fullName">
              <Form.Label>Full Name <span className="text-danger">*</span></Form.Label>
              <Form.Control type="text" placeholder="Marry Doe" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="phone">
              <Form.Label>Phone number <span className="text-danger">*</span></Form.Label>
              <Form.Control type="tel" placeholder="Marry Doe" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address <span className="text-danger">*</span></Form.Label>
              <Form.Control type="email" placeholder="Marry Doe" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password <span className="text-danger">*</span></Form.Label>
              <Form.Control type="password" placeholder="Marry Doe" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="company">
              <Form.Label>Company name</Form.Label>
              <Form.Control type="text" placeholder="Marry Doe" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="agency">
              <Form.Label>Are you an Agency? <span className="text-danger">*</span></Form.Label>
              <div>
                <Form.Check
                  inline
                  label="Yes"
                  name="agency"
                  type="radio"
                  id="agency-yes"
                  required
                />
                <Form.Check
                  inline
                  label="No"
                  name="agency"
                  type="radio"
                  id="agency-no"
                />
              </div>
            </Form.Group>
            <Button type="submit" className="btn-purple w-100">
              Create Account
            </Button>
          </Form>
          <p className="mt-3 text-center">
            Already have an account? <Link to="/login">Login here</Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;