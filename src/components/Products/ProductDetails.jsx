import { useParams, Link } from "react-router-dom";
import { Container, Card, Button } from "react-bootstrap";

const productsArr = [
  {
    id: "p1",
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    description: "Bright colors for your artwork.",
  },
  {
    id: "p2",
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    description: "Elegant black and white shades.",
  },
  {
    id: "p3",
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    description: "Vibrant yellow and bold black combo.",
  },
  {
    id: "p4",
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    description: "Cool blue tones for your collection.",
  },
];

const ProductDetail = () => {
  const { productId } = useParams();
  const product = productsArr.find((p) => p.id === productId);

  if (!product) {
    return (
      <Container className="py-5 text-center">
        <h2>Product not found!</h2>
        <Link to="/products">
          <Button variant="secondary" className="mt-3">
            Go Back
          </Button>
        </Link>
      </Container>
    );
  }

  return (
    <Container className="py-5 d-flex justify-content-center">
      <Card style={{ width: "28rem" }} className="text-center shadow">
        <Card.Img
          variant="top"
          src={product.imageUrl}
          style={{ height: "300px", objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <h4>${product.price}</h4>
          <Link to="/products">
            <Button variant="primary" className="mt-3">
              Back to Products
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ProductDetail;
