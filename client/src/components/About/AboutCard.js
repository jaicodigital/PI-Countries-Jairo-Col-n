import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hola, soy <span className="purple">Jairo Colón </span>
            soy de <span className="purple"> Cartagena - Colombia</span>
            <br />
            radicado en la ciudad de Bogotá. Soy un joven curioso que está en
            constante búsqueda de nuevos aprendizajes.
            <br />
            <br />
            Aparte de la codificación, algunas otras actividades que me gusta
            hacer
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Bailar "soy coreógrafo y bailarín profesional"
            </li>
            <li className="about-activity">
              <ImPointRight /> Leer
            </li>
            <li className="about-activity">
              <ImPointRight /> Escuchar Música.
            </li>
            <li className="about-activity">
              <ImPointRight /> Jugar Video Juegos
            </li>
            <li className="about-activity">
              <ImPointRight /> Tocar Guitarra
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "¡Esfuérzate por construir cosas que marquen la diferencia!"{" "}
          </p>
          <br/>
          <footer className="blockquote-footer">Jairo Colón</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
