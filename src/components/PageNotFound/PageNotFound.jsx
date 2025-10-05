import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <Container className="text-center my-5">
      <Row>
        <Col>
          <h1 className="display-1 text-danger">404</h1>
          <p className="fs-4">Oops! Page not found.</p>
          <Button variant="primary" onClick={() => navigate("/")}>
            Go to Home
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default PageNotFound;
