import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Offcanvas,
  Row,
} from "react-bootstrap";
import CartContext from "../store/cart-context";
import { useContext, useEffect } from "react";

const Cart = ({ onShow, onClose }) => {
  const cartCtx = useContext(CartContext);
  useEffect(() => {
    const fetchCartItems = async () => {
      if (!onShow || !cartCtx.isLoggedIn) return;
      if (!onShow) return;

      const email = localStorage.getItem("email");
      const userKey = email.replace(/[@.]/g, "");

      try {
        const res = await fetch(
          `https://e-commerce-website-c9c94-default-rtdb.firebaseio.com/cart${userKey}`
        );

        if (!res.ok) {
          throw new Error("Failed to fetch cart items");
        }

        const data = await res.json();
        cartCtx.setItems(data); // Set fetched items in context
      } catch (err) {
        console.error("Error fetching cart items:", err);
      }
    };

    fetchCartItems();
  }, [onShow, cartCtx.isLoggedIn]);

  const total = cartCtx.items.reduce((sum, item) => {
    return sum + item.price * item.quantity.toFixed(2);
  }, 0);

  return (
    <Offcanvas
      show={onShow}
      onHide={onClose}
      placement="end"
      style={{ maxWidth: 480 }}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>CART</Offcanvas.Title>
      </Offcanvas.Header>

      <Offcanvas.Body className="pt-0">
        <Container className="px-0">
          <Row className="border-bottom fw-semibold text-uppercase small py-2">
            <Col xs={6} md={5}>
              Item
            </Col>
            <Col xs={3} md={2}>
              Price
            </Col>
            <Col xs={3} md={3}>
              Quantity
            </Col>
            <Col xs={12} md={2} className="d-md-block text-end">
              Action
            </Col>
          </Row>
          {cartCtx.items.map((item) => (
            <Row
              key={item.id}
              className="align-items-center border-bottom py-3 g-2"
            >
              <Col xs={6} md={5} className="d-flex align-items-center gap-2">
                <Card.Img
                  src={item.imageUrl}
                  alt={item.title}
                  style={{ width: 64, height: 64, objectFit: "cover" }}
                />
                <span>{item.title}</span>
              </Col>

              <Col xs={3} md={2}>
                ${item.price}
              </Col>

              <Col xs={3} md={3}>
                <div className="d-flex align-items-center gap-2">
                  <Form.Control
                    type="number"
                    min={1}
                    defaultValue={item.quantity}
                    size="sm"
                    style={{ width: 50 }}
                  />
                </div>
              </Col>

              <Col xs={12} md={2} className="text-end mt-2">
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => cartCtx.removeItem(item.id)}
                >
                  Remove
                </Button>
              </Col>
            </Row>
          ))}

          <Row className="pt-3">
            <Col className="d-flex justify-content-between align-items-center">
              <span className="fs-5">Total</span>
              <span className="fs-5">${total}</span>
            </Col>
          </Row>
          <Row className="pt-3">
            <Col className="text-center">
              <Button variant="info" size="lg" className="px-5">
                Purchase
              </Button>
            </Col>
          </Row>
        </Container>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Cart;
