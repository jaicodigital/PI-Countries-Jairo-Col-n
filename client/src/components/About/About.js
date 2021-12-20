import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
// import laptopImg from "../../Assets/about.png";
import Tilt from "react-parallax-tilt";
import fotojairocircular from "../../Assets/fotojairocircular.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Te cuento cosas <strong className="purple">Sobre mi</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={fotojairocircular} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
          {/* <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col> */}
        </Row>
        <h1 className="project-heading">
          Habilidades<strong className="purple"> Profesionales</strong>
        </h1>
        <Techstack />
        <h1 className="project-heading">
          <strong className="purple">Herramientas</strong> que uso
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;