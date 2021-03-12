import { profileAPI } from "../api/Api";

const SET_PROFILE = "SET_PROFILE";
const SET_FILM = "SET_FILM";
const SET_VEHICLES = "SET_VEHICLES";
const CLEAR_FILMS = "CLEAR_FILMS";

let initialState = {
  profileData: null,
  films: [],
  vehicles: null,
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

    case SET_VEHICLES:
      return {
        ...state,
        vehicles: action.vehicles,
      };
    default:
      return state;
  }
};
//action-creaters
export const setProfile = (profile) => ({ type: SET_PROFILE, profile });
export const setFilm = (film) => ({ type: SET_FILM, film });
export const clearFilms = () => ({ type: CLEAR_FILMS });
export const setVehicles = (vehicles) => ({ type: SET_VEHICLES, vehicles });

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
export const getVehicles = () => {
  return (dispatch) => {
    profileAPI.getVehicles().then((response) => {
      dispatch(setVehicles(response.data.results));
    });
  };
};

export default profileReducer;
