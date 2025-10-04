import { useContext } from "react";
import { Badge, Container, Nav, Navbar } from "react-bootstrap";
import CartContext from "../store/cart-context";
import { NavLink } from "react-router-dom";

const Header = ({ onCartClick }) => {
  const cartCtx = useContext(CartContext);

  const numberofItemsInCart = cartCtx.items.reduce((curr, item) => {
    return curr + item.quantity;
  }, 0);
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="md" className="py-2" fixed="top">
        <Container>
          <Nav>
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#store">Store</Nav.Link>
            <Nav.Link href="about">About</Nav.Link> */}
          </Nav>
          <Nav className="text-white">
            <Nav.Link
              as={NavLink}
              to="/home"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/products"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Store
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/about"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              About
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/contactus"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Contact Us
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link
              href="#cart"
              onClick={(event) => {
                event.preventDefault();
                onCartClick();
              }}
            >
              Cart
              <Badge bg="light" text="dark">
                {numberofItemsInCart}
              </Badge>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <section className="bg-secondary text-white text-center py-5">
        <Container>
          <h1 className="display-3 fw-bold">The Generics</h1>
        </Container>
      </section>
    </>
  );
};

export default Header;
