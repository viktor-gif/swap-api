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
};

export const profileAPI = {
  getProfile(id) {
    return instance.get(`people/${id}`);
  },
};
