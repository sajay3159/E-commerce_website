import { Container, Row, Col, Card, Button } from "react-bootstrap";

const productsArr = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const Products = () => {
  return (
    <Container className="py-4">
      <h2 className="text-center mb-4">Music</h2>
      <Row>
        {productsArr.map((item, index) => (
          <Col sm={6} md={4} lg={3} className="mb-4" key={index}>
            <Card className="h-100 text-center">
              <Card.Img
                variant="top"
                src={item.imageUrl}
                alt={item.title}
                style={{ height: "250px", objectFit: "cover" }}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{item.title}</Card.Title>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="fw-bold">${item.price}</span>
                  <Button variant="primary" size="sm">
                    ADD TO CART
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
