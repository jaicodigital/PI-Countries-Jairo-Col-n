const initialState = {
  countries: [],
  allCountries: [],
  activities: [],
  detail: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_COUNTRIES":
      return {
        ...state,
        countries: action.payload,
        allCountries: action.payload,
      };
    case "GET_NAME":
      return {
        ...state,
        countries: action.payload,
      };
    case "FILTER_CONTINENT":
      const allCountries = state.allCountries;
      const filterContinent =
        action.payload === "All"
          ? allCountries
          : allCountries.filter((e) => e.continent === action.payload);
      return {
        ...state,
        countries: filterContinent,
      };
    case "FILTER_ACTIVITY":
      const countryActivity = state.allCountries;
      const filterActivity = countryActivity.filter((c) => {
        if (c.activities.length > 0) {
          for (let i = 0; i < c.activities.length; i++) {
            if (c.activities[i].name === action.payload) {
              return c;
            }
          }
        }
        return c;
      });
      return {
        ...state,
        countries: filterActivity,
      };
    case "POST_ACTIVITY":
      return {
        ...state,
      };
    case "FILTER_NAME":
      let orderName =
        action.payload === "Asc"
          ? state.countries.sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (a.name < b.name) {
                return -1;
              }
              return 0;
            })
          : state.countries.sort(function (a, b) {
              if (a.name > b.name) {
                return -1;
              }
              if (a.name < b.name) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        countries: orderName,
      };
    case "FILTER_POPULATION":
      let orderPopulation =
        action.payload === "Asc"
          ? state.countries.sort(function (a, b) {
              if (a.population > b.population) {
                return 1;
              }
              if (a.population < b.population) {
                return -1;
              }
              return 0;
            })
          : state.countries.sort(function (a, b) {
              if (a.population > b.population) {
                return -1;
              }
              if (a.population < b.population) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        countries: orderPopulation,
      };
    case "GET_DETAIL":
      return {
        ...state,
        detail: action.payload,
      };
    case "GET_ACTIVITIES":
      return {
        ...state,
        activities: action.payload,
      };
    default:
      return state;
  }
}
