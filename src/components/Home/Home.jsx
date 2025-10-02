import { Button } from "react-bootstrap";
import { Col, Container, Row } from "react-bootstrap";

const tours = [
  {
    date: "JUL 16",
    city: "DETROIT, MI",
    venue: "DTE ENERGY MUSIC THEATRE",
    link: "#",
  },
  { date: "JUL 19", city: "TORONTO, ON", venue: "BUDWEISER STAGE", link: "#" },
  { date: "JUL 22", city: "BRISTOW, VA", venue: "JIGGY LUBE LIVE", link: "#" },
  { date: "JUL 29", city: "PHOENIX, AZ", venue: "AK-CHIN PAVILION", link: "#" },
  { date: "AUG  2", city: "LAS VEGAS, NV", venue: "T-MOBILE ARENA", link: "#" },
  { date: "AUG  7", city: "CONCORD, CA", venue: "CONCORD PAVILION", link: "#" },
];

const Home = () => {
  return (
    <>
      <section className="bg-secondary text-white py-3">
        <Container>
          <Row>
            <Col md={12}>
              <h2 className="text-center display-5 fw-bold">
                <Button variant="outline-info" size="lg">
                  Get our Latest Album
                </Button>
              </h2>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <h2 className="text-center">
                <Button
                  variant="outline-info"
                  className="rounded-circle p-0 btn-play"
                  style={{ width: "64px", height: "64px" }}
                >
                  <svg
                    viewBox="0 0 100 100"
                    width={64 * 0.4}
                    height={64 * 0.4}
                    aria-hidden="true"
                  >
                    <polygon points="35,25 70,50 35,75" fill="currentColor" />
                  </svg>
                </Button>
              </h2>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="bg-light text-dark py-4">
        <Container style={{ maxWidth: "840px" }}>
          <h2 className="text-center mb-4">Tours</h2>
          {tours.map((t, idx) => (
            <Row key={t.date} className="align-items-center py-3 border-bottom">
              <Col xs={4} md={2} className="text-uppercase small">
                {t.date}
              </Col>
              <Col xs={8} md={4} className="fw-semibold">
                {t.city}
              </Col>
              <Col xs={8} md={4} className="text-muted">
                {t.venue}
              </Col>
              <Col xs={4} md={2}>
                <Button variant="info" className="text-white">
                  Buy Tickets
                </Button>
              </Col>
            </Row>
          ))}
        </Container>
      </section>
    </>
  );
};

export default Home;
