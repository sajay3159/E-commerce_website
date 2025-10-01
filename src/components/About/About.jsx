import { Card, Col, Container, Row } from "react-bootstrap";

const About = () => {
  return (
    <Container className="py-4">
      <h2 className="text-center mb-4">About</h2>
      <Row>
        <Col md={4} sm={12}>
          <Card.Img
            variant="top"
            src="https://prasadyash2411.github.io/ecom-website/img/Album%203.png"
            alt="image"
            style={{
              height: "250px",
              width: "250px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        </Col>
        <Col md={8} sm={12}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium
          ipsam atque iure incidunt porro maxime? Dicta consectetur excepturi
          dolore, accusantium nesciunt, asperiores enim eius libero
          exercitationem voluptate dolor, ipsam placeat? Laborum eveniet sed
          quibusdam ab quis architecto, veritatis doloribus delectus repudiandae
          adipisci assumenda reiciendis molestiae? Quas, omnis. Voluptatibus
          quos placeat, ut, repellat iste quis delectus, ab aliquam explicabo
          vero deserunt. Facilis nihil in quidem. Veniam voluptas laudantium
          libero eveniet nesciunt sequi voluptates explicabo magnam quibusdam,
          ab hic sed voluptatum vero, dolores tempora veritatis omnis commodi?
          Rerum odio ipsam quae quas. quibusdam ab quis architecto, veritatis
          doloribus delectus repudiandae adipisci assumenda reiciendis
          molestiae? Quas, omnis. Voluptatibus quos placeat, ut, repellat iste
          quis delectus, ab aliquam explicabo vero deserunt. Facilis nihil in
          quidem. Veniam voluptas laudantium libero eveniet nesciunt sequi
          voluptates explicabo magnam quibusdam, ab hic sed voluptatum vero,
          dolores tempora veritatis omnis commodi? Rerum odio ipsam quae quas.
        </Col>
      </Row>
    </Container>
  );
};

export default About;
