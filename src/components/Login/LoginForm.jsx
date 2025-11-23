import { useRef, useState, useContext } from "react";
import { Form, Button, Card, Alert, Container, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CartContext from "../store/cart-context";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../firebase";

const LoginForm = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const authCtx = useContext(CartContext);
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [error, setError] = useState(null);

  // Google login
  const handleGoogleLogin = async () => {
    setGoogleLoading(true);
    setError(null);

    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      const token = await user.getIdToken();

      authCtx.login(token, user.email);
      navigate("/products", { replace: true });
    } catch (err) {
      setError(err.message || "Google login failed!");
    }

    setGoogleLoading(false);
  };

  // Email / Password
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
          headers: { "Content-Type": "application/json" },
        }
      );

      const data = await response.json();
      if (!response.ok) throw new Error(data.error?.message || "Login failed!");

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

              <Button disabled={isLoading} className="w-100 mb-3" type="submit">
                {isLoading ? <Spinner animation="border" size="sm" /> : "Login"}
              </Button>
            </Form>

            {/* Google login button */}
            <Button
              variant="light"
              className="w-100 border d-flex align-items-center justify-content-center gap-2"
              onClick={handleGoogleLogin}
              disabled={googleLoading}
              style={{ borderColor: "#dadce0" }}
            >
              {googleLoading ? (
                <Spinner animation="border" size="sm" />
              ) : (
                <>
                  <img
                    src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                    alt="Google"
                    width={22}
                    height={22}
                  />
                  <span>Sign in with Google</span>
                </>
              )}
            </Button>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default LoginForm;
