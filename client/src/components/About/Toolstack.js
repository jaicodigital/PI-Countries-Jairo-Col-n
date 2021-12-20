import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiWindows,
  SiVisualstudiocode,
  SiRedux,
  SiPostman,
  SiHeroku,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <h5 className="purple">Visual Studio Code</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <h5 className="purple">Postman</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
        <h5 className="purple">Heroku</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
        <h5 className="purple">Redux</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows />
        <h5 className="purple">Windows</h5>
      </Col>
    </Row>
  );
}

export default Toolstack;
