import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { FaBars } from "react-icons/fa6";
import "./App.css";
import { IoIosArrowRoundDown, IoIosArrowRoundForward } from "react-icons/io";
import Carousel from "./components/carousel";
const App = () => {
  return (
    <>
      <Navbar expand="lg" className="my-navbar">
        <Container>
          <Navbar.Brand href="#home" className="m-0 fw-bold fs-5">
            Digital Agency
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav ">
            <FaBars />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav" className="flex-grow-0">
            <Nav>
              <Nav.Link href="#home" className="me-4">
                home
              </Nav.Link>
              <Nav.Link href="#link" className="me-4">
                about
              </Nav.Link>
              <Nav.Link href="#link" className="me-4">
                testimonials
              </Nav.Link>
              <Nav.Link href="#link">contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="text-center text-lg-start mt-5 mb-5">
        <Row className="align-items-center">
          <Col lg="6">
            <h1 className="fs-64 fw-bold mb-3">
              Building digital products, brands & experience
            </h1>
            <p className="mb-4">
              Digital Agency is your online team mangement tool that easy and
              prompt
            </p>
            <button className="btn-main btn border-0 text-white">
              Contact Us
            </button>
          </Col>
          <Col lg="6" className="d-flex justify-content-center">
            <img src="/section1.png" alt="" className="img-fluid" />
          </Col>
        </Row>
      </Container>
      <Container className="mt-5 ">
        <Row>
          <Col>
            <p className="text-center text-black-50">
              Trusted by 4,000+ companies
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center align-items-center text-center companies pt-3 pb-3">
          <Col>
            <img src="/Company-logo1.png" alt="" className="img-fluid" />
          </Col>
          <Col>
            <img src="/Company-logo2.png" alt="" className="img-fluid" />
          </Col>
          <Col>
            <img src="/Company-logo3.png" alt="" className="img-fluid" />
          </Col>
          <Col>
            <img src="/Company-logo4.png" alt="" className="img-fluid" />
          </Col>
        </Row>
      </Container>
      <Container className="text-center text-lg-start mt-5 mb-5">
        <Row className="align-items-center">
          <Col
            lg="6"
            className="d-flex justify-content-center order-2 order-lg-1"
          >
            <img src="/section2.png" alt="" className="img-fluid" />
          </Col>
          <Col lg="6" className="order-1 order-lg-2">
            <h1 className="fs-64 fw-bold mb-3">Branding & Design system</h1>
            <p className="mb-4">
              Commonly used in the graphic, print & publishing industris for
              previewing visual layout and mockups
            </p>
            <IoIosArrowRoundForward className="fs-1 d-none d-lg-inline" />
            <IoIosArrowRoundDown className="fs-1 d-inline d-lg-none" />
          </Col>
        </Row>
      </Container>
      <Container className="text-center text-lg-start mt-5 mb-5">
        <Row className="align-items-center">
          <Col lg="6">
            <h1 className="fs-64 fw-bold mb-3">Custome & Plugin Development</h1>
            <p className="mb-4">
              Commonly used in the graphic, print & publishing industris for
              previewing visual layout and mockups
            </p>
            <IoIosArrowRoundForward className="fs-1 d-none d-lg-inline" />
            <IoIosArrowRoundDown className="fs-1 d-inline d-lg-none" />
          </Col>
          <Col lg="6" className="d-flex justify-content-center">
            <img src="/section3.png" alt="" className="img-fluid" />
          </Col>
        </Row>
      </Container>
      <Carousel />
      <Container className="text-center text-lg-start mt-5 mb-5 part rounded-4 p-lg-5">
        <Row className="align-items-center">
          <Col
            lg="6"
            className="d-flex justify-content-center order-2 order-lg-1"
          >
            <img
              src="/section4.png"
              alt=""
              className="img-fluid d-none d-lg-block"
            />
          </Col>
          <Col lg="6" className="order-1 order-lg-2 p-5 p-lg-1">
            <h1 className="fs-64 fw-bold mb-3">
              Be a part of the next big thing
            </h1>
            <p className="mb-4">
              <span className="d-block">
                We work with Brans, Startups, to SMEs.
              </span>
              <span>Colaborate for more impact and growt</span>
            </p>
            <button className="btn-main btn border-0 text-white">
              Contact Us
            </button>
          </Col>
        </Row>
      </Container>
      <footer className="pt-5 pb-4 bg-light">
        <Container>
          <Row className="gy-4 justify-content-center">
            <Col xs={12} md={6} lg={3} className="text-center text-lg-start">
              <h4 className="fw-bold mb-3">Digital Agency</h4>
              <p className="text-muted">
                Building digital products, brands & experiences.
              </p>
            </Col>

            <Col xs={12} md={6} lg={3} className="text-center text-lg-start">
              <h5 className="fw-bold mb-3">Resources</h5>
              <ul className="list-unstyled">
                <li className="mb-2">Guides</li>
                <li className="mb-2">Blog</li>
                <li className="mb-2">Customer Stories</li>
                <li className="mb-2">Glossary</li>
              </ul>
            </Col>

            <Col xs={12} md={6} lg={3} className="text-center text-lg-start">
              <h5 className="fw-bold mb-3">Company</h5>
              <ul className="list-unstyled">
                <li className="mb-2">About Us</li>
                <li className="mb-2">Careers</li>
                <li className="mb-2">Partners</li>
                <li className="mb-2">Contact Us</li>
              </ul>
            </Col>
            <Col xs={12} md={6} lg={3} className="text-center text-lg-start">
              <h5 className="fw-bold mb-3">Social Media</h5>
              <ul className="list-unstyled">
                <li className="mb-2">LinkedIn</li>
                <li className="mb-2">Facebook</li>
                <li className="mb-2">Instagram</li>
                <li className="mb-2">Twitter</li>
              </ul>
            </Col>
          </Row>
          <p className="text-center text-muted mb-0 mt-5">
            © Matheus. Todos os direitos reservados
          </p>
        </Container>
      </footer>
    </>
  );
};

export default App;
