import React from "react";
import j from "../Cards/card.module.css";

export default function Card({ flags, name, continent, capital }) {
  return (
    <div className={j.cardContainer}>
      <div>
        <h2 className={j.colorName}>{name}</h2>
        <h3 className={j.colorCapiConti}>Capital: {capital}.</h3>
        <h4 className={j.colorCapiConti}>Continente: {continent}.</h4>
        <div>
          <img
            className={j.countryImg}
            src={flags}
            alt="flag not found"
            width="200px"
            height="250px"
          ></img>
        </div>
      </div>
    </div>
  );
}
