import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Welcome = () => {
  return (
    <Container>
      <Row>
        <Col sm={12} md={8} xl={10} className="mx-auto text-center card-container">
          <h1>Welcome to PopX</h1>
          <p className="text-muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="d-grid gap-2">
            <Button as={Link} to="/register" className="btn-purple">
              Create Account
            </Button>
            <Button as={Link} to="/login" className="btn-light-purple">
              Already Registered? Login
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Welcome;