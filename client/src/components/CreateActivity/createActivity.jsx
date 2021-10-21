import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getCountries, postActivity } from "../../actions/actions";
import j from "../CreateActivity/createActivity.module.css";

function validate(input) {
  var valoresAceptados = /^[0-9]+$/;
  let errors = {};

  if (!input.name) {
    errors.name = "*Se requiere un nombre*";
  } else if (!input.duration) {
    errors.duration = "*Se quiere un tiempo de duración*";
  } else if (!input.duration.match(valoresAceptados)) {
    errors.duration2 = "*Solo se puede agregar números*";
  } else {
    errors.ok = true;
  }
  return errors;
}

export default function CreateActivity() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const history = useHistory();
  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: [],
  });

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleCheckDifficulty(e) {
    if (e.target.checked) {
      setInput({
        ...input,
        difficulty: e.target.value,
      });
    } 
  }

  function handleCheckSeason(e) {
    if (e.target.checked) {
      setInput({
        ...input,
        season: e.target.value,
      });
    } 
  }

  function handleSelect(e) {
    setInput({
      ...input,
      countries: [...input.countries, e.target.value],
    });
    // if(input.id.includes(e.target.value)){
    //   var filterCountry = input.id.filter(el => el !== el.target.value)
    //   setInput({
    //     ...input,
    //     id: filterCountry
    //   })
    // }else {
    //   setInput({
    //     ...input,
    //     id: [...input.id, e.target.value]
    // })
} 

  function handleDelete(e) {
    setInput({
      ...input,
      countries: input.countries.filter((country) => country !== e),
    });
  }


  function handleSubmit(e) {
    e.preventDefault();
    // console.log("Muestrame lo del", input);
    if(input.name !== "" && input.difficulty !== "" 
       && input.duration !== "" && input.season !== "" && input.countries !== "") {
      dispatch(postActivity(input));
      alert("Actividad creada");
    } else {
      alert("No se pudo crear la actividad... Faltan datos")
    }
    setInput({
      name: "",
      difficulty: "",
      duration: "",
      season: "",
      countries: [],
    });
    history.push("/home"); 
  }

  // function handleKeyDown(e) {
  //   if (e.key === "Enter") {
  //     e.preventDefault();
  //     console.log('Muestrame', input)
  //     dispatch(postActivity(input));
  //     setInput("");
  //   }
  // }

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <div className={j.containerCreate}>
      <div>
        <Link to="/home">
          <button className={j.buttonVolverCrear}>Volver</button>
        </Link>
      </div>
      <div className={j.formulario}>
        <div className={j.crearActividad}>
          <h1>Crear actividad</h1>
        </div>
        <form onSubmit={(ev) => handleSubmit(ev)}>
          <div>
            <input
              className={j.nombreActividad}
              type="text"
              value={input.name}
              name="name"
              placeholder="Nombre de tu actividad"
              onChange={(e) => handleChange(e)}
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>
          <div className={j.otrosDificultad}>
            <label className={j.inputDificultad}>Dificultad:</label>
            <label className={j.otrosDificultad}>
              <input
                type="radio"
                value="1"
                name="difficulty"
                onChange={(e) => handleCheckDifficulty(e)}
                list="tickmarks"
              />
              1
            </label>
            <label>
              <input
                type="radio"
                value="2"
                name="difficulty"
                onChange={(e) => handleCheckDifficulty(e)}
              />
              2
            </label>
            <label>
              <input
                type="radio"
                value="3"
                name="difficulty"
                onChange={(e) => handleCheckDifficulty(e)}
              />
              3
            </label>
            <label>
              <input
                type="radio"
                value="4"
                name="difficulty"
                onChange={(e) => handleCheckDifficulty(e)}
              />
              4
            </label>
            <label>
              <input
                type="radio"
                value="5"
                name="difficulty"
                onChange={(e) => handleCheckDifficulty(e)}
              />
              5
            </label>

            <div>
              <input
                className={j.tiempo}
                name="duration"
                value={input.duration}
                // type="ranger"
                placeholder="Cuanto tiempo durará tu actividad..."
                onChange={(e) => handleChange(e)}
              />
              {errors.duration && <p>{errors.duration}</p>}{" "}
              {errors.duration2 && <p>{errors.duration2}</p>}
            </div>

            <div className={j.otrosTemporadas}>
              <label className={j.temporadaSesiones}>Temporada:</label>
              <div>
                <input
                  type="radio"
                  name="Invierno"
                  value="Invierno"
                  onChange={(e) => handleCheckSeason(e)}
                ></input>
                Invierno
                <label>
                  <input
                    type="radio"
                    name="Verano"
                    value="Verano"
                    onChange={(e) => handleCheckSeason(e)}
                  />
                  Verano
                </label>
                <label>
                  <input
                    type="radio"
                    name="Otoño"
                    value="Otoño"
                    onChange={(e) => handleCheckSeason(e)}
                  />
                  Otoño
                </label>
                <label>
                  <input
                    type="radio"
                    name="Primavera"
                    value="Primavera"
                    onChange={(e) => handleCheckSeason(e)}
                  />
                  Primavera
                </label>
              </div>
              <select
                className={j.selecionarPais}
                onChange={(e) => handleSelect(e)}
              >
                <option>Escoge el país</option>
                {countries?.map((e) => (
                  <option key={e.name} className={j.formInput} value={e.name}>
                    {e.name}
                  </option>
                ))}
              </select>
              <div>
                {
                  <button
                    className={j.botonCrearActividad}
                    type="submit"
                  >
                    Crear Actividad
                  </button>
                }
              </div>
              {input.countries?.map((e) => (
                <div>
                  <h3 key={e.name} className={j.paisQueSale}>
                    {e}
                  </h3>
                  <button className={j.delete} onClick={() => handleDelete(e)}>
                    x
                  </button>
                </div>
              ))}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
