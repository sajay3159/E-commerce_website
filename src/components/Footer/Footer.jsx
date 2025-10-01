import { Container } from "react-bootstrap";
import { FaYoutube, FaSpotify, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-info text-white">
      <Container className="d-flex flex-column flex-md-row align-items-center justify-content-between py-5 gap-4">
        <h1 className="display-3 fw-bold text-center">The Generics</h1>
        <nav
          className="d-flex align-items-center gap-4"
          aria-label="Social links"
        >
          <a
            href="https://youtube.com/"
            className="text-white"
            aria-label="YouTube"
          >
            <FaYoutube size={40} />
          </a>
          <a
            href="http://spotify.com/"
            className="text-white"
            aria-label="Spotify"
          >
            <FaSpotify size={40} />
          </a>
          <a
            href="https://facebook.com/"
            className="text-white"
            aria-label="Facebook"
          >
            <FaFacebook size={40} />
          </a>
        </nav>
      </Container>
    </footer>
  );
};

export default Footer;
