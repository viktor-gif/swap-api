import { profileAPI } from "../api/Api";

const SET_PROFILE = "SET_PROFILE";
const SET_FILM = "SET_FILM";
const SET_VEHICLE = "SET_VEHICLE";
const CLEAR_FILMS = "CLEAR_FILMS";
const CLEAR_VEHICLES = "CLEAR_VEHICLES";

let initialState = {
  profileData: null,
  films: [],
  vehicles: [],
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE:
      return {
        ...state,
        profileData: action.profile,
      };
    case CLEAR_FILMS:
      return {
        ...state,
        films: [],
      };
    case SET_FILM:
      return {
        ...state,
        films: state.films.concat(action.film),
      };
    case SET_VEHICLE:
      return {
        ...state,
        vehicles: state.vehicles.concat(action.vehicle),
      };
    case CLEAR_VEHICLES:
      return {
        ...state,
        vehicles: [],
      };
    default:
      return state;
  }
};
//action-creaters
export const setProfile = (profile) => ({ type: SET_PROFILE, profile });
export const setFilm = (film) => ({ type: SET_FILM, film });
export const clearFilms = () => ({ type: CLEAR_FILMS });
export const setVehicle = (vehicle) => ({ type: SET_VEHICLE, vehicle });
export const clearVehicles = () => ({ type: CLEAR_VEHICLES });
//Tunk-creators

export const getProfile = (id) => {
  return (dispatch) => {
    profileAPI.getProfile(id).then((response) => {
      dispatch(setProfile(response.data));
    });
  };
};
export const getFilm = (api) => {
  return (dispatch) => {
    profileAPI.getFilm(api).then((response) => {
      dispatch(setFilm(response.data));
    });
  };
};
export const getVehicle = (api) => {
  return (dispatch) => {
    profileAPI.getVehicle(api).then((response) => {
      dispatch(setVehicle(response.data));
    });
  };
};

export default profileReducer;
