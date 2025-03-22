import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';

const AccountSettings = () => {
  return (
    <Container>
      <Row>
        <Col sm={12} md={6} xl={10} className="mx-auto card-container">
          <h1>Account Settings</h1>
          <div className="text-center mb-4">
            <Image
              src="https://via.placeholder.com/100"
              roundedCircle
              alt="Profile"
              className="profile-image"
            />
          </div>
          <h3>Marry Doe</h3>
          <Form>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" value="marry@gmail.com" readOnly />
            </Form.Group>
            <Form.Group className="mb-3" controlId="bio">
              <Form.Label>Bio</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam"
              />
            </Form.Group>
            <Button className="btn-purple w-100 mb-2">Save Changes</Button>
            <Button as={Link} to="/" variant="secondary" className="w-100">
              Logout
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AccountSettings;