import * as axios from "axios";

const instance = axios.create({
  baseURL: `https://swapi.dev/api/`,
});

export const peopleAPI = {
  getPeople() {
    return instance.get(`people`);
  },
};

export const profileAPI = {
  getProfile(id) {
    return instance.get(`people/${id}`);
  },
};
