import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getActivities, filterActivity } from "../../actions/actions";
import j from "../Activities/activities.module.css";

export default function Activities(props) {
  const dispatch = useDispatch();
  const lasActivities = useSelector((state) => state.activities);
  const country = useSelector((state) => state.allCountries);

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  function handleFilterActivity(act) {
    dispatch(filterActivity(act));
  }

  return (
    <div className={j.containerGeneral}>
      {lasActivities.length > 0 &&
        lasActivities.map((activity) => {
          return (
            <div
              className={j.cardActivities}
              onChange={(e) => handleFilterActivity(e)}
              key={activity.id}
            >
              <NavLink to={"/activities"}></NavLink>
              <h1>{activity.name}</h1>
              <h3>Detalles:</h3>
              <h5>Dificultad: {activity.difficulty}</h5>
              <h5>Duración: {activity.duration}</h5>
              <h5>Temporada: {activity.season}</h5>
              <h3>Donde?</h3>

              {/* pendiente de desarrollo */}
              <div>
                {" "}
                pendiente en desarrollar
                {country?.map((country) => (
                  <div key={country.name}>
                    <ul>
                      <li>{country.name}</li>
                      <NavLink to={`/country/${country.cca3}`}>
                        <img
                          src={country.flags}
                          alt={`${country.name} flags`}
                        />
                      </NavLink>
                    </ul>
                  </div>
                ))}
              </div>
              {/* {input.id?.map((e) => (
            <div>
              <h3 key={e.id}>{e}</h3>
              <button onClick={() => handleDeleteAct(e)}>
                x
              </button>
            </div>
          ))} */}
            </div>
          );
        })}
    </div>
  );
}
