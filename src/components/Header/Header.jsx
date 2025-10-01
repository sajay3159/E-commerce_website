import { Badge, Container, Nav, Navbar } from "react-bootstrap";

const Header = ({ onCartClick }) => {
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
            <Nav.Link href="#home" className="text-white">
              Home
            </Nav.Link>
            <Nav.Link href="#store" className="text-white">
              Store
            </Nav.Link>
            <Nav.Link href="about" className="text-white">
              About
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
                0
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
