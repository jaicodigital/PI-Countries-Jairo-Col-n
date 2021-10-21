import React from "react";
import { NavLink } from "react-router-dom";
import j from "../LandingPage/landingPage.module.css";

export default function LandingPage() {
  return (
    <body className={j.Body}>
      <div className={j.Titulo}>
        <h1 className={j.H1}>Países del mundo</h1>
      </div>
      <div className={j.container}>
        <NavLink to="/home">
          <button className={j.Boton}>Conocelos</button>
        </NavLink>
      </div>
    </body>
  );
}
