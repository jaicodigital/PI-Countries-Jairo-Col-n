import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Tilt from "react-parallax-tilt";
import fotojairocircular from "../../Assets/fotojairocircular.png";
import Toolstack from "./Toolstack";
import {Link} from "react-router-dom";

function About() {
  return (
      <Container fluid className="about-section">
        <Particle />
        <Link to="/home">
          <button className="buttonVolverCrearAbout">Volver</button>
        </Link>
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
                <img
                  src={fotojairocircular}
                  className="img-fluid"
                  alt="avatar"
                />
              </Tilt>
            </Col>
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
        <Particle />
        <Link to="/home">
          <button className="buttonVolverCrearAbout">Volver</button>
        </Link>
      </Container>
  );
}

export default About;
