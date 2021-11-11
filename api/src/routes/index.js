const { Router } = require("express");
const axios = require("axios");
const { Activity, Country } = require("../db");
const { Op } = require("sequelize");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//Primero, hago una función que me trae todos los paises de la API
const getInfoApi = async () => {
  const apiUrl = await axios.get("https://restcountries.com/v3/all");
  const apiInfo = await apiUrl.data.map((e) => {
    return {
      name: e.name.common || "No se ha encontrado el nombre de este país",
      id: e.cca3 || e.cioc || "No se ha encontrado el código de este país",
      flags: e.flags.find((e) => e.includes("png")) || "No se ha encontrado la",
      continent: e.region || "No se ha encontrado el continente de este país",
      capital: (e.capital && e.capital[0]) || "Este país no tiene una capital",
      subregion: e.region || "No se ha encontrado la región de este pais",
      population: e.population || 0,
      area: e.area || 0,
    };
  });
  return apiInfo;
};

//Segundo, hago una función que me trae todos los paises de la BASE DE DATOS
const getInfoBd = async () => {
  return await Country.findAll({
    include: {
      model: Activity,
      attributes: ["id", "name", "difficulty", "duration", "season", "createdInDb"],
      through: {
        attributes: [],
      },
    },
  });
};

//Tercero, concateno todos paises, tanto de la API como de la BASE DE DATOS
const getAllCountries = async () => {
  const infoApi = await getInfoApi();
  const infoBd = await getInfoBd();
  const infoTotal = infoApi.concat(infoBd);
  return infoTotal;
};

//Empiezo hacer todas las rutas que me pide el README
router.get("/countries", async (req, res) => {
  const { name } = req.query;

  try {
    let countriesTotalesBD = await getInfoBd();

    if (!name) {
      return res.send(countriesTotalesBD);
    } else {
      const nameCount = 
      name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

      let countriesName = await Country.findAll({
        where: {
          name: {
            [Op.iLike]: `%${nameCount}%`,
          },
        },
        include: {
          model: Activity,
          attributes: [
            "name",
            "difficulty",
            "duration",
            "season",
            "createdInDb",
          ],
          through: { attributes: [] },
        },
      });
      countriesName 
        ? res.status(200).send(countriesName)
        : res
            .status(404)
            .send("No se encontró la ciudad... Intentalo de nuevo");
    }
  } catch (error) {
    console.log(error);
  }
});

router.get("/countries/:id", async (req, res) => {
  const { id } = req.params;

  try {
    let countryId = await Country.findOne({
      where: {
        id: id.toUpperCase(),
      },
      include: {
        model: Activity,
        through: {
          attributes: [],
        },
      },
    });
    if (countryId) {
      res.status(200).send(countryId);
    }
  } catch (error) {
    console.log(error);
  }
});

router.post("/activity", async (req, res) => {
  try {
    const { name, difficulty, duration, season, createdInDb, countries } = req.body;
      //validaciones
    if (!name || name.length > 30 || !difficulty || Number.parseInt(difficulty) > 5 || Number.parseInt(difficulty) <= 0) {
        res.status(400).send("Valores incorrectos o incompletos")
        return
    }
    let activity = await Activity.findOne({
      where: { name }
  })
  //si no existe la creo
  if (!activity) {
      activity = await Activity.create({
          name, difficulty, duration, season, createdInDb
      })
  }
  //busco los paises
  const countriesDb = await Country.findAll(
      {
          where: { name: countries }
      }
  )
  // uso la actividad encontrada o creada y le agrego los paises
  activity.addCountries(countriesDb);

    return res.status(200).send("Activity created");
  } catch (e) {
    console.error(e);
    return res.status(404).json({ message: "Creation Failed" });
  }
});

router.get("/activities", async (req, res) => {
  try {
    const allActivities = await Activity.findAll();
    res.status(200).send(allActivities);
  } catch (error) {
    return res.status(404).send(e);
  }
});

module.exports = router;
