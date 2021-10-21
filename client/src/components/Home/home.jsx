import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterContinent,
  getCountries,
  filterName,
  filterPopulation,
  getActivities,
  filterActivity,
} from "../../actions/actions";
import { Link } from "react-router-dom";
import Card from "../Cards/card";
import Paginado from "../Paginado/paginado";
import SearchBar from "../SearchBar/searchBar";
import j from "../Home/home.module.css";

export default function Home() {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.countries);
  const lasActivities = useSelector((state) => state.activities);

  //Estados locales
  const [currentPage, setCurrentPage] = useState(1); //Página actual
  const [countriesPerPage /*setCountriesPerPage*/] = useState(10); //Cantidad de países por página
  const [, /*order*/ setOrder] = useState("");
  const [, /*filterPopulation*/ setFilterPopulation] = useState("");

  //Ordenando paises por página
  const indexOfLastCountrie = currentPage * countriesPerPage; //10
  const indexOfFirstCountrie = indexOfLastCountrie - countriesPerPage; //0
  const currentCountries = allCountries.slice(
    indexOfFirstCountrie,
    indexOfLastCountrie
  );

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivities());
  }, [dispatch]);

  function handleFilterContinent(e) {
    dispatch(filterContinent(e.target.value));
  }

  function handleFilterActivity(act) {
    dispatch(filterActivity(act));
  }

  function handleFilterName(e) {
    e.preventDefault();
    dispatch(filterName(e.target.value));
    setCurrentPage(1);
    setOrder(`Ordenado ${e.target.value}`);
  }

  function handleFilterPopulation(e) {
    e.preventDefault();
    dispatch(filterPopulation(e.target.value));
    setCurrentPage(1);
    setFilterPopulation(`Ordenado ${e.target.value}`);
  }

  return (
    <div className={j.body}>
      <SearchBar />
      <div>
        <br />
        <select
          className={j.filtroAlfabetico}
          onChange={(e) => handleFilterName(e)}
        >
          <option value="Nom">Ordena alfabéticamente</option>
          <option value="Asc">A-Z</option>
          <option value="Desc">Z-A</option>
        </select>
        <select
          className={j.filtroPoblacion}
          onChange={(e) => handleFilterPopulation(e)}
        >
          <option>Ordena por población</option>
          <option value="Asc">Menor Población</option>
          <option value="Desc">Mayor Población</option>
        </select>
        <select
          className={j.filtroContinente}
          onChange={(e) => handleFilterContinent(e)}
        >
          <option value="All">Continentes</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europa</option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Oceania">Oceania</option>
        </select>
        <select
          className={j.filtroPoblacion}
          defaultValue={""}
          name="activity"
          onChange={(e) => handleFilterActivity(e.target.value)}
        >
          <option value="">Actividades turisticas</option>
          {lasActivities?.length > 0 &&
            lasActivities.map((e) => (
              <option value={e.name} key={e.id}>
                {e.name}
              </option>
            ))}
        </select>
        <br />
        <br />
        <br />
        <div className={j.Paginacion}>
          {currentCountries &&
            currentCountries?.map((e) => {
              return (
                <div key={e.id}>
                  <Link className={j.sinLinea} to={"/home/" + e.id}>
                    <Card
                      flags={e.flags}
                      name={e.name}
                      capital={e.capital}
                      continent={e.continent}
                    />
                  </Link>
                </div>
              );
            })}
          <div>
            {currentCountries && currentCountries.length === 0 ? (
              <div>
                <img
                  className={j.loading}
                  src="https://acegif.com/wp-content/gifs/globe-24.gif"
                  alt="No se encontró el país"
                />
              </div>
            ) : (
              <div />
            )}
          </div>
        </div>
        <Paginado
          countriesPerPage={countriesPerPage}
          allCountries={allCountries.length}
          paginado={paginado}
        />
      </div>
      <br />
    </div>
  );
}
