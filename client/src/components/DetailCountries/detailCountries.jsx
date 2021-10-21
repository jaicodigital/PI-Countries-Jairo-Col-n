import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../actions/actions";
import { useEffect } from "react";
import CreateActivity from "../CreateActivity/createActivity";
import j from "../DetailCountries/detailCountries.module.css";

export default function Detail(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetail(props.match.params.id));
  }, [dispatch, props.match.params.id]);

  const myCountry = useSelector((state) => state.detail);

  if (myCountry === null) {
    return (
      <div>
        <img
          src="https://acegif.com/wp-content/gifs/globe-24.gif"
          alt="No se encontró el país"
        />
      </div>
    );
  }
  return (
    <div className={j.containerDetail}>
      <div>
        <NavLink to="/home">
          <button className={j.buttonVolver}>Volver</button>
        </NavLink>
      </div>
      <div>
        <h1>
          <a
            className={j.titulo}
            rel="noreferrer noopener"
            href={`https://en.wikipedia.org/wiki/${myCountry.name}`}
            target="_blank"
          >
            {myCountry.name}. ({myCountry.id})
          </a>
        </h1>
      </div>
      <div className={j.detailCountry}>
        <div className={j.imgContainer}>
          <img src={myCountry.flags} alt={`Imagen de ${myCountry.name}`} />
        </div>
        <div>
          <div className={j.detallePais}>
            <h3>Capital: {myCountry.capital}.</h3>
            <h3>Población: {myCountry.population} habitantes.</h3>
            <h3>Area: {myCountry.area} km2.</h3>
            <h3>Continente: {myCountry.continent}.</h3>
          </div>
          <br />
          <h2 className={j.actividades}>Actividades:</h2>
          <div className={j.detalleActividad}>
            {myCountry.activities?.map((e, index) => {
              return (
                <div key={index}>
                  <h1>{e.name}</h1>
                  <h3>Dificultad: Nivel {e.difficulty}</h3>
                  <h3>Duración: {e.duration} minutos</h3>
                  <h3>Temporada: {e.season}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <hr />
      <div>
        <div>
          <h2>Puedes crear una actividad para este país aquí abajo!</h2>
          <CreateActivity />
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}
