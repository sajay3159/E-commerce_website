import { Container } from "react-bootstrap";

const Header = () => {
  return (
    <Container>
      <ul className="header">
        <li>Home</li>
        <li>Store</li>
        <li>About</li>
        <a href="#cart">
          Cart <span className="cart-number">0</span>
        </a>
      </ul>
      <h1>The Generics</h1>
    </Container>
  );
};

export default Header;
