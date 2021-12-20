import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiDatabase,
  DiGit,
  DiCss3Full,
  DiScrum,
  DiWordpress,
} from "react-icons/di";
import { SiFirebase, SiPostgresql } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h5 className="purple">JavaScript</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h5 className="purple">React</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <h5 className="purple">Node.js</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3Full />
        <h5 className="purple">Css</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <h5 className="purple">PostgreSQL</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <h5 className="purple">Firebase</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <h5 className="purple">Git</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDatabase />
        <h5 className="purple">Databases</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiWordpress />
        <h5 className="purple">Wordpress</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiScrum />
        <h5 className="purple">Scrum</h5>
      </Col>
    </Row>
  );
}

export default Techstack;
