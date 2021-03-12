import * as axios from "axios";

export const peopleAPI = {
  getPeople() {
    return axios.get(`https://swapi.dev/api/people`);
  },
  searchPeople(text) {
    return axios.get(`https://swapi.dev/api/people/?search=${text}`);
  },
  getPlanets() {
    return axios.get(`https://swapi.dev/api/planets`);
  },
};

export const profileAPI = {
  getProfile(id) {
    return axios.get(`https://swapi.dev/api/people/${id}`);
  },
  getFilms() {
    return axios.get(`https://swapi.dev/api/films`);
  },
  getFilm(api) {
    return axios.get(api);
  },
  getVehicle(api) {
    return axios.get(api);
  },
};

// http://swapi.dev/api/planets/?page=2
