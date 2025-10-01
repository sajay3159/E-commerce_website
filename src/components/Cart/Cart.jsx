import { Button, Card, Col, Container, Row } from "react-bootstrap";

const cartElements = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 2,
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 3,
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
];

const Cart = ({ onClose }) => {
  return (
    <Container className="position-relative mt-5 pt-5">
      {/* Close button in top-right corner */}
      <button
        onClick={onClose}
        className="btn btn-light position-absolute"
        style={{ top: "10px", right: "10px", zIndex: 1 }}
      >
        &times;
      </button>

      <h2 className="text-center mb-4">Cart Items</h2>

      <Row className="border-bottom pb-2 fw-bold">
        <Col md={4}>ITEM</Col>
        <Col md={2}>PRICE</Col>
        <Col md={3}>QUANTITY</Col>
        <Col md={3}>Action</Col>
      </Row>

      {cartElements.map((item) => (
        <Row className="align-items-center border-bottom py-3" key={item.title}>
          <Col
            md={4}
            className="d-flex justify-content-between align-items-center mt-1"
          >
            <Card.Img
              variant="top"
              src={item.imageUrl}
              alt="image"
              style={{ width: "100px" }}
            />
            <span className="ms-2">{item.title}</span>
          </Col>
          <Col md={2}>${item.price}</Col>
          <Col md={3}>{item.quantity}</Col>
          <Col md={3}>
            <Button variant="danger">Remove</Button>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default Cart;
