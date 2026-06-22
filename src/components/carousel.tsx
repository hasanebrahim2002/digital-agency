import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Carousel() {
  const cards = [
    {
      id: 1,
      image: "/slider1.png",
      title: "Andrew Rathore",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. ",
    },
    {
      id: 2,
      image: "/slider2.png",
      title: "Vera Duncan",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. ",
    },
    {
      id: 3,
      image: "/slider3.png",
      title: "Mark Smith",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. ",
    },
    {
      id: 4,
      image: "/slider1.png",
      title: "Andrew Rathore",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. ",
    },
    {
      id: 5,
      image: "/slider2.png",
      title: "Vera Duncan",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. ",
    },
  ];

  const [index, setIndex] = useState(0);

  const [show, setShow] = useState(3);

  useEffect(() => {
    const change = () => {
      if (window.innerWidth < 768) setShow(1);
      else if (window.innerWidth < 992) setShow(2);
      else setShow(3);
    };

    change();

    window.addEventListener("resize", change);

    return () => window.removeEventListener("resize", change);
  }, []);

  return (
    <Container className="py-5 text-center">
      <div className="text-center mb-4">
        <p>TESTIMONIALS</p>
        <h1>Read What Other have to Say</h1>
      </div>

      <div
        style={{
          overflow: "hidden",
        }}
      >
        <Row
          className="flex-nowrap"
          style={{
            transform: `translateX(-${index * (100 / show)}%)`,
            transition: "0.5s ease",
          }}
        >
          {cards.map((card) => (
            <Col key={card.id} xs={12} md={6} lg={4}>
              <Card
                className="shadow border-0 p-3"
                style={{ backgroundColor: "#f6f6f6" }}
              >
                <Card.Img
                  src={card.image}
                  className="rounded-circle mx-auto d-block mt-3 bg-white p-2"
                  style={{
                    width: "120px",
                    height: "120px",
                    objectFit: "cover",
                  }}
                />

                <Card.Body>
                  <Card.Title>{card.title}</Card.Title>

                  <Card.Text>{card.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <div className="text-center mt-4">
        {Array.from({
          length: cards.length - show + 1,
        }).map((_, i) => (
          <Button
            key={i}
            onClick={() => setIndex(i)}
            className="rounded-circle mx-1"
            style={{
              width: "24px",
              height: "24px",
              backgroundColor: index === i ? "#8EADD5" : "transparent",
              border: "3px solid #8EADD5",
            }}
          ></Button>
        ))}
      </div>
    </Container>
  );
}

export default Carousel;
