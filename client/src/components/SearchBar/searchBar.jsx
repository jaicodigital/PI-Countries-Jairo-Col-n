import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  getName,
  getCountries,
} from "../../actions/actions";
import j from "../SearchBar/searchBar.module.css";

export default function SearchBar() {
  const dispatch = useDispatch();

  const allCountries = useSelector((state) => state.countries);
  const [name, setName] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage /*setCountriesPerPage*/] = useState(10);

  //Esto lo hago para traerme el el explorador de actividades **
  const indexOfLastCountrie = currentPage * countriesPerPage; //10
  const indexOfFirstCountrie = indexOfLastCountrie - countriesPerPage; //0
  const currentCountries = allCountries.slice(
    indexOfFirstCountrie,
    indexOfLastCountrie
  );
  if (currentCountries.lenhgt === 0) {
    <h1>Buscando...</h1>;
  }

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getName(name));
    setName("");
  }

  function handleClick(e) {
    e.preventDefault();
    dispatch(getCountries());
    setCurrentPage(1);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      dispatch(getName(name));
      setName("");
    }
  }

  return (
    <div className={j.container}>
      <nav>
        <ul className={j.list}>
          <li className={j.listItem}>
            <NavLink
              onClick={(e) => {
                handleClick(e);
              }}
              to="/home"
            >
              Inicio
            </NavLink>
            <NavLink to="/activity">Crea una actividad</NavLink>
            <div className={j.mundoLanding}>
              <NavLink exact to="/">
                <img
                  src="https://i.pinimg.com/originals/b9/93/02/b99302e5e4d36d7a4af5bf6f17583008.png"
                  width="70"
                  height="70"
                  alt=""
                />
              </NavLink>
            </div>
          </li>
        </ul>
      </nav>
      <div onSubmit={handleSubmit} className={j.containerSearch}>
        <input
          className={j.inputSearch}
          type="text"
          placeholder="Escribe el nombre del país"
          value={name}
          onChange={(e) => handleInputChange(e)}
          onKeyDown={(e) => handleKeyDown(e)}
        />
        <button
          className={j.buttonSearch}
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          Buscar
        </button>
      </div>
    </div>
  );
}
