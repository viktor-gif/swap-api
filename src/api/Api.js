import * as axios from "axios";

const instance = axios.create({
  baseURL: `https://swapi.dev/api/`,
});

export const peopleAPI = {
  getPeople() {
    return instance.get(`people`);
  },
  searchPeople(text) {
    return instance.get(`people/?search=${text}`);
  },
  getPlanets() {
    return instance.get(`planets`);
  },
};

export const profileAPI = {
  getProfile(id) {
    return instance.get(`people/${id}`);
  },
};

// http://swapi.dev/api/planets/?page=2
