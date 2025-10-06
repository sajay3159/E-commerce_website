import { useRef, useState, useContext } from "react";
import { Form, Button, Card, Alert, Container, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CartContext from "../store/cart-context";

const LoginForm = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const authCtx = useContext(CartContext);
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDpWVsvC9evJbXOQnZHUyAxGQIOfLTaZOs",
        {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();
      if (!response.ok) {
        throw new Error("Login failed!");
      }
      authCtx.login(data.idToken, data.email);
      navigate("/products", { replace: true });
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  };

  return (
    <Container className="d-flex align-items-center justify-content-center py-5">
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Login</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={submitHandler}>
              <Form.Group id="email" className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>

              <Form.Group id="password" className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} required />
              </Form.Group>

              <Button disabled={isLoading} className="w-100" type="submit">
                {isLoading ? <Spinner animation="border" size="sm" /> : "Login"}
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default LoginForm;
