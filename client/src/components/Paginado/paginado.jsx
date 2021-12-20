import React from "react";
import j from "../Paginado/paginado.module.css";

export default function Paginado({ countriesPerPage, allCountries, paginado }) {
  const pageNumbers = [];

  for (let i = 0; i < Math.ceil(allCountries / countriesPerPage); i++) {
    pageNumbers.push(i + 1);
  }

  return (
    <nav>
      <ul>
        {pageNumbers?.map((number) => (
          <button
            onClick={() => paginado(number)}
            key={number}
            className={j.button}
          >
            {number}
          </button>
        ))}
      </ul>
    </nav>
  );
}
