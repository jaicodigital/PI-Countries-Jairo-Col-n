import axios from "axios";

export function getCountries() {
  return async function (dispatch) {
    try {
      var json = await axios.get(`/countries`);
      return dispatch({
        type: "GET_COUNTRIES",
        payload: json.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
}

export function getActivities() {
  return async function (dispatch) {
    try {
      var json = await axios.get(`/activities`);
      return dispatch({
        type: "GET_ACTIVITIES",
        payload: json.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
}

export function getName(name) {
  return async function (dispatch) {
    try {
      var json = await axios.get(`/countries?name=${name}`);
      return dispatch({
        type: "GET_NAME",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function postActivity(payload) {
  return async function (dispatch) {
    try {
      const json = await axios.post(`/activity`, payload);
      return dispatch({
        type: "POST_ACTIVITY",
        payload: json,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function filterContinent(payload) {
  return {
    type: "FILTER_CONTINENT",
    payload,
  };
}

export function filterActivity(payload) {
  return {
    type: "FILTER_ACTIVITY",
    payload,
  };
}

export function filterName(payload) {
  return {
    type: "FILTER_NAME",
    payload,
  };
}

export function filterPopulation(payload) {
  return {
    type: "FILTER_POPULATION",
    payload,
  };
}

export function getDetail(id) {
  return async function (dispatch) {
    try {
      var json = await axios.get(`/countries/${id}`);
      return dispatch({
        type: "GET_DETAIL",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
